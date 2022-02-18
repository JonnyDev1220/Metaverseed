import styles from "../../styles/homepage/Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroTextBox}>
          <h1>
            <span>Metaverse</span> Data Aggregator{" "}
          </h1>
          <p>News Feed - Market Overview - Ressources </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
