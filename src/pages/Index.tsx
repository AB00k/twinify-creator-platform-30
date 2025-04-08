
import React from "react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import {
  DollarSign,
  Percent,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  ClipboardList,
} from "lucide-react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

const Index = () => {
  const discountStats = [
    {
      title: "Total Discounts",
      value: 567,
      icon: <Percent className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashRed",
    },
    {
      title: "Revenue",
      value: "$45,678",
      icon: <DollarSign className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashGreen",
      trendValue: "+12%",
      trendDirection: "up" as const,
    },
    {
      title: "Orders",
      value: 1234,
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashBlue",
      trendValue: "-5%",
      trendDirection: "down" as const,
    },
  ];

  const customerStats = [
    {
      title: "New Customers",
      value: 123,
      icon: <Users className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashOrange",
    },
    {
      title: "Customer Retention",
      value: "78%",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashPurple",
      trendValue: "+3%",
      trendDirection: "up" as const,
    },
    {
      title: "Customer Churn",
      value: "22%",
      icon: <TrendingDown className="w-5 h-5 text-white" />,
      iconClassName: "bg-dashLightBlue",
      trendValue: "-1%",
      trendDirection: "down" as const,
    },
  ];

  const sparklineData = [10, 5, 12, 8, 15, 7, 11];

  return (
    <div className="min-h-screen bg-dashGrayLight">
      <div className="container px-4 py-8 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-dashRed">
              Discount Performance Dashboard
            </h1>
            <p className="text-gray-600">
              Analyzing discount effectiveness and budget utilization
            </p>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <Link to="/customers">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Customer Segmentation
              </Button>
            </Link>
            <Link to="/reviews">
              <Button className="bg-dashBlue hover:bg-blue-600 text-white">
                Reviews & Ratings
              </Button>
            </Link>
            <Link to="/orders">
              <Button className="bg-dashGreen hover:bg-green-600 text-white">
                <ClipboardList className="w-4 h-4 mr-2" />
                Order History
              </Button>
            </Link>
          </div>
        </div>

        {/* Discount Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {discountStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconClassName={stat.iconClassName}
              trendValue={stat.trendValue}
              trendDirection={stat.trendDirection}
            />
          ))}
        </div>

        {/* Customer Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {customerStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              iconClassName={stat.iconClassName}
              trendValue={stat.trendValue}
              trendDirection={stat.trendDirection}
            />
          ))}
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Discount Usage Over Time</h2>
          <Sparklines data={sparklineData} height={100}>
            <SparklinesLine color="#4CAF50" />
          </Sparklines>
        </div>

        {/* Discount Budget Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Discount Budget Overview</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Budget</p>
              <h3 className="text-2xl font-semibold">$10,000</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Budget Used</p>
              <h3 className="text-2xl font-semibold">$7,500</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Budget Remaining</p>
              <h3 className="text-2xl font-semibold">$2,500</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
