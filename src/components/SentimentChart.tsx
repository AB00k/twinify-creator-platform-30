
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, Circle } from "lucide-react";

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

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold">{total}</div>
            <div className="text-sm text-gray-500">Total Reviews</div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
              <div className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>{item.value}</span>
              <span className="text-gray-500">({item.percentage.toFixed(1)}%)</span>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">Total: {total} reviews analyzed</p>
    </div>
  );
};

export default SentimentChart;
