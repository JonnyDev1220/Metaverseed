import { DataGrid } from "@mui/x-data-grid";
import styles from "../../../styles/activitypage/NFTGrid.module.scss";
import clsx from "clsx";
import ethIcon from "../../../assets/ethereum-icon.png";
import Link from "next/link";

const NFTGrid = ({ nftArray }) => {
  nftArray.map((element) => {
    element.id = element.slug;
  });
  const rows = nftArray;

  const columns = [
    {
      field: "name",
      headerName: "Collection Name",
      width: 10,
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
            <Link href={`/market/nfts/${element.id}`}>
              <div className={styles.name}>{element.value}</div>
            </Link>
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
      field: "seven_day_change",
      headerName: "Change(7d)",
      headerClassName: styles.gridHeader,
      cellClassName: styles.pourcent,
      cellClassName: (params) =>
        clsx(styles.pourcent, {
          [styles.negative]:
            params.row.stats.stats.seven_day_change.toFixed(2) < 0,
          [styles.positive]:
            params.row.stats.stats.seven_day_change.toFixed(2) > 0,
        }),
      flex: 1,
      renderCell: (element) => {
        return <>{element.row.stats.stats.seven_day_change.toFixed(2)} %</>;
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
    {
      field: "num_owners",
      headerName: "Owners",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            {element.row.stats.stats.num_owners !== null
              ? element.row.stats.stats.num_owners
              : "--"}
          </>
        );
      },
    },
    {
      field: "count",
      headerName: "Item",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            {element.row.stats.stats.count !== null
              ? element.row.stats.stats.count
              : "--"}
          </>
        );
      },
    },
  ];

  return (
    <div>
      {" "}
      <DataGrid
        sx={{
          fontFamily: '"Kanit", sans-serif;',
          letterSpacing: "0.3px",
          color: "inherit",
          border: "none",
        }}
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        autoHeight={true}
        hideFooter={true}
        rowHeight={70}
      />
    </div>
  );
};

export default NFTGrid;
