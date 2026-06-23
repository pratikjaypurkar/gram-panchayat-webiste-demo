"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentPost() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <Link href={"/news"}>
        <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          नवीन माहिती
        </button>
      </Link>
    </div>
  );
}
