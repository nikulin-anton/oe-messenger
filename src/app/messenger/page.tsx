import Icon from "../components/Icon/Icon";
import style from "./messenger.module.css";

export default function MessengerPage() {
  return (
    <div className={style.messengerEmptyPage}>
      <Icon name="chat" alt="Chat" width={48} height={48}></Icon>
      <p>Have fun!</p>
    </div>
  );
}
