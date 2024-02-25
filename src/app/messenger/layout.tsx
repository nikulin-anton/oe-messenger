import { ReactNode } from "react";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import styles from "./messenger.module.css";

export default function MessengerLayout({ children }: { children: ReactNode }) {
  return (
    <section className={styles.messengerLayout}>
      <Header />
      <div className={styles.messengerPage}>
        <ChatList />
        <div>Here will be messages</div>
      </div>
      {children}
    </section>
  );
}
