import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmissionsChart = ({ emissionsData, type }) => {
  const data = {
    labels:
      type === "individual"
        ? [
            "Excavation Emissions",
            "Total Transport Emissions",
            "Total Electric Equipment Emissions",
            "Per Capita Emissions",
          ]
        : ["Total Monthly Emissions"],
    datasets: [
      {
        label: "Emissions (kg CO₂)",
        data:
          type === "individual"
            ? emissionsData.individual
            : [emissionsData.total],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw} kg CO₂`;
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {type === "individual"
          ? "Individual Emissions Data"
          : "Total Monthly Emissions"}
      </h2>
      <div style={{ width: "100%", height: "400px" }}>
        <Bar data={data} options={options} />
      </div>

    </div>
  );
};

export default EmissionsChart;
