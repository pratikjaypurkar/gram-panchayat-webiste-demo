"use client";

import { Link, usePathname } from "@/navigation";
import React, { useEffect } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import GoogleTranslate from "../Translate/GoogleTranslate";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";
import DropDown from "./DropDown";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const t2 = useTranslations();
  const t3 = useTranslations("footer");
  // const {  } = useRouter();
  const links = [
    {
      name: "home",
      link: "/",
      more: [],
    },
    {
      name: "about",
      link: "/about",
      more: [
        {
          name: "biography",
          link: "/biography",
        },
        {
          name: "political journey",
          link: "/political-journey",
        },
        {
          name: "government schemes",
          link: "/government-schemes",
        },
      ],
    },
    {
      name: "panchayat",
      link: "/panchayat",
      more: [
        {
          name: "gram sabha",
          link: "/gram-sabha",
        },
        {
          name: "representatives",
          link: "/representatives",
        },
      ],
    },
    {
      name: "public services",
      link: "/vision",
      more: [
        {
          name: "sports",
          link: "/services/sports",
        },
        {
          name: "agriculture",
          link: "/services/agriculture",
        },
        {
          name: "education",
          link: "/services/education",
        },
        {
          name: "employment",
          link: "/services/employment",
        },
        {
          name: "healthcare",
          link: "/services/healthcare",
        },
      ],
    },
    {
      name: "media coverage",
      link: "/media-coverage",
      more: [
        {
          name: "news",
          link: "/media-and-coverage",
        },
        {
          name: "gallery",
          link: "/gallery",
        },
        {
          name: "assets",
          link: "/documents",
        },
      ],
    },
    {
      name: "contact",
      link: "/contact",
      more: [],
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const prefLangCookie = encodeURIComponent("/en/mr");

  return (
    <header className="sticky top-0 z-40">
      <nav className="flex items-center justify-between bg-white py-2 px-4 md:px-16 shadow-lg">
        <Link href={"/"}>
          <Image
            src={"/final-logo.png"}
            alt="Gram Panchayat Logo"
            width={500}
            height={500}
            className="max-w-[70px] md:max-w-[95px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform duration-300"
            unoptimized
          />
        </Link>
        <div className="flex xl:hidden items-center gap-2 text-black">
          <Link
            href={"/contact"}
            className=" p-2 border-2 border-[var(--primary-clr)] rounded-xl hover:bg-[var(--primary-clr)] hover:text-white"
          >
            {t("contact")}
          </Link>
          <button
            className="xl:hidden z-10"
            onClick={() => {
              setShowMenu((x) => !x);
            }}
          >
            {showMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        <div
          className={`fixed flex justify-end xl:static bg-white top-0 left-0 right-0 bottom-0  transition-all duration-200 ${
            showMenu
              ? "translate-x-0 bg-opacity-40 backdrop-blur"
              : "translate-x-full bg-opacity-0 backdrop-blur-none"
          } xl:translate-x-0`}
        >
          <div
            className={`bg-white shadow-xl xl:shadow-none flex flex-col xl:flex-row xl:items-center xl:gap-6 w-fit xl:w-auto h-full xl:h-auto py-20 xl:py-0 xl:px-8 xl:px-0 items-start transition-all duration-200 overflow-y-scroll xl:overflow-y-visible divide-y-2 xl:divide-y-0 divide-white ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } xl:translate-x-0`}
          >
            {links.map((link, index) =>
              link.more.length > 0 ? (
                <DropDown
                  key={index}
                  name={link.name}
                  links={link.more}
                  setShowMenu={setShowMenu}
                />
              ) : (
                <Link
                  key={index}
                  href={link.link}
                  className={`flex items-center gap-2 xl:hover:text-[var(--primary-clr)] p-4 xl:p-0 bg-[var(--primary-clr)] w-full xl:w-fit xl:bg-white text-white ${
                    link.link === pathname
                      ? "xl:text-[var(--primary-clr)]"
                      : "xl:text-black"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {t(link.name)}
                  <FaArrowRight className="inline" />
                </Link>
              )
            )}

            {/* <GoogleTranslate prefLangCookie={prefLangCookie} /> */}
            <div className="p-4 xl:hidden flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
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
                className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
            <LangSwitcher />
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-2 pr-2 border-r-2 border-[#f4f4f4]">
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <TfiFacebook size={20} />
          </Link>
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <RiTwitterXLine size={20} />
          </Link>
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href={"#"}
            className="bg-[#F4F4F4] hover:bg-[var(--primary-clr)] hover:text-black transition-all duration-200 p-3 rounded-lg"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
