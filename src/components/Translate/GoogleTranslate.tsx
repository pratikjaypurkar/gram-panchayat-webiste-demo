"use client";

import Script from "next/script";
import React, { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }

  interface Select {
    value: any;
    dispatchEvent: (event: Event) => void;
  }
}

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Marathi", value: "mr", src: "https://flagcdn.com/h60/in.png" },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

const addGoogleTranslateScript = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
};

const GoogleTranslate = ({ prefLangCookie }: { prefLangCookie: string }) => {
  const [langCookie, setLangCookie] = React.useState(
    decodeURIComponent(prefLangCookie)
  );

  React.useEffect(() => {
    setLangCookie(localStorage.getItem("RKE_lang") || prefLangCookie);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [prefLangCookie]);

  const onChange = (value: string) => {
    const lang = "/en/" + value;
    setLangCookie(lang);

    localStorage.setItem("RKE_lang", lang);

    const element = document.querySelector(".goog-te-combo") as Select | null;

    if (element) {
      // do not fix if you do not what it is doing
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          visibility: "hidden",
          position: "absolute",
          top: "-9999px",
          width: "1px",
          height: "1px",
        }}
      ></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleTranslate;

function LanguageSelector({ onChange, value }: any) {
  const langCookie = value.split("/")[2];
  return (
    <select
      className="lang-select text-[#070707]"
      onChange={(e) => onChange(e.target.value)}
      value={langCookie}
    >
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}
