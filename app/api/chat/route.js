import OpenAI from "openai";
import { NextResponse } from "next/server";
import hiteshPrompt from "../../characters/Hitesh.js";
import piyushPrompt from "../../characters/Piyush.js";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const conversationHistory = [];

export async function POST(req) {
  try {
    const { message, mode } = await req.json();
    console.log(req);

    // if (!message || !mode) {
    //   return NextResponse.json(
    //     { error: "Message and mode are required" },
    //     { status: 400 }
    //   );
    // }

    if (conversationHistory.length === 0) {
      const systemPrompt =
        mode === "hitesh"
          ? hiteshPrompt
          : mode === "piyush"
          ? piyushPrompt
          : "You are a helpful tutor.";
      conversationHistory.push({ role: "system", content: systemPrompt });
    }

    conversationHistory.push({ role: "user", content: message });

    const response = await openai.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: conversationHistory,
    });

    const reply = response.choices[0].message.content;
    conversationHistory.push({ role: "assistant", content: reply });
    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 502 }
    );
  }
}
