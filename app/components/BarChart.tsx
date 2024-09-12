import {
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
}

interface BarChartProps {
  data: { data: ChartData[] } | null;
}

export default function BarChartComponent({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data?.data || []}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
