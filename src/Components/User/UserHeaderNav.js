import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Statistic } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
