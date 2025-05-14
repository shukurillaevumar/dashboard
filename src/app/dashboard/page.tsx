import { StatsCard } from "../../components/StatsCard";
import { ShoppingBag, DollarSign, Eye, ChevronRight } from "lucide-react";
import RevenueChart from "@/components/RevenueChart";
import { DonutChart } from "@/components/DonutChart";
import TableCards from "@/components/TableCard";

export default function DashboardPage() {
  return (
    <div className="max-w-11xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p className="text-xl font-semibold text-gray-800">Dashboard</p>
        <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-1">
          <p className="cursor-pointer hover:underline">OpenDash</p>
          <ChevronRight className="w-4 h-4" />
          <p className="cursor-pointer hover:underline">Menu</p>
          <ChevronRight className="w-4 h-4" />
          <p className="cursor-pointer hover:underline text-gray-800 font-medium">
            Dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <StatsCard
          title="Total Order"
          value="2415"
          data={[10, 30, 20, 50, 40, 60, 35]}
          icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
          color="#34d399"
        />
        <StatsCard
          title="Total Sale"
          value="$78.5K"
          data={[20, 40, 15, 35, 45, 55, 30]}
          icon={<DollarSign className="w-5 h-5 text-purple-600" />}
          color="#8b5cf6"
        />
        <StatsCard
          title="Total Visits"
          value="145.2K"
          data={[5, 25, 35, 20, 40, 60, 45]}
          icon={<Eye className="w-5 h-5 text-sky-600" />}
          color="#0ea5e9"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        <DonutChart />
        <RevenueChart />
      </div>

      <div className="mt-10">
        <TableCards />
      </div>
    </div>
  );
}
