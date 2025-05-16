"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, Mic, Scan, ChevronDown, Minimize } from "lucide-react";
import Image from "next/image";
import User from "../../public/user/avatar-8.jpg";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { code: "us", label: "United States" },
  { code: "de", label: "Germany" },
  { code: "it", label: "Italy" },
  { code: "es", label: "Spain" },
  { code: "ru", label: "Russia" },
];

type NavBarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const getFlagUrl = (code: string) => `https://flagcdn.com/w40/${code}.png`; // CDN returns 40px wide PNG

const NavBar = ({ isSidebarOpen, toggleSidebar }: NavBarProps) => {
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => setUserDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Закрываем выбор страны
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(target)
      ) {
        setDropdownOpen(false);
      }

      // Закрываем пользовательское меню
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(target)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[86px] flex items-center justify-between px-6 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {isSidebarOpen ? (
            <Minimize
              className="text-gray-500 cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <Menu
              className="text-gray-500 cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
          <div className="relative max-sm:hidden">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
              className="bg-gray-100 px-14 py-3 pl-10 rounded-lg focus:outline-none text-sm"
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
            <Mic className="absolute w-5 top-1/5 right-2 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          <div ref={countryDropdownRef} className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-sm cursor-pointer relative"
            >
              <img
                src={getFlagUrl(selectedCountry.code)}
                alt={selectedCountry.label}
                className="w-6 h-4 object-cover rounded-sm"
              />
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-44 z-50"
                >
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleSelect(country)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
                    >
                      <img
                        src={getFlagUrl(country.code)}
                        alt={country.label}
                        className="w-5 h-3.5 object-cover rounded-sm"
                      />
                      {country.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {isFullscreen ? (
            <Minimize
              onClick={toggleFullscreen}
              className="cursor-pointer text-gray-600"
            />
          ) : (
            <Scan
              onClick={toggleFullscreen}
              className="cursor-pointer text-gray-600"
            />
          )}

          <div ref={userDropdownRef} className="relative">
            <Image
              src={User}
              alt="image"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleUserDropdown}
            />

            <AnimatePresence>
              {userDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600">
                    Feed
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600">
                    Analytics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-600">
                    Support
                  </li>
                  <li className="px-6 py-4 hover:bg-gray-100 cursor-pointer text-gray-600 border-t border-gray-200">
                    Log Out
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
