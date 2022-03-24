import getNftStats from "../../../database/getNFTStats";
import styles from "../../../styles/activitypage/CollectionDetails.module.scss";
import Navbar from "../../../components/Navbar";
import ethIcon from "../../../assets/ethereum-icon.png";
import NFTTransactions from "../../../components/activity/nftActivity/NFTTransactions";

const collectionDetails = ({ collection }) => {
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div
          className={styles.bannerDiv}
          style={{
            backgroundImage: `url(${collection.banner_image_url})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={styles.headerComp}>
          <div className={styles.imgDiv}>
            {" "}
            <img
              src={collection.image_url}
              alt="collection image"
              className={styles.collectionImg}
            />
          </div>
          <div className={styles.compContainer}>
            <div>
              {" "}
              <h2>{collection.name}</h2>
              {collection.safelist_request_status == "verified" ? (
                <span>Verifed by Opensea</span>
              ) : (
                <span>not Verifed</span>
              )}
            </div>
            <div className={styles.statsDiv}>
              <div className={styles.stats}>
                <div className={styles.logoPrice}>
                  <span>
                    <img src={ethIcon.src} alt="eth icon" />
                  </span>
                  {collection.stats.floor_price.toFixed(3)}
                </div>
                <span>Floor Price</span>
              </div>
              <div className={styles.stats}>
                <div className={styles.logoPrice}>
                  <span>
                    <img src={ethIcon.src} alt="eth icon" />
                  </span>
                  {collection.stats.total_volume.toFixed(2)}
                </div>
                <span>Volume Traded</span>
              </div>
              <div className={styles.stats}>
                <div className={styles.logoPrice}>
                  {collection.stats.num_owners}
                </div>
                <span>Owner</span>
              </div>
              <div className={styles.stats}>
                <div className={styles.logoPrice}>
                  {collection.stats.total_supply}
                </div>
                <span>Item</span>
              </div>
              <div className={styles.stats}>
                <div className={styles.logoPrice}>
                  {collection.stats.total_sales}
                </div>
                <span>Sales</span>
              </div>
            </div>
          </div>

          <p>{collection.description}</p>
        </div>

        <NFTTransactions
          collectionAssets={collection.primary_asset_contracts}
        />
      </div>
    </>
  );
};

export default collectionDetails;

export const getStaticPaths = async () => {
  const metaNFT = await getNftStats();
  const paths = metaNFT.nftStats.map((token) => {
    return {
      params: { id: token.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`
    https://api.opensea.io/api/v1/collection/${id}`);
  const metaNFT = await res.json();
  const data = metaNFT.collection;

  return {
    props: {
      collection: data,
    },
  };
};
