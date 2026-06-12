import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GovernmentSchemes() {
  const t = useTranslations("government schemes");

  return (
    <main className="">
      {" "}
      <>
        <section className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <Image
            src={"/assets/gp/gp-img1.jpg"}
            alt="Biography bg"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full md:h-full z-[-1] object-cover brightness-[0.3]"
          />

          <div className="px-8 md:px-20 py-20 md:py-20 space-y-4 place-content-center text-center md:text-left">
            <h1 className="text-white">{t("title")}</h1>
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
        <div className="md:hidden">
          <Image
            src={"/assets/gp/gp-img3.jpg"}
            alt="Gram Panchayat Savarla"
            width={1000}
            height={1000}
            className="max-w-full md:max-w-[400px] mx-auto"
          />
        </div>
      </>
      <div className="px-8 xl:px-40 pt-20 pb-20 space-y-8">
        <Image
          src={"/assets/gp/gp-img4.jpg"}
          alt="background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover "
        />

        <h2>{t("title")}</h2>
        <div className="space-y-2">
          <p>{t("para1")}</p>
          <p>{t("para2")}</p>
        </div>
        <p className="font-[600] text-black">{t("small-title")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="h-fit rounded-2xl overflow-hidden shadow-custom order-2 md:order-1">
            <h3 className="bg-[var(--primary-clr)] py-4 px-4 text-white">
              {t("title")}
            </h3>
            <Link
              href={"/"}
              className="block px-4 py-6 text-black hover:text-[var(--primary-clr)] border-b-2 border-dashed border-black"
            >
              {t("scheme1")}
            </Link>
            <Link
              href={"/"}
              className="block px-4 py-6 text-black hover:text-[var(--primary-clr)] border-b-2 border-dashed border-black"
            >
              {t("scheme2")}
            </Link>
            <Link
              href={"/"}
              className="block px-4 py-6 text-black hover:text-[var(--primary-clr)] border-b-2 border-dashed border-black"
            >
              {t("scheme3")}
            </Link>
            <Link
              href={"/"}
              className="block px-4 py-6 text-black hover:text-[var(--primary-clr)] border-b-2 border-dashed border-black"
            >
              {t("scheme4")}
            </Link>
            <Link
              href={"/"}
              className="block px-4 py-6 text-black hover:text-[var(--primary-clr)]"
            >
              {t("scheme5")}
            </Link>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <Image
              src={"/assets/gp/gp-img5.jpg"}
              alt="scheme image"
              width={1920}
              height={1080}
              className="overflow-hidden"
            />
            <h4 className="text-[var(--primary-clr)]">{t("main-scheme")}</h4>
            <p>{t("para3")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
