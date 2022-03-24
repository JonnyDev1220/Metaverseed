import { getMetaverseToken } from "../../database/getMetaverseToken";
import styles from "../../styles/activitypage/TokenDetails.module.scss";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import TokenStatsHeader from "../../components/activity/tokenActivity/TokenStatsHeader";
import TokenCharts from "../../components/activity/tokenActivity/TokenCharts";

const TokenDetails = ({ token, chartData }) => {
  console.log(chartData);
  return (
    <div>
      <Navbar />

      <div className={styles.pageContainer}>
        <Link href="/market">
          <a className={styles.link}>Market Overview</a>
        </Link>
        <TokenStatsHeader token={token} />
        <div className={styles.chartBox}>
          <TokenCharts chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;

export const getStaticPaths = async () => {
  const metaTokens = await getMetaverseToken();
  const paths = metaTokens.map((token) => {
    return {
      params: { id: token.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const metaTokens = await getMetaverseToken();
  let data = {};
  metaTokens.map((token) => {
    if (token.id === id) {
      data = token;
    }
  });

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max&interval=daily`
  );
  const chartData = await res.json();

  return {
    props: {
      token: data,
      chartData: chartData,
    },
  };
};
