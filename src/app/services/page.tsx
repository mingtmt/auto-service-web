import { SERVICES } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export const metadata = {
  title: 'Kiến Thức & Dịch Vụ | Anh Khoa Auto',
  description: 'Tổng hợp các bài viết chuyên sâu về bảo dưỡng, sửa chữa và chăm sóc xe ô tô.',
};

export default async function ServicesPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-gray-50 pb-20">
      <div className="relative h-[300px] bg-brand-dark flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">Thư Viện Dịch Vụ</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-brand-red font-semibold">Tất cả bài viết</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* All categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
                href="/services" 
                className="px-6 py-2 rounded-full bg-brand-red text-white font-semibold shadow-md ring-2 ring-brand-red ring-offset-2"
            >
                Tất cả
            </Link>
            {SERVICES.map((service) => (
                <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="px-6 py-2 rounded-full bg-white text-gray-600 font-medium hover:bg-gray-100 hover:text-brand-red transition shadow-sm border border-gray-200"
                >
                    {service.title}
                </Link>
            ))}
        </div>

        {/* All posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const parentService = SERVICES.find(s => s.slug === post.serviceSlug);

            return (
              <Link 
                key={post._id} 
                href={`/services/${post.slug.current}`} 
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded flex items-center gap-1">
                        <Tag size={12} /> {parentService.title}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} /> 
                        {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
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
      </div>
    </div>
  );
}