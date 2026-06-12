import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Members() {
  const t = useTranslations("main.members");

  return (
    <section className="px-8 md:px-20 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
      <div className="text-center">
        <p
          className="montserrat text-xs text-[var(--primary-clr)] uppercase"
          data-aos="fade-up"
        >
          {t("sub-title")}
        </p>
        <h2 className="w-fit m-auto" data-aos="fade-up" data-aos-delay="100">
          {t("title")}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">  
        <div
          className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden"
          data-aos="fade-in"
        >
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="montserrat text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
              <Link href="#" className="py-2 px-4">
                <FaFacebookF className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaXTwitter className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaLinkedinIn className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaYoutube className="" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="montserrat text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
              <Link href="#" className="py-2 px-4">
                <FaFacebookF className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaXTwitter className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaLinkedinIn className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaYoutube className="" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="montserrat text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
              <Link href="#" className="py-2 px-4">
                <FaFacebookF className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaXTwitter className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaLinkedinIn className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaYoutube className="" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
            <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
            <h4 className="montserrat text-[var(--primary-txt)] font-[600]">
              Member 1{" "}
            </h4>
            <p className="text-[var(--primary-clr)]">Designation</p>
            <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-[]">
              <Link href="#" className="py-2 px-4">
                <FaFacebookF className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaXTwitter className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaLinkedinIn className="" />
              </Link>
              <Link href="#" className="py-2 px-4">
                <FaYoutube className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
