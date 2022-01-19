import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";
import styles from "../styles/activitypage/Activity.module.scss";
import TokenActivity from "../components/activity/tokenActivity/TokenActivity";
import TokenGrid from "../components/activity/tokenActivity/TokenGrid";
import NFTActivity from "../components/activity/nftActivity/NFTActivity";
import NFTGrid from "../components/activity/nftActivity/NFTGrid";
import StockActivity from "../components/activity/stockActivity/StockActivity";
import StockGrid from "../components/activity/stockActivity/StockGrid";
import { getGlobalStats } from "../database/globalMarketCap";
import { getStock } from "../database/setStockStats";

const activity = ({
  metaTokens,
  marketcapStats,
  marketcapGlobal,
  // metaStocks,
}) => {
  const [options, setoptions] = useState("Tokens");
  const [tokensArray, settokensArray] = useState([]);
  const [globalCap, setglobalCap] = useState("");

  const onTokenClick = () => {
    setoptions("Tokens");
  };

  const onStockClick = () => {
    setoptions("Stocks");
  };
  const onNFTClick = () => {
    setoptions("NFTs");
  };

  useEffect(() => {
    setglobalCap(marketcapGlobal.data.total_market_cap.usd);
    settokensArray(metaTokens);
  }, [metaTokens, marketcapStats, marketcapGlobal]);

  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1>Market overview</h1>
        <div className={styles.btnDiv}>
          <button onClick={onTokenClick}>Tokens</button>
          <button onClick={onNFTClick}>NFTs</button>
          <button onClick={onStockClick}>Stocks</button>
        </div>
        {options == "Tokens" ? (
          <TokenActivity
            marketcapStats={marketcapStats}
            marketcapGlobal={globalCap}
          />
        ) : null}
        {options == "Tokens" ? <TokenGrid tokensArray={tokensArray} /> : null}
        {options == "NFTs" ? <NFTActivity /> : null}
        {options == "NFTs" ? <NFTGrid /> : null}
        {options == "Stocks" ? <StockActivity /> : null}
        {options == "Stocks" ? <StockGrid /> : null}
      </div>
    </div>
  );
};

export default activity;

export const getServerSideProps = async (context) => {
  const metaTokens = await getMetaverseToken();
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/categories/`);
  const marketcapStats = await res.json();
  const marketcapGlobal = await getGlobalStats();
  // const metaStocks = await getStock();
  // const MetaNonFungible;

  return {
    props: {
      metaTokens: metaTokens,
      marketcapStats: marketcapStats,
      marketcapGlobal: marketcapGlobal,
      // metaStocks: metaStocks,
    },
  };
};
