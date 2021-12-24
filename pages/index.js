import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import MetaMarketCap from "../components/home/MetaMarketCap";
import HomeNews from "../components/home/HomeNews";
import getMetanews from "../database/getMetaverseNews";
import { useState, useEffect } from "react";

export default function Home({ data, metanews }) {
  const [newsArray, setnewsArray] = useState([]);

  useEffect(() => {
    setnewsArray(metanews.articles);
  }, [newsArray]);

  return (
    <div>
      <Navbar />
      {/* <TopBarAds /> */}
      <Hero />
      <MetaMarketCap data={data} />
      <HomeNews newsArray={newsArray} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const data = await res.json();

  const metanews = await getMetanews();

  return {
    props: {
      data: data,
      metanews: metanews,
    },
  };
};
