export default function Skeleton({ query }: { query: string }) {
  return (
    <div>
      <div className="h-6 rounded w-3/4 mb-4 animate-pulse">
        Searching for {query}
      </div>

      <h2 className="text-lg font-semibold mb-2">Pages</h2>
      <ul className="mb-4 space-y-2">
        <li className="h-4 bg-primary rounded w-full animate-pulse"></li>
        <li className="h-4 bg-primary rounded w-11/12 animate-pulse"></li>
        <li className="h-4 bg-primary rounded w-10/12 animate-pulse"></li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Results</h2>
      <div className="space-y-2">
        <div className="h-4 bg-primary rounded w-full animate-pulse"></div>
        <div className="h-4 bg-primary rounded w-11/12 animate-pulse"></div>
        <div className="h-4 bg-primary rounded w-full animate-pulse"></div>
        <div className="h-4 bg-primary rounded w-3/4 animate-pulse"></div>
      </div>
    </div>
  )
}
