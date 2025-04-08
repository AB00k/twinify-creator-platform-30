
import React from "react";
import { Button } from "@/components/ui/button";
import OrderHistory from "@/components/OrderHistory";
import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import { 
  ShoppingBag, 
  Clock, 
  TrendingUp, 
  Calendar
} from "lucide-react";

const OrderHistoryPage: React.FC = () => {
  // Sample data for order history metrics
  const orderMetrics = [
    {
      title: "Average Order Value",
      value: "AED 94.25",
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashBlue",
      trendValue: "+8%",
      trendDirection: "up" as const,
    },
    {
      title: "Order Processing Time",
      value: "24 mins",
      icon: <Clock className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashGreen",
      trendValue: "-12%",
      trendDirection: "down" as const,
    },
    {
      title: "Platform Utilization",
      value: "Talabat (43%)",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashOrange",
    },
    {
      title: "Order Frequency",
      value: "2.3/week",
      icon: <Calendar className="w-5 h-5 text-white" />,
      iconClassName: "bg-purple-500",
      trendValue: "+5%",
      trendDirection: "up" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-dashGrayLight">
      <div className="container px-4 py-8 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-dashBlue">
              Order History
            </h1>
            <p className="text-gray-600">
              View and manage all orders across multiple platforms
            </p>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Link to="/">
              <Button className="bg-dashRed hover:bg-red-600 text-white">
                Dashboard
              </Button>
            </Link>
            <Link to="/customers">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Customer Segmentation
              </Button>
            </Link>
            <Link to="/reviews">
              <Button className="bg-dashGreen hover:bg-green-600 text-white">
                Reviews & Ratings
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Order Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {orderMetrics.map((metric, index) => (
            <StatCard
              key={index}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              iconClassName={metric.iconClassName}
              trendValue={metric.trendValue}
              trendDirection={metric.trendDirection}
            />
          ))}
        </div>
        
        {/* Order History Component */}
        <OrderHistory />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
