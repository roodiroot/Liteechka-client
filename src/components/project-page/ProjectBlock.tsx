import StepProject from "./StepProject";

const ProjectBlock = () => {
  const steps = [
    {
      id: 1,
      title: "Adventure-ready",
      description:
        "The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
      img: "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg",
    },
    {
      id: 2,
      title: "Minimal and clean",
      description:
        "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
      img: "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg",
    },
    {
      id: 3,
      title: "Organized",
      description:
        "Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
      img: "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg",
    },
  ];
  return (
    <div className="py-24 sm:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 md:px-6">
        <div className="max-w-3xl">
          <p className="text-base font-semibold leading-7 text-lime-500">
            Deploy faster
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better workflow
          </h2>
          <p className="text-lg leading-8 text-gray-600 mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
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
