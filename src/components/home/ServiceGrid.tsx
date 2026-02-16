import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service) => (
        <div
          key={service.id}
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
            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red mb-4">
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors text-brand-dark">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
              {service.description}
            </p>
            <Link
              href={`/dich-vu/${service.id}`}
              className="inline-flex items-center text-brand-red font-semibold text-sm hover:underline"
            >
              Xem chi tiết <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
