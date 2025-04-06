
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter, UserRound } from "lucide-react";

const CustomerProfile = () => {
  const [spendingRange, setSpendingRange] = useState([0, 5000]);
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <UserRound className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-semibold">Customer Profile Filter</h3>
        </div>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
          Apply Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search by Name/ID */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Customer</Label>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input id="search" placeholder="Name or ID" className="pl-9" />
          </div>
        </div>

        {/* Platform */}
        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <Select>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="talabat">Talabat</SelectItem>
              <SelectItem value="noon">Noon</SelectItem>
              <SelectItem value="deliveroo">Deliveroo</SelectItem>
              <SelectItem value="careem">Careem</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Select>
            <SelectTrigger id="city">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
              <SelectItem value="ajman">Ajman</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Visit Frequency */}
        <div className="space-y-2">
          <Label htmlFor="frequency">Visit Frequency</Label>
          <Select>
            <SelectTrigger id="frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frequencies</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Spending Range */}
        <div className="space-y-2 col-span-1 md:col-span-2">
          <div className="flex justify-between items-center">
            <Label>Spending Range (AED)</Label>
            <div className="text-sm text-gray-500">
              {spendingRange[0]} - {spendingRange[1]}
            </div>
          </div>
          <Slider
            defaultValue={[0, 5000]}
            max={10000}
            step={100}
            onValueChange={(value) => setSpendingRange(value)}
            className="py-4"
          />
        </div>

        {/* Customer Type */}
        <div className="space-y-3 col-span-1 md:col-span-2">
          <Label>Customer Type</Label>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="new" />
              <label htmlFor="new" className="text-sm">New Customer</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="repeat" defaultChecked />
              <label htmlFor="repeat" className="text-sm">Repeat Customer</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" defaultChecked />
              <label htmlFor="premium" className="text-sm">Premium Customer</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="promo" />
              <label htmlFor="promo" className="text-sm">Promo User</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button variant="outline" className="mr-2">Reset Filters</Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Filter className="h-4 w-4 mr-2" />
          Filter Customers
        </Button>
      </div>
    </div>
  );
};

export default CustomerProfile;
