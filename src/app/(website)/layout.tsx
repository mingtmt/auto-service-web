import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh Khoa Auto - Sửa chữa, Bảo dưỡng & Chăm sóc xe chuyên nghiệp",
  description:
    "Gara uy tín tại TP.HCM chuyên bảo dưỡng, sửa chữa, đồng sơn ô tô.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-[120px]">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
