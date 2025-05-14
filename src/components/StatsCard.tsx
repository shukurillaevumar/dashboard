"use client";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { type ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string;
  data: number[];
  icon: ReactNode;
  color: string;
};

const generateChartData = (values: number[]) =>
  values.map((v, i) => ({ index: i, value: v }));

export function StatsCard({ title, value, data, icon, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ease-out min-h-[160px]">
      {/* Иконка в правом верхнем углу */}
      <div className="absolute p-2 bg-gray-100 rounded-full top-4 right-4">
        {icon}
      </div>

      {/* Основной контент */}
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>

      {/* График */}
      <div className="h-16 mt-3 sm:h-20">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={generateChartData(data)}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={color}
              strokeWidth={2}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
