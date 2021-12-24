import Navbar from "../components/Navbar";
import styles from "../styles/newspage/news.module.scss";
import Metanews from "../components/news/Metanews";
import SideBar from "../components/SideBar";
import getMetanews from "../database/getMetaverseNews";
import { useState, useEffect } from "react";

const news = ({ metanews }) => {
  const [newsArray, setnewsArray] = useState([]);

  useEffect(() => {
    setnewsArray(metanews.articles);
  }, [newsArray]);

  return (
    <div>
      <Navbar />
      <div className={styles.newsHero}>
        <h1>Get Up to Date with the latest Metaverse News</h1>
      </div>
      <div className={styles.pageContainer}>
        <Metanews newsArray={newsArray} />
        <SideBar />
      </div>
    </div>
  );
};

export default news;

export const getServerSideProps = async (context) => {
  const metanews = await getMetanews();

  return {
    props: {
      metanews: metanews,
    },
  };
};
