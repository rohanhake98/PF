import { NextResponse } from "next/server";
import { resumeData } from "@/data/resume";

// This is a production-grade RAG-ready prompt template
const SYSTEM_PROMPT = `
You are the "Digital Twin" of Rohan Hake, a Full Stack MERN & AI Engineer. 
Your goal is to answer questions from recruiters and collaborators based ONLY on the provided resume data.

CONTEXT:
${JSON.stringify(resumeData)}

INSTRUCTIONS:
1. Be professional, concise, and technically accurate.
2. If the user asks something NOT in the resume, politely steer them back to Rohan's expertise.
3. Highlight achievements like the top 2% rank in Naukri Young Turks and his specific tech stack.
4. Keep responses under 3 sentences unless asked for detail.
5. Use a "luxury tech" tone—authoritative but helpful.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // In a real production environment, you would call OpenAI here:
    /*
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      stream: true,
    });
    return new Response(response.toReadableStream());
    */

    // FOR THE PORTFOLIO PROTOTYPE: 
    // We simulate a streaming response to demonstrate the UI/UX.
    const encoder = new TextEncoder();
    const mockResponse = `Hello. I am Rohan's Digital Twin. Regarding "${message}", Rohan specializes in building high-performance systems using the MERN stack and advanced AI architectures like RAG and LangChain. His work at Shell India and Hackveda involved processing millions of records with 99%+ accuracy. How else can I assist your architectural review?`;

    const stream = new ReadableStream({
      async start(controller) {
        const words = mockResponse.split(" ");
        for (const word of words) {
          controller.enqueue(encoder.encode(word + " "));
          await new Promise((r) => setTimeout(r, 60)); // Simulate network latency/streaming
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
