
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface SentimentData {
  name: string;
  value: number;
  color: string;
  percentage: number;
  icon: React.ReactNode;
}

interface SentimentChartProps {
  data: SentimentData[];
  className?: string;
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data, className }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 shadow-md rounded-md border">
          <p className="font-medium">{data.name}</p>
          <p>Reviews: {data.value}</p>
          <p>{data.percentage.toFixed(1)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("flex flex-col md:flex-row md:items-center", className)}>
      <div className="md:w-3/5 h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={3}
              stroke="#ffffff"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white bg-opacity-70 rounded-full p-3 shadow-sm">
            <div className="text-3xl font-bold">{total}</div>
            <div className="text-xs text-gray-500">Reviews</div>
          </div>
        </div>
      </div>

      <div className="md:w-2/5 space-y-4 mt-4 md:mt-0 md:pl-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2 shadow-sm" 
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">{item.value}</span>
              <span className="text-gray-500 text-sm">({item.percentage.toFixed(1)}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentChart;
