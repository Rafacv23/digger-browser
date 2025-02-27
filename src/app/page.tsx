import Footer from "@/components/Footer"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary">Digger</span>
        </h1>
        <form action="/api/search" method="get" className="flex gap-4">
          <input
            type="text"
            name="query"
            placeholder="Search..."
            required
            min={2}
            max={60}
          />
          <button type="submit" className="flex items-center gap-2">
            <Search size={16} />
            Search
          </button>
          <div>
            Pick your browser
            <input type="radio" id="browser1" name="contact" value="email" />
            <label htmlFor="browser1">Duck Duck Go</label>
            <input type="radio" id="browser2" name="contact" value="phone" />
            <label htmlFor="browser2">Duck Duck Go</label>
          </div>
          <div>
            Set your search preferences
            <input type="radio" id="searchType1" name="fast" value="fast" />
            <label htmlFor="searchType1">Fast</label>
            <input
              type="radio"
              id="searchType2"
              name="accurate"
              value="accurate"
            />
            <label htmlFor="searchType2">Accurate</label>
            <input
              type="radio"
              id="searchType3"
              name="detailed"
              value="detailed"
            />
            <label htmlFor="searchType3">Detailed</label>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
