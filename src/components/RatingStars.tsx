
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const stars = Array.from({ length: maxRating }).map((_, i) => {
    const isFilled = i < Math.floor(rating);
    const isHalf = !isFilled && i < Math.ceil(rating) && rating % 1 !== 0;
    
    return (
      <Star
        key={i}
        className={cn(
          sizeClasses[size],
          isFilled ? "text-yellow-400 fill-yellow-400" : isHalf ? "text-yellow-400 fill-yellow-400 half-star" : "text-gray-300",
          "inline-block"
        )}
      />
    );
  });

  return <div className={cn("flex", className)}>{stars}</div>;
};

export default RatingStars;
