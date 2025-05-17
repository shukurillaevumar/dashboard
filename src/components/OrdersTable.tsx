"use client";

import OrderRow from "../components/OrderRow";
import { orders } from "../app/lib/data";
import { useSearchParams } from "next/navigation";

export default function OrdersTable() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "all";

  // Фильтруем заказы по статусу
  const filteredOrders =
    status === "all"
      ? orders
      : orders.filter((order) => order.status === status);

  return (
    <div className="overflow-x-auto rounded-xl shadow-sm">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left bg-[#F7F7F7] text-md text-gray-500">
            <th className="p-2 font-medium">Order ID</th>
            <th className="p-2 font-medium">Customer name</th>
            <th className="p-2 font-medium">Date & Time</th>
            <th className="p-2 font-medium">Price</th>
            <th className="p-2 font-medium">Payment type</th>
            <th className="p-2 font-medium">Order type</th>
            <th className="p-2 font-medium">Status</th>
            <th className="p-2 font-medium">Platform</th>
            <th className="p-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4 text-gray-400">
                No orders with status: <strong>{status}</strong>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
