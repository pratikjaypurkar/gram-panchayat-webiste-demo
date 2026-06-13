"use client";

// import supabase from "@/supabase";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
export default function Popup() {
  const [hidden, setHidden] = useState(true);
  const t = useTranslations();
  const t1 = useTranslations("contact us");

  useEffect(() => {
    // Show immediately after a tiny delay for smooth animation
    const timer1 = setTimeout(() => {
      setHidden(false);
    }, 500);

    return () => clearTimeout(timer1);
  }, []);

  const [formdata, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Phone_Number: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`${hidden ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100] transition-all duration-500`}
    >
      <div className="relative bg-white rounded-md max-w-[550px] w-full text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] mx-4 overflow-hidden border-t-[8px] border-[#FF9933]">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
          onClick={() => setHidden(true)}
        >
          <IoClose size={28} />
        </button>

        {/* Header Section */}
        <div className="bg-gray-50 py-8 px-6 border-b border-gray-200">
          <Image
            src="/final-logo.png"
            alt="Gram Panchayat Logo"
            width={120}
            height={120}
            className="mx-auto mb-4 drop-shadow-md"
            unoptimized
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Welcome to Gram Panchayat Portal
          </h2>
        </div>

        {/* Body Section */}
        <div className="p-8 md:p-10 bg-white">
          <div className="mb-8">
            <span className="text-4xl text-[#FF9933] font-serif leading-none opacity-50">&quot;</span>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed italic px-4">
              {t("quote2")}
            </p>
            <span className="text-4xl text-[#138808] font-serif leading-none opacity-50 float-right -mt-4">&quot;</span>
          </div>

          <button
            className="px-10 py-3 bg-[#138808] text-white font-bold tracking-wide uppercase rounded-sm hover:bg-green-800 transition-colors shadow-lg w-full sm:w-auto"
            onClick={() => setHidden(true)}
          >
            Proceed to Portal
          </button>
        </div>

        {/* Tricolor Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
      </div>
    </div>
    // <div
    //   className={`${hidden ? "hidden" : "flex lg:items-center justify-center gap-8"} overflow-y-auto fixed top-0 left-0 right-0 bottom-0 bg-[#f37021] bg-opacity-50 backdrop-blur z-50`}
    // >
    //   <button
    //     className="absolute top-0 right-0 m-4 text-black"
    //     onClick={() => setHidden(true)}
    //   >
    //     <IoClose size={40} />
    //   </button>

    //   <div className="w-full py-12 px-8 lg:w-fit mx-auto text-center">
    //     <h1 className="text-white text-4xl md:text-5xl text-center">{t("quote2")}</h1>
    //     <h2 className="text-white text-center">{t("join")}</h2>

    //     <div className="py-8">
    //       <form
    //         className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8"
    //         onSubmit={handleSubmit}
    //       >
    //         <label htmlFor="">
    //           <span className="text-white">{t1("form.first name")}</span>
    //           <input
    //             type="text"
    //             className="block border-b-2 border-[#8D8D8D] w-full p-2 outline-none focus:border-b-black rounded-xl"
    //             onChange={(e) => {
    //               setFormData({ ...formdata, First_Name: e.target.value });
    //             }}
    //             required
    //           />
    //         </label>
    //         <label htmlFor="">
    //           <span className="text-white">{t1("form.last name")}</span>
    //           <input
    //             type="text"
    //             className="block border-b-2 border-[#8D8D8D] w-full p-2 outline-none focus:border-b-black rounded-xl"
    //             onChange={(e) => {
    //               setFormData({ ...formdata, Last_Name: e.target.value });
    //             }}
    //             required
    //           />
    //         </label>
    //         <label htmlFor="">
    //           <span className="text-white">{t1("form.city")}</span>
    //           <input
    //             type="text"
    //             className="block border-b-2 border-[#8D8D8D] w-full p-2 outline-none focus:border-b-black rounded-xl"
    //             onChange={(e) => {
    //               setFormData({ ...formdata, Email: e.target.value });
    //             }}
    //             required
    //           />
    //         </label>
    //         <label htmlFor="">
    //           <span className="text-white">{t1("form.phone")}</span>
    //           <input
    //             type="tel"
    //             className="block border-b-2 border-[#8D8D8D] w-full p-2 outline-none focus:border-b-black rounded-xl"
    //             onChange={(e) => {
    //               setFormData({ ...formdata, Phone_Number: e.target.value });
    //             }}
    //             required
    //           />
    //         </label>
    //         <label htmlFor="" className="md:col-span-2">
    //           <span className="text-white">{t1("form.message")}</span>
    //           <textarea
    //             className="block border-b-2 border-[#8D8D8D] w-full p-2 outline-none focus:border-b-black rounded-xl"
    //             onChange={(e) => {
    //               setFormData({ ...formdata, Message: e.target.value });
    //             }}
    //             required
    //           />
    //         </label>
    //         <button
    //           disabled={loading}
    //           className="md:col-span-2 btn mx-auto px-6 py-3 bg-[var(--primary-clr)] block w-fit text-[#fff] rounded-xl"
    //         >
    //           <span>
    //             {loading ? t1("form.sending") : t1("form.send message")}
    //           </span>
    //         </button>
    //       </form>{" "}
    //     </div>
    //   </div>
    // </div>
  );
}
