
import React, { useEffect, useRef } from "react";
import AreaChart from "./AreaChart";
import { cn } from "@/lib/utils";

interface MonthlySpendCardProps {
  title: string;
  subtitle: string;
  amount: number;
  budget: number;
  utilization: number;
  chartData: any[];
  currency?: string;
  className?: string;
}

const MonthlySpendCard: React.FC<MonthlySpendCardProps> = ({
  title,
  subtitle,
  amount,
  budget,
  utilization,
  chartData,
  currency = "AED",
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("bg-white rounded-xl p-6 shadow-sm", className)}
      style={{ opacity: 0 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <p className="text-2xl font-bold">
            {currency} {amount.toLocaleString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Budget: {currency} {budget.toLocaleString()}</p>
          <p className="text-md font-medium text-dashGreen">
            Budget utilization
            <span className="ml-2">{utilization}%</span>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <AreaChart
          data={chartData}
          dataKey="value"
          xAxisDataKey="day"
          height={180}
        />
      </div>
    </div>
  );
};

export default MonthlySpendCard;
