import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Header({
  title,
  image1,
  image2,
}: {
  title: string;
  image1: string;
  image2: string;
}) {
  const t = useTranslations();

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div className="absolute top-0 left-0  md:w-full md:h-full -z-1">
        <Image
          src={image1}
          alt="background"
          width={1920}
          height={1080}
          className="h-full w-full object-contain md:object-cover "
          data-aos="fade-in"
        />
        <div className="absolute top-0 left-0  w-full h-full -z-1 bg-black bg-opacity-50"></div>
      </div>
      <h1 className=" text-center text-white text-5xl md:text-6xl py-10" data-aos="fade-up">
        {t(title)}
      </h1>
      <div className="z-10 md:w-[500px] bg-[var(--primary-clr)] md:bg-transparent">
        <Image
          src={image2}
          alt="sticker"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
