
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
      className={cn("stat-card bg-white rounded-xl p-4 shadow-sm animate-fade-in", className)}
      style={style}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <IconBadge 
            icon={icon} 
            className={cn("p-2 rounded-full", iconClassName)} 
            size="sm"
          />
          
          {trendValue && (
            <div
              className={cn(
                "flex items-center text-xs",
                trendDirection === "up"
                  ? "text-green-500"
                  : trendDirection === "down"
                  ? "text-red-500"
                  : "text-gray-500"
              )}
            >
              {trendDirection === "up" ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : trendDirection === "down" ? (
                <TrendingDown className="w-3 h-3 mr-1" />
              ) : null}
              {trendValue}
            </div>
          )}
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-semibold">{value}</h3>
          <p className="text-sm text-gray-500 mt-1">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
