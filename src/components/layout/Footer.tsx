import Link from "next/link";
import { Facebook, Youtube, MapPin, Mail, Clock } from "lucide-react";
import { CONTACT_INFO, FOOTER_LINKS, getServices } from "@/lib/data";

type Props = {
  dict: any;
};

export default function Footer(props: Props) {
  const services = getServices(props.dict);

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-red-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center font-bold text-lg">
                AK
              </div>
              <span className="font-bold text-xl uppercase tracking-wider">
                Anh Khoa Auto
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {props.dict.footer.companyDescription}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/khoa.do0903"
                className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-brand-red transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Garage address */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">
              {props.dict.footer.garageSystem}
            </h3>
            <div className="space-y-4">
              <div>
                <a
                  href={CONTACT_INFO.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 text-gray-400 text-sm group-hover:text-white transition-colors"
                >
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </div>
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Clock size={16} className="text-brand-red" />
                  <span>{props.dict.common.workingHours}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail size={16} className="text-brand-red" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">
              {props.dict.footer.mainServices}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
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
              {props.dict.footer.aboutUs}
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
          <p>
            © {new Date().getFullYear()} {props.dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
