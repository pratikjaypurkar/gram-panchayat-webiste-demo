import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Header from "../_Header/Header";

export default function Page() {
  const t = useTranslations("services.sports");

  return (
    <main className="space-y-8">
      <Header
        title={"services.sports.title"}
        image1="/assets/gp/gp-img1.jpg"
        image2="/assets/gp/gp-img1.jpg"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p>{t("para1")}</p>
          <p>{t("para2")}</p>
          <p>{t("para3")}</p>
          <p>{t("para4")}</p>
          <p>{t("para5")}</p>
          <p>{t("para6")}</p>
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
