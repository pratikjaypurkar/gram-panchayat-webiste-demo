import React from "react";
import { FaStar } from "react-icons/fa6";
import InfoCards from "./InfoCards";

export default function FeaturedInfo() {
  return (
    <section className="px-8 lg:px-20 py-20 space-y-8 pattern1 bg-[#f3f3f0]">
      <div className="text-center">
        <p className="rufina text-xs">Explore Main Information</p>
        <h2 className="w-fit m-auto">
          Featured Information
          <span className="flex w-full mt-2 gap-4 items-center">
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <FaStar size={20} className="text-[var(--primary-clr)]" />
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <InfoCards
          icon="/assets/LandingPage/info/constituency.svg"
          title="Constituency"
          text="To take a trivial example usever undertakes laborious exercise except."
          link=""
        />
        <InfoCards
          icon="/assets/LandingPage/info/vision.svg"
          title="Vision"
          text="Must explain to you how all this mistaken idea of pain give you complete."
          link=""
        />
        <InfoCards
          icon="/assets/LandingPage/info/development.svg"
          title="Development"
          text="The great explorer of the truth the master-builders off human happiness."
          link=""
        />
        <InfoCards
          icon="/assets/LandingPage/info/social.svg"
          title="Social Activist"
          text="Do not know how to pleasure rationally encounter tremely painful."
          link=""
        />
      </div>
    </section>
  );
}
