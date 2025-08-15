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
    const { message, model } = await req.json();

    if (!message || !model) {
      return NextResponse.json(
        { error: "Message and model are required" },
        { status: 400 }
      );
    }

    if (conversationHistory.length === 0) {
      const systemPrompt =
        model === "hitesh"
          ? hiteshPrompt
          : model === "piyush"
          ? piyushPrompt
          : "You are a helpful tutor.";
      console.log(model);
      conversationHistory.push({
        role: "system",
        content: systemPrompt,
      });
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
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 502 }
    );
  }
}
