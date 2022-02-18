import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/homepage/HomeNFTGrid.module.scss";
import { useState, useEffect } from "react";
import clsx from "clsx";
import ethIcon from "../../assets/ethereum-icon.png";
import Link from "next/link";

const HomeNFTGrid = ({ nftArray }) => {
  const [nft, setnft] = useState([]);

  const rows = nft;

  const columns = [
    {
      field: "name",
      headerName: "Collection Name",
      headerClassName: styles.gridHeader,
      flex: 2,
      renderCell: (element) => {
        return (
          <>
            <div className={styles.img}>
              <img
                src={element.row.logo}
                alt="companies-logo"
                width="30"
                height="25"
              />
            </div>
            <div className={styles.name}>{element.value}</div>
          </>
        );
      },
    },
    {
      field: "total_volume",
      headerName: "All Time Volume",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            {" "}
            <img
              className={styles.eth_icon}
              src={ethIcon.src}
              alt="eth-icon"
              width="15"
            />{" "}
            {element.row.stats.stats.total_volume.toFixed(2)}
          </>
        );
      },
    },
    {
      field: "one_day_change",
      headerName: "Change(24h)",
      headerClassName: styles.gridHeader,
      cellClassName: styles.pourcent,
      cellClassName: (params) =>
        clsx(styles.pourcent, {
          [styles.negative]:
            params.row.stats.stats.one_day_change.toFixed(2) < 0,
          [styles.positive]:
            params.row.stats.stats.one_day_change.toFixed(2) > 0,
        }),
      flex: 1,
      renderCell: (element) => {
        return <>{element.row.stats.stats.one_day_change.toFixed(2)} %</>;
      },
    },
    {
      field: "floor_price",
      headerName: "Floor Price",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            <img
              className={styles.eth_icon}
              src={ethIcon.src}
              alt="eth-icon"
              width="15"
            />
            {element.row.stats.stats.floor_price !== null
              ? element.row.stats.stats.floor_price.toFixed(4)
              : "--"}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    setnft(nftArray);
  }, [nftArray]);

  return (
    <div className={styles.compContainer}>
      <div className={styles.headComp}>
        <h2>Metaverse Top 10 NFT Collections</h2>
      </div>
      <DataGrid
        sx={{
          fontFamily: '"Kanit", sans-serif;',
          letterSpacing: "0.3px",
          color: "inherit",
        }}
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        autoHeight={true}
        hideFooter={true}
      />

      <div className={styles.btnDiv}>
        <Link href="/market">
          <button className={styles.moreBtn}>More Collections </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNFTGrid;
