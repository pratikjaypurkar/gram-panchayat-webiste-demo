import About from "@/components/LandingPage/About";
import BannerCarousel from "@/components/LandingPage/BannerCarousel";
import Facts from "@/components/LandingPage/Facts/Facts";
import FeaturedInfo from "@/components/LandingPage/FeaturedInfo/FeaturedInfo";
import Hero from "@/components/LandingPage/Hero/Hero";
import Journey from "@/components/LandingPage/Journey";
import Members from "@/components/LandingPage/Members/Members";
import Socialfeeds from "@/components/LandingPage/SocialFeeds/Socialfeeds";
import Video from "@/components/LandingPage/Video";
import VideoCarousel from "@/components/LandingPage/VideoCarousel/VideoCarousel";
import Vision from "@/components/LandingPage/Vision/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BannerCarousel />
      <About />
      {/* <FeaturedInfo /> */}
      <Video />
      <Facts />
      <Journey />
      <VideoCarousel />
      <Vision />
      <Socialfeeds />

      {/* <Members /> */}
    </main>
  );
}
