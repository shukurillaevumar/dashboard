"use client";

import { motion } from "framer-motion";

const buyers = [
  {
    product: "iPhone X",
    customer: "Tiffany W. Yang",
    category: "Mobile",
    popularity: 90,
    amount: 1200,
  },
  {
    product: "iPad",
    customer: "Dale P. Warman",
    category: "Tablet",
    popularity: 85,
    amount: 1190,
  },
  {
    product: "OnePlus",
    customer: "Garth J. Terry",
    category: "Electronics",
    popularity: 70,
    amount: 999,
  },
  {
    product: "ZenPad",
    customer: "Marilyn D. Bailey",
    category: "Cosmetics",
    popularity: 78,
    amount: 1150,
  },
  {
    product: "Pixel 2",
    customer: "Denise R. Vaughan",
    category: "Appliances",
    popularity: 88,
    amount: 1180,
  },
  {
    product: "Pixel 2",
    customer: "Jeffery R. Wilson",
    category: "Mobile",
    popularity: 60,
    amount: 1180,
  },
];

const transactions = [
  {
    card: "4257 **** 7852",
    date: "11 April 2023",
    amount: 79.49,
    type: "Visa",
    payee: "Helen Warren",
  },
  {
    card: "4427 **** 4568",
    date: "28 Jan 2023",
    amount: 1254.0,
    type: "Visa",
    payee: "Kayla Lambie",
  },
  {
    card: "4265 **** 0025",
    date: "08 Dec 2022",
    amount: 784.25,
    type: "Master",
    payee: "Hugo Lavarack",
  },
  {
    card: "7845 **** 5214",
    date: "03 Dec 2022",
    amount: 485.24,
    type: "Stripe",
    payee: "Amber Scurry",
  },
  {
    card: "4257 **** 7852",
    date: "12 Nov 2022",
    amount: 8964.04,
    type: "Maestro",
    payee: "Caitlyn Gibney",
  },
];

export default function TableCards() {
  return (
    <div className="grid grid-cols-1  gap-6 mt-5">
      {/* Recent Buyers */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-2xl p-4 sm:p-6 transition-transform duration-400 hover:-translate-y-1 hover:shadow-lg ease-out"
      >
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-md sm:text-lg font-semibold text-gray-800">
            Recent Buyers
          </h2>
          <button className="text-sm px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-sm sm:text-md">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-200 bg-gray-100">
                <th className="py-2">Product</th>
                <th>Customer</th>
                <th>Category</th>
                <th>Popularity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-0 border-gray-200"
                >
                  <td className="py-2">{item.product}</td>
                  <td>{item.customer}</td>
                  <td>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </td>
                  <td>
                    <div className="bg-gray-200 h-2 w-24 rounded-full">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${item.popularity}%` }}
                      />
                    </div>
                  </td>
                  <td>${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Account Transactions */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white shadow rounded-2xl p-4 sm:p-6 transition-transform duration-400 hover:-translate-y-1 hover:shadow-lg ease-out"
      >
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-md sm:text-lg font-semibold text-gray-800">
            Account Transactions
          </h2>
          <button className="text-sm px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-sm sm:text-md">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-200 bg-gray-100">
                <th className="py-2">Card</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Payee</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-0 border-gray-200"
                >
                  <td className="py-2">{item.card}</td>
                  <td>{item.date}</td>
                  <td>${item.amount.toFixed(2)}</td>
                  <td>{item.type}</td>
                  <td>{item.payee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div> */}
    </div>
  );
}
