import { Apple, Github, Grid2X2 } from "lucide-react"
import Link from "next/link"

const DownloadOptions = [
  {
    name: "GitHub",
    link: "https://github.com/Rafacv23/digger-browser-desktop",
    icon: <Github />,
  },
  {
    name: "MacOS",
    link: "https://github.com/Rafacv23/digger-browser-desktop/releases",
    icon: <Apple />,
  },
  {
    name: "Windows",
    link: "https://github.com/Rafacv23/digger-browser-desktop/releases",
    icon: <Grid2X2 />,
  },
]

export default function DownloadPage() {
  return (
    <main className="flex flex-col place-content-center h-auto my-20 space-y-8">
      <h1 className="text-5xl font-bold mb-4">Download</h1>
      <p className="mb-8">
        Digger browser has been developed for the website, but we have created a
        desktop versions for MacOS and Windows using tauri, a powerful rust
        framework.
      </p>
      <p>
        You can download tbe latest version of the desktop app from our GitHub
        repository. And if you are on MacOS you can also download it via
        Homebrew.
      </p>
      <ul className="flex items-center justify-center gap-4">
        {DownloadOptions.map((option) => (
          <li key={option.name}>
            <Link
              href={option.link}
              title={option.name}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              {option.icon}
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
