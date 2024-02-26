import { Message } from "@/app/interfaces/message";
import MessageItem from "../MessageItem/MessageItem";
import { User } from "@/app/interfaces/user";
import InterlocutorMessageItem from "../MessageItem/InterlocutorMessageItem";

type Props = {
  messages: Message[];
  user: User;
};

export default function MessageList({ messages, user }: Props) {
  const messageItems = messages.map((message) =>
    message.sender.id === user.id ? (
      <MessageItem message={message} />
    ) : (
      <InterlocutorMessageItem message={message} />
    )
  );

  return <div>{messageItems}</div>;
}
