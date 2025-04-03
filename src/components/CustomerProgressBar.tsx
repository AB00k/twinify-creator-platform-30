
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
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div 
              className={cn("h-full rounded-full transition-all duration-500 ease-out", color)} 
              style={{ width: `${safeValue}%` }}
            />
          </div>
        </div>
        {label && <p className="text-sm text-gray-600 whitespace-nowrap">{label}</p>}
      </div>
    </div>
  );
};

export default CustomerProgressBar;
