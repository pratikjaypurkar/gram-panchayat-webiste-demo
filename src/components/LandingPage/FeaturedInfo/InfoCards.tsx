import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InfoCards({
  icon,
  title,
  text,
  link,
}: {
  icon: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <div className="rounded-xl shadow-lg p-8  text-center relative overflow-hidden group bg-white">
      <div className="space-y-4 relative z-20">
        <div className="px-4 py-2 bg-[#f8f5f5] rounded-full w-fit aspect-square mx-auto ">
          <Image
            src={icon}
            width={100}
            height={100}
            alt="Constituency"
            className="max-w-[20px] object-contain object-center w-full h-full"
          />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>{" "}
        <Link
          href={link}
          className="btn px-6 py-3 bg-[var(--primary-clr)] block text-[#fff] rounded-xl"
        >
          <span>Read More</span>
        </Link>
      </div>
      <div className="absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto w-fit h-fit translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 z-10">
        <Image
          src={"/assets/LandingPage/info/shield.svg"}
          width={500}
          height={500}
          alt="Constituency"
          className="max-w-[130px] object-contain object-center w-full h-full"
        />
      </div>
    </div>
  );
}
