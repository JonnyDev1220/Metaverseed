import Navbar from "../components/Navbar";
import styles from "../styles/ressourcespage/ressources.module.scss";
import SideBar from "../components/SideBar";
import RessourcesComp from "../components/ressources/RessourcesComp";
import { getMetaverseToken } from "../database/getMetaverseToken";
import { useEffect, useState } from "react";

const ressources = ({ metaTokens }) => {
  const [tokensArray, settokensArray] = useState([]);

  useEffect(() => {
    settokensArray(metaTokens);
  }, [tokensArray]);

  return (
    <div>
      <Navbar />
      <h1>Ressources</h1>
      <p></p>
      <div className={styles.pageContainer}>
        <RessourcesComp />
        <SideBar metaTokens={tokensArray} />
      </div>
    </div>
  );
};

export default ressources;

export const getServerSideProps = async () => {
  const metaTokens = await getMetaverseToken();

  return {
    props: {
      metaTokens: metaTokens,
    },
  };
};
