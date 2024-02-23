import { getUser } from "@/app/api/user";
import Avatar from "@/app/components/Avatar/Avatar";
import Logo from "@/app/components/Logo/Logo";
import styles from "./header.module.css";

export default async function Header() {
  const user = await getUser();

  return (
    <header className={styles.header}>
      <Logo />
      <Avatar src={user.avatar} alt="Avatar" width={32} height={32} />
    </header>
  );
}
