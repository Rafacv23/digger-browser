import { generateAiContent } from "@/lib/ai"
import { fetchBrowserResults } from "@/lib/fetch"
import { SearchType } from "@/types/types"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const query = searchParams.get("q")
    const searchType = searchParams.get("t")

    if (typeof query !== "string" || typeof searchType !== "string") {
      return NextResponse.json({ message: "Invalid query" }, { status: 400 })
    }

    const results = await fetchBrowserResults({
      query: query,
      searchType: searchType as SearchType,
    })

    const resume = await generateAiContent(query, results)

    const response = {
      query,
      searchType,
      pages: results.map((result) => ({
        title: result.title,
        link: result.link,
      })),
      resume,
    }

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=30",
      },
      status: 200,
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
