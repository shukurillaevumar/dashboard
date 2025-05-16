"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

type TabType = {
  name: string;
  value: string;
  count?: number;
};

const tabs: TabType[] = [
  { name: "All", value: "all" },
  { name: "New", value: "new", count: 1 },
  { name: "In progress", value: "in_progress" },
  { name: "Late", value: "late" },
  { name: "Ready", value: "ready" },
  { name: "On the way", value: "on_the_way" },
  { name: "Order history", value: "history" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("all");

  const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1].value);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1].value);
      }
    },
    preventScrollOnSwipe: true, // ✅ правильный проп
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="overflow-x-auto sm:overflow-visible" {...swipeHandlers}>
      <div className="flex items-center space-x-4 border-b border-gray-200 flex-nowrap sm:flex-wrap min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`relative py-2 px-3 text-md sm:text-md font-medium transition cursor-pointer whitespace-nowrap ${
              activeTab === tab.value
                ? "text-fuchsia-600 border-b-2 border-fuchsia-600"
                : "text-gray-500 hover:text-fuchsia-500"
            }`}
          >
            {tab.name}
            {tab.count && (
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
