"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 360);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-fuchsia-200/24 bg-[#0b1332]/90 text-white shadow-[0_14px_40px_rgba(0,0,0,0.35),0_0_28px_rgba(117,71,223,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200/55 hover:bg-[#171b4a] hover:shadow-[0_18px_48px_rgba(0,0,0,0.4),0_0_34px_rgba(202,74,255,0.3)] ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="m6 14 6-6 6 6M12 8v10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
