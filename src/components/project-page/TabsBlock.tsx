"use client";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

const TabsBlock = () => {
  return (
    <div className="mx-auto pt-32 w-full max-w-7xl sm:px-2 lg:px-8">
      <div className="mx-auto px-4 max-w-2xl lg:max-w-none lg:px-0">
        <div className="max-w-3xl">
          <p className="text-base font-semibold leading-7 text-lime-500">
            Установка
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Навеса для автомобиля
          </h2>
          <p className="text-lg leading-8 text-gray-600 mt-6">
            Мы установили навес из поликарбоната и металла для автомобиля на
            частной территории, что защитило автомобиль от дождя и солнечных
            лучей, продлив его срок службы.
          </p>
        </div>
        <div className="mt-4">
          <Tab.Group>
            <Tab.List className="-mx-4 px-0 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-900/5 px-4 sm:px-0 ">
                <div className="flex mb-[-1px] space-x-10">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`
                      ${
                        selected
                          ? "text-lime-500 border-lime-500"
                          : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-900/10"
                      }
                      whitespace-nowrap border-b  py-6 text-sm font-medium  
                      `}
                      >
                        Старт проекта
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`
                      ${
                        selected
                          ? "text-lime-500 border-lime-500"
                          : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-900/10"
                      }
                      whitespace-nowrap border-b py-6 text-sm font-medium  
                      `}
                      >
                        Работа
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`
                      ${
                        selected
                          ? "text-lime-500 border-lime-500"
                          : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-900/10"
                      }
                      whitespace-nowrap border-b  py-6 text-sm font-medium  
                      `}
                      >
                        Финиш
                      </button>
                    )}
                  </Tab>
                </div>
              </div>
            </Tab.List>
            <Tab.Panels className="pt-10 lg:pt-16">
              <Tab.Panel className="flex flex-col-reverse lg:grid grid-cols-12 gap-x-8">
                <div className="mt-6 col-span-5 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Helpful around the home1
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our customers use Organize throughout the house to bring
                    efficiency to many daily routines. Enjoy Organize in your
                    workspace, kitchen, living room, entry way, garage, and
                    more. We can't wait to see how you'll use it!
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[2/1] sm:aspect-[5/2]">
                    <Image
                      src={
                        "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg"
                      }
                      width={800}
                      height={320}
                      alt="step"
                      className="absolute object-cover w-full h-full inset-0"
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex flex-col-reverse lg:grid grid-cols-12 gap-x-8">
                <div className="mt-6 col-span-5 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Helpful around the home2
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our customers use Organize throughout the house to bring
                    efficiency to many daily routines. Enjoy Organize in your
                    workspace, kitchen, living room, entry way, garage, and
                    more. We can't wait to see how you'll use it!
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[2/1] sm:aspect-[5/2]">
                    <Image
                      src={
                        "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg"
                      }
                      width={800}
                      height={320}
                      alt="step"
                      className="absolute object-cover w-full h-full inset-0"
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex flex-col-reverse lg:grid grid-cols-12 gap-x-8">
                <div className="mt-6 col-span-5 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Helpful around the home3
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our customers use Organize throughout the house to bring
                    efficiency to many daily routines. Enjoy Organize in your
                    workspace, kitchen, living room, entry way, garage, and
                    more. We can't wait to see how you'll use it!
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[2/1] sm:aspect-[5/2]">
                    <Image
                      src={
                        "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg"
                      }
                      width={800}
                      height={320}
                      alt="step"
                      className="absolute object-cover w-full h-full inset-0"
                    />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* 
          <div className="-mx-4 px-0 flex overflow-x-auto sm:mx-0">
            <div className="flex-auto border-b border-gray-900/5 px-4 sm:px-0 ">
              <div className="flex mb-[-1px] space-x-10">
                <button className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-gray-900/10">
                  Старт проекта
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-gray-900/10">
                  Работа
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-gray-900/10">
                  Финиш
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:pt-16">
            <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-x-8">
              <div className="mt-6 col-span-5 lg:mt-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Helpful around the home
                </h3>
                <p className="mt-2 text-gray-600">
                  Our customers use Organize throughout the house to bring
                  efficiency to many daily routines. Enjoy Organize in your
                  workspace, kitchen, living room, entry way, garage, and more.
                  We can't wait to see how you'll use it!
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[2/1] sm:aspect-[5/2]">
                  <Image
                    src={
                      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg"
                    }
                    width={800}
                    height={320}
                    alt="step"
                    className="absolute object-cover w-full h-full inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TabsBlock;
