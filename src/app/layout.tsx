import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Dogs are the best, social media for dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={type_second.variable}>{children}</body>
    </html>
  );
}
