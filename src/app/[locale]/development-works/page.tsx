"use client";

import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import { useTranslations } from "use-intl";

export default function DevelopmentWorks() {
  const t = useTranslations("development works");

  return (
    <main className="">
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-8 pb-8 md:px-20 md:pb-20">
            <div className="relative">
              <Image
                src={"/assets/gp/gp-img4.jpg"}
                alt="Gram Panchayat Savarla"
                width={1920}
                height={1080}
                className="h-full w-full object-cover relative z-10"
              />
              <div className="absolute top-6 -left-6 h-full w-full rounded-2xl bg-[var(--primary-clr)] -z-1"></div>
            </div>
          </div>
          <div className="space-y-8">
            <h2>{t("title2")}</h2>
            <p>{t("para1")}</p>
            <div className="pl-8 border-l-2 border-black space-y-8">
              <div className="space-y-2">
                <h3 className="text-black">{t("movement")}</h3>
                <p>{t("para2")}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-black">{t("care")}</h3>
                <p>{t("para3")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2>{t("title2")}</h2>
          <p>{t("para4")}</p>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="">
                <Image
                  src={"/assets/gp/gp-img5.jpg"}
                  alt="image1"
                  width={1920}
                  height={1080}
                  className=" w-full object-contain"
                />
              </div>
              <div className="space-y-2 lg:col-span-2">
                <h2>{t("development.1.title1")}</h2>
                <p>
                  <span className="text-black font-[600]">
                    {t("development.1.title2")}
                  </span>{" "}
                  {t("development.1.para1")}
                </p>
                <p>
                  <span className="text-black font-[600]">
                    {t("development.1.title3")}
                  </span>{" "}
                  {t("development.1.para2")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="">
                <Image
                  src={"/assets/gp/gp-img1.jpg"}
                  alt="image1"
                  width={1920}
                  height={1080}
                  className="w-full object-contain"
                />
              </div>
              <div className="space-y-2 lg:col-span-2">
                <h2>{t("development.2.title1")}</h2>
                <p>
                  <span className="text-black font-[600]">
                    {t("development.2.title2")}
                  </span>{" "}
                  {t("development.2.para1")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <div className="">
                <Image
                  src={"/assets/gp/gp-img2.jpg"}
                  alt="image1"
                  width={1920}
                  height={1080}
                  className="w-full object-contain"
                />
              </div>
              <div className="space-y-2 lg:col-span-2">
                <h2>{t("development.3.title1")}</h2>
                <p>{t("development.3.para1")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
