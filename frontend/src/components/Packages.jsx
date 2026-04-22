import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Thiết kế Logo & Thương hiệu',
    icon: '🎨',
    price: 'Từ 3.900.000',
    tagline: 'Nhận diện thương hiệu chuyên nghiệp',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    popular: false,
    link: '/thiet-ke-logo',
    features: [
      { text: 'Thiết kế logo độc quyền', ok: true },
      { text: 'File AI, EPS, PNG, SVG, PDF', ok: true },
      { text: 'Bảng màu & font chữ thương hiệu', ok: true },
      { text: 'Chỉnh sửa không giới hạn', ok: true },
      { text: 'Namecard (2 mặt)', ok: true },
      { text: 'Brand Guideline cơ bản', ok: true },
      { text: 'Bộ văn phòng phẩm đầy đủ', ok: false },
      { text: 'Hỗ trợ đăng ký bản quyền', ok: false },
    ],
  },
  {
    name: 'Xây dựng & Phát triển Thương hiệu',
    icon: '🚀',
    price: 'Từ 8.900.000',
    tagline: 'Giải pháp thương hiệu toàn diện',
    color: 'border-accent',
    headerBg: 'bg-primary',
    popular: true,
    link: '/thiet-ke-thuong-hieu',
    features: [
      { text: 'Tư vấn chiến lược định vị thương hiệu', ok: true },
      { text: 'Thiết kế logo & hệ thống nhận diện', ok: true },
      { text: 'Brand Guideline đầy đủ (20+ trang)', ok: true },
      { text: 'Bộ văn phòng phẩm đồng bộ', ok: true },
      { text: 'Thiết kế ấn phẩm marketing', ok: true },
      { text: 'Social media kit (avatar, banner)', ok: true },
      { text: 'Bộ template trình bày & báo cáo', ok: true },
      { text: 'Hỗ trợ đăng ký bản quyền logo', ok: true },
    ],
  },
  {
    name: 'Hồ sơ Năng lực & In ấn',
    icon: '🖨️',
    price: 'Từ 5.900.000',
    tagline: 'Thiết kế & in ấn trọn gói',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    popular: false,
    link: '/ho-so-nang-luc',
    features: [
      { text: 'Thiết kế hồ sơ năng lực / profile', ok: true },
      { text: 'Nội dung từ 16–40 trang', ok: true },
      { text: 'File PDF + file gốc chỉnh sửa', ok: true },
      { text: 'Thiết kế bìa & layout chuyên nghiệp', ok: true },
      { text: 'In ấn offset chất lượng cao', ok: true },
      { text: 'Bế, gấp, đóng cuốn hoàn thiện', ok: true },
      { text: 'Giao hàng tận nơi', ok: true },
      { text: 'Chỉnh sửa nội dung không giới hạn', ok: false },
    ],
  },
];

export default function Packages() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ & Bảng giá</span>
          <h2 className="section-title mt-2">3 Dịch Vụ Cốt Lõi Của Eko</h2>
          <p className="section-sub">
            Giải pháp xây dựng thương hiệu toàn diện – từ thiết kế logo, phát triển thương hiệu đến in ấn hồ sơ năng lực.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <div key={i}
              className={`rounded-2xl border-2 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 relative
                ${pkg.popular ? 'border-accent scale-105' : 'border-gray-200'}`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Phổ biến nhất
                </div>
              )}
              <div className={`px-7 py-6 ${pkg.headerBg}`}>
                <div className="text-3xl mb-2">{pkg.icon}</div>
                <h3 className={`text-xl font-black leading-tight ${pkg.popular ? 'text-white' : 'text-primary'}`}>{pkg.name}</h3>
                <p className={`text-sm mt-1 ${pkg.popular ? 'text-white/70' : 'text-gray-400'}`}>{pkg.tagline}</p>
                <div className="mt-4">
                  <span className={`text-2xl font-black ${pkg.popular ? 'text-accent' : 'text-primary'}`}>
                    {pkg.price}₫
                  </span>
                </div>
              </div>

              <div className="px-7 py-6">
                <ul className="space-y-3 mb-7">
                  {pkg.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-sm ${f.ok ? 'text-gray-700' : 'text-gray-300'}`}>
                      <span className={`mt-0.5 text-base flex-shrink-0 ${f.ok ? 'text-green-500' : 'text-gray-300'}`}>
                        {f.ok ? '✓' : '✗'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link to="/lien-he"
                  className={`block text-center py-3 rounded-lg font-bold transition-colors
                    ${pkg.popular
                      ? 'bg-accent text-white hover:bg-amber-500'
                      : 'bg-primary text-white hover:bg-primary/80'}`}>
                  Nhận báo giá →
                </Link>
                <Link to={pkg.link} className="block text-center text-sm text-accent mt-2 hover:underline">
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Giá tham khảo, chưa bao gồm VAT. Liên hệ để được báo giá chính xác theo yêu cầu thực tế.
        </p>
      </div>
    </section>
  );
}
