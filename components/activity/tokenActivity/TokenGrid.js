import { DataGrid } from "@mui/x-data-grid";
import styles from "../../../styles/activitypage/TokenGrid.module.scss";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import clsx from "clsx";

const TokenGrid = ({ tokensArray }) => {
  const [tokens, settokens] = useState([]);

  const formatNumberObj = {
    currency: "USD",
  };

  const rows = tokens;

  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: styles.gridHeader,
      flex: 2,
      renderCell: (element) => {
        return (
          <>
            <Avatar
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              src={element.row.image}
            />
            <div className={styles.name}>{element.value}</div>
            <span className={styles.symbol}>
              {element.row.symbol.toUpperCase()}
            </span>
          </>
        );
      },
    },
    {
      field: "current_price",
      headerName: "Price",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return <>$ {element.row.current_price}</>;
      },
    },
    {
      field: "price_change_percentage_24h",
      headerName: "Change (24h) ",
      headerClassName: styles.gridHeader,
      cellClassName: styles.pourcent,
      cellClassName: (params) =>
        clsx(styles.pourcent, {
          [styles.negative]: params.value < 0,
          [styles.positive]: params.value > 0,
        }),
      flex: 1,
      renderCell: (element) => {
        return <>{element.row.price_change_percentage_24h.toFixed(2)}%</>;
      },
    },
    {
      field: "total_volume",
      headerName: "Total Volume",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            ${" "}
            {element.row.total_volume.toLocaleString("en-GB", formatNumberObj)}
          </>
        );
      },
    },
    {
      field: "market_cap",
      headerName: "MarketCap",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            $ {element.row.market_cap.toLocaleString("en-GB", formatNumberObj)}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    settokens(tokensArray);
  }, [tokensArray]);

  return (
    <div
      style={{
        width: "100%",
        color: "inherit",
      }}
    >
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
    </div>
  );
};

export default TokenGrid;
