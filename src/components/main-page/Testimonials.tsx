import Image from "next/image";

const Testimonials = () => {
  const testemonials = [
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
    },
    {
      text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
      name: "Leslie Alexander",
      date: "@lindsaywalton",
      img: "https://cdn.fotosklad.ru/unsafe/06e87279ac7c4fcbb82d282b5ee9f4b2/image.jpg",
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
            Прочтите, что говорят реальные люди о наших услугах
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0px]">
            {testemonials.map((testemonial) => (
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
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
                        Whitney Francis
                      </div>
                      <div className="text-gray-600">@whitneyfrancis</div>
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
