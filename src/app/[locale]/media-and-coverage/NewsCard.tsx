import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendar } from "react-icons/ci";

export default function NewsCard({
  image,
  date,
  title,
  link,
}: {
  image: string;
  date: string;
  title: string;
  link: string;
}) {
  const t = useTranslations("news");

  return (
    <div className="shadow-custom rounded-2xl overflow-hidden group flex flex-col" data-aos="fade-up">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt="News"
          width={500}
          height={500}
          className="object-cover object-center h-full w-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="px-4 pt-4 absolute bottom-0 left-0 w-full bg-white rounded-t-3xl flex items-center gap-2 text-[var(--primary-clr)] border-4 border-b-0 border-transparent group-hover:border-[var(--primary-clr)] transition-all duration-300 ease-in-out">
          <CiCalendar size={20} className="" />
          {date}
        </div>
      </div>
      <div className="px-8 py-4 rounded-b-2xl border-4 border-t-0 border-transparent group-hover:border-[var(--primary-clr)] transition-all duration-300 ease-in-out text-left space-y-4 flex-1">
        <p>{t(title)}</p>{" "}
        <Link
          href={link}
          className="btn px-6 py-3 bg-[var(--primary-clr)] block w-fit text-[#fff] rounded-xl text-xs"
        >
          <span>{t("read more")}</span>
        </Link>
      </div>
    </div>
  );
}
