import Link from "next/link";
import { navigation } from "@/constanse";

const Footer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto mt-40 overflo-hidden px-6 pb-20 sm:pb-24 sm:mt-64 ">
      <div className="sm:flex columns-2 sm:justify-center -mb-6 sm:space-x-12">
        {navigation.map((nav) => (
          <div className="pb-6">
            <Link
              href={nav.href}
              className="transition text-gray-600 text-xs leading-6 hover:text-gray-500"
            >
              {nav.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 justify-center flex space-x-12">
        <a href="" className="text-inherit text-gray-600 ">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-gray-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="" className="text-inherit text-gray-600 ">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-gray-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="" className="text-inherit text-gray-600 ">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-gray-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="mt-8 text-center text-xs text-gray-600 leading-6">
        © 2023 Liteechka, <Link href="/privacy">Все права защищены</Link>.
      </div>
    </div>
  );
};

export default Footer;
