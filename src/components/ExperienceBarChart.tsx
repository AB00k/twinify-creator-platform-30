
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
  color: string;
}

interface ExperienceBarChartProps {
  data: ExperienceRating[];
  className?: string;
}

const ExperienceBarChart: React.FC<ExperienceBarChartProps> = ({ data, className }) => {
  // Enhanced purple palette
  const purpleColors = [
    "#9b87f5", // Primary Purple
    "#7E69AB", // Secondary Purple
    "#6E59A5", // Tertiary Purple
    "#8B5CF6", // Vivid Purple
    "#D6BCFA"  // Light Purple
  ];

  // Apply the palette to the data
  const enhancedData = data.map((item, index) => ({
    ...item,
    color: purpleColors[index % purpleColors.length]
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 shadow-md rounded-md border">
          <p className="font-medium">{data.name}</p>
          <p>Rating: {data.value.toFixed(1)}/5</p>
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
            left: 10,
            bottom: 20,
          }}
          barSize={40}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#eee" />
          <XAxis 
            type="number"
            domain={[0, 5]} 
            tickCount={6}
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
            width={120}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[0, 6, 6, 0]}
            animationDuration={1500}
            animationBegin={300}
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
            <LabelList 
              dataKey="value" 
              position="right" 
              formatter={(value: number) => value.toFixed(1)} 
              style={{ fontWeight: 'bold', fill: '#333' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExperienceBarChart;
