
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
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
  const maxValue = Math.max(...data.map(item => item.value)) + 0.5;

  return (
    <div className={cn("h-80", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, maxValue]} 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          {data.map((entry, index) => (
            <Bar 
              key={index}
              dataKey="value" 
              fill={entry.color} 
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExperienceBarChart;
