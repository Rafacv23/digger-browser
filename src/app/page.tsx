"use client"

import { PreSearchMenu, ResultsMenu } from "@/components/Menu"
import SearchForm from "@/components/SearchForm"
import Skeleton from "@/components/Skeleton"
import { addObjectToLocalStorage } from "@/lib/utils"
import { ApiResponse } from "@/types/types"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const query = formData.get("q")

    setQuery(query as string)

    if (!query) {
      return alert("Please enter a search query.")
    }

    const res = await fetch(`/api/search?q=${query}`)

    const data = await res.json()

    // save the query to local storage
    addObjectToLocalStorage(data)

    setData(data)

    setLoading(false)
  }

  return (
    <main className="flex flex-col gap-8 place-content-center h-screen">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">Digger</span>
        </h1>
        <p>
          This browser scrap the results of the search engines and summarize
          them for you with ai technology.{" "}
        </p>
      </div>
      <SearchForm
        handleSubmit={handleSubmit}
        loading={loading}
        setShowMenu={setShowMenu}
      />
      {loading ? (
        <Skeleton query={query} />
      ) : data ? (
        <ResultsMenu data={data} />
      ) : showMenu ? (
        <PreSearchMenu />
      ) : null}
    </main>
  )
}
