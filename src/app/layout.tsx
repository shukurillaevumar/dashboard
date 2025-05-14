"use client";

import "../styles/globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Проверка ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen relative">
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 bg-opacity-50 z-30"
              onClick={toggleSidebar}
            />
          )}

          <div
            className={`${
              isMobile
                ? `fixed top-0 left-0 z-40 h-full transition-transform duration-500 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`
                : "static"
            }`}
          >
            <SideBar isOpen={isSidebarOpen} />
          </div>

          <div
            className={`flex flex-col transition-all duration-500 ease-in-out w-full ${
              !isMobile && isSidebarOpen ? "ml-[300px]" : "ml-0"
            }`}
          >
            <NavBar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
            <main className="p-6 overflow-y-auto bg-gray-50 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
