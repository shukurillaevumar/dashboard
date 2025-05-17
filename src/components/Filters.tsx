import { SlidersHorizontal, Download } from "lucide-react";

export default function Filters() {
  return (
    <div className="space-x-2 flex max-sm:hidden">
      <button className="px-4 py-2 border border-gray-200 bg-white rounded-md flex gap-2 items-center cursor-pointer text-gray-600 hover:bg-black/10 transition-all duration-200 ease-in">
        <SlidersHorizontal />
        Filters
      </button>
      <button className="px-4 py-2 border border-gray-200 bg-white rounded-md flex gap-2 items-center cursor-pointer text-gray-600 hover:bg-black/10 transition-all duration-200 ease-in">
        <Download />
        Export
      </button>
    </div>
  );
}
