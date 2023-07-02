import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "./ContactForm";

const ContactBlock = () => {
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
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NAMBER}`}
                className="flex gap-x-4 [&:not(first)]:mt-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Телефон</span>
                  <PhoneIcon className="w-6 h-6 text-gray-600" />
                </dt>
                <dd>+7 (987) 570-4514</dd>
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="flex gap-x-4 [&:not(first)]:mt-4"
              >
                <dt className="flex-none">
                  <span className="sr-only">Электронная почта</span>
                  <EnvelopeIcon className="w-6 h-6 text-gray-600" />
                </dt>
                <dd>voodivood@gmail.com</dd>
              </a>
            </dl>
          </div>
        </div>
        <div className="px-6 pb-1 pt-20 lg:px-8 lg:pt-48">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
