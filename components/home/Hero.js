import styles from "../../styles/homepage/Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroTextBox}>
          <h1>The Best Metaverse Data Ressources</h1>
          <p>News Feed - Market Activity - Tutorial - Portfolio Tracking</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
