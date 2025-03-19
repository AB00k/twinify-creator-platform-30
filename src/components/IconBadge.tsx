
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: ReactNode;
  className?: string;
}

const IconBadge = ({ icon, className }: IconBadgeProps) => {
  return (
    <div className={cn("icon-container", className)}>
      {icon}
    </div>
  );
};

export default IconBadge;
