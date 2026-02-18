import {
  Car,
  PaintBucket,
  ShieldCheck,
  Wrench,
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
    id: 1,
    slug: "bao-duong-dinh-ky",
    title: "Bảo Dưỡng Định Kỳ",
    description:
      "Quy trình chuẩn 12 bước, đảm bảo vận hành êm ái, kéo dài tuổi thọ xe.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    slug: "sua-chua-chung",
    title: "Sửa Chữa Chung",
    description:
      "Chẩn đoán điện, gầm, máy bằng thiết bị hiện đại. Xử lý triệt để các bệnh lạ.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    slug: "dong-son-o-to",
    title: "Đồng Sơn Ô Tô",
    description: "Công nghệ sơn gốc nước, phục hồi form xe như mới.",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    slug: "cham-soc-xe",
    title: "Chăm Sóc Xe (Detailing)",
    description: "Vệ sinh nội ngoại thất, phủ Ceramic, dán phim cách nhiệt.",
    icon: ShieldCheck,
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
  { label: "Về Anh Khoa Auto", href: "/ve-chung-toi" },
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

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Khi nào cần thay nhớt hộp số ô tô?",
    slug: "khi-nao-can-thay-nhot-hop-so",
    serviceSlug: "bao-duong-dinh-ky",
    excerpt:
      "Nhớt hộp số đóng vai trò quan trọng trong việc vận hành. Bao lâu thì nên thay?",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
    date: "16/02/2026",
    author: "Admin",
  },
  {
    id: 2,
    title: "5 Dấu hiệu má phanh đã mòn cần thay ngay",
    slug: "5-dau-hieu-ma-phanh-mon",
    serviceSlug: "bao-duong-dinh-ky",
    excerpt:
      "Tiếng kêu rít khi phanh là dấu hiệu nguy hiểm bạn không nên bỏ qua.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
    date: "15/02/2026",
    author: "Kỹ Thuật Viên",
  },
  {
    id: 3,
    title: "Quy trình đồng sơn xe bị trầy xước nặng",
    slug: "quy-trinh-dong-son-xe-tray-xuoc",
    serviceSlug: "dong-son-o-to",
    excerpt:
      "Khám phá quy trình 6 bước phục hồi lớp sơn như mới tại Thanh Phong Auto.",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
    date: "10/02/2026",
    author: "Admin",
  },
  {
    id: 4,
    title: "Xe bị rung lắc khi di chuyển - Nguyên nhân do đâu?",
    slug: "xe-bi-rung-lac-khi-di-chuyen",
    serviceSlug: "sua-chua-chung",
    excerpt:
      "Rung lắc tay lái hoặc thân xe có thể do lốp, thước lái hoặc hệ thống treo.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
    date: "12/02/2026",
    author: "Chuyên gia",
  },
];
