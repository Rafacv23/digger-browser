interface BadgeProps extends React.HTMLAttributes<HTMLLIElement> {
  query: string | null
  className?: string
}

export function Badge({ query, className }: BadgeProps) {
  return (
    <li
      className={`bg-primary text-background font-semibold shadow rounded-md px-4 py-2 ${className}`}
    >
      {query}
    </li>
  )
}
