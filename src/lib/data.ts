import {
  BrushCleaning,
  Car,
  Headset,
  PaintBucket,
  ShieldCheck,
  Award,
  Users,
  SearchCheck,
  PiggyBank,
  HeartHandshake,
} from "lucide-react";

export const getMenuItems = (dict: any) => [
  { label: dict.navigation.home, href: "/" },
  { label: dict.navigation.about, href: "/about" },
  { label: dict.navigation.services, href: "/services" },
  { label: dict.navigation.products, href: "/products" },
  { label: dict.navigation.training, href: "/training" },
  { label: dict.navigation.library, href: "/library" },
  { label: dict.navigation.contact, href: "/contact" },
];

export const getServices = (dict: any) => [
  {
    slug: "sua-chua-chung",
    title: dict.services.common,
    icon: Car,
  },
  {
    slug: "dich-vu-cham-soc-xe-hoi",
    title: dict.services.detailing,
    icon: BrushCleaning,
  },
  {
    slug: "dong-son-o-to",
    title: dict.services.painting,
    icon: PaintBucket,
  },
  {
    slug: "dich-vu-ho-tro-them",
    title: dict.services.support,
    icon: Headset,
  },
];

export const SUB_SERVICES = [
  {
    slug: "bao-duong-dinh-ky",
    title: "Bảo dưỡng định kỳ",
    parentSlug: "sua-chua-chung",
    description: "4 cấp độ bảo dưỡng tổng quát định kỳ (5 - 200 ngàn km).",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-dien-lanh",
    title: "Sửa chữa điện lạnh",
    parentSlug: "sua-chua-chung",
    description: "Kiểm tra giàn lạnh, vệ sinh bảo dưỡng hệ thống điều hòa.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-bao-tri-may-gam",
    title: "Sửa chữa, bảo trì máy gầm",
    parentSlug: "sua-chua-chung",
    description: "Tiểu Tu, Trung Tu, Đại Tu Gầm Máy",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
  },
  {
    slug: "bao-duong-ve-sinh-noi-that",
    title: "Bảo dưỡng, vệ sinh nội thất",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description: "Tránh ẩm mốc, khử mùi hôi cho ô tô của bạn nhanh chóng.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "bao-duong-khoang-dong-co",
    title: "Bảo dưỡng khoang động cơ",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description:
      "Tăng tuổi thọ, giảm chi phí thay thế, tránh phát sinh lỗi động cơ.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "cham-soc-tron-goi-noi-that",
    title: "Chăm sóc trọn gói nội thất",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description:
      "Trần xe - taplo, bảng điều khiển, bộ ghế, cánh cửa,cốp xe, sàn xe.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "cham-soc-ngoai-that",
    title: "Chăm sóc ngoại thất",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description: "Tránh xuống cấp màu sắc, chất lượng vật liệu bên ngoài xe.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "cham-soc-khoang-may",
    title: "Chăm sóc khoang máy",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description:
      "Khoang động cơ là nơi chứa trái tim của cả chiếc xe và các thiết bị phụ trợ hỗ trợ cho động cơ.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "ve-sinh-bao-duong-phanh-thang",
    title: "Vệ sinh bảo dưỡng phanh - thắng",
    parentSlug: "dich-vu-cham-soc-xe-hoi",
    description:
      "Bôi trơn - làm sạch - kiểm tra ống dẫn dầu - vệ sinh bảo dưỡng.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "son-dam-vat-toan-than",
    title: "Sơn dặm vá toàn thân",
    parentSlug: "dong-son-o-to",
    description:
      "Kỹ năng pha sơn và kỹ thuật sơn điêu luyện – không thể nhận biết vết sơn mới và cũ.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-dong",
    title: "Sửa chữa đồng",
    parentSlug: "dong-son-o-to",
    description:
      "Sửa chữa đồng thân xe từ đơn giản đến phức tạp, phục hồi xe tai nạn đảm bảo.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "dich-vu-cuu-ho-24-7-bao-hiem-xe",
    title: "Dịch vụ cứu hộ 24/7 - Bảo hiểm xe",
    parentSlug: "dich-vu-ho-tro-them",
    description:
      "Sửa chữa đồng thân xe từ đơn giản đến phức tạp, phục hồi xe tai nạn đảm bảo.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-o-to-luu-dong-tai-nha",
    title: "Sửa chữa ô tô lưu động tại nhà",
    parentSlug: "dich-vu-ho-tro-them",
    description:
      "Sửa chữa đồng thân xe từ đơn giản đến phức tạp, phục hồi xe tai nạn đảm bảo.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
];

export const CONTACT_INFO = {
  phone: "0969 46 36 38",
  hotline: "0969 46 36 38",
  zalo: "https://zalo.me/0969463638",
  email: "khoado@anhkhoaauto.com",
  address: "92D2 KDC SAVIMEX, P.Phú Thuận, TP.HCM",
};

export const WHY_CHOOSE_US = [
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Nghiệp",
    description:
      "Kỹ thuật viên tay nghề cao, được đào tạo bài bản từ các trường ĐH/CĐ uy tín.",
  },
  {
    icon: SearchCheck,
    title: "Trung Thực & Minh Bạch",
    description:
      "Tư vấn đúng bệnh, báo đúng giá. Khách hàng có thể trực tiếp quan sát quy trình.",
  },
  {
    icon: Award,
    title: "Phụ Tùng Chính Hãng",
    description:
      "Cam kết phụ tùng nguồn gốc rõ ràng, nói không với hàng giả/kém chất lượng.",
  },
  {
    icon: PiggyBank,
    title: "Chi Phí Tối Ưu",
    description:
      "Giải pháp sửa chữa tiết kiệm, hiệu quả nhất cho từng dòng xe và tình trạng thực tế.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo Hành Uy Tín",
    description:
      "Chính sách bảo hành dài hạn, trách nhiệm cao sau khi bàn giao xe.",
  },
  {
    icon: HeartHandshake,
    title: "Tận Tâm Phục Vụ",
    description:
      "Chăm sóc xe như người thân, hỗ trợ cứu hộ 24/7 khi khách hàng cần.",
  },
];

export const FOOTER_LINKS = [
  { label: "Về Anh Khoa Auto", href: "/about" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Tin tức & Sự kiện", href: "/tin-tuc" },
  { label: "Chính sách bảo mật", href: "/chinh-sach" },
];

export const BRANCHES = [
  {
    name: "Trụ sở",
    address: "92D2 KDC SAVIMEX, P.Phú Thuận, TP.HCM",
    mapLink: "https://maps.google.com/?q=68B+Nguyễn+Hữu+Thọ+Quận+7",
  },
];

export const PRODUCT_CATEGORIES: Record<string, string> = {
  "dau-nhot": "Dầu nhớt & Phụ gia",
  "phu-tung": "Phụ tùng thay thế",
  "noi-that": "Phụ kiện nội thất",
  "ngoai-that": "Phụ kiện ngoại thất",
  "cham-soc-xe": "Chăm sóc xe",
};
