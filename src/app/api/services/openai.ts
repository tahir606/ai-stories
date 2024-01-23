import OpenAI from "openai";

export async function createAPI() {
  console.log(process.env.OPENAI_API_KEY);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Write me a story." }],
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 128,
  });

  console.log(completion);
}
