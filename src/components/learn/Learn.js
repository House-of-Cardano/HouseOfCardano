import { NavLink } from "react-router-dom";

import styles from "./Learn.module.css";

const Learn = () => {
  return (
    <div>
      <header className={styles.header}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              HouseOfCardano
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cardano-millions">
              Cardano Millions Lottery
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.active}
              to="/cardano-millions-play"
            >
              Play
            </NavLink>
          </li>
        </ul>
      </header>

      <div className={styles.pageStyling}>
        <div className={styles.titleStyling}>
          <h2>What is the Cardano Millions Lottery?</h2>
        </div>

        <div className={styles.flexContainer}>
          <div>
            <h3>How Cardano Millions works</h3>
            <p className={styles.paragraphStyling}>
              The Cardano Millions lottery works just like any other lottery,
              but tickets are sold as cardano NFTs, and you purchase tickets
              through a smart contract - all of which goes on in the Cardano
              blockchain - how cool is that 😎! <br></br>
              Your lottery ticket NFT is transferred to your wallet and contains
              the details of which lottery you are playing in and of course,
              your lucky numbers. The winning numbers are the same as those from
              the EuroMillions lottery drawn every Friday (only the 5 main
              numbers are considered, not the star numbers as of yet)
            </p>
          </div>

          <div>
            <h3>How to play at Cardano Millions</h3>
            <p className={styles.paragraphStyling}>
              First thing, you'll need a wallet containing ADA. The Nami wallet is the
              recommended choice, but any wallet containing ADA will do. Next,
              go to the Play section which you can find here. Then simply follow
              the instructions which will take you through creating a temporary
              game wallet, funding that wallet, choosing your lucky numbers and
              finally, minting the lottery ticket as a Cardano NFT
            </p>
          </div>

          <div>
            <h3>How much do tickets cost?</h3>
            <p className={styles.paragraphStyling}>
              Deserunt cupiditate, delectus labore eius dolores quo sed quos
              accusantium similique quisquam magni at hic dicta quis quam,
              expedita iste veritatis numquam placeat dolorum libero! Nostrum
              dicta ullam similique quas libero ipsum deserunt. Deserunt id
              cumque nemo quia iusto tempore adipisci, quod a inventore modi,
              tenetur
            </p>
          </div>

          <div>
            <h3>How to play at Cardano Millions</h3>
            <p className={styles.paragraphStyling}>
              {" "}
              Deserunt cupiditate, delectus labore eius dolores quo sed quos
              accusantium similique quisquam magni at hic dicta quis quam,
              expedita iste veritatis numquam placeat dolorum libero! Nostrum
              dicta ullam similique quas libero ipsum deserunt. Deserunt id
              cumque nemo quia iusto tempore adipisci, quod a inventore modi,
              tenetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
