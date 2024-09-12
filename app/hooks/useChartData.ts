"use client";
import { useState, useEffect } from "react";

interface ChartData {
  name: string;
  value: number;
}

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ChartDataState {
  candlestick: { data: CandlestickData[] };
  line: { data: ChartData[] };
  bar: { data: ChartData[] };
  pie: { data: ChartData[] };
}

export function useChartData() {
  const [chartData, setChartData] = useState<ChartDataState>({
    candlestick: { data: [] },
    line: { data: [] },
    bar: { data: [] },
    pie: { data: [] },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [candlestick, line, bar, pie] = await Promise.all([
        fetch("/api/chart/candlestick").then((res) => res.json()),
        fetch("/api/chart?chart=line-chart").then((res) => res.json()),
        fetch("/api/chart?chart=bar-chart").then((res) => res.json()),
        fetch("/api/chart?chart=pie-chart").then((res) => res.json()),
      ]);

      setChartData({
        candlestick: candlestick as { data: CandlestickData[] },
        line: line as { data: ChartData[] },
        bar: bar as { data: ChartData[] },
        pie: pie as { data: ChartData[] },
      });
      console.log("Fetched chart data:", { candlestick, line, bar, pie });
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { chartData, isLoading, error };
}
