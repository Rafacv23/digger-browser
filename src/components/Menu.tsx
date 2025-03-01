import { ApiResponse } from "@/types/types"
import Link from "next/link"

export function ResultsMenu({ data }: { data: ApiResponse }) {
  return (
    <div>
      <h2>Query {data.query}</h2>
      <h2>Pages</h2>
      <ul>
        {data.pages.map((page) => (
          <Link
            key={page.link}
            target="_blank"
            rel="noopener noreferrer"
            href={page.link}
          >
            {page.title}
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
  return (
    <div>
      <h2>Recent</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
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
