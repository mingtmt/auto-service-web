import { getAllProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Tag, PackageX } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Phụ Tùng & Phụ Kiện | Khoa Car Service",
  description: "Cung cấp phụ tùng, đồ chơi xe hơi chính hãng.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner Header */}
      <div className="relative h-[250px] bg-brand-dark flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600706432502-77a0e2e32771?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Sản phẩm
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Phụ tùng - Phụ kiện - Đồ chơi xe
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => {
              // Calculate discount percentage
              const hasDiscount =
                product.discountPrice && product.discountPrice < product.price;
              const discountPercent = hasDiscount
                ? Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100,
                  )
                : 0;

              return (
                <Link
                  key={product._id}
                  href={`/products/${product.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  {hasDiscount && (
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{discountPercent}%
                    </div>
                  )}

                  <div className="relative h-60 w-full bg-gray-100 overflow-hidden">
                    {product.mainImage ? (
                      <Image
                        src={urlFor(product.mainImage).url()}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <PackageX size={48} />
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
                      <Tag size={12} />
                      {PRODUCT_CATEGORIES[product.category] || "Phụ tùng"}
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-red transition-colors flex-grow">
                      {product.name}
                    </h3>

                    <div className="mt-auto pt-4 flex items-end justify-between">
                      <div>
                        {hasDiscount ? (
                          <>
                            <p className="text-gray-400 text-sm line-through mb-0.5">
                              {formatPrice(product.price)}
                            </p>
                            <p className="text-brand-red font-bold text-lg">
                              {formatPrice(product.discountPrice)}
                            </p>
                          </>
                        ) : (
                          <p className="text-brand-red font-bold text-lg">
                            {formatPrice(product.price)}
                          </p>
                        )}
                      </div>

                      <div className="w-10 h-10 rounded-full bg-red-50 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="inline-flex bg-gray-100 p-4 rounded-full mb-4 text-gray-400">
              <PackageX size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Sản phẩm đang được cập nhật
            </h3>
            <p className="text-gray-500 mb-6">
              Vui lòng quay lại sau, chúng tôi đang bổ sung các mặt hàng mới.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
