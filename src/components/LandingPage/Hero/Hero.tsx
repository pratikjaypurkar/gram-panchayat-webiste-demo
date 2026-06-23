"use client";

import { Link } from "@/navigation";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaArrowRight, FaLandmark, FaWater, FaTree, FaTractor } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("main.hero");

  // Auto-play Keen Slider
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      duration: 1500,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const images = [
    "/assets/gp/gp-img1.jpg",
    "/assets/gp/gp-img2.jpg",
    "/assets/gp/gp-img3.jpg",
  ];

  return (
    <section className="relative w-full mb-16">
      
      {/* Full Width Carousel Container */}
      <div className="relative h-[70vh] min-h-[500px] w-full bg-gray-900">
        
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide relative w-full h-full">
              <Image
                src={src}
                alt={`Village Highlight ${idx + 1}`}
                fill
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Official Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b5e]/90 via-[#002b5e]/60 to-transparent pointer-events-none z-10" />

        {/* Text Content over Slider */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 xl:px-24 pb-24">
          <div className="max-w-3xl space-y-6" data-aos="fade-right">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/30 text-xs font-bold tracking-widest uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
              ग्रामपंचायत पोर्टल
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white border-b-4 border-[#FF9933] pb-4 inline-block">
              {t("quote")}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl border-l-4 border-[#138808] pl-4">
              {t("para")}
            </p>

            <div className="pt-4">
              <Link
                href={"/biography"}
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-[#002b5e] transition-colors duration-200 bg-white hover:bg-gray-100 rounded-sm shadow-lg border border-transparent hover:border-[#FF9933]"
              >
                <span className="flex items-center gap-2 uppercase tracking-wide">
                  {t("learn more")}
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Service Dashboard (Overlapping Bottom) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: FaLandmark, text: "ग्राम विकास", sub: "ग्रामीण विकास", color: "text-[#FF9933]", bg: "bg-white", border: "border-t-[#FF9933]" },
            { icon: FaWater, text: "जल जीवन", sub: "स्वच्छ पाणी", color: "text-[#004B87]", bg: "bg-white", border: "border-t-[#004B87]" },
            { icon: FaTree, text: "कृषी योजना", sub: "शेती", color: "text-[#138808]", bg: "bg-white", border: "border-t-[#138808]" },
            { icon: FaTractor, text: "ई-सेवा", sub: "ऑनलाइन सेवा", color: "text-gray-700", bg: "bg-white", border: "border-t-gray-700" }
          ].map((item, idx) => (
            <Link href="#" key={idx} className={`flex flex-col items-center justify-center p-6 shadow-xl border-t-4 border-l border-r border-b border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group ${item.bg} ${item.border}`}>
              <item.icon className={`text-3xl md:text-4xl mb-3 ${item.color} group-hover:-translate-y-1 transition-transform`} />
              <span className="text-sm md:text-base font-bold text-gray-900 text-center uppercase tracking-wide">{item.text}</span>
              <span className="text-[10px] md:text-xs font-semibold text-gray-500 mt-1 uppercase">{item.sub}</span>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
