
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  TrendingUp, 
  RefreshCw, 
  Star, 
  Tag, 
  CreditCard,
  ChevronDown, 
  Phone, 
  UserCircle
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerSegmentCard from "@/components/CustomerSegmentCard";
import CustomerProgressBar from "@/components/CustomerProgressBar";
import CustomerGeography from "@/components/CustomerGeography";

const Customers = () => {
  // Platform distribution data
  const platformData = [
    { name: "Talabat", value: 23, color: "#FF9F45" },
    { name: "Dine-in", value: 21, color: "#B76DF3" },
    { name: "Noon", value: 20, color: "#F9E356" },
    { name: "Careem", value: 18, color: "#45C4FF" },
    { name: "Others", value: 18, color: "#0ECB81" }
  ];
  
  const userIdentificationData = {
    totalCustomers: 200,
    userId: 200,
    phone: 0,
    percentageUserId: 100
  };
  
  const revenueData = {
    totalRevenue: 205400,
    online: {
      amount: 123240,
      percentage: 60
    },
    cash: {
      amount: 82160,
      percentage: 40
    }
  };
  
  // Customer segment stats
  const customerSegments = [
    { 
      title: "Total Customers", 
      value: 200, 
      percentage: 100,
      icon: <Users className="h-6 w-6 text-blue-500" />,
      bgColor: "bg-blue-100"
    },
    { 
      title: "New Customers", 
      value: 16, 
      percentage: 8,
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      bgColor: "bg-blue-100"
    },
    { 
      title: "Repeat Customers", 
      value: 43, 
      percentage: 22,
      icon: <RefreshCw className="h-6 w-6 text-green-500" />,
      bgColor: "bg-green-100"
    },
    { 
      title: "Premium Customers", 
      value: 141, 
      percentage: 71,
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      bgColor: "bg-yellow-100"
    },
    { 
      title: "Promo Usage", 
      value: "44%", 
      icon: <Tag className="h-6 w-6 text-purple-500" />,
      bgColor: "bg-purple-100"
    },
    { 
      title: "Avg. Spending", 
      value: "AED 1027", 
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      bgColor: "bg-blue-100"
    }
  ];

  // Custom tooltip for pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded border">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-dashGrayLight">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#FF4747" }}>
              Customer Segmentation Dashboard
            </h1>
            <p className="text-gray-600">
              Analyzing customer segments and behavior across platforms
            </p>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Tabs Navigation on the right */}
            <Tabs defaultValue="overview" className="mb-0">
              <TabsList className="bg-white rounded-full p-1 border">
                <TabsTrigger value="overview" className="rounded-full">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="behaviors" className="rounded-full">
                  Behaviors
                </TabsTrigger>
                <TabsTrigger value="preferences" className="rounded-full">
                  Preferences
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

        {/* Customer Overview Section */}
        <h2 className="text-2xl font-bold mb-4">Customer Overview</h2>
        
        {/* Main Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Platform Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Platform Distribution</h3>
            <div className="flex items-center justify-center h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {platformData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-5 gap-1 mt-3">
              {platformData.map((entry, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mb-1" style={{ backgroundColor: entry.color }}></div>
                  <p className="text-xs text-gray-500">{entry.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User Identification */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">User Identification</h3>
              <Button variant="outline" className="flex items-center text-sm font-medium">
                Show Details <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <p className="text-gray-500 mb-1">Total Customers</p>
              <h2 className="text-4xl font-bold mb-4">{userIdentificationData.totalCustomers}</h2>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                <div className="bg-blue-50 rounded-xl p-3 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-2">
                    <UserCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm font-medium">User ID</span>
                  </div>
                  <p className="text-2xl font-bold">{userIdentificationData.userId}</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-3 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-sm font-medium">Phone</span>
                  </div>
                  <p className="text-2xl font-bold">{userIdentificationData.phone}</p>
                </div>
              </div>
            </div>
            
            <CustomerProgressBar 
              value={userIdentificationData.percentageUserId} 
              label={`Delivery platforms: ${userIdentificationData.percentageUserId}% user ID`}
              color="bg-blue-500"
            />
          </div>

          {/* Revenue by Payment */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Revenue by Payment</h3>
              <Button variant="outline" className="flex items-center text-sm font-medium">
                Show Details <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <p className="text-gray-500 mb-1">Total Revenue</p>
              <h2 className="text-4xl font-bold mb-4">AED {revenueData.totalRevenue.toLocaleString()}</h2>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-4">
                <div className="bg-green-50 rounded-xl p-3 flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="p-1">
                      <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-sm font-medium ml-1">Online</span>
                  </div>
                  <p className="text-xl font-bold">AED {revenueData.online.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{revenueData.online.percentage}% of revenue</p>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-3 flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="p-1">
                      <CreditCard className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="text-sm font-medium ml-1">Cash</span>
                  </div>
                  <p className="text-xl font-bold">AED {revenueData.cash.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{revenueData.cash.percentage}% of revenue</p>
                </div>
              </div>
            </div>
            
            <CustomerProgressBar 
              value={revenueData.online.percentage} 
              label=""
              color="bg-green-500"
              bgColor="bg-gray-200"
            />
          </div>
        </div>

        {/* Customer Segments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 animate-fade-in mb-8">
          {customerSegments.map((segment, index) => (
            <CustomerSegmentCard
              key={index}
              title={segment.title}
              value={segment.value}
              percentage={segment.percentage}
              icon={segment.icon}
              bgColor={segment.bgColor}
              className="hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>
        
        {/* Customer Geography Section */}
        <CustomerGeography />
      </div>
    </div>
  );
};

export default Customers;
