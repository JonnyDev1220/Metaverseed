import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import MetaMarketCap from "../components/home/MetaMarketCap";
import HomeNews from "../components/home/HomeNews";
import getMetanews from "../database/getMetaverseNews";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";
import { getStock } from "../database/setStockStats";

export default function Home({
  marketcapStats,
  metanews,
  metaTokens,
  metaStocks,
}) {
  const [tokensArray, settokensArray] = useState([]);

  useEffect(() => {
    console.log(metaStocks);
    settokensArray(metaTokens);
  }, [tokensArray]);
  return (
    <div>
      <Navbar />
      {/* <TopBarAds /> */}
      <Hero />
      <MetaMarketCap data={marketcapStats} />
      <HomeNews newsArray={metanews.articles} />
      <SideBar metaTokens={tokensArray} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const marketcapStats = await res.json();
  const metanews = await getMetanews();
  const metaTokens = await getMetaverseToken();
  const metaStocks = await getStock();

  return {
    props: {
      marketcapStats: marketcapStats,
      metanews: metanews,
      metaTokens: metaTokens,
      metaStocks: metaStocks,
    },
  };
};
