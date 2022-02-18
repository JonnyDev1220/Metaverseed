import { useState, useEffect } from "react";
import getStockStats from "../../../database/getStockStats";
import styles from "../../../styles/activitypage/Activity.module.scss";
import StockActivity from "../../../components/activity/stockActivity/StockActivity";
import StockGrid from "../../../components/activity/stockActivity/StockGrid";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

const ActivityStock = ({ metaStocks }) => {
  const [stockArray, setstockArray] = useState([]);

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

  useEffect(() => {
    metaStocks.stock.map((element) => {
      element.marketCap = formatMarketCap(element.marketCap);
    });
    metaStocks.stock.sort((a, b) => a.marketCap + b.marketCap);
    setstockArray(metaStocks.stock);
  }, [metaStocks]);

  return (
    <div>
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

        <StockActivity />
        <StockGrid stockArray={stockArray} />
      </div>
    </div>
  );
};

export default ActivityStock;

export const getServerSideProps = async (context) => {
  const metaStocks = await getStockStats();

  return {
    props: {
      metaStocks: metaStocks,
    },
  };
};
