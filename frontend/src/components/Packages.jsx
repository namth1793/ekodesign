import { Link } from 'react-router-dom';

const imageModules = import.meta.glob('../../assets/project/*.jpg', { eager: true });
const projectImgs = Object.values(imageModules).map(m => m.default);

const packages = [
  {
    name: 'Thiết kế Logo & Thương hiệu',
    tagline: 'Nhận diện thương hiệu chuyên nghiệp, độc quyền và bền vững theo thời gian.',
    popular: false,
    link: '/thiet-ke-logo',
    image: projectImgs[0],
  },
  {
    name: 'Xây dựng & Phát triển Thương hiệu',
    tagline: 'Giải pháp thương hiệu toàn diện từ chiến lược định vị đến hệ thống nhận diện đồng bộ.',
    popular: true,
    link: '/thiet-ke-thuong-hieu',
    image: projectImgs[1],
  },
  {
    name: 'Hồ sơ Năng lực & In ấn',
    tagline: 'Thiết kế & in ấn trọn gói hồ sơ năng lực, profile và ấn phẩm doanh nghiệp.',
    popular: false,
    link: '/ho-so-nang-luc',
    image: projectImgs[2],
  },
];

export default function Packages() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ</span>
          <h2 className="section-title mt-2">3 Dịch Vụ Cốt Lõi Của Eko</h2>
          <p className="section-sub">
            Giải pháp xây dựng thương hiệu toàn diện – từ thiết kế logo, phát triển thương hiệu đến in ấn hồ sơ năng lực.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <div key={i}
              className={`rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col
                ${pkg.popular ? 'ring-2 ring-accent scale-105' : ''}`}>

              {/* Demo image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600'; }}
                />
                {pkg.popular && (
                  <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Phổ biến nhất
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-7 py-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-primary leading-tight mb-3">{pkg.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{pkg.tagline}</p>
                <div className="mt-6 flex flex-col gap-2">
                  <Link to="/lien-he"
                    className={`block text-center py-3 rounded-lg font-bold transition-colors
                      ${pkg.popular
                        ? 'bg-accent text-white hover:bg-amber-500'
                        : 'bg-primary text-white hover:bg-blue-900'}`}>
                    Tư vấn miễn phí →
                  </Link>
                  <Link to={pkg.link} className="block text-center text-sm text-primary mt-1 hover:underline">
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
