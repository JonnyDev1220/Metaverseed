// Metaverse News Component
import styles from "../../styles/newspage/Metanews.module.scss";
import { useEffect } from "react";

const Metanews = ({ newsArray }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.compContainer}>
      <h1> Latest News</h1>
      <div className={styles.newsContainer}>
        {newsArray.map((article, index) => {
          if (article.urlToImage == null) {
            return;
          }
          return (
            <div className={styles.articleDiv} key={index}>
              <img className={styles.articleImg} src={article.urlToImage} />
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleDesc}>{article.description}</p>
              <a
                className={styles.articleLink}
                href={article.url}
                target="_blank"
              >
                Full articles ..
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Metanews;
