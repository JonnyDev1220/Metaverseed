import styles from "../../styles/generalComp/HomeNews.module.scss";
import { useState, useEffect } from "react";

const HomeNews = ({ newsArray }) => {
  useEffect(() => {
    console.log(newsArray);
  }, [newsArray]);

  return (
    <div>
      <div className={styles.compContainer}>
        <div className={styles.fullNewsBox}>
          <div className={styles.newsBox}>
            {newsArray.map((article, index) => {
              if (index == 0) {
                return (
                  <div key={index}>
                    <img className={styles.image} src={article.urlToImage} />
                    <h2>{article.title}</h2>

                    <p>{article.description}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.newsBox}>
            {newsArray.map((article, index) => {
              if (index == 1) {
                return (
                  <div key={index}>
                    <img className={styles.image} src={article.urlToImage} />
                    <h2>{article.title}</h2>

                    <p>{article.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
