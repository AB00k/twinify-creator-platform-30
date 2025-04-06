
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
  UserCircle,
  Info
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerSegmentCard from "@/components/CustomerSegmentCard";
import CustomerProgressBar from "@/components/CustomerProgressBar";
import CustomerGeography from "@/components/CustomerGeography";
import CustomerCohort from "@/components/CustomerCohort";
import CustomerProfile from "@/components/CustomerProfile";

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
      <div className="container px-4 py-6 mx-auto max-w-7xl">
        {/* Simplified Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: "#FF4747" }}>
              Customer Segmentation
            </h1>
            <p className="text-gray-600 text-sm">
              Overview of customer segments across platforms
            </p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="/">
              <Button className="bg-dashRed hover:bg-red-600 text-white transition-all duration-300">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Customer Segments Grid - Simplified */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {customerSegments.map((segment, index) => (
            <CustomerSegmentCard
              key={index}
              title={segment.title}
              value={segment.value}
              percentage={segment.percentage}
              icon={segment.icon}
              bgColor={segment.bgColor}
              className="hover:shadow-md transition-all duration-300"
            />
          ))}
        </div>
        
        {/* Main Analysis Grid - Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Platform Distribution */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-base font-semibold mb-2">Platform Distribution</h3>
            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {platformData.map((entry, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mb-1" style={{ backgroundColor: entry.color }}></div>
                  <p className="text-xs text-gray-500">{entry.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User Identification */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-base font-semibold mb-3">User Identification</h3>
            <div className="flex flex-col items-center mb-4">
              <p className="text-gray-500 mb-1 text-sm">Total Customers</p>
              <h2 className="text-3xl font-bold mb-3">{userIdentificationData.totalCustomers}</h2>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-3">
                <div className="bg-blue-50 rounded-lg p-2 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-1">
                    <UserCircle className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-sm">User ID</span>
                  </div>
                  <p className="text-xl font-bold">{userIdentificationData.userId}</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-2 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-1">
                    <Phone className="h-4 w-4 text-purple-500 mr-1" />
                    <span className="text-sm">Phone</span>
                  </div>
                  <p className="text-xl font-bold">{userIdentificationData.phone}</p>
                </div>
              </div>
            </div>
            
            <CustomerProgressBar 
              value={userIdentificationData.percentageUserId} 
              label={`${userIdentificationData.percentageUserId}% with user ID`}
              color="bg-blue-500"
            />
          </div>

          {/* Revenue by Payment */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-base font-semibold mb-3">Revenue by Payment</h3>
            <div className="flex flex-col items-center mb-4">
              <p className="text-gray-500 mb-1 text-sm">Total Revenue</p>
              <h2 className="text-3xl font-bold mb-3">AED {revenueData.totalRevenue.toLocaleString()}</h2>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-3">
                <div className="bg-green-50 rounded-lg p-2 flex flex-col">
                  <div className="flex items-center mb-1">
                    <CreditCard className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm">Online</span>
                  </div>
                  <p className="text-lg font-bold">AED {revenueData.online.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{revenueData.online.percentage}% of revenue</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-2 flex flex-col">
                  <div className="flex items-center mb-1">
                    <CreditCard className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">Cash</span>
                  </div>
                  <p className="text-lg font-bold">AED {revenueData.cash.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{revenueData.cash.percentage}% of revenue</p>
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
        
        {/* Main Content with Tabs for Better Organization */}
        <Tabs defaultValue="geography" className="mb-6">
          <TabsList className="mb-4 bg-white border rounded-lg w-full md:w-auto justify-start overflow-x-auto">
            <TabsTrigger value="geography" className="px-4 py-2">Geography</TabsTrigger>
            <TabsTrigger value="cohort" className="px-4 py-2">Customer Retention</TabsTrigger>
            <TabsTrigger value="profile" className="px-4 py-2">Customer Filters</TabsTrigger>
          </TabsList>
          
          <TabsContent value="geography" className="mt-0">
            <CustomerGeography />
          </TabsContent>
          
          <TabsContent value="cohort" className="mt-0">
            <CustomerCohort />
          </TabsContent>
          
          <TabsContent value="profile" className="mt-0">
            <CustomerProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Customers;
