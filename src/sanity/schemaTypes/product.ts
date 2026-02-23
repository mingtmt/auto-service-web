import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Phụ tùng & Phụ kiện',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tên sản phẩm',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tên sản phẩm không được để trống'),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'Mã phụ tùng (SKU)',
      description: 'Mã quản lý kho hoặc mã vạch của sản phẩm',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Giá bán (VNĐ)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Giá khuyến mãi (VNĐ)',
      description: 'Để trống nếu không có chương trình giảm giá',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'stock',
      title: 'Số lượng tồn kho',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0).error('Tồn kho không thể là số âm'),
    }),
    defineField({
      name: 'category',
      title: 'Danh mục',
      type: 'string',
      options: {
        list: [
          { title: 'Dầu nhớt & Phụ gia', value: 'dau-nhot' },
          { title: 'Phụ tùng thay thế', value: 'phu-tung' },
          { title: 'Phụ kiện nội thất', value: 'noi-that' },
          { title: 'Phụ kiện ngoại thất', value: 'ngoai-that' },
          { title: 'Chăm sóc xe', value: 'cham-soc-xe' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ảnh sản phẩm',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Mô tả chi tiết',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Chú thích ảnh (Alt text)',
            },
          ],
        },
        { type: 'table' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: subtitle ? `${subtitle.toLocaleString('vi-VN')} VNĐ` : 'Chưa cập nhật giá',
      };
    },
  },
})