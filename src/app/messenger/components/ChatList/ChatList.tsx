import { getChats } from "@/app/api/chat";
import ChatListItem from "../ChatListItem/ChatListItem";
import style from "./chat-list.module.css";

export default async function ChatList() {
  const chatList = await getChats();
  const items = chatList
    .sort((a) => (a.isPinned ? -1 : 1))
    .map((chat) => <ChatListItem chat={chat} key={chat.id} />);

  return (
    <section className={style.chatListContainer}>
      {/* Search */}
      <div>{items}</div>
    </section>
  );
}
