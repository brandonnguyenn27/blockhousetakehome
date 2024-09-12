import {
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
}

interface LineChartProps {
  data: { data: ChartData[] } | null;
}

export default function LineChartComponent({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data?.data || []}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
