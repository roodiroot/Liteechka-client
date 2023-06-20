"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Button from "../utils/Button";
import Link from "next/link";

const ContactBlock = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="relative isolate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:pt-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute -z-50 left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="white"
                ></rect>
                <svg x="100%" y="-1" className="overflow-visible text-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                ></rect>
              </svg>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Контакты для связи
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Если у&nbsp;вас есть какие-либо вопросы или комментарии,
              мы&nbsp;будем рады их&nbsp;услышать. Пожалуйста, заполните форму
              обратной связи, и&nbsp;мы&nbsp;свяжемся с&nbsp;вами
              в&nbsp;ближайшее время.
            </p>
            <dl className="mt-10 leading-7 text-gray-600">
              <div className="flex gap-x-4 [&:not(first)]:mt-4">
                <dt className="flex-none">
                  <span className="sr-only">Адрес</span>
                  <BuildingOffice2Icon className="w-6 h-6 text-gray-600" />
                </dt>
                <dd>
                  Рабочая 185, Саранск <br /> Мордовия 430034
                </dd>
              </div>
              <div className="flex gap-x-4 [&:not(first)]:mt-4">
                <dt className="flex-none">
                  <span className="sr-only">Телефон</span>
                  <PhoneIcon className="w-6 h-6 text-gray-600" />
                </dt>
                <dd>+7 (987) 570-4514</dd>
              </div>
              <div className="flex gap-x-4 [&:not(first)]:mt-4">
                <dt className="flex-none">
                  <span className="sr-only">Электронная почта</span>
                  <EnvelopeIcon className="w-6 h-6 text-gray-600" />
                </dt>
                <dd>voodivood@gmail.com</dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="" className="px-6 pb-1 pt-20 lg:px-8 lg:pt-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Имя
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full outline-0 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Фамилия
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Электронная почта
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Номер телефона
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 outline-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Сообщение
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 outline-0 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={`
                ${agreed ? "bg-lime-500" : "bg-gray-200"}
                flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500
                `}
                  >
                    <span className="sr-only">
                      Политика по использованию персональных данных.
                    </span>
                    <span
                      aria-hidden="true"
                      className={`
                  ${agreed ? "translate-x-3.5" : "translate-x-0"}
                  h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out
                  `}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  Согласие с{" "}
                  <Link href="/privacy" className="font-semibold text-lime-500">
                    Политикой конфиденциальности
                  </Link>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <Button label="Отправить" className="text-center block" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactBlock;
