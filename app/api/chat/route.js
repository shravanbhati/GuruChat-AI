import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

async function POST(req) {
  try {
    const { message } = await req.json();
    const completion = await openai.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [{ role: "user", content: message }],
    });

    return Response.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
