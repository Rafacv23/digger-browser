import { GITHUB_REPO, PORTFOLIO } from "@/lib/constants"
import { Github, PersonStanding } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
        <Github size={16} />
        GitHub
      </Link>
      <Link href={PORTFOLIO} target="_blank">
        <PersonStanding size={16} />
        Portfolio
      </Link>
    </footer>
  )
}
