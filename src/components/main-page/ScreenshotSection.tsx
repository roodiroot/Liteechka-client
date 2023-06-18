import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ScreenshotSection = () => {
  return (
    <div className="py-24 sm:py-32 relative">
      <svg
        className="absolute -z-10 top-0 left-0 right-0 h-[64rem] w-full stroke-gray-200 mask"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        ></rect>
      </svg>
      <div className="w-full max-w-7xl mx-auto lg:px-8 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="max-w-2xl mx-auto lg:max-w-lg lg:mx-0">
              <p className="text-base font-semibold leading-7 text-lime-500">
                Deploy faster
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </h2>
              <p className="text-lg leading-8 text-gray-600 mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl lg:max-w-none text-gray-600 text-base leading-7">
                <div className="relative pl-10">
                  <CloudArrowUpIcon
                    className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-gray-900">
                    Push to deploy.
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </div>
                <div className="relative pl-10 mt-8">
                  <FingerPrintIcon
                    className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-gray-900 ">
                    Push to deploy.
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </div>
                <div className="relative pl-10 mt-8">
                  <LockClosedIcon
                    className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-gray-900 ">
                    Push to deploy.
                  </span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </div>
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-lime-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:maw-w-none">
              <div className="absolute top-0 bottom-0 left-0 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-lime-100/20 ring-1"></div>
              <Image
                src="/image/main/14.jpg"
                alt="photo"
                width={912}
                height={540}
                className="block -mb-12 w-[57rem] max-w-none align-middle rounded-t-xl ring-1 bg-slate-300 h-auto"
              />
              <div className="absolute inset-0 ring-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSection;
