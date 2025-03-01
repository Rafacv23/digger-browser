import { generateAiContent } from "@/lib/ai"
import { fetchBrowserResults } from "@/lib/fetch"
import { NextResponse, type NextRequest } from "next/server"

/**
 * Valida los parámetros de entrada.
 */
function validateSearchParams(query: string | null): {
  isValid: boolean
  error?: string
} {
  if (!query || query.trim() === "") {
    return {
      isValid: false,
      error: "Query parameter 'q' is required and cannot be empty.",
    }
  }

  return { isValid: true }
}

/**
 * Endpoint principal.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const query = searchParams.get("q")

    // Validar parámetros
    const validation = validateSearchParams(query)
    if (!validation.isValid) {
      return NextResponse.json({ message: validation.error }, { status: 400 })
    }

    // Obtener resultados del navegador
    const results = await fetchBrowserResults({
      query: query as string,
    })

    if (results.length === 0) {
      return NextResponse.json(
        { message: "No results found for the given query." },
        { status: 404 }
      )
    }

    // Generar contenido con IA
    const resume = await generateAiContent(query as string, results)

    // Construir la respuesta
    const response = {
      query,
      pages: results.map((result) => ({
        title: result.title,
        link: result.link,
      })),
      resume,
    }

    // Devolver respuesta con encabezados optimizados
    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=120",
        "Content-Type": "application/json",
      },
      status: 200,
    })
  } catch (error) {
    console.error("Error:", error)

    // Manejo específico de errores
    if (error instanceof Error && error.message.includes("AI_API_KEY")) {
      return NextResponse.json(
        { message: "AI API key is missing or invalid." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "An unexpected server error occurred." },
      { status: 500 }
    )
  }
}
