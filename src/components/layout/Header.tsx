"use client";

import { Clock, MapPin, Menu, Phone, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT_INFO, MENU_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md",
        isScrolled ? "py-0" : "py-0",
      )}
    >
      <div className="bg-brand-red text-white py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> Hotline: {CONTACT_INFO.hotline}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> 8:00 - 17:30 (T2 - CN)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> {CONTACT_INFO.address}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-brand-red rounded flex items-center justify-center text-white font-bold text-xl">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl uppercase text-brand-dark leading-none">
              Anh Khoa
            </span>
            <span className="text-sm text-gray-500 font-medium tracking-widest">
              AUTO
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 font-medium hover:text-brand-red transition-colors uppercase text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search size={20} />
          </button>
          <Link
            href="/dat-lich"
            className="bg-brand-red text-white px-5 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Đặt Lịch Hẹn
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-gray-700">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
