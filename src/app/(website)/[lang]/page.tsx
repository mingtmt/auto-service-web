import HeroSlider from "@/components/home/HeroSlider";
import ServiceGrid from "@/components/home/ServiceGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getServices } from "@/lib/data";
import { getDictionary, Locale } from "@/dictionaries";

type Props = {
  params: Promise<{ lang: string }>;
};
export default async function Home(props: Props) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as Locale);
  const services = getServices(dict);
  return (
    <div className="flex flex-col">
      <HeroSlider dict={dict} />

      <section className="bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
              {dict.common.ourServices}
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-24">
            {services.map((service) => (
              <ServiceGrid
                key={service.slug}
                dict={dict}
                slug={service.slug}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12">
        <WhyChooseUs dict={dict} />
      </div>
    </div>
  );
}
