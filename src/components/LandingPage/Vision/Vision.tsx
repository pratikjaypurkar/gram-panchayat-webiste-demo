"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Vision() {
  const t = useTranslations("main.services");

  const blocks = [
    {
      title: "sports",
      image: "/assets/gp/gp-img1.jpg",
      text: "Gram Panchayat Savarla is a passionate advocate for student involvement in sports, believing in its power to instill discipline, teamwork, and resilience. We actively support various sports programs, ensuring everyone has the opportunity to participate.",
      link: "/services/sports",
    },
    {
      title: "employment",
      image: "/assets/gp/gp-img2.jpg",
      text: "Gram Panchayat Savarla is dedicated to addressing unemployment. We implement innovative programs to create job opportunities, emphasizing skill development and vocational training.",
      link: "/services/employment",
    },
    {
      title: "agriculture",
      image: "/assets/gp/gp-img3.jpg",
      text: "Gram Panchayat Savarla makes significant contributions to the agricultural sector, aiding farmers by introducing modern agricultural techniques to increase crop yields and improve soil health.",
      link: "/services/agriculture",
    },
    {
      title: "education",
      image: "/assets/gp/gp-img4.jpg",
      text: "Gram Panchayat Savarla is dedicated to education, helping students achieve academic goals. We are committed to providing support and guidance to students from various backgrounds.",
      link: "/services/education",
    },
    {
      title: "healthcare",
      image: "/assets/gp/gp-img5.jpg",
      text: "Gram Panchayat Savarla works tirelessly towards upgrading healthcare infrastructure. Our initiatives ensure that quality medical services are accessible to all, especially in rural and underserved areas.",
      link: "/services/healthcare",
    },
  ];

  return (
    <section className=" space-y-8 md:my-8 bg-black" id="services">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className=" space-y-4 pt-10 h-full">
          <h2
            className="text-white nanito font-[700] text-center"
            data-aos="fade-in"
          >
            {t("title")}
          </h2>
          <br />
          <div className="" data-aos="fade-in">
            {blocks.map((block, index) => (
              <Link
                href={block.link}
                key={index}
                className={`px-6 py-8 flex justify-center items-center gap-2 text-xl font-[700] block text-center uppercase w-full hover:text-white hover:scale-x-105 hover:scale-y-125 origin-bottom-left transition-all duration-200 shadow-custom ${
                  index % 2 === 0
                    ? "bg-[var(--primary-clr)] text-white"
                    : "bg-[#c0581a] text-white"
                }
                
                `}
              >
                <span>{t(block.title)}</span>
                <FaArrowRight className="inline" />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-fit mx-auto" data-aos="fade-in">
          <Image
            src={"/assets/gp/gp-img1.jpg"}
            alt="Vision"
            height={1000}
            width={1000}
            className="object-contain md:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
