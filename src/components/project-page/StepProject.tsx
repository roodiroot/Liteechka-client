import Image from "next/image";
import React from "react";

interface StepProjProps {
  title: string;
  description: string;
  img: string;
}
const StepProject: React.FC<StepProjProps> = ({ title, description, img }) => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 mt-20">
      <div className="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex-auto lg:col-span-7 xl:col-span-8 aspect-[5/2] relative overflow-hidden rounded-lg">
        <Image
          src={img}
          width={800}
          height={320}
          alt="step"
          className="absolute object-cover w-full h-full inset-0"
        />
      </div>
    </div>
  );
};

export default StepProject;
