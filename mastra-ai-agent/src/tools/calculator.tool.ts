import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const calculatorTool = createTool({
  id: "calculator",
  description: "Performs simple math calculations",
  inputSchema: z.object({
    expression: z.string().describe("Math expression to evaluate"),
  }),
  outputSchema: z.object({
    result: z.string().describe("The calculation result"),
  }),

  async execute({ expression }) {
    try {
      const result = eval(expression); // for demo only, not safe for production
      return { result: String(result) };
    } catch {
      throw new Error("Invalid math expression");
    }
  },
});
