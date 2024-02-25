"use client";

import Avatar from "@/app/components/Avatar/Avatar";
import Dot from "@/app/components/Dot/Dot";
import Icon from "@/app/components/Icon/Icon";
import Label from "@/app/components/Label/Label";
import { Chat } from "@/app/interfaces/chat";
import style from "./chat-list-item.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { chat: Chat };

export default function ChatListItem({ chat }: Props) {
  const pathname = usePathname();
  const fullName = `${chat.interlocutor.firstName} ${chat.interlocutor.lastName}`;
  const lastMessageTime = chat.lastMessage.dateTime.toLocaleTimeString(
    "en-us",
    { hour: "2-digit", minute: "2-digit" }
  );

  const href = `/messenger/${chat.id}`;
  const isActive = pathname === href;
  const className = [style.item, isActive ? style.itemActive : ""].join(" ");

  return (
    <Link href={href} className={className}>
      <Avatar
        src={chat.interlocutor.avatar}
        alt={chat.interlocutor.username + " Avatar"}
        width={40}
        height={40}
      />
      <div className={style.middleBlock}>
        <p className={style.fullName}>{fullName}</p>
        <p className={style.message}>{chat.lastMessage.value}</p>
      </div>
      <div className={style.rightBlock}>
        <p className={style.lastMessageTime}>{lastMessageTime}</p>
        <div className={style.rightDownBlock}>
          {chat.unreadedIncomingMessages > 0 && (
            <Label status={chat.sentMessageRead ? "secondary" : "primary"}>
              {chat.unreadedIncomingMessages}
            </Label>
          )}
          {chat.unreadedIncomingMessages === 0 && !chat.sentMessageRead && (
            <Dot />
          )}
          {chat.isPinned && <Icon name="pin" alt="Pinned"></Icon>}
        </div>
      </div>
    </Link>
  );
}
