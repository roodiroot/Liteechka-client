interface NavigationProps {
  name: string;
  href: string;
}
export const navigation: NavigationProps[] = [
  { name: "Главная", href: "/" },
  { name: "Типы навесов", href: "/types-page" },
  { name: "Наши работы", href: "/galery" },
  // { name: "Цены", href: "/prices" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];
