"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image - Item 1 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
          alt="Thanh Phong Auto Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <span className="bg-brand-red px-3 py-1 text-sm font-bold rounded inline-block">
            UY TÍN - TẬN TÂM - TRÁCH NHIỆM
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Chăm Sóc & Bảo Dưỡng <br /> Ô Tô Chuyên Nghiệp
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Anh Khoa Auto mang đến giải pháp toàn diện cho xế yêu của bạn với
            đội ngũ kỹ thuật viên giàu kinh nghiệm.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/services"
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition"
            >
              Xem Dịch Vụ
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-3 rounded font-bold transition"
            >
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
