
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlatformRatingCard from "@/components/PlatformRatingCard";
import SentimentChart from "@/components/SentimentChart";
import ExperienceBarChart from "@/components/ExperienceBarChart";
import ReviewTabPanel from "@/components/ReviewTabPanel";
import { ThumbsUp, ThumbsDown, CircleDashed } from "lucide-react";
import { Link } from "react-router-dom";

const Reviews = () => {
  // Platform ratings data
  const platformRatings = [
    { platform: "Talabat", rating: 3.1, reviewCount: 28, colorClass: "bg-orange-100" },
    { platform: "Noon", rating: 2.6, reviewCount: 21, colorClass: "bg-yellow-100" },
    { platform: "Careem", rating: 2.8, reviewCount: 27, colorClass: "bg-green-100" },
    { platform: "Google", rating: 3.3, reviewCount: 24, colorClass: "bg-blue-100" },
  ];

  // Sentiment analysis data
  const sentimentData = [
    { 
      name: "Positive", 
      value: 45, 
      color: "#4CAF50", 
      percentage: 45, 
      icon: <ThumbsUp className="h-4 w-4 text-green-600" />
    },
    { 
      name: "Neutral", 
      value: 11, 
      color: "#FFC107", 
      percentage: 11, 
      icon: <CircleDashed className="h-4 w-4 text-yellow-600" />
    },
    { 
      name: "Negative", 
      value: 44, 
      color: "#F44336", 
      percentage: 44, 
      icon: <ThumbsDown className="h-4 w-4 text-red-600" />
    },
  ];

  // Experience ratings data - simplified to show ratings from 1-5
  const experienceData = [
    { name: "Food Quality", value: 4.5, color: "#FF5722" },
    { name: "Service", value: 4.2, color: "#2196F3" },
    { name: "Atmosphere", value: 4.0, color: "#9C27B0" },
    { name: "Cleanliness", value: 4.3, color: "#E91E63" },
    { name: "Value", value: 3.9, color: "#9575CD" },
  ];

  // Positive reviews with additional details
  const positiveReviews = [
    { 
      id: "1", 
      text: "Outstanding service and quality. My new favorite restaurant!",
      platform: "Google",
      date: "2025-02-10",
      rating: 5,
      customerName: "Emma W.",
      location: "Downtown",
      category: "Cafe"
    },
    { 
      id: "2", 
      text: "Food was delicious and arrived hot. Great value for money.",
      platform: "Careem",
      date: "2025-01-07",
      rating: 5,
      customerName: "Fatima K.",
      location: "JBR",
      category: "Express"
    },
    { 
      id: "3", 
      text: "Absolutely loved the food! Fast delivery and excellent packaging.",
      platform: "Talabat",
      date: "2025-01-29",
      rating: 5,
      customerName: "John D.",
      location: "Downtown",
      category: "Premium"
    },
  ];

  // Negative reviews with additional details
  const negativeReviews = [
    { 
      id: "1", 
      text: "Waited over an hour for delivery that was promised in 30 minutes.",
      platform: "Noon",
      date: "2025-02-15",
      rating: 2,
      customerName: "Ahmed S.",
      location: "Marina",
      category: "Express"
    },
    { 
      id: "2", 
      text: "Food was cold and didn't taste fresh. Very disappointing.",
      platform: "Talabat",
      date: "2025-01-18",
      rating: 1,
      customerName: "Sarah M.",
      location: "Business Bay",
      category: "Standard"
    },
    { 
      id: "3", 
      text: "The packaging was leaking and ruined the rest of my order.",
      platform: "Careem",
      date: "2025-02-03",
      rating: 2,
      customerName: "Michael R.",
      location: "DIFC",
      category: "Premium"
    },
  ];

  // Positive review themes
  const positiveThemes = [
    "Fast delivery and excellent packaging",
    "Friendly and professional staff",
    "Excellent food quality and taste",
    "Good value for money",
  ];

  // Negative review issues
  const negativeIssues = [
    "Slow delivery times",
    "Food quality below expectations",
    "Packaging issues",
    "Order accuracy problems",
  ];

  return (
    <div className="min-h-screen bg-dashGrayLight">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#FF4747" }}>
              Restaurant Feedback Dashboard
            </h1>
            <p className="text-gray-600">
              Analyzing customer reviews across multiple delivery platforms
            </p>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Tabs Navigation moved to the right */}
            <Tabs defaultValue="overview" className="mb-0">
              <TabsList className="bg-white rounded-full p-1 border">
                <TabsTrigger value="overview" className="rounded-full">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="detailedAnalysis" className="rounded-full">
                  Detailed Analysis
                </TabsTrigger>
                <TabsTrigger value="platformReviews" className="rounded-full">
                  Platform Reviews
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Link to="/">
              <Button className="bg-dashRed hover:bg-red-600 text-white rounded-full transition-all duration-300">
                Back to Discount Performance
              </Button>
            </Link>
          </div>
        </div>

        {/* Platform Ratings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {platformRatings.map((platform, index) => (
            <PlatformRatingCard
              key={index}
              platform={platform.platform}
              rating={platform.rating}
              reviewCount={platform.reviewCount}
              colorClass={platform.colorClass}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sentiment Analysis - Improved layout with chart on side */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Sentiment Analysis</h2>
            <SentimentChart data={sentimentData} />
          </div>

          {/* Experience Ratings - Simplified horizontal bar chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Dine-in Experience Ratings</h2>
            <ExperienceBarChart data={experienceData} />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Positive Reviews with detailed info */}
          <ReviewTabPanel
            title="Top Positive Reviews"
            subtitle="Highest rated customer feedback"
            icon={<ThumbsUp className="h-5 w-5 text-white" />}
            iconColor="bg-green-500"
            reviews={positiveReviews}
            bulletPoints={positiveThemes}
          />

          {/* Negative Reviews with detailed info */}
          <ReviewTabPanel
            title="Top Negative Reviews"
            subtitle="Areas that may need improvement"
            icon={<ThumbsDown className="h-5 w-5 text-white" />}
            iconColor="bg-red-500"
            reviews={negativeReviews}
            bulletPoints={negativeIssues}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
