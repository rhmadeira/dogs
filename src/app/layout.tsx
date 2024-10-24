import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
