
import React from "react";
import IconBadge from "./IconBadge";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconClassName?: string;
  trendValue?: string;
  trendDirection?: "up" | "down" | "neutral";
  className?: string;
  style?: React.CSSProperties;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconClassName,
  trendValue,
  trendDirection = "neutral",
  className,
  style,
}) => {
  return (
    <div 
      className={cn("stat-card animate-fade-in", className)}
      style={style}
    >
      <div className="flex justify-between items-start">
        <IconBadge icon={icon} className={iconClassName} />
        {trendValue && (
          <div
            className={
              trendDirection === "up"
                ? "trend-up"
                : trendDirection === "down"
                ? "trend-down"
                : "text-gray-500"
            }
          >
            {trendDirection === "up" ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : trendDirection === "down" ? (
              <TrendingDown className="w-4 h-4 mr-1" />
            ) : null}
            {trendValue}
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
