"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/openDashLogo/logo.png";
import {
  House,
  Calendar,
  StickyNote,
  Box,
  FileText,
  Server,
  ChartNoAxesColumnIncreasing,
  Palette,
  ChartNoAxesGantt,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

type SideBarProps = {
  isOpen: boolean;
};

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: <House /> },
  { name: "Calendar", href: "/calendar", icon: <Calendar /> },
  { name: "Starter Pages", href: "/starterPages", icon: <StickyNote /> },
  { name: "Components", href: "/components", icon: <Box />, chevron: true },
  { name: "Forms", href: "/forms", icon: <FileText />, chevron: true },
  { name: "Tables", href: "/tables", icon: <Server /> },
  { name: "Chart", href: "/chart", icon: <ChartNoAxesColumnIncreasing /> },
  { name: "Icons", href: "/icons", icon: <Palette /> },
  { name: "Level", href: "/level", icon: <ChartNoAxesGantt />, chevron: true },
  {
    name: "Badge Items",
    href: "/badgeItems",
    icon: <BadgeCheck />,
    badge: "Hot",
  },
];

const SideBar = ({ isOpen }: SideBarProps) => {
  const pathname = usePathname();

  const linkClass = (href: string, chevron = false) =>
    `w-full py-2 px-2 text-left rounded-md transition-all duration-200 ease-in-out cursor-pointer flex items-center ${
      chevron ? "justify-between" : "justify-start"
    } gap-2 ${
      pathname === href
        ? "bg-fuchsia-100 text-fuchsia-600 font-semibold shadow-inner"
        : "bg-transparent text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-500"
    }`;

  return (
    <motion.div
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-[300px] h-screen bg-white border-r border-gray-200 fixed top-0 left-0 z-50"
    >
      <div className="p-5 flex items-center justify-center border-b border-gray-200">
        {isOpen && (
          <Link href="/dashboard">
            <Image
              src={Logo}
              alt="logo"
              width={180}
              className="cursor-pointer"
            />
          </Link>
        )}
      </div>
      <div className="flex flex-col justify-center p-4 gap-2">
        {isOpen && <p className="text-gray-600">Page</p>}
        {menuItems.map(({ name, href, icon, chevron, badge }) => (
          <Link href={href} key={name} className={linkClass(href, chevron)}>
            <div className="flex items-center gap-2">
              {icon}
              {isOpen && <span>{name}</span>}
            </div>
            {isOpen && (
              <>
                {badge && (
                  <span className="py-1 px-2 bg-black text-white rounded-md font-semibold">
                    {badge}
                  </span>
                )}
                {chevron && <ChevronRight />}
              </>
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
