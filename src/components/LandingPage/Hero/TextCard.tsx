import React from "react";

export default function TextCard({
  heading1,
  heading2,
  text,
}: {
  heading1: string;
  heading2: string;
  text: string;
}) {
  return (
    <div className="space-y-4 keen-slider__slide">
      <h2 className="text-white font-[600]">{heading2}</h2>
      <h1>{heading1}</h1>
      <h4 className="text-[#fff]">{text}</h4>
    </div>
  );
}
