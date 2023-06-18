import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectComponentProps {
  id: number;
  image: string;
  date: string;
  group?: string;
  title: string;
  description: string;
  responsible?: { name: string; job: string; img: string };
  className?: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  id,
  image,
  date,
  group,
  title,
  description,
  responsible,
  className = "",
}) => {
  return (
    <div
      className={`
    ${className}
    relative isolate flex flex-col gap-8 lg:flex-row
    `}
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1/1] lg:w-64 lg:shrink-0">
        <Image
          className="absolte inset-0 w-full h-full rounded-2xl object-cover bg-gray-100"
          width={256}
          height={256}
          alt="photo project"
          src={image}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
      </div>
      <div>
        <div className="flex items-center gap-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            {date}
          </time>
          {group && (
            <a
              href=""
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
            >
              {group}
            </a>
          )}
        </div>
        <div className="relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
            <Link href={`/galery/${id}`}>{title}</Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{description}</p>
        </div>
        {responsible && (
          <div className="mt-6 border-t border-gray-900/5 pt-6">
            <div className="relative items-center gap-4 flex">
              <Image
                src={responsible.img}
                className="w-10 h-10 rounded-full bg-gray-100"
                width={40}
                height={40}
                alt="face"
              />
              <div className="text-sm leading-6">
                <div className="font-semibold text-gray-900">
                  {responsible.name}
                </div>
                <div className="text-gray-600">{responsible.job}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
