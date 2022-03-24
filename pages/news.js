import Navbar from "../components/Navbar";
import styles from "../styles/newspage/news.module.scss";
import Metanews from "../components/news/Metanews";
import SideBar from "../components/SideBar";
import getMetanews from "../database/getMetaverseNews";
import { getMetaverseToken } from "../database/getMetaverseToken";
import TopBarAds from "../components/TopBarAds";

const news = ({ metanews, metaTokens }) => {
  //Metanews filter by last day
  metanews.articles.sort(function (a, b) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <div>
      <Navbar />
      {/* <TopBarAds /> */}
      {/* <div className={styles.newsHero}>
        <h1>Latest Metaverse Focused News</h1>
      </div> */}
      <div className={styles.pageContainer}>
        <Metanews newsArray={metanews.articles} />
        <SideBar metaTokens={metaTokens} />
      </div>
    </div>
  );
};

export default news;

export const getServerSideProps = async (context) => {
  const metanews = await getMetanews();
  const metaTokens = await getMetaverseToken();

  return {
    props: {
      metanews: metanews,
      metaTokens: metaTokens,
    },
  };
};
