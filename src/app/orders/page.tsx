"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OrdersTable from "@/components/OrdersTable";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import { orders } from "@/app/lib/data";

export default function OrdersPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "all";
  const search = searchParams.get("search")?.toLowerCase() || "";

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    let filtered =
      status === "all"
        ? orders
        : orders.filter((order) => order.status === status);

    if (search) {
      filtered = filtered.filter((order) =>
        order.customerName.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [status, search]);

  const totalItems = filteredOrders.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col justify-between min-h-screen p-4 bg-white border border-gray-200 rounded-xl">
      <div className="space-y-4">
        <p className="text-lg font-semibold">List of orders</p>

        {/* ✅ Tabs (фильтрация по статусу) */}
        <Suspense fallback={null}>
          <Tabs />
        </Suspense>

        {/* ✅ SearchBar и Filters */}
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-xl">
          <SearchBar />
          <Filters />
        </div>

        {/* ✅ Таблица заказов */}
        <OrdersTable orders={paginatedOrders} />
      </div>

      {/* ✅ Пагинация */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(value) => {
          setItemsPerPage(value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
