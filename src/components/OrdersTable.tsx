import OrderRow from "../components/OrderRow";
import { orders } from "../app/lib/data";

export default function OrdersTable() {
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
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
