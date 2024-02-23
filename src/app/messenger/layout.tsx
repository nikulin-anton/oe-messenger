import { ReactNode } from "react";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";

export default function MessengerLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Header />
      <ChatList />
      {children}
    </section>
  );
}
