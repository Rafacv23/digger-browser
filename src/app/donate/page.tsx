import { Coffee, HandCoins } from "lucide-react"
import Link from "next/link"

const DonateOptions = [
  {
    name: "Paypal",
    link: "https://www.paypal.com/donate/?hosted_button_id=8A6F5F7Y9G7A8",
    icon: <HandCoins />,
  },
  {
    name: "Kofi",
    link: "https://ko-fi.com/rafacv23",
    icon: <Coffee />,
  },
]

export default function DonatePage() {
  return (
    <main className="flex flex-col place-content-center h-auto my-20 space-y-4">
      <h1 className="text-5xl font-bold mb-4">Donate</h1>
      <p className="mb-8">
        Digger browser is completely free and open source. But you can help me
        maintain the project by donating any amount.
      </p>
      <ul className="flex items-center justify-center gap-4">
        {DonateOptions.map((option) => (
          <li key={option.name}>
            <Link
              href={option.link}
              title={option.name}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              {option.icon}
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
