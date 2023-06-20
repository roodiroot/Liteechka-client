import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import FeatureElement2 from "./FeatureElement2";

const features = [
  {
    name: "Локация",
    description:
      "Предоставляем высококачественные услуги по Мордовии, гарантируя профессиональный подход и качественный результат.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Материалы",
    description:
      "Используем только сертифицированные материалы, которые гарантируют максимальную надежность наших навесов",
    icon: LockClosedIcon,
  },
  {
    name: "Замер на месте",
    description:
      "Предлагаем услугу замера на месте и работаем только после полного согласования макета с нашим клиентом.",
    icon: ArrowPathIcon,
  },
  {
    name: "Гарантия",
    description:
      "Мы уверены в качестве наших металлоконструкций и предоставляем гарантию на наши навесы до трех лет.",
    icon: FingerPrintIcon,
  },
];

const FeatureSections = () => {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <svg
        className="absolute -z-50 left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-lime-500">
          Достоинства
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Какие преимущества вы&nbsp;получите?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы&nbsp;делаем все возможное, чтобы удовлетворить каждого клиента, обеспечивая индивидуальный подход и&nbsp;высокое качество услуг.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <FeatureElement2 key={feature.name} name={feature.name} Icon={feature.icon} description={feature.description} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections;
