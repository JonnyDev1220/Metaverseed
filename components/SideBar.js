import styles from "../styles/generalComp/SideBar.module.scss";
import Top10Token from "./Top10Token";

const SideBar = ({ metaTokens }) => {
  return (
    <div className={styles.sideBarContainer}>
      <Top10Token metaTokens={metaTokens} />
      <div className={styles.tokenPriceBox}>Ads</div>
      <div className={styles.tokenPriceBox}>
        <a href="https://shop.ledger.com/pages/ledger-nano-x?r=40332485a8c6">
          <img
            width="auto"
            height="200"
            src="http://www.ledgerwallet.com/affiliate/image/250/100"
          />
        </a>
      </div>
      <div className={styles.tokenPriceBox}>Buy Crypto with Credit Card</div>
      <div className={styles.tokenPriceBox}>Ressources</div>
    </div>
  );
};

export default SideBar;
