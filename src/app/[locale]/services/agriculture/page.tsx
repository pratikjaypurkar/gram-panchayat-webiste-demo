import Header from "../_Header/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations("services.agriculture");
  return (
    <main className="space-y-8">
      {" "}
      <Header
        title={"services.agriculture.title"}
        image1="/assets/gp/gp-img1.jpg"
        image2="/assets/gp/gp-img1.jpg"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p>{t("para1")}</p>
          <p className="">
            <span className="font-[600] text-black">
              {t("section1.title")}:{" "}
            </span>
            {t("section1.para")}
          </p>
          <p className="">
            <span className="font-[600] text-black">
              {t("section2.title")}:{" "}
            </span>
            {t("section2.para")}
          </p>
          <p className="">
            <span className="font-[600] text-black">
              {t("section3.title")}:{" "}
            </span>
            {t("section3.para")}
          </p>
          <p className="">
            <span className="font-[600] text-black">
              {t("section4.title")}:{" "}
            </span>
            {t("section4.para")}
          </p>
          <p className="">
            <span className="font-[600] text-black">
              {t("section5.title")}:{" "}
            </span>
            {t("section5.para")}
          </p>
          <p className="">{t("para2")}</p>
        </div>
        <div className="space-y-2">
          <Image
            src={"/assets/gp/gp-img2.jpg"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/gp/gp-img3.jpg"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/gp/gp-img4.jpg"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
        </div>
      </section>
    </main>
  );
}
