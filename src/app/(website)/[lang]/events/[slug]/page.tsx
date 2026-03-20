import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getEventBySlug } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string; lang: string }>;
};

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden shadow-md">
          <Image
            src={urlFor(value).url()}
            alt="Hình ảnh bài viết"
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-dark">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-red pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2 text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2 text-lg">
        {children}
      </ol>
    ),
  },
};

export default async function EventDetailPage({ params }: Props) {
  const { slug, lang } = await params;

  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href={`/${lang}/events`}
          className="inline-flex items-center text-gray-500 hover:text-brand-red mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Quay lại danh sách sự kiện
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* thumbnail */}
          {event.coverImage && (
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={urlFor(event.coverImage).url()}
                alt={event.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          )}

          {/* Title */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 font-medium bg-gray-50 inline-flex px-5 py-3 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-brand-red" />
                <span>Bắt đầu: {formatDate(event.startDate)}</span>
              </div>
              {event.endDate && (
                <div className="flex items-center gap-2 border-l border-gray-300 pl-6">
                  <Clock size={20} className="text-red-500" />
                  <span>Kết thúc: {formatDate(event.endDate)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 max-w-none">
            {event.content ? (
              <PortableText
                value={event.content}
                components={portableTextComponents}
              />
            ) : (
              <p className="text-gray-500 italic">
                Nội dung chi tiết đang được cập nhật...
              </p>
            )}

            {/* Action */}
            <div className="mt-12 bg-red-50 rounded-xl p-8 text-center border border-red-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                Bạn quan tâm đến chương trình này?
              </h3>
              <p className="text-gray-700 mb-6">
                Đừng bỏ lỡ ưu đãi đặc biệt. Hãy liên hệ với KHOA CAR SERVICE
                ngay hôm nay để được hỗ trợ tốt nhất!
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-block bg-brand-red text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-md"
              >
                Đặt Lịch Khám Xe Ngay
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
