import { Car, PaintBucket, ShieldCheck, Wrench } from "lucide-react";

export const MENU_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Đào tạo", href: "/dao-tao" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Bảo Dưỡng Định Kỳ",
    description: "Quy trình chuẩn 12 bước, đảm bảo vận hành êm ái.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Sửa Chữa Chung",
    description: "Chẩn đoán điện, gầm, máy bằng thiết bị hiện đại.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Đồng Sơn Ô Tô",
    description: "Công nghệ sơn gốc nước, phục hồi form xe như mới.",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Chăm Sóc Xe (Detailing)",
    description: "Vệ sinh nội ngoại thất, phủ Ceramic, dán phim cách nhiệt.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  },
];

export const CONTACT_INFO = {
  phone: "0934 22 27 63",
  hotline: "0934 79 71 79",
  email: "khoado@anhkhoaauto.com",
  address: "68B Nguyễn Hữu Thọ, Tân Hưng, Q.7, TP.HCM",
};
