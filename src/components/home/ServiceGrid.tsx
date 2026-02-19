import { ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SUB_SERVICES } from "@/lib/data";

type Props = {
  slug: string;
  title: String,
  icon: LucideIcon,
};

export default function ServiceGrid(props: Props) {
  const filteredServices = SUB_SERVICES.filter(
    (service) => service.parentSlug === props.slug
  );

  if (filteredServices.length === 0) return null;

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="text-center mb-12 flex items-center justify-center gap-4">
        <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
          <props.icon size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold">
          {props.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredServices.map((service) => (
        <div
          key={service.slug}
          className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors text-brand-dark">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
              {service.description}
            </p>
            <Link
              key={service.slug}
              href={`/services?category=${service.slug}`}
              className="inline-flex items-center text-brand-red font-semibold text-sm hover:underline"
            >
              Xem chi tiết <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
