
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Cell, 
  LabelList,
  Tooltip
} from "recharts";
import { cn } from "@/lib/utils";

interface ExperienceRating {
  name: string;
  value: number;
  color?: string;
  percentage?: number;
}

interface ExperienceBarChartProps {
  data: ExperienceRating[];
  className?: string;
  layout?: "vertical" | "horizontal";
  barSize?: number;
  defaultColor?: string;
  showPercentage?: boolean;
  onClick?: (item: ExperienceRating) => void;
}

const ExperienceBarChart: React.FC<ExperienceBarChartProps> = ({ 
  data, 
  className,
  layout = "vertical",
  barSize = 40,
  defaultColor = "#D6BCFA",
  showPercentage = true,
  onClick
}) => {
  // Apply the default color to all data items that don't have a color
  const enhancedData = data.map((item) => ({
    ...item,
    color: item.color || defaultColor
  }));

  const isVertical = layout === "vertical";

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 shadow-md rounded-md border">
          <p className="font-medium">{data.name}</p>
          <p>Value: {data.value}</p>
          {data.percentage !== undefined && (
            <p>{data.percentage.toFixed(1)}%</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("h-72", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={enhancedData}
          margin={{
            top: 20,
            right: 30,
            left: isVertical ? 120 : 10,
            bottom: isVertical ? 20 : 40,
          }}
          barSize={barSize}
          layout={layout}
          onClick={(data) => onClick && data.activePayload?.[0]?.payload && onClick(data.activePayload[0].payload)}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#eee" />
          {isVertical ? (
            <>
              <XAxis 
                type="number"
                domain={[0, 'dataMax']} 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                type="category"
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fontWeight: 500 }}
                width={110}
              />
            </>
          ) : (
            <>
              <XAxis 
                type="category"
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                tickMargin={10}
              />
              <YAxis 
                type="number"
                domain={[0, 'dataMax']} 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                hide={true}
              />
            </>
          )}
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={isVertical ? [0, 6, 6, 0] : [6, 6, 0, 0]}
            animationDuration={1500}
            animationBegin={300}
            className="cursor-pointer"
          >
            {enhancedData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                className="hover:opacity-80 transition-opacity duration-300"
                style={{
                  filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))"
                }}
              />
            ))}
            {showPercentage && (
              <LabelList 
                dataKey={isVertical ? "value" : "percentage"} 
                position={isVertical ? "right" : "top"} 
                formatter={(value: number) => isVertical ? value : `${value.toFixed(1)}%`} 
                style={{ fontWeight: 'bold', fill: '#333' }}
              />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExperienceBarChart;
