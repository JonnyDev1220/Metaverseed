import styles from "../../styles/homepage/HomeNewsCarrousel.module.scss";
import Link from "next/link";

const HomeNewsCarrousel = ({ newsArray }) => {
  return (
    <div className={styles.compContainer}>
      <div className={styles.headComp}>
        <h2>Latest News</h2>
      </div>

      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {newsArray.map((article, index) => {
            return (
              <div className={styles.slide} key={index}>
                <div className={styles.articleDiv}>
                  <img className={styles.articleImg} src={article.urlToImage} />
                  <h2 className={styles.articleTitle}>
                    {article.title.length > 75
                      ? `${article.title.substring(0, 75)} ..`
                      : article.title}
                  </h2>
                  <span className={styles.articleSource}>
                    source :{" "}
                    <a
                      className={styles.sourceLink}
                      href={article.url}
                      target="_blank"
                    >
                      {article.source.name}
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.btnDiv}>
        <Link href="/news">
          <button className={styles.moreBtn}>More news </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNewsCarrousel;
