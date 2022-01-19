import styles from "../../../styles/activitypage/TokenActivity.module.scss";
import { useState, useEffect } from "react";

const TokenActivity = ({ marketcapStats, marketcapGlobal }) => {
  const [metaStatsData, setmetaStatsData] = useState([]);
  const [Dominance, setDominance] = useState(0);

  const formatObj = {
    currency: "USD",
  };

  const metaDom = (metaStatsData.market_cap * 100) / marketcapGlobal;

  const metaDomNum = parseFloat(metaDom);

  useEffect(() => {
    marketcapStats?.map((element) => {
      if (element.id == "metaverse") {
        setmetaStatsData(element);
      }
    });

    setDominance(metaDomNum);
  }, [marketcapStats, marketcapGlobal]);

  return (
    <div className={styles.compContainer}>
      <div className={styles.marketText}>
        <h2>Metaverse Token Ecosystem</h2>

        <p>
          This section regroup all the metaverse focused project in the
          Blockchain and Crypto-Currency market{" "}
        </p>
      </div>
      <div className={styles.statsDiv}>
        <div className={styles.marketcap}>
          <span className={styles.spanName}>Market Cap</span> <br />${" "}
          {metaStatsData.market_cap?.toLocaleString("en-GB", formatObj)}
        </div>
        <div className={styles.volume24h}>
          <span className={styles.spanName}>Volume(24h)</span> <br />${" "}
          {metaStatsData.volume_24h?.toLocaleString("en-GB", formatObj)}
        </div>
        <div
          className={
            metaStatsData.market_cap_change_24h >= 0
              ? styles.changeGreen
              : styles.changeRed
          }
        >
          <span className={styles.spanName}>Volume Change(24h)</span> <br />
          {metaStatsData.market_cap_change_24h?.toFixed(2)} %
        </div>
        <div className={styles.globalCap}>
          <span className={styles.spanName}>Metaverse Dominance</span> <br />
          {Dominance.toFixed(2)} %
        </div>
      </div>
    </div>
  );
};

export default TokenActivity;
