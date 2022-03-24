import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  legend: {
    display: false,
  },
  responsive: true,
  plugins: {},
  maintainAspectRatio: false,
};

const TokenCharts = ({ chartData }) => {
  console.log(chartData);
  const labels = chartData.prices.map((element) =>
    new Date(element[0]).toLocaleDateString()
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: chartData.prices.map((element) => element[1]),
        borderColor: "#00f5ff",
        backgroundColor: "#00f5ff",
        family: "inherit",
        pointRadius: 0,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
export default TokenCharts;
