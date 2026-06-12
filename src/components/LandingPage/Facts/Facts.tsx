import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Facts() {
  const t = useTranslations("main.facts");

  return (
    <section className="px-8 xl:px-40 py-20 space-y-8 pattern2 bg-[var(--primary-txt)] grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-[var(--primary-clr)]" data-aos="fade-right">
          {t("title")}
        </h2>
        <h2 className="text-white" data-aos="fade-right" data-aos-delay="100">
          {t("title2")}
        </h2>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 w-full md:col-span-2 text-center">
        <div
          className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl"
          data-aos="fade-up"
        >
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/badge.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-3xl md:text-5xl font-[700] text-[var(--primary-txt)]">
            {t("experience.number")}
            <sup className="">+</sup>
          </h4>
          <p className="montserrat text-sm md:text-lg text-[#919191] font-[700]">
            {t("experience.text")}
          </p>
        </div>
        <div
          className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/officer.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-3xl md:text-5xl font-[700] text-[var(--primary-txt)]">
            {t("constituency.number")}
          </h4>
          <p className="montserrat text-sm md:text-lg text-[#919191] font-[700]">
            {t("constituency.text")}
          </p>
        </div>
        <div
          className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/daimond.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-3xl md:text-5xl font-[700] text-[var(--primary-txt)]">
            {t("voters.number")}
            <sup className="">lac</sup>
          </h4>
          <p className="montserrat text-sm md:text-lg text-[#919191] font-[700]">
            {t("voters.text")}
          </p>
        </div>
        <div
          className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/badge.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-3xl md:text-5xl font-[700] text-[var(--primary-txt)]">
            {t("projects.number")}
            <sup className="">+</sup>
          </h4>
          <p className="montserrat text-sm md:text-lg text-[#919191] font-[700]">
            {t("projects.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
