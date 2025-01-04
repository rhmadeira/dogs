import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { UserContextProvider } from "@/context/user-context";
import userGet from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Dogs are the best, social media for dogs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="en">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
