import OpenAI from "openai";

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

export async function createAPI() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
