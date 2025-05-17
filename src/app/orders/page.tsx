import OrdersTable from "../../components/OrdersTable";
import Tabs from "../../components/Tabs";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import Pagination from "@/components/Pagination";
import { Suspense } from "react";

export default function OrdersPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen p-4 bg-white border border-gray-200 rounded-xl">
      <div className="space-y-4">
        <p className="text-lg">List of orders</p>
        <Suspense fallback={<div>Loading filters...</div>}>
          <Tabs />
        </Suspense>
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-xl">
          <SearchBar />
          <Suspense fallback={<div>Loading filters...</div>}>
            <Filters />
          </Suspense>
        </div>
        <OrdersTable />
      </div>

      <Pagination />
    </div>
  );
}
