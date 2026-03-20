import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, ArrowRight } from "lucide-react";
import { getEvents } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4 uppercase">
            Sự Kiện & Khuyến Mãi
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cập nhật những chương trình ưu đãi và sự kiện mới nhất từ KHOA CAR
            SERVICE.
          </p>
        </div>

        {/* Events grid */}
        {events.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Hiện tại chưa có sự kiện nào diễn ra. Vui lòng quay lại sau!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event: any) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                {/* Thumbnail */}
                <Link
                  href={`/events/${event.slug}`}
                  className="block relative h-56 overflow-hidden bg-gray-200"
                >
                  {event.coverImage ? (
                    <Image
                      src={urlFor(event.coverImage).url()}
                      alt={event.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Không có ảnh
                    </div>
                  )}

                  {/* Badge Ngày bắt đầu */}
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(event.startDate)}
                  </div>
                </Link>

                {/* Nội dung Card */}
                <div className="p-6">
                  <Link href={`/events/${event.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-red transition-colors line-clamp-2">
                      {event.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                    {event.excerpt}
                  </p>

                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-flex items-center text-brand-red font-semibold hover:text-red-800 transition-colors"
                  >
                    Xem chi tiết <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
