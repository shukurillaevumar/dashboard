export default function OrderRow({ order }: any) {
  return (
    <tr className="border-b">
      <td className="p-2">{order.id}</td>
      <td className="p-2">{order.customer}</td>
      <td className="p-2">{order.date}</td>
      <td className="p-2">{order.price} UZS</td>
      <td className="p-2">{order.payment}</td>
      <td className="p-2">{order.type}</td>
      <td className="p-2">
        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
          {order.status}
        </span>
      </td>
      <td className="p-2">
        <span className="text-blue-500">Telegram</span>
      </td>
      <td className="p-2 space-x-2">
        <button className="px-2 py-1 text-white bg-[#EB5769] rounded text-sm cursor-pointer font-semibold">
          Reject
        </button>
        <button className="px-2 py-1 text-white bg-[#5DC983] rounded text-sm cursor-pointer font-semibold">
          Confirm
        </button>
      </td>
    </tr>
  );
}
