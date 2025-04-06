
import React, { useState } from "react";
import ExperienceBarChart from "./ExperienceBarChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin,
  Building, 
  SplitSquareVertical,
  BarChart2,
  ChevronLeft
} from "lucide-react";

// Platform colors
const platformColors = {
  "Talabat": "#FF9F45", // Orange
  "Noon": "#F9E356", // Yellow
  "Deliveroo": "#45C4FF", // Blue
  "Careem": "#0ECB81", // Green
};

// Default color for all bars
const defaultPurpleColor = "#D6BCFA"; // Light Purple

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

// Data for area-wise distribution
const areaData = {
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

// Area platform split data
const areaPlatformData = {
  "Downtown": [
    { name: "Talabat", value: 15, percentage: 42.9, color: platformColors["Talabat"] },
    { name: "Noon", value: 10, percentage: 28.6, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 6, percentage: 17.1, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 4, percentage: 11.4, color: platformColors["Careem"] },
  ],
  "Marina": [
    { name: "Talabat", value: 12, percentage: 40, color: platformColors["Talabat"] },
    { name: "Noon", value: 9, percentage: 30, color: platformColors["Noon"] },
    { name: "Deliveroo", value: 6, percentage: 20, color: platformColors["Deliveroo"] },
    { name: "Careem", value: 3, percentage: 10, color: platformColors["Careem"] },
  ],
  // More areas would be defined here
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
  // More frequency splits would be defined here
};

const CustomerGeography = () => {
  // Main category (Geography vs Frequency)
  const [category, setCategory] = useState<"geography" | "frequency">("geography");
  
  // Geography subcategories
  const [geoView, setGeoView] = useState<"cities" | "areas">("cities");
  
  // For platform split view
  const [platformView, setPlatformView] = useState<"total" | "split">("total");
  
  // Selected item for drilldown
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  // Handle item click for drilldown effect
  const handleItemClick = (item: any) => {
    if (category === "geography" && geoView === "cities" && !selectedItem) {
      setSelectedItem(item.name);
      setGeoView("areas");
    } else if (category === "frequency" && !selectedItem) {
      setSelectedItem(item.name);
    }
  };
  
  // Handle back button click
  const handleBackClick = () => {
    if (category === "geography" && geoView === "areas") {
      setGeoView("cities");
      setSelectedItem(null);
    } else {
      setSelectedItem(null);
    }
  };
  
  // Determine which data to display based on current selections
  let currentData;
  let chartTitle = "";
  let chartSubtitle = "";
  
  if (category === "geography") {
    if (geoView === "cities") {
      chartTitle = "Customer Distribution by City";
      chartSubtitle = "Number of customers across major cities in UAE";
      
      if (platformView === "total" || !selectedItem) {
        currentData = cityData;
      } else {
        // When viewing platform split for a specific city
        currentData = cityPlatformData[selectedItem as keyof typeof cityPlatformData] || [];
      }
    } else { // areas view
      if (!selectedItem) {
        // If we're in areas view but no city is selected, default to Dubai
        setSelectedItem("Dubai");
      }
      
      chartTitle = `Areas in ${selectedItem || "Dubai"}`;
      chartSubtitle = "Customer distribution across different areas";
      
      if (platformView === "total") {
        currentData = areaData[selectedItem as keyof typeof areaData] || [];
      } else {
        // For platform split in a specific area
        // As a fallback, show the first area's platform split if the selected area doesn't have data
        const areaList = areaData[selectedItem as keyof typeof areaData] || [];
        const firstArea = areaList[0]?.name;
        
        currentData = firstArea 
          ? areaPlatformData[firstArea as keyof typeof areaPlatformData] || [] 
          : [];
      }
    }
  } else { // frequency category
    chartTitle = "Customer Visit Frequency";
    chartSubtitle = "How often customers visit across platforms";
    
    if (platformView === "total" || !selectedItem) {
      currentData = frequencyData;
    } else {
      // When viewing platform split for a specific frequency
      currentData = frequencyPlatformData[selectedItem as keyof typeof frequencyPlatformData] || [];
    }
  }
  
  // Set default colors for all data items if using total view
  if (platformView === "total" && currentData) {
    currentData = currentData.map(item => ({
      ...item,
      color: defaultPurpleColor
    }));
  }
  
  return (
    <Card className="bg-white rounded-xl shadow-sm mb-8">
      <CardHeader className="pb-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <div>
            <CardTitle className="text-lg font-semibold">{chartTitle}</CardTitle>
            <p className="text-sm text-gray-500">{chartSubtitle}</p>
          </div>
          
          {/* Back button - only show when in areas view or when a specific frequency is selected */}
          {((category === "geography" && geoView === "areas") || 
            (category === "frequency" && selectedItem)) && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackClick}
              className="flex items-center gap-1 mt-2 md:mt-0"
            >
              <ChevronLeft size={16} /> Back
            </Button>
          )}
        </div>
        
        {/* Primary Tab: Geography vs Frequency */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Tabs 
            value={category} 
            onValueChange={(value) => {
              setCategory(value as "geography" | "frequency");
              setSelectedItem(null);
              setGeoView("cities");
            }}
            className="w-full md:w-auto"
          >
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="geography" className="flex items-center gap-1 w-full md:w-auto">
                <MapPin size={16} className="text-blue-500" /> 
                <span className={category === "geography" ? "text-blue-500" : ""}>Geography</span>
              </TabsTrigger>
              <TabsTrigger value="frequency" className="flex items-center gap-1 w-full md:w-auto">
                <BarChart2 size={16} /> 
                <span>Frequency</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Secondary navigation options - only show when applicable */}
        <div className="flex flex-wrap gap-4 mt-4">
          {/* Only show Cities/Areas toggle when in Geography category */}
          {category === "geography" && (
            <Tabs 
              value={geoView} 
              onValueChange={(value) => {
                setGeoView(value as "cities" | "areas");
                if (value === "cities") {
                  setSelectedItem(null);
                }
              }}
              className="w-full md:w-auto"
            >
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="cities" className="flex items-center gap-1 w-full md:w-auto">
                  <Building size={16} /> 
                  <span className={geoView === "cities" ? "text-blue-500" : ""}>Cities</span>
                </TabsTrigger>
                <TabsTrigger value="areas" className="flex items-center gap-1 w-full md:w-auto">
                  <MapPin size={16} /> 
                  <span>Areas</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}
          
          {/* Total vs Platform Split toggle - show for both categories */}
          <Tabs 
            value={platformView} 
            onValueChange={(value) => setPlatformView(value as "total" | "split")}
            className="w-full md:w-auto"
          >
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="total" className="flex items-center gap-1 w-full md:w-auto">
                <BarChart2 size={16} /> Total
              </TabsTrigger>
              <TabsTrigger value="split" className="flex items-center gap-1 w-full md:w-auto">
                <SplitSquareVertical size={16} /> Platform Split
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Chart Component */}
        <ExperienceBarChart 
          data={currentData || []}
          layout="horizontal"
          barSize={platformView === "split" ? 30 : 40}
          defaultColor={defaultPurpleColor}
          onClick={handleItemClick}
          showPercentage={true}
        />
        
        {/* Legend */}
        {platformView === "split" && (
          <div className="flex justify-center mt-6">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(platformColors).map(([platform, color]) => (
                <div key={platform} className="flex items-center text-sm">
                  <div 
                    className="w-3 h-3 rounded-full mr-1.5" 
                    style={{ backgroundColor: color }}
                  />
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomerGeography;
