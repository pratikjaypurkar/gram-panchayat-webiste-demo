"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useTranslations } from "use-intl";

export default function Footer() {
  const t1 = useTranslations("nav");
  const t2 = useTranslations("footer");
  const t3 = useTranslations();
  return (
    <section className="px-8 xl:px-40 py-10 md:py-20 mt-20 relative bg-[var(--primary-clr)]">
      <div className="bg-white rounded-xl w-fit mx-auto shadow-custom overflow-hidden absolute top-0 left-0 right-0 translate-y-[-50%]">
        <div className="py-4 bg-[var(--primary-clr)] text-center ">
          <h2 className="text-white">{t2("socials")}</h2>
        </div>
        <div className="px-8 md:px-40 py-10 flex items-center justify-center gap-4 md:gap-8">
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <TfiFacebook className="text-black text-2xl md:text-6xl" />
          </Link>{" "}
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <RiTwitterXLine className="text-black text-2xl md:text-6xl" />
          </Link>
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaInstagram className="text-black text-2xl md:text-6xl" />
          </Link>
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaYoutube className="text-black text-2xl md:text-6xl" />
          </Link>
        </div>
      </div>
      <footer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white gap-4 py-20">
        <div>
          <Link href={"/"}>
            <Image
              src={"/final-logo.png"}
              alt="Gram Panchayat Logo"
              width={500}
              height={500}
              className="max-w-[150px]"
            />
          </Link>
          <p className="mt-8">{t2("text")}</p>
        </div>
        <div className="md:pl-8">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("explore")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <Link href="/biography" className="block">
              {t1("biography")}
            </Link>
            <Link href="/political-journey" className="block">
              {t1("political journey")}
            </Link>
            <Link href="/#services" className="block">
              {t1("public services")}
            </Link>
            <Link href="/media-and-coverage" className="block">
              {t1("media coverage")}
            </Link>
            <Link href="/gallery" className="block">
              {t1("gallery")}
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("services")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <Link href="/services/sports" className="block">
              {t1("sports")}
            </Link>
            <Link href="/services/agriculture" className="block">
              {t1("agriculture")}
            </Link>
            <Link href="/services/employment" className="block">
              {t1("employment")}
            </Link>
            <Link href="/services/education" className="block">
              {t1("education")}
            </Link>
            <Link href="/services/healthcare" className="block">
              {t1("healthcare")}
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("contact us")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <div>
              <div className="flex items-center flex-wrap gap-1">
                <MdOutlineLocationOn size={24} className="inline" />
                <p className="text-lg font-[600]">{t2("location")}</p>
              </div>
              <p className="ml-8">{t2("address")}</p>
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-1">
                <FaRegEnvelope size={24} className="inline" />
                <p className="text-lg font-[600]">{t2("mail us")}</p>
              </div>
              <Link
                href={"mailto:gpsavarla.pawani@gmail.com"}
                className="ml-8"
              >
                gpsavarla.pawani@gmail.com
              </Link>
            </div>
            <br />
            <div className="flex items-center gap-2 w-fit pr-2 border-r-2 border-[#f4f4f4] text-[var(--primary-txt)]">
              <Link
                href={"#"}
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <TfiFacebook size={20} />
              </Link>
              <Link
                href={"#"}
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <RiTwitterXLine size={20} />
              </Link>
              <Link
                href={"#"}
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={"#"}
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
          <div className="flex justify-center text-sm text-white text-center pb-4">
            <p>© 2026 Gram Panchayat Savarla. All rights reserved.</p>
          </div>
    </section>
  );
}
