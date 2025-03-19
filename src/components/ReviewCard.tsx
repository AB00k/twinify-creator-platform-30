
import React from "react";
import { cn } from "@/lib/utils";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
  review: {
    id: string;
    text: string;
    platform?: string;
    date?: string;
    rating?: number;
    customerName?: string;
    location?: string;
    category?: string;
  };
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className }) => {
  return (
    <div className={cn("p-4 bg-gray-50 rounded-lg mb-3", className)}>
      <div className="flex justify-between items-start mb-2">
        {review.platform && (
          <div className="flex items-center">
            <div className={cn(
              "w-2 h-2 rounded-full mr-2",
              review.platform === "Google" ? "bg-blue-500" :
              review.platform === "Talabat" ? "bg-orange-500" :
              review.platform === "Noon" ? "bg-yellow-500" :
              review.platform === "Careem" ? "bg-green-500" : "bg-gray-500"
            )}></div>
            <span className="font-medium text-sm">{review.platform}</span>
            {review.date && <span className="text-xs text-gray-500 ml-2">• {review.date}</span>}
          </div>
        )}
        {review.rating !== undefined && (
          <RatingStars rating={review.rating} size="sm" />
        )}
      </div>
      
      <p className="text-sm mb-2">"{review.text}"</p>
      
      {(review.customerName || review.location || review.category) && (
        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
          {review.customerName && <span>{review.customerName}</span>}
          {(review.location || review.category) && (
            <span>
              {review.location} {review.category && review.location && "•"} {review.category}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
