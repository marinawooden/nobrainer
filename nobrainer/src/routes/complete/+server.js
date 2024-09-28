import { env } from "$env/dynamic/private";
import { openai } from "$lib/scripts/model";

export async function POST({request, cookies}) {
  try {
    const { text, instructions } = await request.json();

    if (!text) {
      throw new Error("Please provide some text to work with.");
    }

    const chat = [
      {
        "role": "system",
        "content": `
          You're a creative writing assistant.  The user will give you some text, and it is your job to continue it.
          ${instructions ? "The user has some special instructions: " + instructions : ""}
        `.trim()
      },
      {
        "role": "user",
        "content": text
      }
    ]
    
    const completion = await openai.chat.completions.create({
      model: "ai21/jamba-1-5-mini",
      messages: chat
    });

    console.log(completion.usage);
  
    return new Response(JSON.stringify([...completion.choices.map((en) => en.message.content)]), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error(err);
    return new Response("Something wrong :-/", {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}