import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const weatherTool = createTool({
  id: "weather",
  description: "Gets weather information for a city",
  inputSchema: z.object({ city: z.string() }),
  outputSchema: z.object({ forecast: z.string() }),
  async execute({ city }) {
    return { forecast: `The weather in ${city} is sunny and 27°C` };
  },
});
