import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Dịch vụ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "category",
      title: "Chuyên mục dịch vụ",
      description: "Chọn một danh mục phù hợp cho bài viết này",
      type: "string",
      options: {
        list: [
          { title: "Bảo dưỡng định kỳ", value: "bao-duong-dinh-ky" },
          { title: "Sửa chữa điện lạnh", value: "sua-chua-dien-lanh" },
          {
            title: "Sửa chữa, bảo trì máy gầm",
            value: "sua-chua-bao-tri-may-gam",
          },
          {
            title: "Bảo dưỡng, vệ sinh nội thất",
            value: "bao-duong-ve-sinh-noi-that",
          },
          {
            title: "Bảo dưỡng khoang động cơ",
            value: "bao-duong-khoang-dong-co",
          },
          {
            title: "Chăm sóc trọn gói nội thất",
            value: "cham-soc-tron-goi-noi-that",
          },
          { title: "Chăm sóc ngoại thất", value: "cham-soc-ngoai-that" },
          { title: "Chăm sóc khoang máy", value: "cham-soc-khoang-may" },
          {
            title: "Vệ sinh bảo dưỡng phanh - thắng",
            value: "ve-sinh-bao-duong-phanh-thang",
          },
          { title: "Sơn dặm vá toàn thân", value: "son-dam-va-toan-than" },
          { title: "Sửa chữa đồng", value: "sua-chua-dong" },
          {
            title: "Dịch vụ cứu hộ 24/7 - Bảo hiểm xe",
            value: "dich-vu-cuu-ho-247-bao-hiem-xe",
          },
          {
            title: "Sửa chữa ô tô lưu động tại nhà",
            value: "sua-chua-o-to-luu-dong-tai-nha",
          },
        ],
        layout: "dropdown",
      },
      initialValue: "bao-duong-dinh-ky",
      validation: (Rule) =>
        Rule.required().error("Vui lòng chọn chuyên mục dịch vụ!"),
    },
    defineField({
      name: "excerpt",
      title: "Mô tả ngắn",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Nội dung chi tiết",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Mô tả ảnh (Alt Text)",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Chú thích ảnh (Hiển thị dưới ảnh)",
            },
          ],
        },
        { type: "table" },
      ],
    }),
    defineField({
      name: "author",
      title: "Tác giả",
      type: "string",
      initialValue: "Khoa Car Service",
    }),
    defineField({
      name: "publishedAt",
      title: "Ngày đăng",
      description:
        "Chọn ngày giờ trong tương lai để lên lịch. Nếu để trống, bài viết sẽ đăng ngay lập tức.",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
