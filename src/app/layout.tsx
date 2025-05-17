"use client";

import "../styles/globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Обрабатываем ресайз экрана и устанавливаем mobile-состояние
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1200;
      setIsMobile(isNowMobile);
      setIsSidebarOpen(!isNowMobile); // автоматически скрываем сайдбар на мобилках
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // установить начальное состояние при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закрываем сайдбар при переходе на другую страницу на мобильных устройствах
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen relative">
          {/* Overlay при открытом сайдбаре на мобилках */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30"
              onClick={toggleSidebar}
            />
          )}

          {/* Сайдбар */}
          <div
            className={`${
              isMobile
                ? `fixed top-0 left-0 z-40 h-full transition-transform duration-500 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`
                : "static"
            }`}
            aria-hidden={isMobile && !isSidebarOpen}
            role="complementary"
          >
            <SideBar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
            />
          </div>

          {/* Контент */}
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
