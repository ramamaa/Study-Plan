import { NextRequest, NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  try {
    const { subject, deadline, hours, level } = await req.json();

    const prompt = `
You are an expert study planner.

Create a 7-day study plan.
Subject: ${subject}
Deadline: ${deadline}
Daily hours: ${hours}
Level: ${level}

Rules:
- Do not exceed daily hours
- Prioritize deadlines
- Return ONLY valid JSON
`;

    const text = await generateWithGemini(prompt);
    const plan = JSON.parse(text);

    return NextResponse.json({ plan });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate study plan" },
      { status: 500 }
    );
  }
}
