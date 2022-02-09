import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";
import { getGlobalStats } from "../database/globalMarketCap";
import styles from "../styles/activitypage/Activity.module.scss";
import TokenActivity from "../components/activity/tokenActivity/TokenActivity";
import TokenGrid from "../components/activity/tokenActivity/TokenGrid";
import NFTActivity from "../components/activity/nftActivity/NFTActivity";
import NFTGrid from "../components/activity/nftActivity/NFTGrid";
import getNftStats from "../database/getNFTStats";
import StockActivity from "../components/activity/stockActivity/StockActivity";
import StockGrid from "../components/activity/stockActivity/StockGrid";
import getStockStats from "../database/getStockStats";

const activity = ({
  metaTokens,
  marketcapStats,
  marketcapGlobal,
  metaStocks,
  metaNFT,
}) => {
  const [options, setoptions] = useState("Tokens");
  const [tokensArray, settokensArray] = useState([]);
  const [globalCap, setglobalCap] = useState("");
  const [stockArray, setstockArray] = useState([]);
  const [nftArray, setnftArray] = useState([]);

  const formatMarketCap = (num) => {
    let formatObj = {
      currency: "USD",
    };
    if (num.slice(-1) === "T") {
      num = num.slice(1);
      num = num.replace(",", ".");
      num = parseFloat(num).toFixed(3);
      num = num * 1000000000000;
      // num = num.toLocaleString("en-GB", formatObj);
      return num;
    }

    if (num.slice(-1) === "B") {
      num = num.slice(0, -2);
      num = num.slice(1);
      num = num.replace(",", ".");
      num = parseFloat(num).toFixed(3);
      num = num * 1000000000;
      // num = num.toLocaleString("en-GB", formatObj);
      return num;
    }
  };

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
    metaStocks.stock.map((element) => {
      element.marketCap = formatMarketCap(element.marketCap);
    });

    metaStocks.stock.sort((a, b) => a.marketCap + b.marketCap);

    setnftArray(metaNFT.nftStats);
    setstockArray(metaStocks.stock);
    setglobalCap(marketcapGlobal.data.total_market_cap.usd);
    settokensArray(metaTokens);
  }, [metaTokens, marketcapStats, marketcapGlobal, metaNFT]);

  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1>Market overview</h1>

        <div className={styles.subtitle}>Choose your categories : </div>

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
        {options == "NFTs" ? <NFTActivity nftArray={nftArray} /> : null}
        {options == "NFTs" ? <NFTGrid nftArray={nftArray} /> : null}
        {options == "Stocks" ? <StockActivity stockArray={stockArray} /> : null}
        {options == "Stocks" ? <StockGrid stockArray={stockArray} /> : null}
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
  const metaStocks = await getStockStats();
  const metaNFT = await getNftStats();

  return {
    props: {
      metaTokens: metaTokens,
      marketcapStats: marketcapStats,
      marketcapGlobal: marketcapGlobal,
      metaStocks: metaStocks,
      metaNFT: metaNFT,
    },
  };
};
