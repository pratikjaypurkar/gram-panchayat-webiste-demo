"use client";

import { Link } from "@/navigation";
import React from "react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaArrowRight, FaLeaf, FaTractor, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";
import SubscribeCard from "@/components/SubscribeCard/SubscribeCard";

export default function Hero() {
  const t = useTranslations("main.hero");

  return (
    <section className="relative xl:min-h-[95dvh] flex items-center justify-center px-6 xl:px-20 py-20 mb-16 overflow-hidden">
      {/* Background Image with Parallax-like Overlay */}
      <div className="absolute inset-0 z-0 bg-black/40">
        <Image
          src={"/assets/gp/gp-img1.jpg"}
          alt="hero background"
          fill
          className="object-cover object-center brightness-[0.6] hover:scale-105 transition-transform duration-[10s] ease-out -z-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
        {/* Left Content Area */}
        <div className="space-y-8 text-white">
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Gram Panchayat Portal
          </div>
          
          <h1
            className="!text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-2xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {t("quote")}
          </h1>
          
          <p
            className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-xl backdrop-blur-sm bg-black/10 p-4 rounded-2xl border-l-4 border-[var(--primary-clr)]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {t("para")}
          </p>

          <div className="flex flex-wrap gap-4 pt-4" data-aos="fade-up" data-aos-delay="300">
            <Link
              href={"/biography"}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[var(--primary-clr)] rounded-full hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(243,112,33,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                {t("learn more")}
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </div>

          {/* Interactive floating badges */}
          <div className="grid grid-cols-3 gap-4 pt-8" data-aos="fade-up" data-aos-delay="400">
            {[
              { icon: FaLeaf, text: "Agriculture", color: "text-green-400" },
              { icon: FaUsers, text: "Community", color: "text-blue-400" },
              { icon: FaTractor, text: "Development", color: "text-yellow-400" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                <item.icon className={`text-3xl mb-2 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs md:text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image/Interactive Element Area */}
        <div data-aos="zoom-in" data-aos-delay="200" className="relative hidden lg:block h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-clr)]/20 to-transparent rounded-full animate-pulse blur-3xl"></div>
          <Image
            src={"/assets/gp/gp-img3.jpg"}
            alt="hero featured"
            fill
            className="object-cover rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]"
          />
          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-4 text-black">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <FaUsers size={24} />
              </div>
              <div>
                <p className="font-bold text-xl">100%</p>
                <p className="text-sm text-gray-500">Citizen Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Card Overlapping Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-[90%] max-w-4xl mx-auto translate-y-1/2 z-20">
        <div className="shadow-2xl rounded-2xl overflow-hidden hover:shadow-[0_10px_40px_rgba(243,112,33,0.3)] transition-shadow duration-500">
          <SubscribeCard />
        </div>
      </div>
    </section>
  );
}
