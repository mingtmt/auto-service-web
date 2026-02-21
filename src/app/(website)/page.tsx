import HeroSlider from "@/components/home/HeroSlider";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { SERVICES } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <HeroSlider />

      <section className="bg-zinc-950 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-24">
            {SERVICES.map((service) => (
              <ServiceGrid
                key={service.slug}
                slug={service.slug}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12">
        <WhyChooseUs />
      </div>
    </div>
  );
}
