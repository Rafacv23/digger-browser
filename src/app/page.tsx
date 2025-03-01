"use client"

import Footer from "@/components/Footer"
import { PreSearchMenu, ResultsMenu } from "@/components/Menu"
import { ApiResponse } from "@/types/types"
import { LoaderCircle, Search } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const query = formData.get("q")

    if (!query) {
      return alert("Please enter a search query.")
    }

    // save the query to local storage
    localStorage.setItem("query", query.toString())

    const res = await fetch(`/api/search?q=${query}`)

    const data = await res.json()

    setData(data)

    setLoading(false)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-literata)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary">Digger</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          method="get"
          className="flex gap-4 flex-col"
        >
          <div className="flex gap-4">
            <label htmlFor="q" className="sr-only">
              Search query
            </label>
            <input
              type="search"
              id="q"
              name="q"
              placeholder="Search..."
              required
              min={2}
              max={60}
              className="px-4 py-2 border border-gray-300 rounded-md text-black"
              onClick={() => setShowMenu(true)}
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-md text-black"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" size={16} />
              ) : (
                <Search size={16} />
              )}
            </button>
          </div>
          {data ? (
            <ResultsMenu data={data} />
          ) : showMenu ? (
            <PreSearchMenu />
          ) : null}
        </form>
      </main>
      <Footer />
    </div>
  )
}
