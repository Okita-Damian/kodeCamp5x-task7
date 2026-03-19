import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { mastra } from "./server.ts";

const rl = readline.createInterface({ input, output });

// Handle Ctrl+C (SIGINT) gracefully
rl.on("SIGINT", () => {
  console.log(
    "\n\x1b[33m%s\x1b[0m",
    "--- Interrupted (Ctrl+C). Shutting down... ---",
  );
  rl.close();
  process.exit(0);
});

async function main() {
  console.log(
    "\x1b[36m%s\x1b[0m",
    '--- Mastra AI CLI Assistant (Type "exit" or Press Ctrl+C to quit) ---',
  );

  const threadId = "cli-session-1";
  const resourceId = "cli-user";

  // Get agent once outside the loop
  const agent = mastra.getAgent("assistant");

  try {
    while (true) {
      try {
        const userInput = await rl.question("\n\x1b[1m> \x1b[0m");

        // Handle manual exit command
        if (userInput.toLowerCase() === "exit") {
          console.log("\x1b[33mGoodbye!\x1b[0m");
          rl.close();
          return;
        }

        if (!userInput.trim()) continue;

        // 1. STREAMING CALL
        const result = await agent.stream(userInput, {
          memory: {
            thread: threadId,
            resource: resourceId,
          },
        });

        process.stdout.write("\x1b[32mAI: \x1b[0m");

        // 2. GRACEFUL STREAM CONSUMPTION
        // We wrap this in another try/catch to handle mid-stream network or tool errors
        try {
          for await (const chunk of result.textStream) {
            process.stdout.write(chunk);
          }
        } catch (error) {
          if (error instanceof Error && error.message.includes("closed")) {
            break; // 💡 ADD THIS: Exit the loop if readline is dead
          }
        }

        process.stdout.write("\n");
      } catch (innerError) {
        // Handle per-turn errors (e.g., tool failures, API timeouts)
        console.error(
          "\n\x1b[31m[Agent Error]:\x1b[0m",
          innerError instanceof Error
            ? innerError.message
            : "An unexpected error occurred.",
        );
        console.log("\x1b[90m%s\x1b[0m", "(You can try asking something else)");
      }
    }
  } finally {
    // Ensure terminal interface is always closed on exit
    rl.close();
  }
}

// Global catch for fatal startup errors
main().catch((err) => {
  console.error("\x1b[41m FATAL ERROR \x1b[0m", err);
  process.exit(1);
});
