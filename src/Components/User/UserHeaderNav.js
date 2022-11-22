import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Statistic } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MyPhotos />
          {mobile ? "My photos" : null}
        </NavLink>
        <NavLink to="/conta/statistic">
          <Statistic />
          {mobile ? "Statistic" : null}
        </NavLink>
        <NavLink to="/conta/post">
          <AddPhoto />
          {mobile ? "Add photos" : null}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile ? "Sair" : null}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
