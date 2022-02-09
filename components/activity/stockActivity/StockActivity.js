import styles from "../../../styles/activitypage/StockActivity.module.scss";
import { useState, useEffect } from "react";

const StockActivity = ({ stockArray }) => {
  return (
    <div className={styles.compContainer}>
      <h2>Metaverse Companies Related</h2>
      <p>
        This section regroup some companies directly or indirectly related to
        the future metaverse industry.
        <br />
        From Hardware(VR/AR), Creator Tools, Virtual Fashion to Platforms,
        Infrastructure and more ..
        <br />
        We will add more stocks as the market evolve.
      </p>
    </div>
  );
};

export default StockActivity;
