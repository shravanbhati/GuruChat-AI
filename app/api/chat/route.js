import OpenAI from "openai";
import { NextResponse } from "next/server";
import hiteshPrompt from "../../characters/Hitesh.js";
import piyushPrompt from "../../characters/Piyush.js";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

// Store separate histories for each model
const conversationHistories = {
  hitesh: [],
  piyush: [],
};

export async function POST(req) {
  try {
    const { message, model } = await req.json();

    if (!message || !model) {
      return NextResponse.json(
        { error: "Message and model are required" },
        { status: 400 }
      );
    }

    // Pick correct history array
    const history = conversationHistories[model] || [];

    // If first message, insert system prompt
    if (history.length === 0) {
      const systemPrompt =
        model === "hitesh"
          ? hiteshPrompt
          : model === "piyush"
          ? piyushPrompt
          : "You are a helpful tutor.";

      // Spread if it's an array, otherwise push
      if (Array.isArray(systemPrompt)) {
        history.push(...systemPrompt);
      } else {
        history.push({ role: "system", content: systemPrompt });
      }
    }

    // Add user message
    history.push({ role: "user", content: message });

    // Send to API
    const response = await openai.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: history,
    });

    const reply = response.choices[0].message.content;
    history.push({ role: "assistant", content: reply });

    // Save updated history back
    conversationHistories[model] = history;

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 502 }
    );
  }
}
