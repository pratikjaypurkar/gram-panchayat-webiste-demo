import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Header({
  title,
  image1,
  image2
}: {
  title: string;
  image1: string;
  image2: string;
}) {
  const t = useTranslations();

  return (
    <div className="py-20 md:py-60 px-8 relative">
      {" "}
      <div className="absolute top-0 left-0  w-full h-full -z-1">
        <Image
          src={image1}
          alt="background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover "
          data-aos="fade-in"
        />
        <div className="absolute top-0 left-0  w-full h-full -z-1 bg-black bg-opacity-50"></div>
      </div>
      <h1 className=" text-center text-white text-6xl" data-aos="fade-up">
        {t(title)}
      </h1>
    </div>
  );
}
