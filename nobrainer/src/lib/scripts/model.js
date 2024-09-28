import { env } from "$env/dynamic/private";
import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: env.OPENROUTER_KEY,
  // defaultHeaders: {
  //   "HTTP-Referer": $YOUR_SITE_URL, // Optional, for including your app on openrouter.ai rankings.
  //   "X-Title": $YOUR_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
  // }
});