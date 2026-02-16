import { SERVICES, BLOG_POSTS } from '@/lib/data';
import ServiceSidebar from '@/components/service/ServiceSidebar';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return SERVICES.filter((s) => s.slug).map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  const service = SERVICES.find((s) => s.slug === slug);

  const relatedPosts = BLOG_POSTS.filter((post) => post.serviceSlug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white pb-20">
      <div className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{service.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-brand-red font-semibold">Kiến thức {service.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- List of posts --- */}
          <div className="lg:w-2/3">
            
            {/* Introduce the service */}
            <div className="mb-10 bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tổng quan</h2>
                <p className="text-gray-600">{service.description}</p>
            </div>

            {/* Related posts */}
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-red rounded-sm"></span>
              Bài Viết Chuyên Đề
            </h3>

            {relatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Mới
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center text-brand-red text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Đọc tiếp <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // If there are no posts, show a message
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">Hiện chưa có bài viết nào cho chuyên mục này.</p>
                <p className="text-sm text-gray-400 mt-1">Vui lòng quay lại sau.</p>
              </div>
            )}
          </div>

          {/* --- SIDEBAR --- */}
          <div className="lg:w-1/3">
            <ServiceSidebar currentSlug={slug} />
          </div>

        </div>
      </div>
    </div>
  );
}