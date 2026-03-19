# Mastra CLI AI Assistant

A simple but production-style AI assistant built using the **Mastra TypeScript Agent Framework**.
This project runs entirely from the command line and demonstrates streaming responses, tool usage, memory handling, and error management.

---

## Features

- CLI-based chatbot
- Streaming AI responses (real-time output)
- Conversation memory (context-aware responses)
- 4 integrated tools:
  - Calculator tool
  - RAG (Retrieval Augmented Generation) tool
  - Web search tool (mock)
  - Weather tool (mock)

- Error handling and graceful shutdown
- Environment-based configuration

---

## Project Structure

```
src/
├── agent/
│   ├── agent.ts
│   └── tools/
│       ├── calculatorTool.ts
│       ├── ragTool.ts
│       ├── searchTool.ts
│       └── weatherTool.ts
│
│ └── cli.ts
│
├── server/
│   └── server.ts
│
    └── memory.ts
```

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root:

```
OPENROUTER_API_KEY=your_api_key_here
MODEL_NAME=openai/gpt-4o-mini
```

---

## Running the App

```bash
npx ts-node src/cli/cli.ts
```

---

## Usage

- Type a message and press Enter
- The AI will stream a response
- Type `exit` to quit
- Press `Ctrl + C` to exit anytime

---

## Tools Overview

### 1. Calculator Tool

Performs basic math calculations
Example: `2 + 2`

### 2. RAG Tool

Retrieves answers from a local knowledge base
Simulates Retrieval Augmented Generation

### 3. Search Tool

Mock web search functionality
Returns simulated results

### 4. Weather Tool

Returns mock weather data for a city

---

## How It Works

1. CLI accepts user input
2. Input is stored in memory
3. Agent processes input with tools
4. Response is streamed back to the terminal
5. Conversation history is preserved

---

## Error Handling

- Try/catch around agent execution
- Clean error messages displayed in CLI
- Prevents crashes during runtime

---

## Conversation Memory

The assistant maintains context by storing:

```ts
{ role: "user" | "assistant", content: string }
```

This enables follow-up questions and better responses.

---

## Example Interaction

```
> What is 5 + 3?

AI: 8

> What is Mastra?

AI: Mastra is a TypeScript AI agent framework.
```

---

## Notes

- `eval()` is used in the calculator for simplicity — not safe for production
- Search and weather tools are mocked (can be replaced with real APIs)
- Designed for learning and demonstration purposes

---

## Future Improvements

- Replace mock tools with real APIs
- Add persistent memory (file/database)
- Add tool execution logs (debug mode)
- Implement real vector-based RAG

---

## License

MIT
