import styles from "../../styles/ressourcespage/RessourcesComp.module.scss";

const RessourcesComp = () => {
  return (
    <div className={styles.compContainer}>
      <div className={styles.ressourcesGrid}>
        {/* Foreach Ressources => itembox */}
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
        <div className={styles.itemBox}>
          <img
            src="https://images.prismic.io/swissborg-website/4d93fa2c-5826-4c5e-8dee-a5af82a4d33c_what-is-the-metaverse.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1600%2C800&w=1600&h=800"
            alt="ressource-image"
          />
          <h2 className={styles.itemTitle}>Ressources Title</h2>
        </div>
      </div>
    </div>
  );
};

export default RessourcesComp;
