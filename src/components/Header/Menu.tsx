/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TMenu } from "@/types/menu.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Menu = ({ items, closeMenu }: { items: TMenu[]; closeMenu?: any }) => {
  const currentSlug = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(currentSlug);

  useEffect(() => {
    setActiveMenu(currentSlug);
  }, [currentSlug]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-10">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          onClick={() => (setActiveMenu(item?.path), closeMenu())}
          className={`text-base font-normal capitalize text-white py-0.5 lg:py-7 relative text-center group`}
        >
          {item.label}
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-7 ${
              activeMenu === item?.path && "!w-7"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
