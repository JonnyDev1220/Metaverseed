import React from "react";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <div>
      <Navbar />
      <h1>What is Metaverseed ?</h1>
      <p>
        Metaverseed is a data platform focus on the futur and present
        <span>
          <a href="https//www.google.com" target={"_blank"}>
            metaverse
          </a>
        </span>
        related industry
      </p>
    </div>
  );
};

export default about;
