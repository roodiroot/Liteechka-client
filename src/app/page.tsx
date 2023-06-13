import ElementPhoto from "@/components/main-page/ElementPhoto";
import Button from "@/components/utils/Button";

export default function Home() {
  return (
    <div className="relative isolate">
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
      <div className="overflow-hidden">
        <div className="pb-32 max-w-7xl mx-auto px-6 pt-36 sm:pt-[15rem] lg:pt-32 lg:px-8">
          <div className="max-w-2xl mx-auto lg:flex gap-x-14 lg:max-w-none lg:items-center lg:mx-0">
            <div className="shrink-0 mx-auto max-w-xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Производство и монтаж навесов в Мордовии
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-[28rem]">
                Идеальная защита и стильные навесы для вашего дома и бизнеса.
                Индивидуальный дизайн. Профессиональный монтаж. Надежность и
                качество материалов.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <Button label="Консультация" />
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="w-full mt-14 flex gap-8 sm:justify-start sm:pl-20 lg:pl-0 lg:mt-0">
              <div className="min-w-[11rem] w-44 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 lg:order-last xl:order-none ">
                <ElementPhoto imgSrc="/image/main/7.jpg" />
              </div>
              <div className="min-w-[11rem] w-44 sm:pt-52 xl:pt-36 flex flex-col gap-8">
                <ElementPhoto imgSrc="/image/main/8.jpg" />
                <ElementPhoto imgSrc="/image/main/6.jpg" />
              </div>
              <div className="min-w-[11rem] w-44 pt-32 sm:pt-0 flex flex-col gap-8">
                <ElementPhoto imgSrc="/image/main/3.jpg" />
                <ElementPhoto imgSrc="/image/main/5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
