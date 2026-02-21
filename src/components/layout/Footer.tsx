import Link from "next/link";
import { Facebook, Youtube, MapPin, Mail, Clock } from "lucide-react";
import { BRANCHES, CONTACT_INFO, FOOTER_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-red-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center font-bold text-lg">
                TP
              </div>
              <span className="font-bold text-xl uppercase tracking-wider">
                Anh Khoa Auto
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Anh Khoa Auto - Đơn vị tiên phong trong lĩnh vực sửa chữa, bảo
              dưỡng và chăm sóc xe ô tô chuyên nghiệp tại TP.HCM.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Garage address */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">
              Hệ Thống Garage
            </h3>
            <div className="space-y-4">
              {BRANCHES.map((branch, idx) => (
                <div key={idx} className="group">
                  <h4 className="font-semibold text-brand-red text-sm mb-1">
                    {branch.name}
                  </h4>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2 text-gray-400 text-sm group-hover:text-white transition-colors"
                  >
                    <MapPin size={16} className="mt-1 shrink-0" />
                    <span>{branch.address}</span>
                  </a>
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Clock size={16} className="text-brand-red" />
                  <span>8:00 - 17:30 (Thứ 2 - Chủ Nhật)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail size={16} className="text-brand-red" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">
              Dịch Vụ Chính
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services?category=${service.slug}`}
                    className="group text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-brand-red transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About us */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">
              Về Chúng Tôi
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                     <span className="w-1.5 h-1.5 bg-gray-600 rounded-full hover:bg-brand-red transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Anh Khoa Auto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}