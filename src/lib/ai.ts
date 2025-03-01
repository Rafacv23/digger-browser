import { Result } from "@/types/types"
import { GoogleGenerativeAI } from "@google/generative-ai"

if (!process.env.AI_API_KEY) {
  throw new Error("AI_API_KEY is not defined")
}
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

export async function generateAiContent(
  prompt: string,
  data: Result[]
): Promise<string> {
  const processedTexts = data
    .map((d) => d.text.trim())
    .filter((text) => text.length > 0)
    .join("\n\n")

  const AiPrompt = `
  Meta:
  I need a detailed summary based on the provided texts that clearly answers the following question: "${prompt}". The summary should be accurate, relevant, and in the predominant language of the provided texts.

  Response Format:
  Provide a clear and structured response in paragraph format. If necessary, include relevant examples or details extracted from the texts to support your answer. Ensure it's easy to read and doesn't exceed 300 words.

  Warnings:
  Be careful not to include any invented content or information that isn't explicitly present in the provided texts. If you don't find sufficient information to answer the question, clearly state this in your response.

  Additional Context:
  The provided texts come from an online search related to "${prompt}". These texts may include diverse information, but you should only use what's relevant to answer the question. Don't assume external knowledge or add additional information that isn't in the texts.

  Provided Texts:
  ${processedTexts}
  `

  try {
    const result = await model.generateContent(AiPrompt)
    return result.response.text()
  } catch (error) {
    console.error("Error generating content:", error)
    throw new Error("Unable to generate content using AI.")
  }
}
