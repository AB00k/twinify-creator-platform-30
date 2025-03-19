
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  indicatorClassName?: string;
}

const ProgressBar = ({
  value,
  max,
  className,
  indicatorClassName,
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-gray-100", className)}>
      <div
        className={cn("h-full transition-all duration-500 ease-in-out", indicatorClassName)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export { ProgressBar };
