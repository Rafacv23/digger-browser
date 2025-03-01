import { SearchType } from "@/types/types"
import puppeteer from "puppeteer-core"
import chromium from "@sparticuz/chromium-min"

interface Props {
  query: string
  searchType: SearchType
}

export async function fetchBrowserResults({ query, searchType }: Props) {
  const isLocal = !!process.env.CHROME_EXECUTABLE_PATH

  const browser = await puppeteer.launch({
    args: isLocal ? puppeteer.defaultArgs() : chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH ||
      (await chromium.executablePath(
        "https://chromium132.s3.amazonaws.com/chromium-v132.0.0-pack.tar"
      )),
    headless: true,
  })

  const page = await browser.newPage()

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  )

  try {
    await page.setRequestInterception(true)
    page.on("request", (request) => {
      const resourceType = request.resourceType()
      if (["image", "stylesheet", "font", "media"].includes(resourceType)) {
        request.abort() // Bloqueamos recursos no esenciales
      } else {
        request.continue()
      }
    })

    await page.goto(
      `https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=${searchType}`,
      { waitUntil: "domcontentloaded" }
    )

    await page.waitForSelector("h2 a")

    const results = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("h2 a")).map((element) => ({
        title: element.querySelector("span")?.textContent?.trim() || "No title",
        link: element.getAttribute("href") || "No link",
        text: "",
      }))
    })

    const resultLimit =
      searchType === "fast" ? 3 : searchType === "accurate" ? 5 : 8
    const filteredResults = results.slice(0, resultLimit)

    // we need to enter each result page to extract the text

    const promises = filteredResults.map(async (result) => {
      try {
        const newPage = await browser.newPage() // Abrimos una nueva pestaña para cada enlace
        await newPage.goto(result.link, { waitUntil: "domcontentloaded" })
        await newPage.setRequestInterception(true)
        newPage.on("request", (request) => {
          const resourceType = request.resourceType()
          if (["image", "stylesheet", "font", "media"].includes(resourceType)) {
            request.abort()
          } else {
            request.continue()
          }
        })

        result.text = await newPage.evaluate(() => {
          return document.body.innerText.trim() || "No text"
        })
        await newPage.close() // Cerramos la pestaña después de extraer el contenido
      } catch (error) {
        console.error(`Error al extraer texto de ${result.link}:`, error)
        result.text = "Error al obtener contenido"
      }
      return result
    })

    const enrichedResults = await Promise.all(promises) // Procesar todas las promesas en paralelo

    return enrichedResults
  } catch (error) {
    console.error("Error en fetchBrowserResults:", error)
    return []
  } finally {
    await browser.close() // Asegurarse de cerrar el navegador en cualquier caso
  }
}
