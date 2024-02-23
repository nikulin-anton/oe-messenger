import Image from "next/image";
import LogoSvg from "../../assets/icons/logo.svg";
import { App } from "../../const/app";
import Styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={Styles.logoContainer}>
      <Image src={LogoSvg} alt="Logo" />
      <span className={Styles.appName}>{App.name}</span>
    </div>
  );
}
