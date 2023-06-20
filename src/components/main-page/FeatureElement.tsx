import React from "react";

interface FeatureElementProps {
    title: string
    description: string;
    price: string;
    location: string;
}
const FeatureElement:React.FC<FeatureElementProps> = ({title, description, price, location}) => {
  return (
    <li className="py-8 border-b border-gray-100">
                <div className="relative flex flex-wrap gap-x-3">
                  <div className="sr-only">Название</div>
                  <div className="w-full font-semibold text-lg text-gray-900 -space-x-1">
                    {title}
                  </div>
                  <div className="sr-only">Описание</div>
                  <div className="mt-2 w-full leading-8 text-gray-600">
                    {description}
                  </div>
                  <div className="sr-only">Цена</div>
                  <div className="mt-4 leading-7 font-semibold text-gray-900">
                    {price}
                  </div>
                  <div className="sr-only">Локация</div>
                  <div className="mt-4 flex items-center gap-3 leading-7 text-gray-600">
                    <svg
                      viewBox="0 0 2 2"
                      className="flex-none w-0.5 h-0.5 fill-gray-600"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    {location}
                  </div>
                </div>
              </li>
  )
};

export default FeatureElement;
