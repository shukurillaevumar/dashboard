"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Online", value: 200 },
  { name: "Offline", value: 100 },
  { name: "Retail", value: 131 },
  { name: "Home&Kitchen", value: 180 },
];

const COLORS = ["#8b5cf6", "#f87171", "#facc15", "#ffa550"]; // фиолетовый, красный, жёлтый

export function DonutChart() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full transition-transform duration-400 hover:-translate-y-1 hover:shadow-lg ease-out">
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-medium text-gray-600">Last Month Sales</p>
        <button className="text-lg px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition">
          Export
        </button>
      </div>
      <div className="relative w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-lg text-gray-500">Total</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4 text-sm flex-wrap">
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: COLORS[0] }}
          />
          <span>Online</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: COLORS[1] }}
          />
          <span>Offline</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: COLORS[2] }}
          />
          <span>Retail</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: COLORS[3] }}
          />
          <span>Home&Kitchen</span>
        </div>
      </div>
    </div>
  );
}
