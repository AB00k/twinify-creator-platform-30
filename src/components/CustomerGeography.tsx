
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Building } from "lucide-react";

// Data for city-wise distribution
const cityData = [
  { name: "Dubai", value: 120, percentage: 60 },
  { name: "Abu Dhabi", value: 45, percentage: 22.5 },
  { name: "Sharjah", value: 25, percentage: 12.5 },
  { name: "Ajman", value: 5, percentage: 2.5 },
  { name: "Ras Al Khaimah", value: 5, percentage: 2.5 },
];

// Data for zone-wise distribution
const zoneData = {
  "Dubai": [
    { name: "Downtown", value: 35, percentage: 29.2 },
    { name: "Marina", value: 30, percentage: 25 },
    { name: "JBR", value: 25, percentage: 20.8 },
    { name: "Business Bay", value: 20, percentage: 16.7 },
    { name: "Dubai Hills", value: 10, percentage: 8.3 },
  ],
  "Abu Dhabi": [
    { name: "Al Reem Island", value: 15, percentage: 33.3 },
    { name: "Yas Island", value: 12, percentage: 26.7 },
    { name: "Corniche", value: 10, percentage: 22.2 },
    { name: "Al Khalidiyah", value: 8, percentage: 17.8 },
  ],
  "Sharjah": [
    { name: "Al Majaz", value: 12, percentage: 48 },
    { name: "Al Nahda", value: 8, percentage: 32 },
    { name: "Al Khan", value: 5, percentage: 20 },
  ]
};

// Custom tooltip for the charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border">
        <p className="font-medium text-sm">{`${label}`}</p>
        <p className="text-sm">{`Customers: ${payload[0].value}`}</p>
        <p className="text-sm text-gray-500">{`${payload[0].payload.percentage}% of total`}</p>
      </div>
    );
  }
  return null;
};

const CustomerGeography = () => {
  const [viewType, setViewType] = useState<"cities" | "zones">("cities");
  const [selectedCity, setSelectedCity] = useState("Dubai");
  
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    if (viewType === "cities") {
      setViewType("zones");
    }
  };
  
  const handleBackToMain = () => {
    setViewType("cities");
  };
  
  const currentData = viewType === "cities" ? cityData : zoneData[selectedCity as keyof typeof zoneData];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Customer Demographics & Geography</h3>
          <p className="text-sm text-gray-500">
            {viewType === "cities" 
              ? "Customer distribution across cities in UAE" 
              : `Zones within ${selectedCity}`}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          {viewType === "zones" && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackToMain}
              className="flex items-center gap-1"
            >
              <MapPin size={16} /> Back to All Cities
            </Button>
          )}
          
          <Tabs defaultValue="chart" className="mb-0">
            <TabsList className="bg-white rounded-full p-1 border">
              <TabsTrigger value="chart" className="rounded-full">
                Chart
              </TabsTrigger>
              <TabsTrigger value="map" className="rounded-full">
                Map
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={currentData}
            margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
            barSize={viewType === "cities" ? 40 : 30}
          >
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill={viewType === "cities" ? "#4F46E5" : "#6366F1"} 
              radius={[4, 4, 0, 0]} 
              onClick={(data) => viewType === "cities" && handleCityChange(data.name)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="flex items-center text-sm text-gray-500">
          {viewType === "cities" ? (
            <p className="flex items-center">
              <MapPin size={16} className="mr-1 text-indigo-500" /> 
              Click on any city to view zone breakdown
            </p>
          ) : (
            <p className="flex items-center">
              <Building size={16} className="mr-1 text-indigo-500" /> 
              Showing zones in {selectedCity}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerGeography;
