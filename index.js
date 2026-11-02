/*import { get_encoding } from "tiktoken";


The argument supplied to get_encoding() is an encoding. An encoding is a
dictionary that maps token ID's to tokens. e.g., 904 -> hello

const encoding = get_encoding('cl100k_base');
const tokens = encoding.encode('Hello world! This is the first test of tiktoken library');
console.log(tokens);*/

import OpenAI from "openai";

// Initialize client pointing to your local LM Studio server
const openai = new OpenAI({
  baseURL: "http://localhost:1235/v1", // LM Studio's default local port
  apiKey: "lm-studio",                 // A placeholder key is required but ignored locally
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      // Match the exact identifier displayed in your LM Studio Server logs
      model: "granite-4.0-micro", 
      messages: [
        { role: "user", content: "Just trying you out for the first time" }
      ],
      temperature: 0.7,
      max_completion_tokens: 50
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Make sure your LM Studio server is running on port 1234:", error.message);
  }
}

main();
