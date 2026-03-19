import { Mastra } from "@mastra/core";
import { LibSQLStore } from "@mastra/libsql"; // Use this instead
import { assistant } from "./agents/assistant.agent.ts";

export const mastra = new Mastra({
  storage: new LibSQLStore({
    id: "mastra-storage",
    url: "file:mastra.db", // Persistent local file
  }),
  agents: { assistant },
});
