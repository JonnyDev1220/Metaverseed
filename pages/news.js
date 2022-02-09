import Navbar from "../components/Navbar";
import styles from "../styles/newspage/news.module.scss";
import Metanews from "../components/news/Metanews";
import SideBar from "../components/SideBar";
import getMetanews from "../database/getMetaverseNews";
import { useState, useEffect } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";

const news = ({ metanews, metaTokens }) => {
  const [newsArray, setnewsArray] = useState([]);
  const [tokensArray, settokensArray] = useState([]);

  useEffect(() => {
    metanews.articles.sort(function (a, b) {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    setnewsArray(metanews.articles);

    settokensArray(metaTokens);
  }, [newsArray, tokensArray]);

  return (
    <div>
      <Navbar />
      <div className={styles.newsHero}>
        <h1>Latest Metaverse News</h1>
      </div>
      <div className={styles.pageContainer}>
        <Metanews newsArray={newsArray} />
        <SideBar metaTokens={tokensArray} />
      </div>
    </div>
  );
};

export default news;

export const getServerSideProps = async (context) => {
  const metanews = await getMetanews();
  const metaTokens = await getMetaverseToken();

  return {
    props: {
      metanews: metanews,
      metaTokens: metaTokens,
    },
  };
};
