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

const activity = ({ metaTokens }) => {
  const [options, setoptions] = useState("Tokens");
  const [tokensArray, settokensArray] = useState([]);

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
    settokensArray(metaTokens);
  }, [tokensArray]);

  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1>Metaverse market overview</h1>
        <button onClick={onTokenClick}>Tokens</button>
        <button onClick={onNFTClick}>NFTs</button>
        <button onClick={onStockClick}>Stocks</button>

        {options == "Tokens" ? <TokenActivity /> : null}
        {options == "Tokens" ? <TokenGrid /> : null}

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
  // const metaStock;
  // const MetaNonFungible;

  return {
    props: {
      metaTokens: metaTokens,
    },
  };
};
