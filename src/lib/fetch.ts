import { SearchType } from "@/types/types"
import puppeteer from "puppeteer-core"
import chromium from "@sparticuz/chromium"

interface Props {
  query: string
  searchType: SearchType
}

export async function fetchBrowserResults({ query, searchType }: Props) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: false,
  })

  const page = await browser.newPage()

  try {
    await page.goto(
      `https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=${searchType}`,
      {
        waitUntil: "domcontentloaded",
      }
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
    for (const result of filteredResults) {
      try {
        await page.goto(result.link, { waitUntil: "domcontentloaded" })
        await page.waitForSelector("body")

        result.text = await page.evaluate(() => {
          return document.body.innerText.trim() || "No text"
        })
      } catch (error) {
        console.error(`Error al extraer texto de ${result.link}:`, error)
        result.text = "Error al obtener contenido"
      }
    }

    return filteredResults
  } catch (error) {
    console.error("Error en fetchBrowserResults:", error)
    return []
  } finally {
    await browser.close()
  }
}
