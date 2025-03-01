import { LoaderCircle, Search } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

export default function SearchForm({
  loading,
  handleSubmit,
  setShowMenu,
}: {
  loading: boolean
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  setShowMenu: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <form onSubmit={handleSubmit} method="get" className="flex gap-4 flex-col">
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
    </form>
  )
}
