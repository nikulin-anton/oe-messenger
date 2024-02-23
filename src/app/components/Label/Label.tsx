import { ReactNode } from "react";
import style from "./label.module.css";

type Props = {
  children: ReactNode;
  status: "primary" | "secondary";
};

export default function Label({ children, status = "secondary" }: Props) {
  const classes = [style.label];

  status === "primary" && classes.push(style.primary);

  return <div className={classes.join(" ")}>{children}</div>;
}
