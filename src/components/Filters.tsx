"use client";
import { useState } from "react";
import { SlidersHorizontal, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Filters({
  onApply,
}: {
  onApply?: (values: unknown) => void;
}) {
  const [openFilters, setOpenFilters] = useState(false);
  const [openExport, setOpenExport] = useState(false); // ✅

  const handleApply = () => {
    onApply?.({});
    setOpenFilters(false);
  };

  const sheetVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 320, damping: 24 },
    },
  } as const;

  return (
    <>
      {/* Buttons */}
      <div className="flex gap-2 max-sm:hidden">
        <Button
          icon={<SlidersHorizontal className="size-4" />}
          label="Filters"
          onClick={() => setOpenFilters(true)}
        />
        <Button
          icon={<Download className="size-4" />}
          label="Export"
          onClick={() => setOpenExport(true)} // ✅
        />
      </div>

      {/* AnimatePresence for Filters */}
      <AnimatePresence>
        {openFilters && (
          <>
            <motion.div
              key="backdrop-filters"
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenFilters(false)}
            />
            <motion.aside
              key="sheet-filters"
              className="fixed inset-x-0 bottom-0 z-[9999] rounded-t-2xl bg-white p-6 shadow-2xl sm:mx-auto sm:max-w-md"
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <header className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setOpenFilters(false)}
                  className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close filters"
                >
                  <X className="size-5" />
                </button>
              </header>

              {/* Filters content */}
              <div className="space-y-6 text-sm text-gray-700 max-h-[55vh] overflow-y-auto pr-2">
                <Field label="Branch">
                  <select
                    defaultValue=""
                    className="w-full rounded-md border border-gray-300 bg-white p-2 text-gray-700 outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
                  >
                    <option value="" disabled hidden>
                      Select branch
                    </option>
                    <option value="All">All</option>
                    <option value="Yunusobod">Yunusobod</option>
                  </select>
                </Field>
                <CheckGroup label="Payment type" options={["Cash", "Card"]} />
                <CheckGroup
                  label="Order type"
                  options={["Delivery", "Pick up"]}
                />
                <CheckGroup
                  label="Platform"
                  options={[
                    "All",
                    "Telegram",
                    "Website",
                    "Click",
                    "Instagram",
                    "Yandex",
                  ]}
                />
                <CheckGroup
                  label="Status"
                  options={["New", "In progress", "Ready", "On the way"]}
                />
                <CheckGroup
                  label="Date period"
                  options={[
                    "All",
                    "Daily",
                    "Weekly",
                    "Monthly",
                    "Yearly",
                    "Custom",
                  ]}
                />
              </div>

              {/* Footer buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setOpenFilters(false)}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  className="rounded-md bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-fuchsia-700 active:scale-95"
                >
                  Apply
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* AnimatePresence for Export */}
      <AnimatePresence>
        {openExport && (
          <>
            <motion.div
              key="backdrop-filters"
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenExport(false)}
            />
            <motion.aside
              key="sheet-export"
              className="fixed inset-x-0 bottom-0 z-[9999] rounded-t-2xl bg-white p-6 shadow-2xl sm:mx-auto sm:max-w-md"
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <header className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Export</h2>
                <button
                  onClick={() => setOpenExport(false)}
                  className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close export"
                >
                  <X className="size-5" />
                </button>
              </header>

              {/* Export content (здесь можешь вставить любое содержимое) */}
              <p className="text-sm text-gray-600">
                Select the format and date range to export your data.
              </p>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-md bg-fuchsia-600 px-4 py-2 text-sm text-white shadow hover:bg-fuchsia-700">
                  Export as PDF
                </button>
                <button className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 shadow hover:bg-gray-200">
                  Export as CSV
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// -------- Button, Field, CheckGroup — те же, без изменений --------

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}
function Button({ icon, label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-600 shadow-sm transition hover:bg-gray-100 active:scale-95 disabled:opacity-50"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}
function Field({ label, children }: FieldProps) {
  return (
    <fieldset className="space-y-1">
      <label className="block text-sm font-semibold uppercase tracking-wide text-gray-600">
        {label}
      </label>
      {children}
    </fieldset>
  );
}

interface CheckGroupProps {
  label: string;
  options: string[];
}
function CheckGroup({ label, options }: CheckGroupProps) {
  return (
    <Field label={label}>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {options.map((opt) => (
          <li key={opt} className="flex items-center gap-2">
            <input
              id={opt}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-fuchsia-500"
            />
            <label htmlFor={opt} className="select-none capitalize">
              {opt}
            </label>
          </li>
        ))}
      </ul>
    </Field>
  );
}
