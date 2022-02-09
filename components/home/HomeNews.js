import styles from "../../styles/generalComp/HomeNews.module.scss";
import Link from "next/link";
import HomeNewsCarrousel from "./HomeNewsCarrousel";

const HomeNews = ({ newsArray }) => {
  return (
    <div>
      <div className={styles.compContainer}>
        <div className={styles.fullNewsBox}>
          <h2 className={styles.subtitles}>Latest news</h2>
          <HomeNewsCarrousel newsArray={newsArray} />
        </div>
        <Link href="/news">
          <button>More News</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNews;
