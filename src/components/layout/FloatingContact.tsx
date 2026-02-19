"use client";
import { useState, useEffect } from "react";
import { Phone, ChevronUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Trở về đầu trang"
        className={`w-10 h-10 bg-gray-700/80 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-brand-red transition-all duration-300 backdrop-blur-sm
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>

      {/* Zalo Button */}
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 animate-bounce-slow"
        title="Chat Zalo"
      >
        <span className="font-bold text-xs">Zalo</span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${CONTACT_INFO.hotline.replace(/\s/g, "")}`}
        className="group relative flex items-center justify-end"
      >
        {/* Tooltip text */}
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Gọi ngay: {CONTACT_INFO.hotline}
        </span>

        {/* Icon */}
        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 hover:scale-110 transition-all duration-300 border-2 border-white">
          <Phone size={20} className="animate-pulse" />
        </div>
      </a>
    </div>
  );
}