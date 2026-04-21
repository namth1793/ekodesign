import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Entry',
    price: '3.900.000',
    tagline: 'Phù hợp cho cá nhân & startup nhỏ',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    popular: false,
    features: [
      { text: 'Thiết kế 1 logo hoàn chỉnh', ok: true },
      { text: 'File AI, EPS, PNG, SVG, PDF', ok: true },
      { text: 'Bảng màu & font chữ thương hiệu', ok: true },
      { text: '3 lần chỉnh sửa', ok: true },
      { text: 'Namecard (2 mặt)', ok: true },
      { text: 'Hướng dẫn sử dụng logo', ok: false },
      { text: 'Bộ Brand Guideline đầy đủ', ok: false },
      { text: 'Bộ văn phòng phẩm đầy đủ', ok: false },
      { text: 'Hỗ trợ đăng ký bản quyền', ok: false },
    ],
  },
  {
    name: 'Business',
    price: '8.900.000',
    tagline: 'Lý tưởng cho doanh nghiệp vừa & nhỏ',
    color: 'border-accent',
    headerBg: 'bg-primary',
    popular: true,
    features: [
      { text: 'Thiết kế logo chuyên nghiệp', ok: true },
      { text: 'File AI, EPS, PNG, SVG, PDF', ok: true },
      { text: 'Bảng màu & font chữ thương hiệu', ok: true },
      { text: 'Không giới hạn chỉnh sửa', ok: true },
      { text: 'Namecard + phong bì + tiêu đề thư', ok: true },
      { text: 'Hướng dẫn sử dụng logo (8 trang)', ok: true },
      { text: 'Bộ Brand Guideline cơ bản', ok: true },
      { text: 'Bộ văn phòng phẩm đầy đủ', ok: false },
      { text: 'Hỗ trợ đăng ký bản quyền', ok: false },
    ],
  },
  {
    name: 'Startup',
    price: '18.900.000',
    tagline: 'Giải pháp toàn diện cho doanh nghiệp lớn',
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    popular: false,
    features: [
      { text: 'Thiết kế logo cao cấp', ok: true },
      { text: 'File AI, EPS, PNG, SVG, PDF', ok: true },
      { text: 'Bảng màu & font chữ thương hiệu', ok: true },
      { text: 'Không giới hạn chỉnh sửa', ok: true },
      { text: 'Namecard + phong bì + tiêu đề thư', ok: true },
      { text: 'Hướng dẫn sử dụng logo (20+ trang)', ok: true },
      { text: 'Bộ Brand Guideline đầy đủ', ok: true },
      { text: 'Bộ văn phòng phẩm + bao bì sản phẩm', ok: true },
      { text: 'Hỗ trợ đăng ký bản quyền', ok: true },
    ],
  },
];

export default function Packages() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Bảng giá dịch vụ</span>
          <h2 className="section-title mt-2">Gói Thiết Kế Phù Hợp Mọi Doanh Nghiệp</h2>
          <p className="section-sub">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn. Mọi gói đều bao gồm cam kết chất lượng của EkoDesign.
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
                <h3 className={`text-2xl font-black ${pkg.popular ? 'text-white' : 'text-primary'}`}>{pkg.name}</h3>
                <p className={`text-sm mt-1 ${pkg.popular ? 'text-white/70' : 'text-gray-400'}`}>{pkg.tagline}</p>
                <div className="mt-4">
                  <span className={`text-3xl font-black ${pkg.popular ? 'text-accent' : 'text-primary'}`}>
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
                  Đăng ký gói {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Giá chưa bao gồm VAT. Liên hệ để được tư vấn gói phù hợp và nhận báo giá chi tiết.
        </p>
      </div>
    </section>
  );
}
