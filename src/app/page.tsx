"use client"

import Footer from "@/components/Footer"
import { PreSearchMenu, ResultsMenu } from "@/components/Menu"
import SearchForm from "@/components/SearchForm"
import { addObjectToLocalStorage } from "@/lib/utils"
import { ApiResponse } from "@/types/types"
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

    const res = await fetch(`/api/search?q=${query}`)

    const data = await res.json()

    // save the query to local storage
    addObjectToLocalStorage(data)

    setData(data)

    setLoading(false)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-literata)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary">Digger</span>
        </h1>
        <SearchForm
          handleSubmit={handleSubmit}
          loading={loading}
          setShowMenu={setShowMenu}
        />
        {data ? (
          <ResultsMenu data={data} />
        ) : showMenu ? (
          <PreSearchMenu />
        ) : null}
      </main>
      <Footer />
    </div>
  )
}
