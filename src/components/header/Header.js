import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/cardano-millions">
            Cardano Millions Lottery
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
