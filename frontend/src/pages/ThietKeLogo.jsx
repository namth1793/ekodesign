import { Link } from 'react-router-dom';

const process = [
  { step: '01', title: 'Brief & Nghiên cứu', desc: 'Thu thập thông tin về doanh nghiệp, ngành nghề, đối thủ và khách hàng mục tiêu để định hướng thiết kế chính xác.' },
  { step: '02', title: 'Brainstorm ý tưởng', desc: 'Đội ngũ designer cùng sáng tạo nhiều ý tưởng, tìm kiếm concept độc đáo phù hợp với DNA thương hiệu của bạn.' },
  { step: '03', title: 'Phác thảo & Concept', desc: 'Phát triển 3–5 concept logo tốt nhất, trình bày trên các ứng dụng thực tế (namecard, biển hiệu, áo...) để dễ hình dung.' },
  { step: '04', title: 'Phản hồi & Chỉnh sửa', desc: 'Nhận phản hồi của bạn và điều chỉnh chi tiết không giới hạn cho đến khi đạt kết quả hoàn hảo nhất.' },
  { step: '05', title: 'Hoàn thiện', desc: 'Tinh chỉnh từng chi tiết, đảm bảo logo đẹp và nhận diện rõ trên mọi kích thước, nền màu khác nhau.' },
  { step: '06', title: 'Bàn giao & Hướng dẫn', desc: 'Cung cấp đầy đủ file gốc (AI, EPS, SVG, PNG, PDF) kèm hướng dẫn sử dụng logo chuyên nghiệp.' },
];

const deliverables = [
  { icon: '📁', title: 'File gốc đầy đủ', desc: 'AI, EPS, SVG, PNG (nhiều kích thước), PDF – sử dụng cho mọi mục đích in ấn & kỹ thuật số.' },
  { icon: '🎨', title: 'Bảng màu thương hiệu', desc: 'Màu sắc chính & phụ kèm mã HEX, RGB, CMYK để dùng nhất quán trên mọi ấn phẩm.' },
  { icon: '✍️', title: 'Typography thương hiệu', desc: 'Font chữ chính thức và quy tắc sử dụng cho tiêu đề, nội dung, tài liệu doanh nghiệp.' },
  { icon: '📋', title: 'Brand Guideline cơ bản', desc: 'Hướng dẫn sử dụng logo đúng cách: khoảng cách tối thiểu, cách dùng trên nền tối/sáng, kích thước tối thiểu.' },
  { icon: '💼', title: 'Namecard thiết kế', desc: 'Thiết kế namecard 2 mặt đồng bộ với logo, sẵn sàng đưa đi in ấn ngay.' },
  { icon: '🛡️', title: 'Hỗ trợ bản quyền', desc: 'Tư vấn và hỗ trợ thủ tục đăng ký nhãn hiệu độc quyền tại Cục Sở hữu trí tuệ.' },
];

const packages = [
  {
    name: 'Gói Cơ bản',
    price: '3.900.000',
    features: ['1 logo hoàn chỉnh', 'File AI, EPS, PNG, SVG, PDF', 'Bảng màu & font', '3 lần chỉnh sửa', 'Namecard 2 mặt'],
    popular: false,
  },
  {
    name: 'Gói Chuyên nghiệp',
    price: '6.900.000',
    features: ['1 logo + các biến thể', 'File đầy đủ tất cả định dạng', 'Bảng màu & font', 'Chỉnh sửa không giới hạn', 'Namecard + phong bì + tiêu đề thư', 'Brand Guideline 10 trang'],
    popular: true,
  },
  {
    name: 'Gói Cao cấp',
    price: '12.900.000',
    features: ['Logo + toàn bộ hệ thống nhận diện', 'File đầy đủ tất cả định dạng', 'Chỉnh sửa không giới hạn', 'Bộ văn phòng phẩm đầy đủ', 'Brand Guideline 20+ trang', 'Hỗ trợ đăng ký bản quyền'],
    popular: false,
  },
];

export default function ThietKeLogo() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ thiết kế</span>
            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Thiết Kế Logo &<br/>Nhận Diện Thương Hiệu</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Tạo ra biểu tượng thương hiệu độc đáo và hệ thống nhận diện đồng bộ – nền tảng vững chắc cho mọi hoạt động marketing của doanh nghiệp.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/lien-he" className="btn-primary">Nhận báo giá ngay</Link>
              <a href="#bang-gia" className="btn-outline">Xem bảng giá</a>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Bạn nhận được gì?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">Bộ Thiết Kế Logo Hoàn Chỉnh</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tất cả những gì doanh nghiệp cần để ra mắt và vận hành thương hiệu một cách chuyên nghiệp.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-primary mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Quy trình làm việc</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">6 Bước Thiết Kế Logo Tại Eko</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quy trình bài bản, minh bạch và lấy khách hàng làm trung tâm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-accent/20 mb-3">{p.step}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="bang-gia" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Bảng giá</span>
            <h2 className="text-3xl font-bold text-primary mt-2">Gói Thiết Kế Logo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl border-2 overflow-hidden bg-white ${pkg.popular ? 'border-accent scale-105 shadow-xl' : 'border-gray-200 shadow-sm'}`}>
                {pkg.popular && (
                  <div className="bg-accent text-white text-center text-xs font-bold py-1.5 uppercase tracking-widest">Phổ biến nhất</div>
                )}
                <div className={`px-6 py-5 ${pkg.popular ? 'bg-primary' : 'bg-gray-50'}`}>
                  <h3 className={`font-black text-lg ${pkg.popular ? 'text-white' : 'text-primary'}`}>{pkg.name}</h3>
                  <div className={`text-2xl font-black mt-2 ${pkg.popular ? 'text-accent' : 'text-primary'}`}>{pkg.price}₫</div>
                </div>
                <div className="px-6 py-5">
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/lien-he"
                    className={`block text-center py-3 rounded-lg font-bold transition-colors
                      ${pkg.popular ? 'bg-accent text-white hover:bg-amber-500' : 'bg-primary text-white hover:bg-primary/80'}`}>
                    Nhận báo giá
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* Giá tham khảo, chưa bao gồm VAT.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Bắt Đầu Dự Án Logo Của Bạn</h2>
          <p className="text-white/70 mb-7">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong vòng 2 giờ làm việc.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Tư vấn miễn phí →</Link>
            <a href="tel:0964699499" className="btn-outline text-lg px-8 py-4">📞 0964.699.499</a>
          </div>
        </div>
      </section>
    </main>
  );
}
