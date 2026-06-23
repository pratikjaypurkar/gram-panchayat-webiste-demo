import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Members() {
  const t = useTranslations("main.members");
  const tOfficials = useTranslations("officials");

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
        {[
          { key: "sarpanch", img: "member1.png" },
          { key: "upsarpanch", img: "member2.png" },
          { key: "gramsevak", img: "member3.png" },
          { key: "member1", img: "member4.png" }
        ].map((member, idx) => (
          <div
            key={idx}
            className="w-full aspect-[3/4] bg-gray-300 rounded-xl relative overflow-hidden group"
            data-aos="fade-in"
            data-aos-delay={idx * 100}
          >
            <Image
              src={`/assets/members/${member.img}`}
              alt={`Member ${idx + 1}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 text-center">
              <div className="absolute top-0 -left-[50%] w-[200%] bg-white aspect-square rounded-full -translate-y-[10%] z-[-1]"></div>
              <h4 className="montserrat text-[var(--primary-txt)] font-[600] text-sm mb-1">
                {tOfficials(`${member.key}.name`)}
              </h4>
              <p className="text-[var(--primary-clr)] text-xs font-bold uppercase">
                {tOfficials(`${member.key}.title`)}
              </p>
              <div className="p-2 flex items-center justify-center rounded-lg bg-[#F0F4F9] mt-2 text-[var(--primary-txt)] divide-x-2 divide-gray-200">
                <Link href="#" className="py-2 px-3 hover:text-[#FF9933] transition-colors">
                  <FaFacebookF size={14} />
                </Link>
                <Link href="#" className="py-2 px-3 hover:text-[#FF9933] transition-colors">
                  <FaXTwitter size={14} />
                </Link>
                <Link href="#" className="py-2 px-3 hover:text-[#FF9933] transition-colors">
                  <FaLinkedinIn size={14} />
                </Link>
                <Link href="#" className="py-2 px-3 hover:text-[#FF9933] transition-colors">
                  <FaYoutube size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
