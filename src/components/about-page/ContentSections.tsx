import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ContentSections = () => {
  const materials = [
    {
      id: 1,
      Icon: FingerPrintIcon,
      title: "Замер на месте. ",
      description:
        "Предлагаем услугу замера на месте и работаем только после полного согласования макета с нашим клиентом.",
    },
    {
      id: 2,
      Icon: CloudArrowUpIcon,
      title: "Материалы. ",
      description:
        "Используем только сертифицированные материалы, которые гарантируют максимальную надежность наших навесов.",
    },
    {
      id: 3,
      Icon: LockClosedIcon,
      title: "Гарантия. ",
      description:
        "Мы уверены в качестве наших металлоконструкций и предоставляем гарантию на наши навесы до трех лет.",
    },
  ];
  return (
    <div className="pt-[74px]">
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto lg:px-8 lg:flex lg:justify-between xl:justify-end">
          <div className=" lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-[20rem] lg:ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                alt="bgPhoto"
                width={648}
                height={1476}
                src={
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                }
                className="w-full h-full absolute inset-0 bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents ">
            <div className="mx-auto max-w-2xl pb-1 pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 ">
              <p className="text-base font-semibold leading-7 text-lime-500">
                Как мы работаем
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Взгляните внутрь нашей компании
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                &laquo;Liteechka&raquo; занимается производством и&nbsp;монтажом
                надежных навесов из&nbsp;поликарбоната, предоставляя услуги
                по&nbsp;проектированию, консультации в&nbsp;Республике Мордовия.
              </p>
              <div className="mt-10 max-w-xl leading-7 text-gray lg:max-w-none ">
                <p>
                  &laquo;Liteechka&raquo; была основана в&nbsp;2018&nbsp;году.
                  Она начала свою деятельность с&nbsp;небольшого монтажного
                  цеха, занимавшегося установкой навесов из&nbsp;поликарбоната
                  на&nbsp;территории республики. С&nbsp;течением времени
                  компания расширила свою деятельность и&nbsp;начала
                  производство навесов из&nbsp;поликарбоната на&nbsp;собственном
                  производственном участке.
                </p>
                <dl className="mt-10 max-w-xl lg:max-w-none text-gray-600 text-base leading-7">
                  {materials.map((m) => (
                    <div className="relative pl-10 mt-8">
                      <m.Icon
                        className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-gray-900">
                        {m.title}
                      </span>
                      <span>{m.description}</span>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8">
                Компания &laquo;Liteechka&raquo; известна своим качественным
                продуктом и&nbsp;высоким уровнем обслуживания. Она работает
                с&nbsp;клиентами из&nbsp;различных отраслей, включая частных
                клиентов, архитекторов, строительные компании и&nbsp;торговые
                сети.
              </div>
              <h2 className="mt-24 text-2xl font-bold -space-x-1 text-gray-900 ">
                Гарантия качества.
              </h2>
              <p className="mt-6">
                Кроме того, компания &laquo;Liteechka&raquo; предоставляет
                бесплатный замер и&nbsp;консультацию для своих клиентов, что
                помогает им&nbsp;выбрать наиболее подходящее решение для своих
                нужд. Также компания дает гарантию на&nbsp;свои проекты
                до&nbsp;трех лет, что говорит о&nbsp;высоком качестве продукции
                и&nbsp;уверенности в&nbsp;своих специалистах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
