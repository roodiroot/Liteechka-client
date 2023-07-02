"use client";

import { Transition } from "@headlessui/react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const CookieBaner = () => {
  const [show, setShow] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    if (!Cookies.get("privacy_cookies")) {
      return setShow(true);
    }
    Cookies.set("privacy_cookies", "ok", { expires: 7 });
  }, []);

  const setCookies = () => {
    setShow(false);
    Cookies.set("privacy_cookies", "ok", { expires: 7 });
  };

  const removeCookies = () => {
    navigate.push("/privacy/cookies");
  };
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <Transition
        as={Fragment}
        show={show}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
          <p className="text-gray-900 text-sm leading-6">
            Этот веб-сайт использует файлы cookie для улучшения его
            функциональности. Они используются для сбора информации о&nbsp;вашем
            взаимодействии с&nbsp;сайтом и&nbsp;помогают нам улучшить его
            работу. Ознакомьтесь с&nbsp;нашей политикой использования файлов{" "}
            <Link
              href="/privacy/cookies"
              className="text-lime-500 font-semibold"
            >
              cookie
            </Link>
            .
          </p>
          <div className="mt-4 flex items-center gap-x-5">
            <button
              onClick={setCookies}
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Принять все
            </button>
            <button
              onClick={removeCookies}
              className="text-sm leading-6 font-semibold"
            >
              Отклонить
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default CookieBaner;
