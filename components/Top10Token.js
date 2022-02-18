import styles from "../styles/generalComp/Top10Token.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Top10Token = ({ metaTokens }) => {
  useEffect(() => {}, [metaTokens]);

  return (
    <div className={styles.top10Container}>
      <h3>Top 10 Token</h3>
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
      <div className={styles.btnDiv}>
        <Link href="/market">
          <button className={styles.moreBtn}>More Tokens </button>
        </Link>
      </div>
    </div>
  );
};

export default Top10Token;
