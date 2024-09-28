import {
  Chart as ChartJS,
  CategoryScale, // For the x-axis scale
  LinearScale, // For the y-axis scale
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const chartConfig = {
    labels: data.map((d) => new Date(d.t).toLocaleTimeString()), // X-axis timestamps
    datasets: [
      {
        label: "Closing Price",
        data: data.map((d) => d.c), // Y-axis data (closing prices)
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="w-full h-64">
      <Line data={chartConfig} />
    </div>
  );
};

export default Chart;
