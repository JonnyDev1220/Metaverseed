import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import MetaMarketCap from "../components/home/MetaMarketCap";
import HomeNews from "../components/home/HomeNews";
import getMetanews from "../database/getMetaverseNews";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";
import styles from "../styles/homepage/Home.module.scss";
import HomeNewsCarrousel from "../components/home/HomeNewsCarrousel";

export default function Home({ marketcapStats, metanews, metaTokens }) {
  const [tokensArray, settokensArray] = useState([]);

  useEffect(() => {
    metanews.articles.sort(function (a, b) {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    settokensArray(metaTokens);
  }, [tokensArray, marketcapStats, metaTokens]);
  return (
    <div>
      <Navbar />
      {/* <TopBarAds /> */}
      <Hero />
      {/* <HomeNews newsArray={metanews.articles} /> */}
      <div className={styles.pageContainer}>
        <div className={styles.semiContainer}>
          <HomeNewsCarrousel newsArray={metanews.articles} />
        </div>
        <SideBar metaTokens={tokensArray} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const marketcapStats = await res.json();
  const metanews = await getMetanews();
  const metaTokens = await getMetaverseToken();

  return {
    props: {
      marketcapStats: marketcapStats,
      metanews: metanews,
      metaTokens: metaTokens,
    },
  };
};
