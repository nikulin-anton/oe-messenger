import { faker } from "@faker-js/faker";
import { Message } from "../interfaces/message";
import { getUserMock } from "./user";

export function getMessageMock(message: Partial<Message> = {}): Message {
  return {
    sender: getUserMock(),
    recipient: getUserMock(),
    message: faker.lorem.sentence(),
    datetime: faker.date.recent(),
    readed: true,
    ...message,
  };
}
