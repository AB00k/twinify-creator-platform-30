
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { 
  MapPin, 
  Building, 
  BarChart2, 
  RadioTower, 
  Layers, 
  SplitSquareVertical 
} from "lucide-react";

// Platform colors
const platformColors = {
  "All": "#D6BCFA", // Light Purple
  "Talabat": "#FF9F45", // Orange
  "Noon": "#F9E356", // Yellow
  "Deliveroo": "#45C4FF", // Blue
  "Careem": "#0ECB81", // Green
};

// Data for city-wise distribution
const cityData = [
  { name: "Dubai", value: 120, percentage: 60 },
  { name: "Abu Dhabi", value: 45, percentage: 22.5 },
  { name: "Sharjah", value: 25, percentage: 12.5 },
  { name: "Ajman", value: 5, percentage: 2.5 },
  { name: "Ras Al Khaimah", value: 5, percentage: 2.5 },
];

// Platform split data for cities
const cityPlatformData = {
  "Dubai": [
    { name: "Talabat", value: 50, percentage: 41.7, color: platformColors["Talabat"] },
    { name: "Noon", value: 35, percentage: 29.2, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 20, percentage: 16.7, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 15, percentage: 12.5, color: platformColors["Careem"] },
  ],
  "Abu Dhabi": [
    { name: "Talabat", value: 20, percentage: 44.4, color: platformColors["Talabat"] },
    { name: "Noon", value: 15, percentage: 33.3, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 5, percentage: 11.1, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 5, percentage: 11.1, color: platformColors["Careem"] },
  ],
  "Sharjah": [
    { name: "Talabat", value: 12, percentage: 48, color: platformColors["Talabat"] },
    { name: "Noon", value: 8, percentage: 32, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 3, percentage: 12, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 2, percentage: 8, color: platformColors["Careem"] },
  ],
  "Ajman": [
    { name: "Talabat", value: 3, percentage: 60, color: platformColors["Talabat"] },
    { name: "Noon", value: 2, percentage: 40, color: platformColors["Noon"] },
  ],
  "Ras Al Khaimah": [
    { name: "Talabat", value: 3, percentage: 60, color: platformColors["Talabat"] },
    { name: "Noon", value: 2, percentage: 40, color: platformColors["Noon"] },
  ]
};

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

// Frequency data
const frequencyData = [
  { name: "Weekly", value: 65, percentage: 32.5 },
  { name: "Bi-Weekly", value: 50, percentage: 25 },
  { name: "Monthly", value: 45, percentage: 22.5 },
  { name: "Quarterly", value: 25, percentage: 12.5 },
  { name: "Yearly", value: 15, percentage: 7.5 },
];

// Platform split for frequency
const frequencyPlatformData = {
  "Weekly": [
    { name: "Talabat", value: 30, percentage: 46.2, color: platformColors["Talabat"] },
    { name: "Noon", value: 15, percentage: 23.1, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 10, percentage: 15.4, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 10, percentage: 15.4, color: platformColors["Careem"] },
  ],
  "Bi-Weekly": [
    { name: "Talabat", value: 20, percentage: 40, color: platformColors["Talabat"] },
    { name: "Noon", value: 15, percentage: 30, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 10, percentage: 20, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 5, percentage: 10, color: platformColors["Careem"] },
  ],
  "Monthly": [
    { name: "Talabat", value: 18, percentage: 40, color: platformColors["Talabat"] },
    { name: "Noon", value: 12, percentage: 26.7, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 10, percentage: 22.2, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 5, percentage: 11.1, color: platformColors["Careem"] },
  ],
  "Quarterly": [
    { name: "Talabat", value: 10, percentage: 40, color: platformColors["Talabat"] },
    { name: "Noon", value: 8, percentage: 32, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 4, percentage: 16, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 3, percentage: 12, color: platformColors["Careem"] },
  ],
  "Yearly": [
    { name: "Talabat", value: 6, percentage: 40, color: platformColors["Talabat"] },
    { name: "Noon", value: 5, percentage: 33.3, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 2, percentage: 13.3, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 2, percentage: 13.3, color: platformColors["Careem"] },
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
  const [category, setCategory] = useState<"geography" | "frequency">("geography");
  const [viewType, setViewType] = useState<"cities" | "zones">("cities");
  const [selectedItem, setSelectedItem] = useState("Dubai");
  const [platformView, setPlatformView] = useState<"all" | "split">("all");
  
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (viewType === "cities" && category === "geography") {
      setViewType("zones");
    }
  };
  
  const handleBackToMain = () => {
    setViewType("cities");
  };
  
  let currentData;
  let chartColor = platformColors["All"]; // Default light purple

  // Determine current data based on active filters
  if (category === "geography") {
    if (viewType === "cities") {
      currentData = cityData;
    } else {
      currentData = zoneData[selectedItem as keyof typeof zoneData] || [];
    }
  } else { // frequency
    currentData = frequencyData;
  }

  // Handle platform split view
  if (platformView === "split") {
    if (category === "geography") {
      if (viewType === "cities") {
        // Don't show split view for all cities - need a specific city
        setSelectedItem("Dubai");
        setViewType("zones");
        currentData = cityPlatformData["Dubai"];
      } else {
        currentData = cityPlatformData[selectedItem as keyof typeof cityPlatformData] || [];
      }
    } else {
      // For frequency with platform split
      currentData = frequencyPlatformData[selectedItem as keyof typeof frequencyPlatformData] || [];
    }
  }
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Customer Demographics & Geography</h3>
          <p className="text-sm text-gray-500">
            {category === "geography" ? 
              (viewType === "cities" ? "Customer distribution across cities in UAE" : `Zones within ${selectedItem}`)
              : "Customer visit frequency analysis"
            }
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
          {/* Category Toggle */}
          <ToggleGroup type="single" value={category} onValueChange={(value) => {
            if (value) setCategory(value as "geography" | "frequency");
            setViewType("cities");
            setSelectedItem("Dubai");
          }}>
            <ToggleGroupItem value="geography" className="flex items-center gap-1">
              <MapPin size={16} /> Geography
            </ToggleGroupItem>
            <ToggleGroupItem value="frequency" className="flex items-center gap-1">
              <RadioTower size={16} /> Frequency
            </ToggleGroupItem>
          </ToggleGroup>
          
          {/* View Type Toggle - shown only for Geography */}
          {category === "geography" && (
            <ToggleGroup type="single" value={viewType} onValueChange={(value) => {
              if (value) setViewType(value as "cities" | "zones");
            }}>
              <ToggleGroupItem value="cities" className="flex items-center gap-1">
                <Building size={16} /> Cities
              </ToggleGroupItem>
              <ToggleGroupItem value="zones" className="flex items-center gap-1">
                <Layers size={16} /> Zones
              </ToggleGroupItem>
            </ToggleGroup>
          )}
          
          {/* Platform View Toggle */}
          <ToggleGroup type="single" value={platformView} onValueChange={(value) => {
            if (value) setPlatformView(value as "all" | "split");
          }}>
            <ToggleGroupItem value="all" className="flex items-center gap-1">
              <BarChart2 size={16} /> Total
            </ToggleGroupItem>
            <ToggleGroupItem value="split" className="flex items-center gap-1">
              <SplitSquareVertical size={16} /> Platform Split
            </ToggleGroupItem>
          </ToggleGroup>
          
          {/* Back button - shown only when viewing zones */}
          {viewType === "zones" && category === "geography" && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackToMain}
              className="flex items-center gap-1"
            >
              <MapPin size={16} /> Back to All Cities
            </Button>
          )}
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={currentData}
            margin={{ top: 5, right: 30, left: 10, bottom: 40 }}
            barSize={platformView === "split" ? 25 : 35}
            layout="horizontal"
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
              radius={[4, 4, 0, 0]} 
              onClick={(data) => handleItemClick(data.name)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              {platformView === "split" 
                ? currentData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color || chartColor} />
                  ))
                : currentData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={chartColor} />
                  ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-6">
        <div className="flex flex-wrap justify-center gap-4">
          {platformView === "split" ? (
            Object.entries(platformColors).filter(([key]) => key !== "All").map(([platform, color]) => (
              <div key={platform} className="flex items-center text-sm">
                <div 
                  className="w-3 h-3 rounded-full mr-1.5" 
                  style={{ backgroundColor: color }}
                />
                <span>{platform}</span>
              </div>
            ))
          ) : (
            <div className="flex items-center text-sm text-gray-500">
              {category === "geography" ? (
                viewType === "cities" ? (
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-1 text-purple-500" /> 
                    Click on any city to view zone breakdown
                  </p>
                ) : (
                  <p className="flex items-center">
                    <Building size={16} className="mr-1 text-purple-500" /> 
                    Showing zones in {selectedItem}
                  </p>
                )
              ) : (
                <p className="flex items-center">
                  <RadioTower size={16} className="mr-1 text-purple-500" /> 
                  Customer visit frequency analysis
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerGeography;
