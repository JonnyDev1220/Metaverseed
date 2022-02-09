import { DataGrid } from "@mui/x-data-grid";
import styles from "../../../styles/activitypage/StockGrid.module.scss";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

const StockGrid = ({ stockArray }) => {
  const [stock, setStock] = useState([]);

  let formatNumberObj = {
    currency: "USD",
  };

  const formatPrice = (num) => {
    num = num.slice(1, 10);
    num = num.replace(",", "");
    num = parseFloat(num).toFixed(2);
    return num;
  };

  const rows = stock;

  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: styles.gridHeader,
      flex: 2,
      renderCell: (element) => {
        return (
          <>
            <div className={styles.img}>
              <Image
                src={element.row.imgUrl}
                alt="companies-logo"
                width="30"
                height="25"
              />
            </div>
            <div className={styles.name}>{element.value}</div>
            <span className={styles.symbol}>
              {element.row.symbol.toUpperCase()}
            </span>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return <>$ {formatPrice(element.row.price)}</>;
      },
    },
    {
      field: "dailyChange",
      headerName: "Daily Change",
      headerClassName: styles.gridHeader,
      cellClassName: styles.pourcent,
      cellClassName: (params) =>
        clsx(styles.pourcent, {
          [styles.negative]: params.value.slice(0, -1) < 0,
          [styles.positive]: params.value.slice(0, -1) > 0,
        }),
      flex: 1,
      renderCell: (element) => {
        return <>{element.row.dailyChange}</>;
      },
    },
    {
      field: "marketCap",
      headerName: "MarketCap",
      headerClassName: styles.gridHeader,
      flex: 1,
      renderCell: (element) => {
        return (
          <>
            $ {element.row.marketCap.toLocaleString("en-GB", formatNumberObj)}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    stockArray.map((element) => {
      element.id = element.symbol;
      element.imgUrl = `/stockLogo/${element.symbol}.png`;
    });
    setStock(stockArray);
  }, [stockArray]);

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

export default StockGrid;
