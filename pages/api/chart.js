import React from 'react';
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data1 = {
    labels: [
      "Marek",
      "Dan",
      "Pospa",
      "Dominik",
      "Bořek",
      "Štěpán",
      "Maty",
      "Martin",
    ],
    datasets: [
      {
        label: "Počet ran",
        data: [
          62,
          55,
          92,
          101,
          54,
          59,
          66,
          42,
        ],
        backgroundColor: 'rgb(54, 162, 235)',

      },
    ],
  };
  var output = <Bar data={data1} height={400} width={600}/>;
  return output;
};

export default BarChart;