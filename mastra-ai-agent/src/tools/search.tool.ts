import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const searchTool = createTool({
  id: "search",
  description: "Search the web for information",
  inputSchema: z.object({ query: z.string() }),
  outputSchema: z.object({ result: z.string() }),
  async execute({ query }) {
    return { result: `Search results for: ${query}` };
  },
});
