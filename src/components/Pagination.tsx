import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between max-sm:gap-2 mt-4">
      {/* Left: Items per page selector */}
      <div className="flex items-center gap-2">
        <p className="max-sm:text-sm text-gray-500">Showing</p>
        <select
          className="border border-gray-200 p-1 rounded-md font-semibold max-sm:text-sm"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </div>

      {/* Center: Showing text */}
      <p className="text-center max-sm:text-sm text-gray-500">
        {totalItems === 0
          ? "No records to show"
          : `Showing ${from} to ${to} of ${totalItems} records`}
      </p>

      {/* Right: Pagination controls */}
      <div className="flex items-center gap-3 text-gray-500">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="disabled:opacity-30"
        >
          <ChevronsLeft />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalItems === 0}
          className="disabled:opacity-30"
        >
          <ChevronRight />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || totalItems === 0}
          className="disabled:opacity-30"
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
}
