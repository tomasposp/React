import React from 'react';
import { Bar } from "react-chartjs-2";



const BarChart = () => {
  const data1 = {
    
    labels: [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec",
    ],
    

    datasets: [
      {
        label: "Cena za měsíc",
        data: [
          50000,
          47000,
          49000,
          50000,
          52000,
          51000,
          50000,
          50000,
          48000,
          49000,
          48000,
          51000,
        ],
        backgroundColor: 'rgb(70, 200, 70)',
        type: 'line',
      },
    ],
  };
  var output = <Bar data={data1} height={200} width={400}/>;
  return output;
};

export default BarChart;