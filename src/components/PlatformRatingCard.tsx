
import React from "react";
import { cn } from "@/lib/utils";
import RatingStars from "./RatingStars";

interface PlatformRatingCardProps {
  platform: string;
  rating: number;
  reviewCount: number;
  className?: string;
  colorClass?: string;
}

const PlatformRatingCard: React.FC<PlatformRatingCardProps> = ({
  platform,
  rating,
  reviewCount,
  className,
  colorClass = "bg-gray-100",
}) => {
  return (
    <div className={cn("rounded-xl p-5 shadow-sm", colorClass, className)}>
      <h3 className="text-lg font-medium mb-2">{platform}</h3>
      <div className="flex flex-col">
        <div className="text-4xl font-bold mb-1">{rating.toFixed(1)}</div>
        <RatingStars rating={rating} size="md" className="mb-2" />
        <p className="text-sm text-gray-600">Based on {reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default PlatformRatingCard;
