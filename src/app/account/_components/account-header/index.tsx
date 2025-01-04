"use client";

import React from "react";
import FeedIcon from "@/icons/feed-icon";

import styles from "./account-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";
import StatisticIcon from "@/icons/statistic-icon";
import AddIcon from "@/icons/add-icon";
import ExitIcon from "@/icons/exit-icon";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

export default function AccountHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUser } = useUser();
  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/account"
          className={pathname === "/account" ? "active" : ""}
        >
          <FeedIcon />
          {mobile && "Feed"}
        </Link>
        <Link
          href="/account/statistic"
          className={pathname === "/account/statistic" ? "active" : ""}
        >
          <StatisticIcon />
          {mobile && "Statistics"}
        </Link>
        <Link
          href="/account/post"
          className={pathname === "/account/post" ? "active" : ""}
        >
          <AddIcon />
          {mobile && "Post a Photo"}
        </Link>
        <button onClick={handleLogout}>
          <ExitIcon />
          {mobile && "Logout"}
        </button>
      </nav>
    </header>
  );
}
