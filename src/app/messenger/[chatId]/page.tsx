import { getChatById } from "@/app/api/chat";
import { getMessages } from "@/app/api/messages";
import MessageList from "./components/MessageList/MessageList";
import style from "./chat.module.css";
import { getUser } from "@/app/api/user";

type Props = {
  params: { chatId: string };
};

export default async function ChatHistory({ params }: Props) {
  const user = await getUser();
  const chatData = await getChatById(params.chatId);
  const messages = await getMessages(params.chatId);

  return (
    <div className={style.chatContainer}>
      <MessageList messages={messages} user={user} />
    </div>
  );
}
