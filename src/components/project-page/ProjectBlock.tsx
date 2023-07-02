import StepProject from "./StepProject";
import img from "../../../public/image/drawings/1.png";
import img2 from "../../../public/image/drawings/2.png";
import img3 from "../../../public/image/drawings/3.png";

const ProjectBlock = () => {
  const projects = {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Март 16, 2022",
    group: "Установка",
    title: "Установка навеса для автомобиля",
    description:
      "Мы установили навес из поликарбоната и металла для автомобиля на частной территории, что защитило автомобиль от дождя и солнечных лучей, продлив его срок службы.",
    responsible: {
      name: "Киушкин Игорь",
      job: "Мастер проекта",
      img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };
  const steps = [
    {
      id: 1,
      title: "Автомобильные навесы",
      description:
        "Помогают сохранить внешний вид автомобиля, продлить его срок службы и сэкономить время и средства на ремонт и обслуживание.",
      img: img,
    },
    {
      id: 2,
      title: "Террасные навесы",
      description:
        "Создают уютную атмосферу для отдыха, встреч с друзьями и семейных мероприятий на открытом воздухе.",
      img: img2,
    },
    {
      id: 3,
      title: "Мангальные и барбекю навесы",
      description:
        "обеспечивают защиту от погодных условий, позволяя вам готовить на открытом воздухе в любое время года.",
      img: img3,
    },
  ];
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 md:px-6">
        <div className="max-w-3xl">
          <p className="text-base font-semibold leading-7 text-lime-500">
            Многообразие форм
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Типы навесов
          </h2>
          <p className="text-lg leading-8 text-gray-600 mt-6">
            Разные типы навесов имеют разные формы и&nbsp;размеры, поэтому важно
            выбрать тот, который наилучшим образом соответствует вашим
            потребностям.
          </p>
        </div>
        <div className="mt-10 border-t border-gray-900/5 sm:mt-20">
          {steps.map((step) => (
            <StepProject
              key={step.id}
              title={step.title}
              description={step.description}
              img={step.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
