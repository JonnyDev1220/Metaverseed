import styles from "../../styles/generalComp/HomeNews.module.scss";
import Link from "next/link";

const HomeNews = ({ newsArray }) => {
  return (
    <div>
      <div className={styles.compContainer}>
        <div className={styles.fullNewsBox}>
          {newsArray.map((article, index) => {
            if (index == 0) {
              return (
                <div key={index} className={styles.articleDiv}>
                  <img className={styles.articleImg} src={article.urlToImage} />
                  <h2 className={styles.articleTitle}>{article.title}</h2>

                  <p className={styles.articleDesc}>{article.description}</p>
                </div>
              );
            }
          })}

          {newsArray.map((article, index) => {
            if (index == 1) {
              return (
                <div key={index} className={styles.articleDiv}>
                  <img className={styles.articleImg} src={article.urlToImage} />
                  <h2 className={styles.articleTitle}>{article.title}</h2>

                  <p className={styles.articleDesc}>{article.description}</p>
                </div>
              );
            }
          })}
        </div>
        <Link href="/news">
          <button>More News</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNews;
