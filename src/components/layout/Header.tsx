"use client";

import {
  Clock,
  MapPin,
  Menu,
  Phone,
  Search,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_INFO, MENU_ITEMS, SERVICES, SUB_SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
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
          <nav className="hidden lg:flex items-center gap-8 relative">
            {MENU_ITEMS.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    className="group flex items-center relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 font-bold text-sm uppercase transition-colors py-4",
                        isActive(item.href) || pathname.startsWith("/services")
                          ? "text-brand-red"
                          : "text-gray-700 hover:text-brand-red",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    </Link>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] pt-2 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      {/* Service dropdown menu */}
                      <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-t-4 border-brand-red rounded-b-xl overflow-hidden cursor-default">
                        <div className="p-8">
                          <div className="grid grid-cols-4 gap-8">
                            {SERVICES.map((service) => {
                              const childServices = SUB_SERVICES.filter(
                                (sub) => sub.parentSlug === service.slug,
                              );

                              return (
                                <div
                                  key={service.slug}
                                  className="flex flex-col"
                                >
                                  <Link
                                    href={`/services?category=${service.slug}`}
                                    className="font-extrabold text-brand-dark text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100 hover:text-brand-red transition-colors block"
                                  >
                                    {service.title}
                                  </Link>

                                  {/* List sub-services */}
                                  <ul className="flex flex-col gap-3">
                                    {childServices.length > 0 ? (
                                      childServices.map((sub) => (
                                        <li key={sub.slug}>
                                          <Link
                                            href={`/services?category=${sub.slug}`}
                                            className="text-gray-500 text-sm hover:text-brand-red hover:translate-x-1 transition-all duration-200 block"
                                          >
                                            {sub.title}
                                          </Link>
                                        </li>
                                      ))
                                    ) : (
                                      <li className="text-gray-400 text-xs italic">
                                        Đang cập nhật...
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="bg-gray-50 py-3 px-8 text-center border-t border-gray-100">
                          <Link
                            href="/services"
                            className="text-sm font-bold text-brand-red hover:underline flex items-center justify-center gap-1"
                          >
                            Xem tất cả các dịch vụ <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-bold text-sm uppercase transition-colors py-4",
                    isActive(item.href)
                      ? "text-brand-red"
                      : "text-gray-700 hover:text-brand-red",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
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
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-red transition"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          mobileMenuOpen ? "visible" : "invisible pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
            <span className="font-bold text-lg text-brand-dark uppercase">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col px-4 space-y-2">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === item.href ||
                      (item.href === "/services" &&
                        pathname.startsWith("/services"))
                      ? "bg-red-50 text-brand-red"
                      : "text-gray-700 hover:bg-gray-50 hover:text-brand-red",
                  )}
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className={cn(
                      "transition-transform",
                      pathname === item.href
                        ? "text-brand-red"
                        : "text-gray-300",
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-6 px-6 space-y-3">
              <Link
                href="/dat-lich"
                className="flex items-center justify-center w-full bg-brand-red text-white py-3 rounded-lg font-bold shadow hover:bg-red-700 transition"
              >
                Đặt Lịch Ngay
              </Link>
              <button className="flex items-center justify-center w-full border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition gap-2">
                <Search size={18} /> Tìm kiếm
              </button>
            </div>
          </div>

          <div className="p-5 border-t border-gray-100 bg-gray-50 text-sm text-gray-600 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Hotline tư vấn</p>
                <a
                  href={`tel:${CONTACT_INFO.hotline.replace(/\s/g, "")}`}
                  className="font-bold text-gray-900"
                >
                  {CONTACT_INFO.hotline}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Giờ làm việc</p>
                <p className="font-medium text-gray-900">
                  8:00 - 17:30 (T2 - CN)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
