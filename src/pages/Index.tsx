
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import AreaChart from "@/components/AreaChart";
import MonthlySpendCard from "@/components/MonthlySpendCard";
import BudgetCard from "@/components/BudgetCard";
import { Link } from "react-router-dom";
import {
  Tag,
  Receipt,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Percent,
  ShoppingBag,
  Tag as TagIcon,
  PlusCircle,
  ChevronRight,
  Star,
} from "lucide-react";

// Generate chart data
const generateChartData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    let value = 0;
    if (i < 10) {
      value = Math.floor(Math.random() * 800) + 200;
    } else if (i < 20) {
      value = Math.floor(Math.random() * 1500) + 1000;
    } else {
      value = Math.floor(Math.random() * 2500) + 2000;
    }
    
    // Format the day as a two-digit string
    const day = i < 10 ? `0${i}` : `${i}`;
    
    data.push({
      day,
      value,
    });
  }
  return data;
};

const Index = () => {
  const [chartData, setChartData] = useState(generateChartData());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after a brief delay to allow for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dashGrayLight">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 
            className={`text-3xl font-bold text-dashGrayDark ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`} 
            style={{ color: '#FF4747' }}
          >
            Delivery Discount Performance
          </h1>
          <div className="flex gap-3">
            <Link to="/reviews">
              <Button 
                className={`mt-4 md:mt-0 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full transition-all duration-300 flex items-center ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.15s' }}
              >
                <Star className="mr-2 h-4 w-4 text-yellow-500" />
                View Reviews & Ratings
              </Button>
            </Link>
            <Button 
              className={`mt-4 md:mt-0 bg-dashRed hover:bg-red-600 text-white rounded-full transition-all duration-300 flex items-center ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Create a new campaign
            </Button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 
              className={`text-2xl font-semibold text-dashGrayDark ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              Discount Overview
            </h2>
            <Button 
              variant="outline" 
              className={`rounded-full border bg-white hover:bg-gray-50 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <span className="mr-2">View All Running Discounts</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Stats Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <StatCard
              title="Live Promotions"
              value="8"
              icon={<Tag className="h-5 w-5 text-white" />}
              iconClassName="bg-dashGray"
              trendValue="+2"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '0.5s' }}
            />
            <StatCard
              title="Total Discount Spend"
              value="AED 38750"
              icon={<Receipt className="h-5 w-5 text-white" />}
              iconClassName="bg-dashOrange"
              trendValue="+8%"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '0.6s' }}
            />
            <StatCard
              title="Discounted Orders"
              value="1435"
              icon={<ShoppingCart className="h-5 w-5 text-white" />}
              iconClassName="bg-dashGreen"
              trendValue="+22%"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '0.7s' }}
            />
            <StatCard
              title="Operating Profit"
              value="AED 133750"
              icon={<DollarSign className="h-5 w-5 text-white" />}
              iconClassName="bg-dashGreen"
              trendValue="+12%"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '0.8s' }}
            />
          </div>

          {/* Stats Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="ROI"
              value="5x"
              icon={<TrendingUp className="h-5 w-5 text-white" />}
              iconClassName="bg-dashBlue"
              trendValue="+0.3"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '0.9s' }}
            />
            <StatCard
              title="Average Discount %"
              value="18.5%"
              icon={<Percent className="h-5 w-5 text-white" />}
              iconClassName="bg-dashRed"
              trendValue="-2.3%"
              trendDirection="down"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '1s' }}
            />
            <StatCard
              title="Discount Order AOV"
              value="AED 120.21"
              icon={<ShoppingBag className="h-5 w-5 text-white" />}
              iconClassName="bg-dashPurple"
              trendValue="+3.5%"
              trendDirection="up"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '1.1s' }}
            />
            <StatCard
              title="Top Discount Campaign"
              value="Summer Flash 25% Off"
              icon={<TagIcon className="h-5 w-5 text-white" />}
              iconClassName="bg-dashLightBlue"
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '1.2s' }}
            />
          </div>
        </div>

        {/* Monthly Spend & Budget Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <MonthlySpendCard
              title="Monthly Discount Spend"
              subtitle="Total spent this month"
              amount={33200}
              budget={50000}
              utilization={66}
              chartData={chartData}
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '1.3s' }}
            />
          </div>
          <div className="lg:col-span-2">
            <BudgetCard
              title="Discount Budget"
              totalBudget={50000}
              spent={38750}
              remaining={11250}
              daysLeft={10}
              recommendedDaily={1125}
              className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              style={{ animationDelay: '1.4s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
