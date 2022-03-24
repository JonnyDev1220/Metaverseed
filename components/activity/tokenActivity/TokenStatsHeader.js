import styles from "../../../styles/activitypage/TokenStatsHeader.module.scss";

const TokenStatsHeader = ({ token }) => {
  return (
    <div>
      <div className={styles.statsDiv}>
        <div className={styles.firstDiv}>
          <img src={token.image} alt="token-logo" />
          <span>{token.name}</span>
          <span className={styles.symbol}>{token.symbol.toUpperCase()}</span>
        </div>
        <div className={styles.secondDiv}>
          <div>
            <div>Price</div>
            {token.current_price}
          </div>
          <div>
            <div>Change 24h</div>
            {token.price_change_percentage_24h}
          </div>
          <div>
            <div>Market Cap</div>
            {token.market_cap}
          </div>
          <div>
            <div>Fully Diluted</div>
            {token.fully_diluted_valuation}
          </div>

          <div>
            <div>Circ. / Total Supply</div>
            {token.circulating_supply} / {token.total_supply}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStatsHeader;
