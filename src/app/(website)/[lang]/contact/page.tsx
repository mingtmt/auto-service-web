import { getDictionary, Locale } from "@/dictionaries";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
            {dict.contact.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-dark mb-6 border-l-4 border-brand-red pl-4 uppercase">
              {dict.contact.info.title}
            </h2>

            <div className="space-y-6">
              {/* Company name */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {dict.contact.info.companyName}
                </h3>
                <p className="text-brand-red font-semibold mb-2">
                  KHOA CAR SERVICE
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {dict.contact.info.coreValues}
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  <span className="font-bold text-brand-dark">DỊCH VỤ:</span>{" "}
                  Bảo dưỡng - Sửa chữa - Chăm sóc, làm đẹp - Mua bán ô tô
                </p>
                <hr className="my-2 border-gray-200" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-brand-dark">CHUYÊN:</span> Đại
                  tu - Sửa chữa - Bảo dưỡng - Bảo Hiểm - Đồng Sơn - Chăm sóc xe
                  - Mua bán <br /> Máy - Gầm - Hộp số - Hệ thống điện - Điện
                  lạnh
                </p>
              </div>

              {/* Address & Hotline */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red/10 p-3 rounded-full text-brand-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Địa chỉ Garage</p>
                    <p className="font-medium text-gray-900">
                      {dict.contact.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-red/10 p-3 rounded-full text-brand-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Hotline Hỗ Trợ</p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:0794988386"
                        className="font-bold text-lg text-gray-900 hover:text-brand-red transition"
                      >
                        0794 98 83 86
                      </a>
                      <a
                        href="tel:0969463638"
                        className="font-bold text-lg text-gray-900 hover:text-brand-red transition"
                      >
                        0969 46 36 38
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">
                  Kết nối với chúng tôi
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/garage.khoacar/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@khoa.car"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-black/5 text-black flex items-center justify-center hover:bg-black hover:text-white transition"
                  >
                    <FaTiktok size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              {dict.contact.form.title}
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.contact.form.name} *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.contact.form.phone} *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.contact.form.service}
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition bg-white">
                  <option value="">Chọn dịch vụ bạn quan tâm</option>
                  <option value="Bảo dưỡng">Bảo dưỡng</option>
                  <option value="Sửa chữa">Sửa chữa / Đại tu</option>
                  <option value="Đồng Sơn">Đồng Sơn / Làm đẹp</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition resize-none"
                  placeholder="Mô tả tình trạng xe hoặc yêu cầu của bạn..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors text-lg"
              >
                {dict.contact.form.submitBtn}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.038165516769!2d106.7337373!3d10.731518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzUzLjUiTiAxMDbCsDQ0JzAxLjUiRQ!5e0!3m2!1svi!2s!4v1610000000000!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
