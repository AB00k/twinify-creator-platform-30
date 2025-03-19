
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: string;
  text: string;
}

interface ReviewTabPanelProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconColor: string;
  reviews: Review[];
  bulletPoints: string[];
  className?: string;
}

const ReviewTabPanel: React.FC<ReviewTabPanelProps> = ({
  title,
  subtitle,
  icon,
  iconColor,
  reviews,
  bulletPoints,
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm", className)}>
      <div className="flex items-center gap-2 mb-4">
        <div className={cn("p-2 rounded-full", iconColor)}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="mb-4 bg-gray-100">
          <TabsTrigger value="summary" className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>Summary</span>
          </TabsTrigger>
          <TabsTrigger value="fullReviews" className="flex items-center gap-1">
            <List className="w-4 h-4" />
            <span>Full Reviews</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-0">
          <div className="space-y-2">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={cn("w-2 h-2 rounded-full mt-2", iconColor)}></div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fullReviews" className="mt-0">
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReviewTabPanel;
