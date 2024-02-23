import { faker } from "@faker-js/faker";
import { Chat } from "../interfaces/chat";
import { getUserMock } from "./user";

export function getChatMock(chat: Partial<Chat> = {}): Chat {
  return {
    id: faker.string.uuid(),
    interlocutor: getUserMock(),
    lastMessage: {
      type: "text",
      value: faker.lorem.sentences(),
      dateTime: faker.date.recent(),
    },
    isPinned: faker.datatype.boolean(),
    sentMessageRead: faker.datatype.boolean(),
    unreadedIncomingMessages: faker.datatype.boolean()
      ? faker.number.int({ min: 1, max: 99 })
      : 0,
    ...chat,
  };
}
