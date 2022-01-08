import "../../styles/homepage/HomeNftStats.module.scss";
import { useState, useEffect } from "react";

const HomeNftStats = (nftStats) => {
  return (
    <div className="compContainer">
      <h1>Metaverse NFT Market</h1>
      <div className="tabTitleRow">
        <span className="tabLabel">Collection</span>
        <span className="tabLabel">Volume</span>
        <span className="tabLabel">Change(24h)</span>
      </div>

      {/* {nftStats.nftStats.map((collection, index) => {
        return (
          <div className="dataRow" key={index}>
            <span className="dataSpan">{collection.name}</span>
            <span className="dataSpan">
              {collection.stats.stats.one_day_volume}
            </span>
            <span className="dataSpan">
              {collection.stats.stats.one_day_change}
            </span>
          </div>
        );
      })} */}
    </div>
  );
};

export default HomeNftStats;
