import { Result } from "@/types/types"
import { GoogleGenerativeAI } from "@google/generative-ai"
import "dotenv/config"

if (!process.env.AI_API_KEY) {
  throw new Error("AI_API_KEY is not defined")
}
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

export async function generateAiContent(
  prompt: string,
  data: Result[]
): Promise<string> {
  const result = await model.generateContent(
    `Read this pages: ${data
      .map((d) => d.text)
      .join(
        "\n\n"
      )} and answer the question in the language of the pages: ${prompt}`
  )
  return result.response.text()
}
