"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobilMenu from "./MobilMenu";
import Logo from "../logo/Logo";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import MenuLink from "./MenuLink";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Наши работы", href: "/galery" },
  { name: "Цены", href: "/prices" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useWindowScroll();

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 bg-white transition duration-500
        ${scrollY > 100 && "shadow-sm"}
        ${scrollY > 100 && "bg-white/[82%]"}
        ${scrollY > 100 && "backdrop-blur-sm"}
    `}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo size={18} />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <MenuLink key={item.name} item={item} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <MobilMenu
          open={mobileMenuOpen}
          setOpen={setMobileMenuOpen}
          navlist={navigation}
        />
      </nav>
    </header>
  );
};

export default Header;
