import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const ragTool = createTool({
  id: "rag",
  description: "Retrieve knowledge from internal documents",
  inputSchema: z.object({ question: z.string() }),
  outputSchema: z.object({ answer: z.string() }),
  async execute({ question }) {
    const knowledgeBase = [
      "Mastra is a TypeScript AI agent framework.",
      "RAG means Retrieval Augmented Generation.",
      "Node.js is used for backend development.",
    ];
    const match = knowledgeBase.find((k) =>
      k.toLowerCase().includes(question.toLowerCase()),
    );
    return { answer: match || "No relevant knowledge found." };
  },
});
