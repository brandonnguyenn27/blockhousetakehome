"use client";
import { useChartData } from "../hooks/useChartData";
import LineChartComponent from "../components/LineChart";
import BarChartComponent from "../components/BarChart";
import PieChartComponent from "../components/PieChart";
import CandlestickChartComponent from "../components/CandlestickChart";

export default function Dashboard() {
  const { chartData, isLoading, error } = useChartData();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Line Chart</h2>
          <LineChartComponent data={{ data: chartData.line?.data }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
          <BarChartComponent data={{ data: chartData.bar?.data }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
          <PieChartComponent data={{ data: chartData.pie?.data }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Candlestick Chart</h2>
          <CandlestickChartComponent data={chartData.candlestick.data} />
        </div>
      </div>
    </div>
  );
}
