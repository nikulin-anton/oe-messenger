import { Chat } from "../interfaces/chat";
import { getChatMock } from "../mocks/chat";

const chatsMock = new Array(10).fill(undefined).map(() => getChatMock());

export function getChats(): Promise<Chat[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(chatsMock), Math.random() * 1000)
  );
}
