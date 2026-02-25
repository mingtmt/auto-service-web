import { getProductBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import {
  ShoppingCart,
  Phone,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Home,
} from "lucide-react";
import { CONTACT_INFO, PRODUCT_CATEGORIES } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Hình ảnh chi tiết sản phẩm"}
            fill
            className="object-contain"
          />
        </div>
      );
    },
    table: ({ value }: any) => {
      if (!value?.rows?.length) return null;
      return (
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-gray-200 text-sm text-left">
            <tbody>
              {value.rows.map((row: any, rowIndex: number) => (
                <tr
                  key={row._key}
                  className={
                    rowIndex === 0
                      ? "bg-gray-100 font-bold"
                      : "border-b border-gray-100 hover:bg-gray-50"
                  }
                >
                  {row.cells.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex} className="p-4 border border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export default async function ProductDetailPage(props: Props) {
  const resolvedParams = await props.params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;
  const isOutOfStock = product.stock <= 0;

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <Link
            href="/"
            className="hover:text-brand-red flex items-center gap-1"
          >
            <Home size={14} /> Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-brand-red">
            Sản phẩm
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product images */}
            <div className="w-full md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center bg-gray-50/50">
              <div className="relative w-full aspect-square max-w-md overflow-hidden rounded-xl shadow-sm border border-gray-100 bg-white">
                {product.mainImage ? (
                  <Image
                    src={urlFor(product.mainImage).url()}
                    alt={product.name}
                    fill
                    className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                    Chưa có hình ảnh
                  </div>
                )}

                {/* Discount badge */}
                {hasDiscount && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white font-bold px-3 py-1 rounded-full shadow-md">
                    Giảm{" "}
                    {Math.round(
                      ((product.price - product.discountPrice) /
                        product.price) *
                        100,
                    )}
                    %
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
              {/* Category & Status */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {PRODUCT_CATEGORIES[product.category] || "Phụ tùng thay thế"}
                </span>
                <span
                  className={`flex items-center gap-1 text-sm font-semibold ${isOutOfStock ? "text-red-500" : "text-green-600"}`}
                >
                  {isOutOfStock ? (
                    <>
                      <XCircle size={16} /> Hết hàng
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={16} /> Còn hàng
                    </>
                  )}
                </span>
              </div>

              {/* Product name */}
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* SKU */}
              {product.sku && (
                <p className="text-sm text-gray-500 mb-6">
                  Mã sản phẩm:{" "}
                  <span className="font-semibold text-gray-900">
                    {product.sku}
                  </span>
                </p>
              )}

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100">
                {hasDiscount ? (
                  <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
                    <span className="text-3xl font-extrabold text-brand-red">
                      {formatPrice(product.discountPrice)}
                    </span>
                    <span className="text-lg text-gray-400 line-through mb-1">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-brand-red">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  disabled={isOutOfStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all
                    ${
                      isOutOfStock
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-500/30 hover:-translate-y-1"
                    }
                  `}
                >
                  <ShoppingCart size={20} />
                  {isOutOfStock ? "Tạm hết hàng" : "Thêm vào giỏ hàng"}
                </button>

                <a
                  href={`tel:${CONTACT_INFO.hotline_1.replace(/\s/g, "")}`}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
                >
                  <Phone size={20} />
                  Gọi tư vấn
                </a>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-auto">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" /> Cam
                    kết hàng chính hãng 100%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" /> Hỗ trợ
                    lắp đặt trực tiếp tại Garage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" /> Bảo
                    hành theo tiêu chuẩn nhà sản xuất
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              Chi tiết sản phẩm
            </h2>
            <div className="prose prose-red max-w-none prose-img:rounded-xl prose-img:w-full prose-img:max-w-3xl prose-img:mx-auto">
              <PortableText
                value={product.description}
                components={portableTextComponents}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
