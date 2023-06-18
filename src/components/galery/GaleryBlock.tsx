import Image from "next/image";
import ProjectComponent from "./ProjectComponent";

const GaleryBlock = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      group: "Marketing",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      responsible: {
        name: "Michael Foster",
        job: "Co-Founder / CTO",
        img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      date: "Mar 16, 2020",
      group: "Marketing",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      responsible: {
        name: "Michael Foster",
        job: "Co-Founder / CTO",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      date: "Mar 16, 2020",
      group: "Marketing",
      title: "Boost your conversion rate",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      responsible: {
        name: "Michael Foster",
        job: "Co-Founder / CTO",
        img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <article className="pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Проектная галерея
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Навесы и металлоконструкции: надежная защита и эстетическая
            привлекательность.
          </p>
          <div className="mt-16 lg:mt-20">
            {projects.map((proj) => (
              <ProjectComponent
                key={proj.id}
                id={proj.id}
                title={proj.title}
                image={proj.image}
                date={proj.date}
                group={proj.group}
                description={proj.description}
                responsible={proj.responsible}
                className="[&:not(first)]:mt-20"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GaleryBlock;
