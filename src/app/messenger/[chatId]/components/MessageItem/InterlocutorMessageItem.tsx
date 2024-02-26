import { Message } from "@/app/interfaces/message";

type Props = {
  message: Message;
};

export default function InterlocutorMessageItem({ message }: Props) {
  const dateTime = message.datetime.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <p>{message.message}</p>
      <p>{dateTime}</p>
    </div>
  );
}
