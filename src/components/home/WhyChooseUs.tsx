import { WHY_CHOOSE_US } from '@/lib/data';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-red font-bold text-sm md:text-base uppercase tracking-widest mb-2">
            Giá Trị Cốt Lõi
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn Anh Khoa Auto?
          </h3>
          <p className="text-gray-600">
            Chúng tôi không chỉ sửa xe, chúng tôi mang đến sự an tâm tuyệt đối cho mọi hành trình của bạn với quy trình chuẩn 12 bước.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-brand-red mb-4">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}