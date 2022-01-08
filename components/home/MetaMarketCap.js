import styles from "../../styles/generalComp/MetaMarketCap.module.scss";

const MetaMarketCap = (data) => {
  const dataArray = data.data;

  let marketCap = "";
  let volume24h = "";
  let marketCapChange = 0;

  dataArray.map((element) => {
    if (element.id === "metaverse") {
      marketCap = element.market_cap;
      volume24h = element.volume_24h;
      marketCapChange = element.market_cap_change_24h;
    }
  });

  const formatNumberObj = {
    style: "currency",
    currency: "USD",
  };

  let number = Math.sign(marketCapChange);
  let numberColor = "black";

  switch (number) {
    case 1:
      numberColor = "green";
      break;
    case -1:
      numberColor = "red";
      break;
    case 0:
      numberColor = "black";
      break;
    case -0:
      numberColor = "red";
      break;
    default:
      numberColor = "black";
  }

  const styleObj = {
    color: numberColor,
  };

  return (
    <div>
      <h2 className={styles.title}>Metaverse Ecosystem Token</h2>
      <div className={styles.compContainer}>
        <div className={styles.fullStatsBox}>
          <div className={styles.statsBox}>
            <h3 className={styles.label}>Market Capitalizations</h3>
            <div className={styles.number}>
              {marketCap.toLocaleString(undefined, formatNumberObj)}
            </div>
          </div>
          <div className={styles.statsBox}>
            <h3 className={styles.label}>24H volume</h3>
            <div className={styles.number}>
              {volume24h.toLocaleString(undefined, formatNumberObj)}
            </div>
          </div>
          <div className={styles.statsBox}>
            <h3 className={styles.label}>24H change</h3>
            <div className={styles.number} style={styleObj}>
              {marketCapChange.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MetaMarketCap;
