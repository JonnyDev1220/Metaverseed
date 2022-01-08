import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getMetaverseToken } from "../database/getMetaverseToken";
import styles from "../styles/activitypage/Activity.module.scss";

const activity = ({ metaTokens }) => {
  const [tokensArray, settokensArray] = useState([]);

  useEffect(() => {
    settokensArray(metaTokens);
    console.log(tokensArray);
  }, [tokensArray]);

  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1>Metaverse market overview</h1>
        <select>
          <option value="" key="">
            Category
          </option>
          <option value="Stock" key="token">
            TOKENS
          </option>
          <option value="Stock" key="NFT">
            NFTS
          </option>
          <option value="Stock" key="stock">
            STOCKS
          </option>
        </select>

        {/* if value of the selected is xxx display xxx component */}
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
