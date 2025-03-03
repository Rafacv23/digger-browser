export default function AboutPage() {
  return (
    <main className="flex flex-col place-content-center h-auto my-20 space-y-4">
      <h1 className="text-5xl font-bold mb-4">About</h1>
      <p>
        Digger browser is a web application that uses AI to summarize search
        results from different search engines.
      </p>
      <p>
        The application uses Gemini AI model from Google to summarize the data.
        And Puppeteer to scrap the results from DuckDuckGo.
      </p>
      <p>
        Digger browser is a free & open source project created by Rafa Canosa
        (rafacv23). You can contribute to the project making PRs or issues on
        the GitHub repository. Or donating to help me maintain the project.
      </p>
    </main>
  )
}
