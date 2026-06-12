import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function More() {
  const t = useTranslations("biography");

  return (
    <section className="px-8 xl:px-40 py-20 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">{t("section1.title")}</p>
          <p>{t("section1.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <Image
            src={"/assets/gp/gp-img1.jpg"}
            alt="Gram Panchayat Savarla Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-full -translate-y-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2">
          <p className="font-[600] text-black">{t("section2.title")}</p>
          <p>{t("section2.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 relative">
          <Image
            src={"/assets/gp/gp-img2.jpg"}
            alt="Gram Panchayat Savarla Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-0 -translate-y-1/2 -translate-x-1/2 z-[-1]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">{t("section3.title")}</p>
          <p>{t("section3.para")}</p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <Image
            src={"/assets/gp/gp-img3.jpg"}
            alt="Gram Panchayat Savarla Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-full -translate-y-2/3 -translate-x-2/3 z-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
