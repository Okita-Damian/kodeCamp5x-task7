import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const calculatorTool = createTool({
  id: "calculator",
  description: "Performs simple math calculations",
  inputSchema: z.object({ expression: z.string() }),
  outputSchema: z.object({ result: z.string() }),
  async execute({ expression }) {
    try {
      const result = eval(expression); // demo only
      return { result: String(result) };
    } catch {
      throw new Error("Invalid math expression");
    }
  },
});
