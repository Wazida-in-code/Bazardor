"use client";

import { usePathname } from "next/navigation";
import { navItemType } from "./Header";
import Link from "next/link";

const HeaderLinks = ({ navItems }: { navItems: navItemType[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full min-w-0 gap-2 overflow-x-auto whitespace-nowrap border-b border-gray-200 py-1 sm:gap-3 lg:gap-4">
      {navItems.map((item) => (
        <Link
          className={`my-1 shrink-0 rounded-xl px-2 py-1.5 text-xs sm:px-3 sm:text-sm lg:text-base ${
            pathname === `/category/${item.slug}` ? "bg-green-500" : "bg-white"
          }`}
          key={item.id}
          href={`/category/${item.slug}`}
        >
          <div className="flex items-center gap-1">
            <span>{item.icon}</span>
            <span>{item.nameBn}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default HeaderLinks;
