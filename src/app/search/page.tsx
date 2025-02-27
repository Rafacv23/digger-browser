export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { q, t } = await searchParams

  return (
    <div>
      <h1>Product Listing</h1>
      <p>Search query: {q}</p>
      <p>Search type: {t}</p>
    </div>
  )
}
