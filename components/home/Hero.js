import styles from "../../styles/homepage/Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <div className={styles.heroTextBox}>
          <h1>
            Data ressources for The <span>Metaverse</span> industry{" "}
          </h1>
          <p>News Feed - Market Overview - Ressources - Portfolio Tools</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
