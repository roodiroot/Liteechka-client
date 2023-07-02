import ProjectBlock from "@/components/project-page/ProjectBlock";
import Head from "next/head";

export const metadata = {
  title: "Типы навесов из поликарбонтата",
  description:
    "Мы устанавливаем и изготавливаем навесы из поликарбаната различных типов в Саранске и Ресуплики Мордовия",
};

const TypePage = () => {
  return (
    <>
      <div className="mt-[74xp]">
        <ProjectBlock />
      </div>
    </>
  );
};

export default TypePage;
