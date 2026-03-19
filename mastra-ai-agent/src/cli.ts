import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { mastra } from "./server.ts";

const rl = readline.createInterface({ input, output });
const agent = mastra.getAgent("assistant");

async function main() {
  console.log(
    "\x1b[36m%s\x1b[0m",
    '--- Mastra AI CLI Assistant (Type "exit" to quit) ---',
  );

  const threadId = "cli-session-1";
  const resourceId = "cli-user";

  while (true) {
    try {
      const userInput = await rl.question("\n> ");

      if (userInput.toLowerCase() === "exit") {
        console.log("Goodbye!");
        process.exit(0);
      }

      // STREAMING CALL
      const result = await agent.stream(userInput, {
        memory: {
          thread: threadId,
          resource: resourceId,
        },
      });

      process.stdout.write("\x1b[32mAI: \x1b[0m");

      // Iterate through the text chunks
      for await (const chunk of result.textStream) {
        process.stdout.write(chunk);
      }
      process.stdout.write("\n");
    } catch (error) {
      console.error(
        "\n\x1b[31m[Error]:\x1b[0m",
        error instanceof Error ? error.message : error,
      );
    }
  }
}

main();
