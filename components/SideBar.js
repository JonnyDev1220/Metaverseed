import styles from "../styles/generalComp/SideBar.module.scss";
import Top10Token from "./Top10Token";
import UDBanner from "../assets/UD-banner.png";
import SideAds from "./SideAds";

const SideBar = ({ metaTokens }) => {
  return (
    <>
      <div className={styles.sideBarContainer}>
        <Top10Token metaTokens={metaTokens} />
        <SideAds />
        <div className={styles.tokenPriceBox}>
          <a
            href="https://shop.ledger.com/pages/ledger-nano-x?r=40332485a8c6"
            target="_blank"
          >
            <img
              src="http://www.ledgerwallet.com/affiliate/image/320/50"
              alt="ledger-ads"
            />
          </a>
        </div>
        <div className={styles.tokenPriceBox}>
          <a
            href="https://unstoppabledomains.com/?ref=fe9f7797fa7d453"
            target="_blank"
          >
            <img src={UDBanner.src} alt="UD-ads" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
