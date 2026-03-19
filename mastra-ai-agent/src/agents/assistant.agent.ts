import "dotenv/config"; // Top of the file!

import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory"; // Ensure you are importing from @mastra/memory
import { calculatorTool } from "../tools/calculator.tool.ts";
import { weatherTool } from "../tools/weather.tool.ts";
import { searchTool } from "../tools/search.tool.ts";
import { ragTool } from "../tools/rag.tool.ts";

export const assistant = new Agent({
  id: "cli-assistant",
  name: "Mastra CLI Bot",
  instructions:
    "You are a helpful CLI assistant. Use your tools to answer user queries accurately.",

  model: {
    provider: "OPENROUTER",
    // Wrap the env variable in a template literal to satisfy the `${string}/${string}` type
    id: `openrouter/${process.env.MODEL_NAME || "anthropic/claude-3.5-sonnet"}` as `${string}/${string}`,
    apiKey: process.env.OPENROUTER_API_KEY,
  },
  // Attach the memory instance
  memory: new Memory(),

  // Register tools
  tools: {
    weatherTool,
    searchTool,
    ragTool,
    calculatorTool,
  },
});
