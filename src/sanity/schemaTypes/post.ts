import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Bài viết (Dịch vụ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu đề',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: { 
        source: 'title',
        maxLength: 96 
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceSlug',
      title: 'Thuộc chuyên mục dịch vụ (Slug)',
      type: 'string',
      description: 'Nhập chính xác slug của dịch vụ (VD: bao-duong-dinh-ky, sua-chua-chung)',
    }),
    defineField({
      name: 'excerpt',
      title: 'Mô tả ngắn',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Ảnh đại diện',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Nội dung chi tiết',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Mô tả ảnh (Alt Text)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Chú thích ảnh (Hiển thị dưới ảnh)',
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'author',
      title: 'Tác giả',
      type: 'string',
      initialValue: 'Anh Khoa Auto',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ngày đăng',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
});