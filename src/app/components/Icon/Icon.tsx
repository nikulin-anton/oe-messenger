import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import styles from "./icon.module.css";
import { getIconByName } from "./icon-mapper";

const DEFAULT_SIZE = 20;

type Props = ComponentPropsWithoutRef<"img"> & {
  name: string;
  alt: string;
  width?: number;
  height?: number;
};

export default async function Icon({
  name,
  alt,
  width,
  height,
  ...params
}: Props) {
  const src = await getIconByName(name);

  return (
    <Image
      className={styles.icon}
      src={src}
      alt={alt}
      width={width || DEFAULT_SIZE}
      height={height || DEFAULT_SIZE}
      {...params}
    ></Image>
  );
}
