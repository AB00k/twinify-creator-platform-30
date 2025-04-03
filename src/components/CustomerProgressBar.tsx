
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
  bgColor = "bg-gray-200",
  className,
}) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.min(Math.max(value, 0), 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full h-2 rounded-full overflow-hidden mb-2" style={{ backgroundColor: bgColor }}>
        <div 
          className={cn("h-full rounded-full transition-all duration-500", color)} 
          style={{ width: `${safeValue}%` }}
        />
      </div>
      {label && <p className="text-sm text-gray-500 text-center">{label}</p>}
    </div>
  );
};

export default CustomerProgressBar;
