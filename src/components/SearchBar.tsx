"use client";
import { useState } from "react";
import { Search, Mic } from "lucide-react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <div className="relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search by order ID, customer,..."
        className="px-14 py-3 pl-10 rounded-lg border border-gray-200 text-sm bg-white hover:border-fuchsia-600 outline-fuchsia-600"
      />
      <Search className="absolute w-5 top-1/5 left-2 text-gray-400" />
      {input && (
        <span
          className="absolute top-1/5 right-10 text-gray-400 cursor-pointer"
          onClick={() => setInput("")}
        >
          ✕
        </span>
      )}
    </div>
  );
}
