export type SearchType = "fast" | "accurate" | "detailed"

export type Result = {
  title: string
  link: string
  text: string
}

type Page = {
  title: string
  link: string
}

export type ApiResponse = {
  query: string | null
  pages: Page[]
  resume: string
}
