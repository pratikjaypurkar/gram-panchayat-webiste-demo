import Biography from "@/components/About/Biography";
import More from "@/components/About/More";
import About from "@/components/LandingPage/About";
import React from "react";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <Biography />
      <About />
      <More />
    </main>
  );
}
