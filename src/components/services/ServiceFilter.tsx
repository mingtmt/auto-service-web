"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { SERVICES, SUB_SERVICES } from "@/lib/data";

export default function ServiceSidebarFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const initialOpenSlug =
    SUB_SERVICES.find((s) => s.slug === currentCategory)?.parentSlug || 
    SERVICES.find((m) => m.slug === currentCategory)?.slug || 
    null;

  const [openMainSlug, setOpenMainSlug] = useState<string | null>(initialOpenSlug);

  useEffect(() => {
    const activeSlug =
      SUB_SERVICES.find((s) => s.slug === currentCategory)?.parentSlug ||
      SERVICES.find((m) => m.slug === currentCategory)?.slug ||
      null;

    setOpenMainSlug(activeSlug);
  }, [currentCategory]);

  const toggleMainService = (slug: string) => {
    setOpenMainSlug((prev) => (prev === slug ? null : slug));
  };

  const handleSelectSub = (slug: string) => {
    if (slug === "all") {
      router.push("/services");
      setOpenMainSlug(null);
    } else {
      router.push(`/services?category=${slug}`);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
      {/* All services */}
      <div className="mb-4">
        <button
          onClick={() => handleSelectSub("all")}
          className={`w-full text-left px-5 py-3 rounded-lg font-bold transition-all duration-300 ${
            currentCategory === "all"
              ? "bg-brand-red text-white shadow-md shadow-red-500/20"
              : "text-gray-700 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          Tất cả dịch vụ
        </button>
      </div>

      {/* List main services) */}
      <div className="flex flex-col gap-3">
        {SERVICES.map((main) => {
          const subs = SUB_SERVICES.filter((s) => s.parentSlug === main.slug);
          if (subs.length === 0) return null;

          const isOpen = openMainSlug === main.slug;

          return (
            <div
              key={main.slug}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                isOpen ? "border-brand-red/30 bg-red-50/10" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => toggleMainService(main.slug)}
                className="w-full flex items-center justify-between px-5 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 text-gray-800 font-bold text-sm uppercase tracking-wide">
                  <main.icon size={18} className="text-brand-red" />
                  {main.title}
                </div>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand-red" : "text-gray-400"
                  }`}
                />
              </button>

              {/* List sub services */}
              {isOpen && (
                <div className="flex flex-col bg-white py-2 border-t border-gray-100">
                  {subs.map((sub) => (
                    <button
                      key={sub.slug}
                      onClick={() => handleSelectSub(sub.slug)}
                      className={`w-full flex items-center gap-2 text-left px-5 py-2.5 text-sm transition-all relative
                        ${
                          currentCategory === sub.slug
                            ? "text-brand-red font-bold"
                            : "text-gray-600 hover:text-brand-red hover:bg-red-50/50"
                        }
                      `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          currentCategory === sub.slug ? "bg-brand-red" : "bg-transparent"
                        }`}
                      ></span>
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}