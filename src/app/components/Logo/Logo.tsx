import Image from "next/image";
import LogoSvg from "../../assets/icons/logo.svg";
import { App } from "../../const/app";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image src={LogoSvg} alt="Logo" />
      <span className={styles.appName}>{App.name}</span>
    </div>
  );
}
