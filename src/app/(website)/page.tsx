import HeroSlider from "@/components/home/HeroSlider";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { SERVICES } from "@/lib/data";
// import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <HeroSlider />

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-brand-red font-bold text-lg uppercase tracking-wider mb-2">
          Dịch vụ của chúng tôi
        </h2>
        {SERVICES.map((service) => (
          <ServiceGrid key={service.slug} {...service} />
        ))}
      </div>

      <WhyChooseUs />

      {/* <CTASection /> */}
    </div>
  );
}
