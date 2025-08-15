import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY, // Use env var, not hardcoded
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export async function POST(req) {
  try {
    const { message } = await req.json();
    const response = await openai.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [
        { role: "system", content: "You are ChatGPT-compatible Gemini." },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      response: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 502 }
    );
  }
}
