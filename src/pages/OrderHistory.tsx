
import React from "react";
import { Button } from "@/components/ui/button";
import OrderHistory from "@/components/OrderHistory";
import { Link } from "react-router-dom";

const OrderHistoryPage: React.FC = () => {
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
        
        {/* Order History Component */}
        <OrderHistory />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
