// app/orders/page.tsx (или /orders/page.jsx)
import { Suspense } from "react";
import OrdersTable from "@/components/OrdersTable";
import Tabs from "@/components/Tabs";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";

export default function OrdersPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen p-4 bg-white border border-gray-200 rounded-xl">
      <div className="space-y-4">
        <p className="text-lg">List of orders</p>

        {/* ⬇️ оба клиента-компонента с useSearchParams обёрнуты в Suspense */}
        <Suspense fallback={null}>
          <Tabs />
        </Suspense>

        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-xl">
          <SearchBar />
          <Suspense fallback={null}>
            <Filters />
          </Suspense>
        </div>

        <OrdersTable />
      </div>

      <Pagination />
    </div>
  );
}
