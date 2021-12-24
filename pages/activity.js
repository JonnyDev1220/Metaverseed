import ActivityStats from "../components/activity/ActivityStats";
import ActivityTab from "../components/activity/ActivityTab";
import Navbar from "../components/Navbar";
import { useState } from "react";

const activity = () => {
  const [dataStats, setdataStats] = useState();

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Metaverse market overview</h1>
        <div>
          <div>
            <button>Metaverse Token</button>
            <button>Metaverse NFT</button>
            <button>Metaverse Stock</button>
          </div>
          <ActivityStats />
          <ActivityTab />
        </div>
      </div>
    </div>
  );
};

export default activity;
