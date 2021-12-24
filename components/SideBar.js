import styles from "../styles/generalComp/SideBar.module.scss";
const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <h2>Latest Box</h2>
      <div className={styles.tokenPriceBox}>Top Metaverse Coin</div>
      <div className={styles.tokenPriceBox}>Referral Box</div>
      <div className={styles.tokenPriceBox}>Buy and Sell</div>
      <div className={styles.tokenPriceBox}>Ressources</div>
      <div className={styles.tokenPriceBox}>Tutorial</div>
    </div>
  );
};

export default SideBar;
