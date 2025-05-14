"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 45, order: 20 },
  { name: "Feb", revenue: 35, order: 10 },
  { name: "Mar", revenue: 65, order: 15 },
  { name: "Apr", revenue: 70, order: 12 },
  { name: "May", revenue: 50, order: 30 },
  { name: "Jun", revenue: 60, order: 25 },
  { name: "Jul", revenue: 55, order: 10 },
  { name: "Aug", revenue: 60, order: 20 },
  { name: "Sep", revenue: 40, order: 18 },
  { name: "Oct", revenue: 65, order: 15 },
  { name: "Nov", revenue: 70, order: 12 },
  { name: "Dec", revenue: 75, order: 8 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow w-full mt-5 transition-transform duration-400 hover:-translate-y-1 hover:shadow-lg ease-out">
      <h2 className="text-lg font-semibold mb-4 border-b p-4 border-gray-200">
        Revenue
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
            barSize={16}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#f43f5e"
            strokeWidth={2}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
