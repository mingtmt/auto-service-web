import { getPostBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, User, Clock, ArrowLeft } from "lucide-react";
import ServiceSidebar from "@/components/service/ServiceSidebar";
import { slugify } from "@/lib/utils";
import TableOfContents from "@/components/post/TableOfContents";

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <figure className="my-10">
          <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src={urlFor(value).width(800).fit("max").auto("format").url()}
              alt={value.alt || "Ảnh minh họa bài viết"}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Caption */}
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-3 italic bg-gray-50 py-2 rounded">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    table: ({ value }: any) => {
      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white text-sm shadow-sm">
            <tbody>
              {value.rows.map((row: any, rowIndex: number) => (
                <tr
                  key={row._key || rowIndex}
                  className={
                    rowIndex === 0
                      ? "bg-brand-red/10 font-bold"
                      : "hover:bg-gray-50"
                  }
                >
                  {row.cells.map((cell: string, cellIndex: number) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-3 text-gray-700"
                    >
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

  block: {
    h2: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join("") || "";
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="text-2xl font-bold mt-8 mb-4 text-brand-dark border-l-4 border-brand-red pl-3 scroll-mt-30"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const text = value.children?.map((c: any) => c.text).join("") || "";
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="text-xl font-bold mt-6 mb-3 text-brand-red scroll-mt-30"
        >
          {children}
        </h3>
      );
    },
    normal: ({ children }: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed text-lg">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
};

const sapoComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed font-serif border-l-4 border-brand-red pl-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-red underline hover:text-red-700">
        {children}
      </a>
    ),
  }
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="bg-white pb-20 pt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-red">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link href="/services" className="hover:text-brand-red">
            Dịch vụ
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-dark font-medium truncate max-w-[200px]">
            {post.title}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-500 text-sm mb-8 border-b border-gray-100 pb-6">
              <span className="flex items-center gap-2">
                <Calendar size={16} />{" "}
                {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> {post.author}
              </span>
            </div>

            {/* Excerpt */}
            <div className="prose prose-lg max-w-none text-gray-700">
              {post.excerpt && (
              <div className="mb-8">
                <PortableText value={post.excerpt} components={sapoComponents} />
              </div>
            )}

              {/* Thumbnail */}
              {post.mainImage && (
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {post.content && <TableOfContents content={post.content} />}

              <PortableText value={post.content} components={ptComponents} />
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/services"
                className="inline-flex items-center text-gray-600 hover:text-brand-red font-medium transition"
              >
                <ArrowLeft size={18} className="mr-2" /> Quay lại danh sách bài
                viết
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <ServiceSidebar currentSlug={post.serviceSlug} />
          </div>
        </div>
      </div>
    </div>
  );
}
