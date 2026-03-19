export default {
  name: "event",
  title: "Sự kiện & Khuyến mãi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tên sự kiện",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Đường dẫn (Slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Ảnh bìa (Banner)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "startDate",
      title: "Ngày bắt đầu",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "Ngày kết thúc",
      type: "datetime",
      description: "Để trống nếu đây là sự kiện diễn ra vô thời hạn",
    },
    {
      name: "excerpt",
      title: "Mô tả ngắn",
      type: "text",
      rows: 3,
    },
    {
      name: "content",
      title: "Nội dung chi tiết",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "isActive",
      title: "Đang diễn ra?",
      type: "boolean",
      initialValue: true,
      description: "Tắt nút này nếu bạn muốn tạm ẩn sự kiện",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "startDate",
    },
  },
};
