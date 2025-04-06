
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ExperienceBarChart from "./ExperienceBarChart";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { 
  MapPin, 
  Building, 
  RadioTower, 
  SplitSquareVertical,
  BarChart2
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
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">{chartTitle}</h3>
          <p className="text-sm text-gray-500">{chartSubtitle}</p>
        </div>
        
        {/* Primary Toggle: Geography vs Frequency */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3 items-start md:items-center">
          <ToggleGroup 
            type="single" 
            value={category} 
            onValueChange={(value) => {
              if (value) {
                setCategory(value as "geography" | "frequency");
                setSelectedItem(null);
              }
            }}
            className="mb-2 md:mb-0"
          >
            <ToggleGroupItem value="geography" className="flex items-center gap-1">
              <MapPin size={16} /> Geography
            </ToggleGroupItem>
            <ToggleGroupItem value="frequency" className="flex items-center gap-1">
              <RadioTower size={16} /> Frequency
            </ToggleGroupItem>
          </ToggleGroup>
          
          {/* Secondary toggles based on primary selection */}
          <div className="flex gap-3">
            {/* City/Area toggle - only show for geography */}
            {category === "geography" && (
              <ToggleGroup 
                type="single" 
                value={geoView} 
                onValueChange={(value) => {
                  if (value) {
                    setGeoView(value as "cities" | "areas");
                    if (value === "cities") {
                      setSelectedItem(null);
                    } else if (!selectedItem) {
                      setSelectedItem("Dubai"); // Default to Dubai when switching to areas
                    }
                  }
                }}
              >
                <ToggleGroupItem value="cities" className="flex items-center gap-1">
                  <Building size={16} /> Cities
                </ToggleGroupItem>
                <ToggleGroupItem value="areas" className="flex items-center gap-1">
                  <MapPin size={16} /> Areas
                </ToggleGroupItem>
              </ToggleGroup>
            )}
            
            {/* Total vs Platform Split toggle - show for both */}
            <ToggleGroup 
              type="single" 
              value={platformView} 
              onValueChange={(value) => {
                if (value) {
                  setPlatformView(value as "total" | "split");
                }
              }}
            >
              <ToggleGroupItem value="total" className="flex items-center gap-1">
                <BarChart2 size={16} /> Total
              </ToggleGroupItem>
              <ToggleGroupItem value="split" className="flex items-center gap-1">
                <SplitSquareVertical size={16} /> Platform Split
              </ToggleGroupItem>
            </ToggleGroup>
            
            {/* Back button - only show when in areas view or when a specific frequency is selected */}
            {((category === "geography" && geoView === "areas") || 
             (category === "frequency" && selectedItem)) && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBackClick}
                className="flex items-center gap-1"
              >
                Back
              </Button>
            )}
          </div>
        </div>
      </div>
      
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
    </div>
  );
};

export default CustomerGeography;
