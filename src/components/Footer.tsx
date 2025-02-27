import { GITHUB_REPO, PORTFOLIO } from "@/lib/constants"
import { Github, PersonStanding } from "lucide-react"

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={GITHUB_REPO}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={16} />
        GitHub
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={PORTFOLIO}
        target="_blank"
      >
        <PersonStanding size={16} />
        Portfolio
      </a>
    </footer>
  )
}
