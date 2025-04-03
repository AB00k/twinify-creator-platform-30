
import React from "react";
import { cn } from "@/lib/utils";

interface CustomerSegmentCardProps {
  title: string;
  value: string | number;
  percentage?: number;
  icon: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const CustomerSegmentCard: React.FC<CustomerSegmentCardProps> = ({
  title,
  value,
  percentage,
  icon,
  bgColor = "bg-blue-100",
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-3", bgColor)}>
          {icon}
        </div>
        <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {percentage !== undefined && (
          <p className="text-sm text-gray-500">{percentage}%</p>
        )}
      </div>
    </div>
  );
};

export default CustomerSegmentCard;
