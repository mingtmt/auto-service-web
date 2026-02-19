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

export const MENU_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Đào tạo", href: "/dao-tao" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "sua-chua-chung",
    title: "Sửa Chữa Chung",
    icon: Car,
  },
  {
    slug: "cham-soc-xe",
    title: "Dịch vụ chăm sóc xe hơi",
    icon: BrushCleaning,
  },
  {
    slug: "dong-son-o-to",
    title: "Đồng Sơn Ô Tô",
    icon: PaintBucket,
  },
  {
    slug: "ho-tro",
    title: "Dịch vụ hỗ trợ thêm",
    icon: Headset,
  }
]

export const SUB_SERVICES = [
  {
    slug: "bao-duong-dinh-ky",
    title: "Bảo Dưỡng Định Kỳ",
    parentSlug: "sua-chua-chung",
    description:
      "4 cấp độ bảo dưỡng tổng quát định kỳ (5 - 200 ngàn km).",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-dien-lanh",
    title: "Sửa chữa điện lạnh",
    parentSlug: "sua-chua-chung",
    description:
      "Kiểm tra giàn lạnh, vệ sinh bảo dưỡng hệ thống điều hòa.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
  },
  {
    slug: "sua-chua-may-gam",
    title: "Sửa chữa, bảo trì máy gầm",
    parentSlug: "sua-chua-chung",
    description: "Tiểu Tu, Trung Tu, Đại Tu Gầm Máy",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
  },
  {
    slug: "cham-soc-xe",
    title: "Chăm Sóc Xe (Detailing)",
    parentSlug: "cham-soc-xe",
    description: "Vệ sinh nội ngoại thất, phủ Ceramic, dán phim cách nhiệt.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
];

export const CONTACT_INFO = {
  phone: "0987 xx xx xx",
  hotline: "0987 xx xx xx",
  email: "khoado@anhkhoaauto.com",
  address: "68B Nguyễn Hữu Thọ, Tân Hưng, Q.7, TP.HCM",
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
    name: "Trụ Sở Chính (Quận 7)",
    address: "68B Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TP.HCM",
    mapLink: "https://maps.google.com/?q=68B+Nguyễn+Hữu+Thọ+Quận+7",
  },
  {
    name: "Chi Nhánh 1 (Nhà Bè)",
    address: "1260 Lê Văn Lương, Xã Phước Kiển, Huyện Nhà Bè, TP.HCM",
    mapLink: "https://maps.google.com/?q=1260+Lê+Văn+Lương+Nhà+Bè",
  },
];
