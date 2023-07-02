import Image from "next/image";
import FeatureElement from "./FeatureElement";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Навес для автообилей",
    description:
      "Защищает автомобиль от погодных условий, таких как солнце, дождь, снег и другие неблагоприятные погодные явления.",
    price: "от ₽60,000 RUB",
    location: "Саранск Мордовия",
  },
  {
    id: 2,
    title: "Навес над крыльцом",
    description:
      "Выполненный в эстетичном стиле, способен значительно улучшить внешний вид здания, придавая ему солидность и индивидуальность.",
    price: "от ₽15,000 RUB",
    location: "Лямбирь Мордовия",
  },
  {
    id: 3,
    title: "Промышленные навесы",
    description:
      "Важный элемент строительства, который широко используется на производственных и торговых объектах для защиты от погоды и создания комфортных условий.",
    price: "от ₽140,000 RUB",
    location: "Саранск Мордовия",
  },
];

const FeatureSections2 = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-end max-w-2xl justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl sm:text-4xl font-bold -space-x-1">
              Красивые и&nbsp;надежные навесы на&nbsp;вашем участке
            </h2>
            <p className="mt-10 text-lg leading-8 text-gray-600">
              Мы&nbsp;изготавливаем и&nbsp;монтируем навесы любой сложности
              и&nbsp;назначения, подходящие под ваши индивидуальные размеры
              и&nbsp;требования.
            </p>
            <Image
              src="/image/main/8.jpg"
              alt=""
              width={1000}
              height={1000}
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h3 className="sr-only">Наши работы</h3>
            <ul className="-my-8">
              {features.map((f) => (
                <FeatureElement
                  key={f.id}
                  title={f.title}
                  description={f.description}
                  price={f.price}
                  location={f.location}
                />
              ))}
            </ul>
            <div className="mt-8 flex pt-8">
              <Link
                href="/galery"
                className="font-semibold text-sm leading-6 text-lime-500"
              >
                Смотреть работы
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections2;
