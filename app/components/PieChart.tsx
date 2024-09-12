import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelProps,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
}

interface PieChartProps {
  data: { data: ChartData[] } | null;
}
const COLORS = ["#FF7F7F", "#87CEFA", "#FFFF99"];

const renderCustomizedLabel = (props: LabelProps) => {
  const { x, y, value } = props;
  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {value}
    </text>
  );
};

export default function PieChartComponent({ data }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data?.data || []}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#0088FE"
          label={renderCustomizedLabel}
        >
          {data?.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
