"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
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
          }, 2000);
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

  const bannerImages = [
    "/assets/gp/gp-img1.jpg",
    "/assets/gp/gp-img2.jpg",
    "/assets/gp/gp-img3.jpg",
  ];

  return (
    <section className="px-8 xl:px-40 pt-20 md:pb-10 space-y-8 flex flex-col md:flex-row items-center md:items-end md:gap-4" data-aos="fade-in">
      <div
        ref={ref}
        className="keen-slider aspect-video rounded-xl overflow-hidden"
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={image}
              alt="Banner Image"
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      {/* <div className="p-2 md:p-0 h-fit md:h-20 border-2 rounded-xl aspect-square"></div> */}
      {loaded && (
        <div className="flex flex-row md:flex-col gap-2">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`p-2 md:p-0 h-fit md:h-20 border-2 rounded-xl aspect-square overflow-hidden border-2 border-[var(--primary-clr)] ${
                currentSlide === idx
                  ? "bg-[var(--primary-clr)] md:border-4 border-[var(--primary-clr)]"
                  : "md:border-0"
              }`}
            >
              <Image
                src={bannerImages[idx]}
                alt="Banner Image"
                width={400}
                height={400}
                className="hidden md:block h-full w-full object-cover object-center transition-all duration-300"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
