import { Chat } from "../interfaces/chat";
import { getChatMock } from "../mocks/chat";

const chatsMock = new Array(10)
  .fill(undefined)
  .map((_, index) => getChatMock({ isPinned: index < 2 }))
  .sort((a, b) => (a.lastMessage.dateTime > b.lastMessage.dateTime ? -1 : 1));

export function getChats(): Promise<Chat[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(chatsMock), Math.random() * 1000)
  );
}
