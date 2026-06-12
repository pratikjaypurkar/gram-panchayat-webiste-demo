import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 gradient-bg relative overflow-y-hidden">
      <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
        <h5 className="text-[2rem] text-white">Gram Panchayat Savarla Journey</h5>
        <h1>Gram Panchayat Savarla</h1>
      </div>
      <div className="">
        <Image
          src={"/assets/gp/gp-img1.jpg"}
          alt="Gram Panchayat Savarla"
          width={1000}
          height={1000}
          className="max-w-[300px] md:max-w-[600px] mx-auto"
        />
      </div>{" "}
      <Image
        src={"/assets/LandingPage/dotted-circle.png"}
        width={200}
        height={200}
        alt="Dotted Circle"
        className="absolute top-full left-0 -translate-y-1/2"
      />
    </section>
  );
}
