
import React from "react";
import { cn } from "@/lib/utils";

interface CustomerProgressBarProps {
  value: number;
  label: string;
  color?: string;
  bgColor?: string;
  className?: string;
}

const CustomerProgressBar: React.FC<CustomerProgressBarProps> = ({
  value,
  label,
  color = "bg-purple-500",
  bgColor = "bg-blue-100",
  className,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full h-2 rounded-full overflow-hidden mb-2" style={{ backgroundColor: bgColor }}>
        <div 
          className={cn("h-full rounded-full transition-all duration-500", color)} 
          style={{ width: `${value}%` }}
        />
      </div>
      {label && <p className="text-sm text-gray-500 text-center">{label}</p>}
    </div>
  );
};

export default CustomerProgressBar;
