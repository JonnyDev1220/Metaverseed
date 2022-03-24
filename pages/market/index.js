import styles from "../../styles/activitypage/Activity.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getMetaverseToken } from "../../database/getMetaverseToken";
import { getGlobalStats } from "../../database/globalMarketCap";
import TokenGrid from "../../components/activity/tokenActivity/TokenGrid";
import TokenActivity from "../../components/activity/tokenActivity/TokenActivity";
import Navbar from "../../components/Navbar";

const TokenMarket = ({ metaTokens, marketcapStats, marketcapGlobal }) => {
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.subtitle}>Choose your categories : </div>

        <div className={styles.btnDiv}>
          <Link href="/market">
            <button>Tokens</button>
          </Link>
          <Link href="/market/nfts">
            <button>NFTs</button>
          </Link>
          <Link href="/market/stocks">
            <button>Stock</button>
          </Link>
        </div>
        <TokenActivity
          marketcapStats={marketcapStats}
          marketcapGlobal={marketcapGlobal.data.total_market_cap.usd}
        />

        <TokenGrid tokensArray={metaTokens} />
      </div>
    </>
  );
};

export default TokenMarket;

export const getServerSideProps = async (context) => {
  const metaTokens = await getMetaverseToken();
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const marketcapStats = await res.json();
  const marketcapGlobal = await getGlobalStats();

  return {
    props: {
      metaTokens: metaTokens,
      marketcapStats: marketcapStats,
      marketcapGlobal: marketcapGlobal,
    },
  };
};
