import Avatar from "@/app/components/Avatar/Avatar";
import { Chat } from "@/app/interfaces/chat";

type Props = {
  chat: Chat;
};

export default function ChatListItem({ chat }: Props) {
  return (
    <div>
      <Avatar
        src={chat.interlocutor.avatar}
        alt={chat.interlocutor.username + " Avatar"}
        width={40}
        height={40}
      />
      <div>
        <p>
          {chat.interlocutor.firstName} {chat.interlocutor.lastName}
        </p>
        <p>{chat.lastMessage.value}</p>
      </div>
      <div>
        <p>{chat.lastMessage.dateTime.toLocaleTimeString()}</p>
        <p>
          {
            <span className={chat.sentMessageRead ? "" : "blue"}>
              {chat.unreadedIncomingMessages || ""}
            </span>
          }
          {chat.isPinned && <span>Pin</span>}
        </p>
      </div>
    </div>
  );
}
