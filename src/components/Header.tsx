import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 mx-auto text-primary">
      <div>
        <Link href="/" title="Home">
          <img src="favicon.png" alt="Digger browser logo" className="w-16" />
          Digger Browser
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/about" title="About">
          About
        </Link>
        <Link href="/donate" title="Donate">
          Donate
        </Link>
      </div>
    </header>
  )
}
