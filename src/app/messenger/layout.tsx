import { ReactNode } from "react";
import Header from "./components/Header";

export default function MessengerLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Header />
      <nav>Chat List</nav>
      {children}
    </section>
  );
}
