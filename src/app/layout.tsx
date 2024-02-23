import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

type Props = { children: ReactNode };

export const metadata: Metadata = {
  title: "OE-Messenger",
  description: "Messenger based on Next.js",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
