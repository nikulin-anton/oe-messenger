import { getChats } from "@/app/api/chat";
import ChatListItem from "../ChatListItem/ChatListItem";

export default async function ChatList() {
  const chatList = await getChats();
  const items = chatList.map((chat) => (
    <ChatListItem chat={chat} key={chat.id} />
  ));

  return (
    <section>
      {/* Search */}
      <div>{items}</div>
    </section>
  );
}
