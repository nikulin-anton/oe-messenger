import { Message } from "../interfaces/message";
import { getMessageMock } from "../mocks/message";
import { getChatById } from "./chat";
import { getUser } from "./user";

export function getMessages(chatId: string): Promise<Message[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Promise.all([getUser(), getChatById(chatId)])
        .then(([user, { interlocutor }]) => {
          resolve(
            new Array(50)
              .fill(undefined)
              .map(() =>
                Math.random() >= 0.5
                  ? getMessageMock({ sender: interlocutor, recipient: user })
                  : getMessageMock({ sender: user, recipient: interlocutor })
              )
          );
        })
        .catch((err) => reject("Error by fetching messages"));
    });
  });
}
