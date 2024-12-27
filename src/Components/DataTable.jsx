import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement, // Import the required ArcElement
  Tooltip,
  Legend,
} from "chart.js";

// Register the Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// DataTable Component
const DataTable = ({ heading }) => {
  // Data for the chart
  const data = {
    label: ["Success", "Failed", "Skipped"],
    datasets: [
      {
        label: "Score",
        data: [300, 100, 50], // Values for each segment
        backgroundColor: ["#009306", "#FFBF42", "#122DA3"], // Colors
        hoverBackgroundColor: ["#009306", "#FFBF42", "#122DA3"],
      },
    ],
  };
  return (
    <div className="flex-1 w-[10rem]">
      <div className="bg-[#f9f9f9]  p-4  mt-4 rounded-2xl">
        <p className="font-semibold mt-2 text-[12px] mb-2">{heading}</p>
        <Doughnut data={data} />
      </div>
      <div>
        <div className="flex gap-2 items-center justify-center">
          {data.label.map((item, index) => (
            <div key={index} className="flex items-center mt-2">
              {/* Color Box */}
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              ></div>

              {/* Label and Data */}
              <p className="ml-1 text-[12px]">{`${item}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
