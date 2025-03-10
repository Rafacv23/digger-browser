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
      <div className="flex gap-2 justify-between">
        <label htmlFor="q" className="sr-only">
          Search query
        </label>
        <input
          type="search"
          id="q"
          name="q"
          placeholder="I will summarize this for you..."
          required
          min={2}
          max={60}
          disabled={loading}
          className="px-4 py-2 focus:outline-primary focus:outline bg-background border border-primary rounded-md w-full"
          onClick={() => setShowMenu(true)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-primary px-4 py-2 rounded-md text-background"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <LoaderCircle className="animate-spin" size={16} />
              Searching...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Search size={16} />
              Search
            </span>
          )}
        </button>
      </div>
    </form>
  )
}
