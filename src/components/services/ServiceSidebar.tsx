import Link from "next/link";
import { CONTACT_INFO, getServices } from "@/lib/data";
import { ArrowRight, Phone } from "lucide-react";
import { Locale } from "@/dictionaries";

type Props = {
  dict: any;
  lang: Locale;
  currentSlug: string;
};
export default function ServiceSidebar(props: Props) {
  const services = getServices(props.dict);

  return (
    <aside className="space-y-8">
      {/* List of services */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
          Dịch Vụ Khác
        </h3>
        <div className="flex flex-col space-y-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services?category=${service.slug}`}
              className={`flex items-center justify-between p-3 rounded transition-colors ${
                service.slug === props.currentSlug
                  ? "bg-brand-red text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {service.title}
              {service.slug !== props.currentSlug && <ArrowRight size={16} />}
            </Link>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="bg-brand-dark text-white p-8 rounded-xl text-center sticky top-24">
        <h3 className="text-xl font-bold mb-2">Cần Tư Vấn Ngay?</h3>
        <p className="text-gray-400 text-sm mb-6">
          Để lại thông tin hoặc gọi ngay cho chúng tôi để được hỗ trợ 24/7.
        </p>

        <a
          href={`tel:${CONTACT_INFO.hotline.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white py-3 px-4 rounded-lg font-bold transition mb-4"
        >
          <Phone size={20} />
          {CONTACT_INFO.hotline}
        </a>

        <div className="text-sm text-gray-500">
          Hoặc gửi email về: <br />
          <span className="text-white">{CONTACT_INFO.email}</span>
        </div>
      </div>
    </aside>
  );
}
