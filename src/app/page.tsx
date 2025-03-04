"use client"

import { Hero } from "@/components/Hero"
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
    <main className="flex flex-col gap-8 place-content-center h-auto md:h-screen my-20 md:my-0">
      <Hero showMenu={showMenu} />
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
