import React from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface CohortData {
  cohort: string;
  customers: number;
  retention: {
    month: number;
    percentage: number;
  }[];
}

const cohortData: CohortData[] = [
  {
    cohort: "Mar 2025",
    customers: 41,
    retention: [
      { month: 1, percentage: 84 }
    ]
  },
  {
    cohort: "Feb 2025",
    customers: 32,
    retention: [
      { month: 1, percentage: 89 },
      { month: 2, percentage: 64 }
    ]
  },
  {
    cohort: "Jan 2025",
    customers: 33,
    retention: [
      { month: 1, percentage: 80 },
      { month: 2, percentage: 65 },
      { month: 3, percentage: 43 }
    ]
  },
  {
    cohort: "Dec 2024",
    customers: 32,
    retention: [
      { month: 1, percentage: 89 },
      { month: 2, percentage: 68 },
      { month: 3, percentage: 41 },
      { month: 4, percentage: 34 }
    ]
  },
  {
    cohort: "Nov 2024",
    customers: 29,
    retention: [
      { month: 1, percentage: 90 },
      { month: 2, percentage: 61 },
      { month: 3, percentage: 36 },
      { month: 4, percentage: 33 },
      { month: 5, percentage: 24 }
    ]
  },
  {
    cohort: "Oct 2024",
    customers: 33,
    retention: [
      { month: 1, percentage: 89 },
      { month: 2, percentage: 65 },
      { month: 3, percentage: 35 },
      { month: 4, percentage: 32 },
      { month: 5, percentage: 23 },
      { month: 6, percentage: 19 }
    ]
  }
];

const getColorForPercentage = (percentage: number): string => {
  if (percentage >= 80) return "#10B981"; // Green for high retention
  if (percentage >= 60) return "#34D399"; // Light green
  if (percentage >= 40) return "#FCD34D"; // Yellow
  if (percentage >= 20) return "#F97316"; // Orange
  return "#EF4444"; // Red for low retention
};

const CustomerCohort = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Customer Cohort Retention Rates</h3>
        <Button variant="outline" size="sm" className="text-sm">
          Show Frequency
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cohort
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customers
              </th>
              {Array.from({ length: 6 }).map((_, i) => (
                <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cohortData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.cohort}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.customers}
                </td>
                {Array.from({ length: 6 }).map((_, i) => {
                  const month = row.retention.find(m => m.month === i + 1);
                  return (
                    <td key={i} className="px-6 py-4 whitespace-nowrap">
                      {month ? (
                        <div 
                          className="h-8 rounded-md flex items-center justify-center text-white font-medium" 
                          style={{ 
                            backgroundColor: getColorForPercentage(month.percentage),
                            width: "100px"
                          }}
                        >
                          {month.percentage.toFixed(1)}%
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerCohort;
