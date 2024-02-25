import { ReactNode } from "react";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import styles from "./messenger.module.css";

export default function MessengerLayout({ children }: { children: ReactNode }) {
  return (
    <section className={styles.messengerLayout}>
      <Header />
      <div className={styles.messengerPageContainer}>
        <ChatList />
        {children}
      </div>
    </section>
  );
}
