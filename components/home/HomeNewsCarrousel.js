import styles from "../../styles/homepage/HomeNewsCarrousel.module.scss";

const HomeNewsCarrousel = ({ newsArray }) => {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {newsArray.map((article, index) => {
            return (
              <div className={styles.slide}>
                <div key={index} className={styles.articleDiv}>
                  <img className={styles.articleImg} src={article.urlToImage} />
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <span className={styles.articleSource}>
                    source :{" "}
                    <a className={styles.sourceLink} href={article.url}>
                      {article.source.name}
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCarrousel;
