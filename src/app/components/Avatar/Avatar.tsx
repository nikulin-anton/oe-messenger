import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import styles from "./avatar.module.css";

const DEFAULT_SIZE = 24;

type Props = ComponentPropsWithoutRef<"img"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Avatar({ src, alt, width, height, ...params }: Props) {
  return (
    <Image
      className={styles.avatar}
      src={src}
      alt={alt}
      width={width || DEFAULT_SIZE}
      height={height || DEFAULT_SIZE}
      {...params}
    ></Image>
  );
}
