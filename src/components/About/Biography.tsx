import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Biography() {
  const t = useTranslations("biography");

  return (
    <>
      <section className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <Image
          src={"/assets/gp/gp-img1.jpg"}
          alt="Biography bg"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full z-[-1] object-cover brightness-[0.3]"
        />

        <div className="px-8 md:px-20 py-10 md:py-20 space-y-4 place-content-center text-center md:text-left">
          <h2 className="text-[var(--primary-clr)]">{t("title")}</h2>
          <h1 className="text-white">{t("name")}</h1>
        </div>
        <div className="">
          <Image
            src={"/assets/gp/gp-img2.jpg"}
            alt="Gram Panchayat Savarla"
            width={1000}
            height={1000}
            className="max-w-full md:max-w-[400px] mx-auto"
          />
        </div>
      </section>
      <div className="block md:hidden">
        <Image
          src={"/assets/gp/gp-img3.jpg"}
          alt="Gram Panchayat Savarla"
          width={1000}
          height={1000}
          className="max-w-full md:max-w-[400px] mx-auto"
        />
      </div>
    </>
  );
}
