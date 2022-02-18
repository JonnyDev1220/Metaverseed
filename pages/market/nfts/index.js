import getNftStats from "../../../database/getNFTStats";
import styles from "../../../styles/activitypage/Activity.module.scss";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import NFTActivity from "../../../components/activity/nftActivity/NFTActivity";
import NFTGrid from "../../../components/activity/nftActivity/NFTGrid";

const ActivityNFT = ({ metaNFT }) => {
  const [nftArray, setnftArray] = useState([]);
  console.log(metaNFT.nftStats);

  useEffect(() => {
    setnftArray(metaNFT.nftStats);
  }, [metaNFT]);

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
        <NFTActivity />
        <NFTGrid nftArray={nftArray} />
      </div>
    </>
  );
};

export default ActivityNFT;

export const getServerSideProps = async (context) => {
  const metaNFT = await getNftStats();

  return {
    props: {
      metaNFT: metaNFT,
    },
  };
};
