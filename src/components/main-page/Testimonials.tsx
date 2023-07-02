import Image from "next/image";
import { g1, g2, g3, g5, m1, m2, m3, m4, m5 } from "@/utility/mediaCombain";

const Testimonials = () => {
  const testemonials = [
    {
      text: "“Отличный навес из поликарбоната! Установка прошла быстро и качественно, без мусора. Рекомендую компанию “Литеечка”!”",
      name: "Александр Иванов",
      date: "Зубова Поляна",
      img: m1,
    },
    {
      text: "“Компания предоставила профессиональный сервис и установила надежный навес на моей террасе. Очень доволен результатом!”",
      name: "Екатерина Смирнова",
      date: "Краснослободск",
      img: g1,
    },
    {
      text: "“Надежный навес из поликарбоната для моего автомобиля. Компания работает профессионально и качественно! Спасибо “Литеечка”!”",
      name: "Михаил Петров",
      date: "Инсар",
      img: m2,
    },
    {
      text: "“Компания предоставила отличный и слаженный сервис и установила качественный навес на моем дачном участке. Рекомендую “Литеечку”!”",
      name: "Анна Кузнецова",
      date: "Ковылкино",
      img: g2,
    },
    {
      text: "“Профессиональная установка надежного навеса из поликарбоната на моей террасе. Компания работает качественно и ответственно подходит к работе! Спасибо “Литеечка”!”",
      name: "Дмитрий Соколов",
      date: "Рузаевка",
      img: m3,
    },
    {
      text: "“Заказал навес из поликарбоната для своего автомобиля в компании “Литеечка” и не пожалел! Качественный материал и профессиональный монтаж.”",
      name: "Наталья Михайлова",
      date: "Темников",
      img: g3,
    },
    {
      text: "“Компания предоставила отличный сервис и установила надежный навес на моей террасе в короткие сроки. Рекомендую!”",
      name: "Илья Федоров",
      date: "Ромоданово",
      img: m4,
    },
    {
      text: "“Надежный навес из поликарбоната для моего дачного участка. Установка прошла быстро и качественно. Спасибо компании!”",
      name: "Сергей Козлов",
      date: "Лямбирь",
      img: m5,
    },
    {
      text: "“Компания работает профессионально и качественно! Навес из поликарбоната на моей террасе выглядит отлично и защищает от погодных условий.”",
      name: "Ольга Новикова",
      date: "Саранск",
      img: g5,
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-lime-500">
            Отзывы
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Прочтите, что говорят реальные люди о наших навесах
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0px]">
            {testemonials.map((testemonial) => (
              <div
                key={testemonial.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-600">
                    <p>{testemonial.text}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      src={testemonial?.img}
                      width={40}
                      height={40}
                      alt="face"
                      className="align-middle block w-10 h-10 rounded-full bg-gray-50 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testemonial.name}
                      </div>
                      <div className="text-gray-600">{testemonial.date}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
