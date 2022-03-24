import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import getMetanews from "../database/getMetaverseNews";
import SideBar from "../components/SideBar";
import { getMetaverseToken } from "../database/getMetaverseToken";
import styles from "../styles/homepage/Home.module.scss";
import HomeNewsCarrousel from "../components/home/HomeNewsCarrousel";
import TopBarAds from "../components/TopBarAds";
import getNftStats from "../database/getNFTStats";
import HomeNFTGrid from "../components/home/HomeNFTGrid";

export default function Home({ metanews, metaTokens, metaNFT }) {
  // NFT TopFive filter
  const topFiveNFT = [];
  for (let i = 0; i < 10; i++) {
    const element = metaNFT.nftStats[i];
    element.id = element.slug;
    topFiveNFT.push(element);
  }

  //Metanews filter by last day
  metanews.articles.sort(function (a, b) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <div>
      <Navbar />
      {/* <Hero />
      <TopBarAds /> */}
      <div className={styles.pageContainer}>
        <div className={styles.semiContainer}>
          <HomeNewsCarrousel newsArray={metanews.articles} />
          <HomeNFTGrid nftArray={topFiveNFT} />
        </div>
        <SideBar metaTokens={metaTokens} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const marketcapStats = await res.json();
  const metanews = await getMetanews();
  const metaTokens = await getMetaverseToken();
  const metaNFT = await getNftStats();

  return {
    props: {
      marketcapStats: marketcapStats,
      metanews: metanews,
      metaTokens: metaTokens,
      metaNFT: metaNFT,
    },
  };
};
