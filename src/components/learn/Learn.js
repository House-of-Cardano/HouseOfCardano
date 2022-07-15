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
              numbers are considered, not the star numbers as of yet). <br></br>
              If you played the winning numbers, you'll get your winnings
              transferred directly to your wallet. <br></br>
              Winnings will be the total amount of collected funds split accross
              all wining NFTs, less game fees and less a contribution to a
              charitable organisation.
              <br></br>
              If none of the minted NFTs contain the winning numbers, the
              collected funds will be staked on the HouseOfCardano stake pool
              (HOCSP) and added to the pool for the next lottery, increasing the
              amount of money up #forthewin NFTs are only valid for the lottery
              instance that is being run. After the winning numbers have been
              disclosed, the NFTs for that round become void. Minting the
              cardano-millions-ticket (CMT) as a NFT and controlling the funds
              are all managed through smart contracts on the Cardano blockchain.
              A panal of independent administrators ensure the security of these
              smart contracts through an innovative approach to hash data
              management
            </p>
          </div>

          <div>
            <h3>How to play Cardano Millions</h3>
            <p className={styles.paragraphStyling}>
              First thing, you'll need a wallet containing ADA. Nami wallet is
              the recommended choice but any wallet containing ADA will do.
              Next, go to the Play section using the link above. Then simply
              follow the instructions which will take you through creating a
              temporary game wallet, funding that wallet, choosing your lucky
              numbers and finally, minting the lottery ticket as a Cardano NFT.
            </p>
          </div>
          <a
            className={styles.linkStyling}
            href="https://namiwallet.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Nami wallet
          </a>
          <div>
            <h3>How much to play?</h3>
            <p className={styles.paragraphStyling}>
              At the moment, a CMT NFT costs 4ADA. It is recommended however, to
              fund your temporary game wallet with 10ADA to ensure that there
              enough funds to cover Cardano blockchain transaction fees so that
              all the blockchain operations run smoothly. The total cost of the
              game is XXXADA for each CMT minted.<br></br>
              Although we recommend that you fund your temporary game wallet
              with 10ADA, once the CMT NFT has been minted, all remaining funds
              on the game wallet are transferred back to your wallet, along with
              your CMT NFT, so that costs are completely transparent. <br></br>
              And as all transactions are done through the Cardano blockchain,
              the total amount of NFTs minted, the amunt of funds sitting at any
              point in time at the smart contract addresses and all transactions
              are fully transparent to all at all time.
            </p>
          </div>

          <div>
            <h3>How to play Cardano Millions</h3>
            <p className={styles.paragraphStyling}>
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
