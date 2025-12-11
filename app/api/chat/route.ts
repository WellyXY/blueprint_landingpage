import { NextResponse } from "next/server";
import OpenAI from "openai";
import { characters } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY on the server" },
        { status: 500 }
      );
    }

    const { messages, characterId } = await req.json();

    const character = characters.find((c) => c.id === characterId);

    if (!character) {
      return NextResponse.json({ error: "Character not found" }, { status: 404 });
    }

    const systemPrompt = `
      You are ${character.name}, a ${character.role}.
      Your personality and backstory are: "${character.bio}".
      
      Instructions:
      1. Stay strictly in character. Do not break the fourth wall.
      2. Use a tone that matches your persona (e.g., if you are Cyberpunk, use slang, be direct).
      3. Your responses should be concise, immersive, and engaging.
      4. You are chatting with a user in a "Neural Link" interface.
    `;

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    return NextResponse.json({ message: completion.choices[0].message });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

