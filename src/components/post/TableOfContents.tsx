"use client"; // Client component để xử lý click cuộn mượt (nếu cần script active)
import { slugify } from "@/lib/utils";
import Link from "next/link";

// Hàm helper để lấy text thuần từ block Sanity (vì heading có thể chứa bold/italic)
const getHeadings = (blocks: any[]) => {
  if (!blocks) return [];

  // Lọc ra các block là h2 hoặc h3
  return blocks
    .filter((block) => block.style === "h2" || block.style === "h3")
    .map((block) => {
      // Lấy text từ các child spans
      const text = block.children.map((child: any) => child.text).join("");
      return {
        id: slugify(text),
        text: text,
        level: block.style,
      };
    });
};

export default function TableOfContents({ content }: { content: any[] }) {
  const headings = getHeadings(content);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8">
      <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200 mt-0">
        Mục lục bài viết
      </h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${heading.level === "h3" ? "ml-4" : ""}`}
          >
            <Link
              href={`#${heading.id}`}
              className="text-gray-600 hover:text-brand-red hover:underline transition-colors block py-1"
              // Xử lý cuộn mượt (tuỳ chọn, vì CSS scroll-behavior đã lo việc này)
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
