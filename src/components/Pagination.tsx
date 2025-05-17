import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between max-sm:gap-2">
      <div className="flex items-center gap-2">
        <p className="max-sm:text-sm text-gray-500">Showing</p>
        <select className="border border-gray-200 p-1 rounded-md font-semibold max-sm:text-sm">
          <option value="10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </div>

      <p className="text-center max-sm:text-sm text-gray-500">
        Showing 1 to 2 of 2 record
      </p>

      <div className="flex items-center gap-3 text-gray-500">
        <ChevronsLeft />
        <ChevronLeft />
        <ChevronRight />
        <ChevronsRight />
      </div>
    </div>
  );
}
