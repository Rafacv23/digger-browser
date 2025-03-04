import { getRecentSearchs, retrieveDomain } from "@/lib/utils"
import { ApiResponse } from "@/types/types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "./Badge"

export function ResultsMenu({ data }: { data: ApiResponse }) {
  return (
    <div>
      <h2>{data.query}</h2>
      <h2>Pages</h2>
      <ul className="mb-4 flex flex-col">
        {data.pages.map((page) => (
          <Link
            key={page.link}
            target="_blank"
            rel="noopener noreferrer"
            href={page.link}
            className="w-full flex items-center justify-between"
          >
            {retrieveDomain(page.link)} | {page.title}
            <ExternalLink size={16} />
          </Link>
        ))}
      </ul>
      <h2>Results</h2>
      <article className="prose prose-sm max-w-none">
        {data.resume.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  )
}

// menu for recent searches, displays before the user have results
export function PreSearchMenu() {
  const recentSearchs: ApiResponse[] = getRecentSearchs()

  const related = recentSearchs.map((search: ApiResponse) => {
    return search.pages.map((page) => ({
      title: page.title,
      link: page.link,
    }))
  })

  return recentSearchs.length > 0 ? (
    <div className="flex flex-col">
      <h2>Recent</h2>
      <ul className="flex flex-wrap gap-2 mb-4">
        {recentSearchs.map((search: ApiResponse) => (
          <Badge query={search.query} key={search.query} />
        ))}
      </ul>
      <h2>Related</h2>
      <ul className="flex flex-col gap-2">
        {related.map((pages) => (
          <li key={pages[0].title}>
            <ul className="flex flex-col gap-2">
              {pages.map((page) => (
                <li key={page.title}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={page.link}
                    className="flex items-center justify-between"
                  >
                    {retrieveDomain(page.link)} | {page.title}
                    <ExternalLink size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

// Displays the controlls for the menu
export function FooterMenu() {
  return (
    <footer>
      <h2>Controlls</h2>
    </footer>
  )
}
