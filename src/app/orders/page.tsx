import OrdersTable from "../../components/OrdersTable";
import Tabs from "../../components/Tabs";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";

export default function OrdersPage() {
  return (
    <div className="p-4 space-y-4 bg-white border border-gray-200 rounded-xl">
      <Tabs />
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded-xl">
        <SearchBar />
        <Filters />
      </div>
      <OrdersTable />
    </div>
  );
}
