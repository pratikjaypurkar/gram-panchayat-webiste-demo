import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function Video() {
  const t = useTranslations("main.video");

  return (
    <section className="px-8 xl:px-40 py-10 md:py-28 xl:py-60 space-y-8 relative">
      <Image
        src={"/assets/gp/gp-img1.jpg"}
        alt="background"
        width={1080}
        height={1000}
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.2]"
      />
      <div className="xl:px-80 text-center relative z-10 space-y-8">
        <h2 className="text-white" data-aos="fade-down">
          {t("title")}
        </h2>
        <Link
          target="_blank"
          href={"#"}
          className="p-4 rounded-full bg-white block w-fit mx-auto hover:scale-125 transition-all duration-200"
          data-aos="fade-in"
        >
          <FaPlay className="text-[var(--primary-clr)]" size={24} />
        </Link>
      </div>
    </section>
  );
}
