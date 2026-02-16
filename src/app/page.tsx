import HeroSlider from "@/components/home/HeroSlider";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <HeroSlider />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-red font-bold text-lg uppercase tracking-wider mb-2">
            Dịch vụ của chúng tôi
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Giải Pháp Chăm Sóc Xe Toàn Diện
          </h1>
        </div>
        <ServiceGrid />
      </div>

      <WhyChooseUs />
      
      {/* <CTASection /> */}
    </div>
  );
}
