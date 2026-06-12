import type { Metadata } from "next";
import { Montserrat, Nunito_Sans, Rufina, Khand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AOSInit } from "@/components/aos";
import RecentPost from "@/components/RecentPost";
import Popup from "@/components/Popup";
import Chatbot from "@/components/Chatbot/Chatbot";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rufina",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ग्रामपंचायत सावरला | Gram Panchayat Savarla, Pawani, Bhandara",
  description:
    "Official website of Gram Panchayat Savarla, Taluka Pawani, District Bhandara, Maharashtra. Providing citizen services including birth certificate, death certificate, property tax, water tax, marriage registration and implementation of government schemes like PM Awas Yojana, MGNREGA, Jal Jeevan Mission.",
  keywords: [
    "Gram Panchayat Savarla",
    "ग्रामपंचायत सावरला",
    "Savarla village",
    "Pawani Taluka",
    "Bhandara District",
    "Maharashtra",
    "citizen services",
    "birth certificate",
    "death certificate",
    "government schemes",
    "PM Awas Yojana",
    "Jal Jeevan Mission",
  ],
  openGraph: {
    title: "ग्रामपंचायत सावरला | Gram Panchayat Savarla",
    description:
      "Official portal of Gram Panchayat Savarla — Transparent governance, rural development, and quality citizen services for Savarla village, Pawani, Bhandara, Maharashtra.",
    type: "website",
    locale: "mr_IN",
    alternateLocale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale === "mr" ? "mr" : "en"}>
      <AOSInit />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Gram Panchayat Savarla",
              alternateName: "ग्रामपंचायत सावरला",
              url: "https://gpsavarla.in",
              logo: "/gp-logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mu. Po. Savarla",
                addressLocality: "Pawani",
                addressRegion: "Bhandara, Maharashtra",
                postalCode: "441910",
                addressCountry: "IN",
              },
              telephone: "+91-9021411174",
              email: "gpsavarla.pawani@gmail.com",
              description:
                "Official Gram Panchayat of Savarla village, Pawani Taluka, Bhandara District, Maharashtra",
            }),
          }}
        />
      </head>
      <body
        className={`${nunitoSans.variable} ${rufina.variable} ${montserrat.variable} ${khand.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <RecentPost />
          <Popup />
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
