import styles from "../styles/generalComp/Top10Token.module.scss";

const Top10Token = ({ metaTokens }) => {
  metaTokens.sort((a, b) => {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  });

  return (
    <div className={styles.top10Container}>
      <h3>Top 10 Gainers 24h</h3>
      <div className={styles.dataBox}>
        {metaTokens.map((element, index) => {
          if (index < 9) {
            return (
              <div className={styles.dataRow} key={index}>
                <div className={styles.imgTick}>
                  <img src={element.image} className={styles.img} />
                  <span className={styles.tick}>
                    {element.symbol.toUpperCase()}
                  </span>
                </div>
                <span className={styles.price}>{element.current_price} $</span>
                <span
                  className={
                    element.price_change_percentage_24h >= 0
                      ? styles.changeGreen
                      : styles.changeRed
                  }
                >
                  {element.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            );
          }
        })}
      </div>
      <button className={styles.moreBtn}>More Activity</button>
    </div>
  );
};

export default Top10Token;
