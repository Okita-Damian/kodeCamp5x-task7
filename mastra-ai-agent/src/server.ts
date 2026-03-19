import { Mastra } from "@mastra/core";
import { LibSQLStore } from "@mastra/libsql"; // Use this instead
import { assistant } from "./agents/assistant.agent.ts";
import { ConsoleLogger } from "@mastra/core/logger";

const logger = new ConsoleLogger({
  name: "Mastra",
  level: "error",
});

export const mastra = new Mastra({
  logger,
  storage: new LibSQLStore({
    id: "mastra-storage",
    url: "file:mastra.db", // Persistent local file
  }),
  agents: { assistant },
});
