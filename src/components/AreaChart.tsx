
import React, { useEffect, useRef } from "react";
import {
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AreaChartProps {
  data: any[];
  dataKey: string;
  xAxisDataKey: string;
  stroke?: string;
  fill?: string;
  height?: number;
  className?: string;
}

const AreaChart = ({
  data,
  dataKey,
  xAxisDataKey,
  stroke = "#1E96FC",
  fill = "#1E96FC33",
  height = 200,
  className,
}: AreaChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div ref={chartRef} className={className} style={{ opacity: 0 }}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={stroke} stopOpacity={0.35} />
              <stop offset="95%" stopColor={stroke} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={xAxisDataKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#93989E" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#93989E" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              border: "none",
            }}
            labelStyle={{ fontWeight: "bold" }}
            itemStyle={{ color: stroke }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            strokeWidth={2}
            fill="url(#colorGradient)"
            animationDuration={1500}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
