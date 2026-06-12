import Script from "next/script";
import React from "react";

export default function Socialfeeds() {
  return (
    <section
      className="px-8 xl:px-40 py-20 bg-[var(--primary-clr)] mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      id="feed"
    >
      <div className="rounded-xl overflow-hidden feeds bg-white flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
        <h3 className="text-2xl font-bold mb-4">Gram Panchayat Updates</h3>
        <p className="text-gray-600">Latest updates and announcements will appear here.</p>
      </div>
      <div className="rounded-xl overflow-x-hidden overflow-y-scroll max-h-[500px] feeds bg-white flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
        <h3 className="text-2xl font-bold mb-4">Gram Panchayat Updates</h3>
        <p className="text-gray-600">Latest updates and announcements will appear here.</p>
      </div>
      <div className="rounded-xl overflow-y-scroll max-h-[500px] feeds bg-white flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
        <h3 className="text-2xl font-bold mb-4">Gram Panchayat Updates</h3>
        <p className="text-gray-600">Latest updates and announcements will appear here.</p>
      </div>
    </section>
  );
}
