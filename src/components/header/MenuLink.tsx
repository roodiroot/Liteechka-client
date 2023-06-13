"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuLinkProps {
  item: { name: string; href: string };
}
const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const router = usePathname();
  return (
    <Link
      href={item.href}
      className={`
      text-sm font-semibold leading-6 text-gray-900 hover:text-lime-500 transition
      ${router === item.href && "border-b-2 border-lime-500"}
      `}
    >
      {item.name}
    </Link>
  );
};

export default React.memo(MenuLink);
