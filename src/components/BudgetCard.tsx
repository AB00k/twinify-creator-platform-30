
import React, { useEffect, useRef } from "react";
import { ProgressBar } from "./ui/progress-bar";
import { Calendar, Clock, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface BudgetCardProps {
  title: string;
  totalBudget: number;
  spent: number;
  currency?: string;
  remaining?: number;
  daysLeft?: number;
  recommendedDaily?: number;
  className?: string;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  title,
  totalBudget,
  spent,
  currency = "AED",
  remaining,
  daysLeft,
  recommendedDaily,
  className,
}) => {
  const percentage = Math.round((spent / totalBudget) * 100);
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Info className="w-5 h-5 text-dashBlue" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Budget Utilization</span>
          <span className="font-medium">{percentage}%</span>
        </div>
        <ProgressBar
          value={spent}
          max={totalBudget}
          indicatorClassName={`${
            percentage > 90
              ? "bg-dashRed"
              : percentage > 70
              ? "bg-dashOrange"
              : "bg-dashBlue"
          }`}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Total Budget</p>
          <p className="text-lg font-semibold">
            {currency} {totalBudget.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Spent</p>
          <p className="text-lg font-semibold">
            {currency} {spent.toLocaleString()}
          </p>
        </div>
      </div>

      {remaining !== undefined && (
        <div className="flex items-center space-x-2 p-3 bg-dashGrayLight rounded-lg mb-3">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm">Remaining Budget</span>
          <span className="ml-auto font-medium">
            {currency} {remaining.toLocaleString()}
          </span>
        </div>
      )}

      {daysLeft !== undefined && (
        <div className="flex items-center space-x-2 p-3 bg-dashGrayLight rounded-lg mb-3">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm">Days Left This Month</span>
          <span className="ml-auto font-medium">{daysLeft}</span>
        </div>
      )}

      {recommendedDaily !== undefined && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-1">Recommended Daily Budget</p>
          <p className="text-dashBlue font-semibold">
            {currency} {recommendedDaily.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetCard;
