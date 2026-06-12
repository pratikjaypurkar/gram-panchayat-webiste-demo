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
    const timer1 = setTimeout(() => {
      setHidden(false);

      const timer2 = setTimeout(() => {
        setHidden(true);
      }, 15000);

      return () => clearTimeout(timer2);
    }, 5000);

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

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const { data, error } = await supabase
  //       .from("gram_panchayat_savarla_contact_form")
  //       .insert([formdata])
  //       .select();

  //     if (error) {
  //       throw error;
  //     }

  //     alert("Message sent successfully");
  //   } catch (e) {
  //     alert("An error occurred while sending the message");
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // };

  return (
    <div
      className={`${hidden ? "opacity-0 translate-y-[300%]" : ""} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-50 transition-all duration-500`}
    >
      <div className="relative bg-white rounded-2xl p-8 max-w-[500px] text-center shadow-2xl mx-4">
        <h2 className="text-3xl font-bold text-[var(--primary-clr)] mb-4">Welcome to Gram Panchayat Savarla Portal</h2>
        <p className="text-lg text-gray-700 italic mb-8">&quot;{t("quote2")}&quot;</p>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
          onClick={() => setHidden(true)}
        >
          <IoClose size={30} />
        </button>
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
