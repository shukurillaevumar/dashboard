"use client";

import OrderRow from "../components/OrderRow";

interface Order {
  id: string;
  customerName: string;
  date: string;
  price: number;
  paymentType: string;
  orderType: string;
  status: string;
  platform: string;
}

export default function OrdersTable({ orders }: { orders: Order[] }) {
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
          {orders.length > 0 ? (
            orders.map((order) => <OrderRow key={order.id} order={order} />)
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4 text-gray-400">
                No matching orders
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
