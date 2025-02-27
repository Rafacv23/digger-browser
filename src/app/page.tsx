import Footer from "@/components/Footer"
import { SearchType } from "@/components/Preferences"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary">Digger</span>
        </h1>
        <form action="/api/search" method="get" className="flex gap-4 flex-col">
          <div className="flex gap-4">
            <input
              type="text"
              name="q"
              placeholder="Search..."
              required
              min={2}
              max={60}
              className="px-4 py-2 border border-gray-300 rounded-md text-black"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-md text-black"
            >
              <Search size={16} />
              Search
            </button>
          </div>
          <SearchType />
        </form>
      </main>
      <Footer />
    </div>
  )
}
