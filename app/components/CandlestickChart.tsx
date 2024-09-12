import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
  Scatter,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
}

export default function CandleStickChartComponent({
  data,
}: CandlestickChartProps) {
  const renderTooltip = (props: TooltipProps<ValueType, NameType>) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload as CandlestickData;
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow">
          <p className="text-sm font-semibold">{`Date: ${dataPoint.x}`}</p>
          <p className="text-sm">{`Open: ${dataPoint.open}`}</p>
          <p className="text-sm">{`High: ${dataPoint.high}`}</p>
          <p className="text-sm">{`Low: ${dataPoint.low}`}</p>
          <p className="text-sm">{`Close: ${dataPoint.close}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCandlestick = (props: any) => {
    const { x, y, payload } = props;
    if (!payload) return null;

    const { open, close, high, low } = payload;
    const fill = open > close ? "#ff7675" : "#55efc4";
    const yScale = props.yAxis.scale;
    const xScale = props.xAxis.scale;

    const xWidth = xScale.bandwidth ? xScale.bandwidth() : 20;
    const candleWidth = xWidth * 0.3;

    const openY = yScale(open);
    const closeY = yScale(close);
    const highY = yScale(high);
    const lowY = yScale(low);

    return (
      <g>
        <line
          x1={x}
          y1={highY}
          x2={x}
          y2={lowY}
          stroke={fill}
          strokeWidth={1}
        />
        <rect
          x={x - candleWidth / 2}
          y={Math.min(openY, closeY)}
          width={candleWidth}
          height={Math.abs(openY - closeY)}
          fill={fill}
          stroke={fill}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
        <XAxis dataKey="x" type="category" />
        <YAxis type="number" domain={[25, 60]} />
        <ZAxis type="number" range={[100]} />
        <Tooltip content={renderTooltip} />
        <Scatter data={data} shape={renderCandlestick} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
