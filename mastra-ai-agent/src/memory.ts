// src/utils/memory.ts

export class Memory {
  private messages: { role: string; content: string }[] = [];

  add(role: string, content: string) {
    this.messages.push({ role, content });
  }

  get() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}
