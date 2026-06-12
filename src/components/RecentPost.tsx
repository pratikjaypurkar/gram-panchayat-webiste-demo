"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentPost() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <Link
      href="/#feed"
      className={`fixed bottom-0 right-0 mb-12 py-2 px-4 rounded-l-full bg-[var(--primary-clr)] text-white z-50 shadow-custom transition-all duration-1000 ${
        hidden ? "translate-x-full" : "translate-x-0"
      }`}
    >
      Recent Posts
    </Link>
  );
}
