import { NavLink } from "react-router-dom";

import logo from "../../svg_files/HoC_MASTER_v1_splitFour.svg";
import styles from "./CardanoMillions.module.css";

const Millions = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink activeClassName={styles.active} to="/home">
          back to HouseOfCardano
        </NavLink>
      </header>

      <div className={styles.App2}>
        <div className={styles.App2Header}>
          <img src={logo} className={styles.App2Logo} alt="logo" />
        </div>
      </div>

      <div className={styles.mainText}>
        <h1>Welcome to the Cardano Millions Lottery</h1>
        <h3>Want to get rich and have fun? Well, check out what's below!</h3>
        <p>Try your luck playing the Cardano Millions Lottery...</p>
        <p>
          This game is really easy to play and available on either the Cardano
          mainnet or on the Cardano testnet
        </p>
        <p>
          A great way to learn about blockchain, crypto currency and smart
          contracts, and a whole lotta of fun
        </p>
        <p>
          Follow the links below to learn how to play or go straight to playing
          the game
        </p>
      </div>


      <div>
        <header className={styles.header2}>
          <NavLink activeClassName={styles.active} to="/cardano-millions-learn">
            Learn
          </NavLink>
          <NavLink activeClassName={styles.active} to="/cardano-millions-play">
            Play
          </NavLink>
        </header>
      </div>

    </div>
  );
};

export default Millions;
