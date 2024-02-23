import Avatar from "@/app/components/Avatar/Avatar";
import { Chat } from "@/app/interfaces/chat";
import style from "./chat-list-item.module.css";

type Props = {
  chat: Chat;
};

export default function ChatListItem({ chat }: Props) {
  const fullName = `${chat.interlocutor.firstName} ${chat.interlocutor.lastName}`;

  return (
    <div className={style.item}>
      <Avatar
        src={chat.interlocutor.avatar}
        alt={chat.interlocutor.username + " Avatar"}
        width={40}
        height={40}
      />
      <div className={style.middle}>
        <p>{fullName}</p>
        <p className={style.message}>{chat.lastMessage.value}</p>
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
