
import React, { useState } from "react";
import { 
  ShoppingBag, 
  Search, 
  ChevronDown,
  FilterX,
  Check,
  X,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample data for order history
const orderHistoryData = [
  {
    id: "1",
    platform: "Talabat",
    platformColor: "#FF9F45", // Orange
    orderNumber: "T-8976543",
    dateTime: "2023-09-12 13:45",
    status: "Delivered",
    subtotal: 85.50,
    discount: true
  },
  {
    id: "2",
    platform: "Noon",
    platformColor: "#F9E356", // Yellow
    orderNumber: "N-6587432",
    dateTime: "2023-09-10 19:20",
    status: "Delivered",
    subtotal: 120.75,
    discount: false
  },
  {
    id: "3",
    platform: "Careem",
    platformColor: "#0ECB81", // Green
    orderNumber: "C-3421765",
    dateTime: "2023-09-08 12:10",
    status: "Delivered",
    subtotal: 94.25,
    discount: true
  },
  {
    id: "4",
    platform: "Deliveroo",
    platformColor: "#45C4FF", // Blue
    orderNumber: "D-9078231",
    dateTime: "2023-09-05 20:30",
    status: "Cancelled",
    subtotal: 65.00,
    discount: true
  },
  {
    id: "5",
    platform: "Talabat",
    platformColor: "#FF9F45", // Orange
    orderNumber: "T-7865432",
    dateTime: "2023-09-01 17:15",
    status: "Delivered",
    subtotal: 112.50,
    discount: false
  },
  {
    id: "6",
    platform: "Noon",
    platformColor: "#F9E356", // Yellow
    orderNumber: "N-5432167",
    dateTime: "2023-08-28 13:40",
    status: "Processing",
    subtotal: 78.25,
    discount: true
  },
  {
    id: "7",
    platform: "Careem",
    platformColor: "#0ECB81", // Green
    orderNumber: "C-2345678",
    dateTime: "2023-08-25 19:50",
    status: "Delivered",
    subtotal: 145.75,
    discount: false
  },
  {
    id: "8",
    platform: "Deliveroo",
    platformColor: "#45C4FF", // Blue
    orderNumber: "D-8765432",
    dateTime: "2023-08-20 12:30",
    status: "Delivered",
    subtotal: 92.00,
    discount: true
  }
];

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [filteredOrders, setFilteredOrders] = useState(orderHistoryData);
  
  // Get unique platforms and statuses for filters
  const platforms = [...new Set(orderHistoryData.map(order => order.platform))];
  const statuses = [...new Set(orderHistoryData.map(order => order.status))];
  
  // Apply filters when search term or selected filters change
  React.useEffect(() => {
    let result = orderHistoryData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(order => 
        order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by selected statuses
    if (selectedStatus.length > 0) {
      result = result.filter(order => selectedStatus.includes(order.status));
    }
    
    // Filter by selected platforms
    if (selectedPlatforms.length > 0) {
      result = result.filter(order => selectedPlatforms.includes(order.platform));
    }
    
    setFilteredOrders(result);
  }, [searchTerm, selectedStatus, selectedPlatforms]);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedStatus([]);
    setSelectedPlatforms([]);
  };

  return (
    <Card className="bg-white rounded-xl shadow-sm mb-8">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <CardTitle className="text-lg font-semibold">Order History</CardTitle>
          <div className="mt-2 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="flex items-center gap-1"
              disabled={!searchTerm && selectedStatus.length === 0 && selectedPlatforms.length === 0}
            >
              <FilterX className="h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by order number..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            {/* Status Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Status
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {statuses.map(status => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={selectedStatus.includes(status)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStatus([...selectedStatus, status]);
                      } else {
                        setSelectedStatus(selectedStatus.filter(s => s !== status));
                      }
                    }}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Platform Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Platform
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {platforms.map(platform => (
                  <DropdownMenuCheckboxItem
                    key={platform}
                    checked={selectedPlatforms.includes(platform)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPlatforms([...selectedPlatforms, platform]);
                      } else {
                        setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
                      }
                    }}
                  >
                    {platform}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Filter badges */}
        {(selectedStatus.length > 0 || selectedPlatforms.length > 0) && (
          <div className="flex flex-wrap gap-1 mb-3">
            {selectedStatus.map(status => (
              <Badge key={status} variant="secondary" className="flex items-center gap-1">
                {status}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setSelectedStatus(selectedStatus.filter(s => s !== status))}
                />
              </Badge>
            ))}
            {selectedPlatforms.map(platform => (
              <Badge key={platform} variant="secondary" className="flex items-center gap-1">
                {platform}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform))}
                />
              </Badge>
            ))}
          </div>
        )}
        
        {/* Order table */}
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Platform</TableHead>
                <TableHead>Order #</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead>Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: order.platformColor }}
                        />
                        <span>{order.platform}</span>
                      </div>
                    </TableCell>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        {order.dateTime}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn("font-normal", getStatusColor(order.status))}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>AED {order.subtotal.toFixed(2)}</TableCell>
                    <TableCell>
                      {order.discount ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-gray-400" />
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No orders found matching your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderHistory;
