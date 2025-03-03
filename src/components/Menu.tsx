import { getRecentSearchs } from "@/lib/utils"
import { ApiResponse } from "@/types/types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function ResultsMenu({ data }: { data: ApiResponse }) {
  return (
    <div>
      <h2>{data.query}</h2>
      <h2>Pages</h2>
      <ul className="mb-4">
        {data.pages.map((page) => (
          <Link
            key={page.link}
            target="_blank"
            rel="noopener noreferrer"
            href={page.link}
          >
            {page.title}
            <ExternalLink size={16} />
          </Link>
        ))}
      </ul>
      <h2>Results</h2>
      <article>{data.resume}</article>
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

  return (
    <div>
      <h2>Recent</h2>
      <ul className="flex flex-wrap gap-2 mb-4">
        {recentSearchs.map((search: ApiResponse) => (
          <li
            key={search.query}
            className="border border-primary shadow rounded-md px-4 py-2 font-light"
          >
            {search.query}
          </li>
        ))}
      </ul>
      <h2>Related</h2>
      <ul>
        {related.map((pages) => (
          <li key={pages[0].title}>
            <ul>
              {pages.map((page) => (
                <li
                  key={page.title}
                  className="flex items-center justify-between"
                >
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={page.link}
                  >
                    {page.title}
                    <ExternalLink size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Displays the controlls for the menu
export function FooterMenu() {
  return (
    <footer>
      <h2>Controlls</h2>
    </footer>
  )
}
