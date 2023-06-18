import Image from "next/image";
import React from "react";

interface ElementPhotoProps {
  imgSrc: string;
}
const ElementPhoto: React.FC<ElementPhotoProps> = ({ imgSrc }) => {
  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt="photo"
        width={177}
        height={300}
        className="aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg"
      />
      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-300"></div>
    </div>
  );
};

export default ElementPhoto;
