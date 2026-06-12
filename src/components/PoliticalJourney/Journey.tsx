"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Journey() {
  const t = useTranslations("political journey");
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(0);
  const videos = [
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe
      key={1}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={3}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={4}
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
  ];

  return (
    <section className="px-8 xl:px-40 py-20 relative">
      <Image
        src={"/assets/LandingPage/dotted-circle.png"}
        width={200}
        height={200}
        alt="Dotted Circle"
        className="hidden md:block absolute top-0 right-0 -translate-x-1/2"
      />
      <div className="space-y-8">
        <p className="font-[600] text-black">{t("para1")}</p>
        <p>{t("para2")}</p>
      </div>

      <div className="mt-20 space-y-12 relative py-10 z-20">
        <div className="absolute top-0 left-1/2 border-x-2 border-dashed px-1 border-[#696969] h-full translate-x-[-50%] z-[-1]"></div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative group"
          data-aos="fade-in"
        >
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-2 border-2 border-[var(--primary-clr)] rounded-full">
              <div className="p-2 group-hover:bg-[var(--primary-clr)] rounded-full transition-all duration-200"></div>
            </div>
          </div>
          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:ml-auto md:mr-20 bg-white order-2 md:order-1">
            <div className="w-full aspect-video rounded-xl overflow-clip relative">
              <Image
                src={"/assets/gp/gp-img1.jpg"}
                alt="background"
                width={1080}
                height={1000}
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
              />
              <button
                className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                onClick={() => {
                  setHidden(false);
                  setActive(0);
                }}
              >
                <FaYoutube size={40} className="text-[#ff0000]" />
              </button>
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  {t("journey.2009.title")}:{" "}
                </span>
                {t("journey.2009.para")}
              </p>
            </div>
          </div>
          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto mx-auto md:ml-20 order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/calci.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2009
              </span>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative group"
          data-aos="fade-in"
        >
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-2 border-2 border-[var(--primary-clr)] rounded-full">
              <div className="p-2 group-hover:bg-[var(--primary-clr)] rounded-full transition-all duration-200"></div>
            </div>
          </div>

          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto ml-auto mx-auto md:mr-20">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/calendar.svg"}
                width={100}
                height={100}
                alt="Calendar"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2014
              </span>
            </div>
          </div>

          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:mr-auto md:ml-20 bg-white">
            <div className="w-full aspect-video rounded-xl overflow-clip relative">
              <Image
                src={"/assets/gp/gp-img2.jpg"}
                alt="background"
                width={1080}
                height={1000}
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
              />
              <button
                className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                onClick={() => {
                  setHidden(false);
                  setActive(0);
                }}
              >
                <FaYoutube size={40} className="text-[#ff0000]" />
              </button>
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  {t("journey.2014.title")}:{" "}
                </span>
                {t("journey.2014.para")}
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative group"
          data-aos="fade-in"
        >
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-2 border-2 border-[var(--primary-clr)] rounded-full">
              <div className="p-2 group-hover:bg-[var(--primary-clr)] rounded-full transition-all duration-200"></div>
            </div>
          </div>
          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:ml-auto md:mr-20 bg-white order-2 md:order-1">
            <div className="w-full aspect-video rounded-xl overflow-clip relative">
              <Image
                src={"/assets/gp/gp-img3.jpg"}
                alt="background"
                width={1080}
                height={1000}
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
              />
              <button
                className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                onClick={() => {
                  setHidden(false);
                  setActive(0);
                }}
              >
                <FaYoutube size={40} className="text-[#ff0000]" />
              </button>
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  {t("journey.2019.title")}:{" "}
                </span>
                {t("journey.2009.para")}
              </p>
            </div>
          </div>
          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto mx-auto md:ml-20 order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/checklist.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2019
              </span>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative group"
          data-aos="fade-in"
        >
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-2 border-2 border-[var(--primary-clr)] rounded-full">
              <div className="p-2 group-hover:bg-[var(--primary-clr)] rounded-full transition-all duration-200"></div>
            </div>
          </div>

          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto ml-auto mx-auto md:mr-20">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/graph.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2024
              </span>
            </div>
          </div>

          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:mr-auto md:ml-20 bg-white">
            <div className="w-full aspect-video rounded-xl overflow-clip relative">
              <Image
                src={"/assets/gp/gp-img4.jpg"}
                alt="background"
                width={1080}
                height={1000}
                className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
              />
              <button
                className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                onClick={() => {
                  setHidden(false);
                  setActive(0);
                }}
              >
                <FaYoutube size={40} className="text-[#ff0000]" />
              </button>
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  {t("journey.2024.title")}:{" "}
                </span>
                {t("journey.2024.para")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {!hidden && (
        <div className="fixed top-0 bottom-0 left-0 right-0 p-8 m-auto bg-black bg-opacity-40 backdrop-blur z-50 flex items-center justify-center">
          <div className=" max-w-[500px] bg-white aspect-video w-full rounded-xl overflow-hidden">
            {videos[active]}
          </div>
          <button
            className="p-2 rounded-xl bg-[var(--primary-clr)] absolute top-0 right-0 m-4"
            onClick={() => setHidden(true)}
          >
            <IoClose className="text-white" size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
