import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import { getDictionary, Locale } from "@/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh Khoa Auto - Sửa chữa, Bảo dưỡng & Chăm sóc xe chuyên nghiệp",
  description:
    "Gara uy tín tại TP.HCM chuyên bảo dưỡng, sửa chữa, đồng sơn ô tô.",
};

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default async function RootLayout(props: Props) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header dict={dict} lang={lang} />
        <main className="min-h-screen pt-[120px]">{props.children}</main>
        <FloatingContact />
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
