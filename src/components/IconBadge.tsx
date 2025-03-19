
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "square";
}

const IconBadge = ({ 
  icon, 
  className,
  size = "md",
  variant = "circle"
}: IconBadgeProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const variantClasses = {
    circle: "rounded-full",
    square: "rounded-md"
  };

  return (
    <div className={cn(
      "flex items-center justify-center", 
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      {icon}
    </div>
  );
};

export default IconBadge;
