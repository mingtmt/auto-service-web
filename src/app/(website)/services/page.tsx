import { SERVICES, SUB_SERVICES } from "@/lib/data";
import { getAllPosts, getPostsByService } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Tag, FilterX } from "lucide-react";
import ServiceFilter from "@/components/services/ServiceFilter";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata = {
  title: "Dịch vụ Sửa chữa Ô Tô | Anh Khoa Auto",
  description: "Tổng hợp tất cả dịch vụ sửa chữa Ô Tô.",
};

export default async function ServicesPage(props: Props) {
  const searchParams = await props.searchParams;
  const currentCategory =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;

  let posts: any[] = [];
  let pageTitle = "Tất cả dịch vụ";
  let emptyCategoryName = "danh mục này";

  // Filter by category
  if (!currentCategory) {
    posts = await getAllPosts();
  } else {
    const mainService = SERVICES.find((s) => s.slug === currentCategory);
    const subService = SUB_SERVICES.find((s) => s.slug === currentCategory);

    if (mainService) {
      pageTitle = mainService.title;
      emptyCategoryName = mainService.title;

      const validSubSlugs = SUB_SERVICES.filter(
        (s) => s.parentSlug === currentCategory
      ).map((s) => s.slug);

      const allPosts = await getAllPosts();
      posts = allPosts.filter((post) => validSubSlugs.includes(post.serviceSlug));

    } else if (subService) {
      pageTitle = subService.title;
      emptyCategoryName = subService.title;

      posts = await getPostsByService(currentCategory);
    }
  }

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[300px] bg-brand-dark flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <ServiceFilter />
          </aside>

          {/* List posts */}
          <section className="w-full lg:w-3/4">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const parentService = SUB_SERVICES.find(
                    (s) => s.slug === post.serviceSlug
                  );

                  return (
                    <Link
                      key={post._id}
                      href={`/services/${post.slug.current}`}
                      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                    >
                      <div className="relative h-56 overflow-hidden bg-gray-200">
                        {post.mainImage && (
                          <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        {parentService && (
                          <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded flex items-center gap-1">
                            <Tag size={10} /> {parentService.title}
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-brand-red font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                            Xem chi tiết <ArrowRight size={16} className="ml-1" />
                          </span>
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
                  <FilterX size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Chưa có bài viết nào
                </h3>
                <p className="text-gray-500 mb-6">
                  Hiện tại danh mục{" "}
                  <span className="font-semibold text-brand-red">
                    {emptyCategoryName}
                  </span>{" "}
                  chưa có bài viết.
                </p>
                <Link
                  href="/services"
                  className="inline-flex bg-brand-dark text-white px-6 py-2 rounded-lg hover:bg-black transition"
                >
                  Xem tất cả bài viết
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}