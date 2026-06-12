import Header from "@/components/Header/Header";
import Hero from "@/components/PoliticalJourney/Hero";
import Journey from "@/components/PoliticalJourney/Journey";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations();
  return (
    <main className="overflow-x-hidden">
      {/* <Hero /> */}
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
            <h1 className="text-white">{t("political journey.title")}</h1>
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
      <Journey />
    </main>
  );
}
