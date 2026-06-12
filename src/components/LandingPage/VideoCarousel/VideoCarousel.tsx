"use client";
import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function VideoCarousel() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5, origin: "center" },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10, origin: "center" },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: { perView: 1, origin: "center" },
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

  const arr = [
    <img
      key={2001}
      src="/assets/gp/gp-img1.jpg"
      alt="Gram Panchayat"
      className="w-full h-full object-cover"
    />,
    <img
      key={2002}
      src="/assets/gp/gp-img2.jpg"
      alt="Village Development"
      className="w-full h-full object-cover"
    />,
    <img
      key={2003}
      src="/assets/gp/gp-img3.jpg"
      alt="Agriculture"
      className="w-full h-full object-cover"
    />,
    <img
      key={2004}
      src="/assets/gp/gp-img4.jpg"
      alt="Community"
      className="w-full h-full object-cover"
    />,
    <img
      key={2005}
      src="/assets/gp/gp-img5.jpg"
      alt="Rural"
      className="w-full h-full object-cover"
    />,
  ];

  
  return (
    <div className="px-8 xl:px-40 py-20 relative bg-black pattern3">
      <h2 className="text-white text-center">{t("quote1")}</h2>
      <br />
      <div className="navigation-wrapper relative">
        <div ref={ref} className="keen-slider">
          {arr.map((item, index) => {
            return (
              <div
                key={index + 100}
                className={`keen-slider__slide number-slide6 aspect-video overflow-hidden ${
                  currentSlide === index ? "" : ""
                } `}
              >
                <div
                  className={`w-full h-full rounded-xl transition-all duration-300 overflow-hidden ${
                    index === (currentSlide - 1 < 0 ? arr.length - 1 : currentSlide - 1)
                      ? "rotate-left"
                      : ""
                  } ${index === (currentSlide + 1) % arr.length ? "rotate-right" : ""}`}
                >
                  {item}
                </div>
              </div>
            );
          })}
          {loaded && instanceRef.current && (
            <>
              <FaChevronLeft
                size={40}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="absolute top-0 bottom-0 left-0 h-fit my-auto cursor-pointer text-white"
              />

              <FaChevronRight
                size={40}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="absolute top-0 bottom-0 right-0 h-fit my-auto cursor-pointer text-white"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
