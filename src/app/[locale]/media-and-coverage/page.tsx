import React from "react";
import NewsCard from "./NewsCard";
import { title } from "process";
import Header from "@/components/Header/Header";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("news");

  const news = [
    {
      image: "/assets/gp/gp-img1.jpg",
      date: "29-06-2024",
      title: "articles.1.title",
      link: "/",
    },
    {
      image: "/assets/gp/gp-img2.jpg",
      date: "24-06-2024",
      title: "articles.2.title",
      link: "/",
    },
    {
      image: "/assets/gp/gp-img3.jpg",
      date: "29-06-2024",
      title: "articles.3.title",
      link: "/",
    },
    {
      image: "/assets/gp/gp-img4.jpg",
      date: "29-06-2024",
      title: "articles.4.title",
      link: "/",
    },
    {
      image: "/assets/gp/gp-img5.jpg",
      date: "30-06-2024",
      title: "articles.5.title",
      link: "/",
    },
    {
      image: "/assets/gp/gp-img1.jpg",
      date: "30-06-2024",
      title: "articles.6.title",
      link: "/",
    },
  ];

  return (
    <main className="space-y-8">
      <Header
        title="news.title"
        image1="/assets/gp/gp-img1.jpg"
        image2=""
      />
      <section className="px-8 xl:px-40 py-10 md:py-20 text-center space-y-20">
        <p>{t("line")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {news.map((item, index) => {
            return (
              <NewsCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
