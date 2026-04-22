import { Link } from 'react-router-dom';

const whyProfile = [
  { icon: '🤝', title: 'Công cụ bán hàng B2B hiệu quả nhất', desc: 'Hồ sơ năng lực chuyên nghiệp là yếu tố quyết định khi khách hàng doanh nghiệp đánh giá và lựa chọn đối tác.' },
  { icon: '✅', title: 'Tạo niềm tin tức thì', desc: 'Một bộ hồ sơ thiết kế đẹp, nội dung rõ ràng giúp tạo ấn tượng chuyên nghiệp và xây dựng uy tín ngay lần đầu gặp gỡ.' },
  { icon: '📈', title: 'Tăng tỷ lệ chốt hợp đồng', desc: 'Hồ sơ năng lực ấn tượng hỗ trợ đội sales trình bày thuyết phục hơn, rút ngắn chu kỳ bán hàng.' },
  { icon: '🏆', title: 'Khẳng định vị thế thương hiệu', desc: 'Thể hiện sự chuyên nghiệp, quy mô và năng lực của doanh nghiệp một cách trực quan và thuyết phục.' },
];

const contents = [
  'Trang bìa & giới thiệu tổng quan',
  'Tầm nhìn, sứ mệnh, giá trị cốt lõi',
  'Lịch sử hình thành & phát triển',
  'Đội ngũ lãnh đạo & nhân sự chủ chốt',
  'Sản phẩm & dịch vụ cung cấp',
  'Năng lực & lợi thế cạnh tranh',
  'Dự án & khách hàng tiêu biểu',
  'Chứng chỉ, giải thưởng & chứng nhận',
  'Quy trình làm việc & cam kết chất lượng',
  'Thông tin liên hệ & kêu gọi hành động',
];

const printSpecs = [
  { label: 'Khổ giấy', value: 'A4 (21×29.7cm) hoặc theo yêu cầu' },
  { label: 'Chất liệu bìa', value: 'Couche 300gsm, ép kim / UV cục / nhũ bạc' },
  { label: 'Chất liệu ruột', value: 'Couche 150gsm, 200gsm' },
  { label: 'Số trang', value: '16, 24, 32, 40 trang (bội số 8)' },
  { label: 'Gáy sách', value: 'Đóng gim / Gáy keo nhiệt / Bìa cứng' },
  { label: 'Hoàn thiện', value: 'Cán mờ / Cán bóng / Ép kim / UV cục' },
  { label: 'Số lượng in', value: 'Từ 50 cuốn trở lên' },
  { label: 'Thời gian in', value: '5–10 ngày làm việc sau khi duyệt file' },
];

const packages = [
  {
    name: 'Gói Cơ bản',
    price: '5.900.000',
    note: 'Chưa bao gồm in ấn',
    features: [
      'Thiết kế đến 24 trang',
      'Layout chuyên nghiệp',
      'File PDF xuất bản',
      '2 lần chỉnh sửa nội dung',
      'Bàn giao trong 7 ngày',
    ],
    popular: false,
  },
  {
    name: 'Gói Trọn gói',
    price: '12.900.000',
    note: 'Bao gồm in 100 cuốn',
    features: [
      'Thiết kế đến 40 trang',
      'Layout cao cấp, sáng tạo',
      'File PDF + file gốc chỉnh sửa',
      'Chỉnh sửa nội dung không giới hạn',
      'In 100 cuốn – bìa couche 300gsm',
      'Cán mờ / ép kim theo yêu cầu',
      'Giao hàng tận nơi',
      'Bàn giao trong 12 ngày',
    ],
    popular: true,
  },
  {
    name: 'Gói Cao cấp',
    price: 'Báo giá',
    note: 'Số lượng & yêu cầu tùy chỉnh',
    features: [
      'Thiết kế không giới hạn trang',
      'Concept độc quyền, sáng tạo cao',
      'File đầy đủ tất cả định dạng',
      'Chỉnh sửa không giới hạn',
      'In số lượng theo yêu cầu',
      'Hoàn thiện cao cấp (bìa cứng, ép kim)',
      'Ảnh chụp sản phẩm thực tế',
      'Tư vấn nội dung chuyên sâu',
    ],
    popular: false,
  },
];

export default function HoSoNangLuc() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ in ấn</span>
            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Thiết Kế & In Ấn<br/>Hồ Sơ Năng Lực</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Hồ sơ năng lực (Company Profile) chuyên nghiệp – công cụ bán hàng B2B hiệu quả nhất, giúp doanh nghiệp tạo ấn tượng và xây dựng niềm tin ngay lần đầu gặp gỡ.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/lien-he" className="btn-primary">Nhận báo giá ngay</Link>
              <a href="#bang-gia" className="btn-outline">Xem bảng giá</a>
            </div>
            <div className="mt-8 flex gap-6 text-sm text-white/70">
              <div><span className="text-white font-bold text-xl">200+</span><br/>Hồ sơ đã in</div>
              <div className="w-px h-10 bg-white/20"/>
              <div><span className="text-white font-bold text-xl">5–12</span><br/>Ngày hoàn thành</div>
              <div className="w-px h-10 bg-white/20"/>
              <div><span className="text-white font-bold text-xl">Trọn gói</span><br/>Thiết kế + In ấn</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao cần hồ sơ năng lực?</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Vũ Khí Bán Hàng B2B Không Thể Thiếu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyProfile.map((w, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 text-center">
                <div className="text-4xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-sm leading-tight">{w.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content structure & Print specs */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Nội dung thường có</span>
              <h2 className="text-2xl font-bold text-primary mt-2 mb-6">Cấu Trúc Hồ Sơ Năng Lực</h2>
              <div className="space-y-3">
                {contents.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
                    <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Print specs */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Thông số in ấn</span>
              <h2 className="text-2xl font-bold text-primary mt-2 mb-6">Chất Lượng In Ấn Cao Cấp</h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {printSpecs.map((s, i) => (
                  <div key={i} className={`flex px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                    <span className="text-gray-400 w-40 flex-shrink-0">{s.label}</span>
                    <span className="text-primary font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl p-5">
                <p className="text-primary font-semibold text-sm">🖨️ In offset chất lượng cao – màu sắc sắc nét, chính xác với file thiết kế. Kiểm tra proof trước khi in hàng loạt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="bang-gia" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Bảng giá</span>
            <h2 className="text-3xl font-bold text-primary mt-2">Gói Dịch Vụ Hồ Sơ Năng Lực</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`rounded-2xl border-2 overflow-hidden bg-white ${pkg.popular ? 'border-accent scale-105 shadow-xl' : 'border-gray-200 shadow-sm'}`}>
                {pkg.popular && (
                  <div className="bg-accent text-white text-center text-xs font-bold py-1.5 uppercase tracking-widest">Phổ biến nhất</div>
                )}
                <div className={`px-6 py-5 ${pkg.popular ? 'bg-primary' : 'bg-gray-50'}`}>
                  <h3 className={`font-black text-lg ${pkg.popular ? 'text-white' : 'text-primary'}`}>{pkg.name}</h3>
                  <div className={`text-2xl font-black mt-1 ${pkg.popular ? 'text-accent' : 'text-primary'}`}>{pkg.price}{pkg.price !== 'Báo giá' ? '₫' : ''}</div>
                  <div className={`text-xs mt-1 ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>{pkg.note}</div>
                </div>
                <div className="px-6 py-5">
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/lien-he"
                    className={`block text-center py-3 rounded-lg font-bold transition-colors
                      ${pkg.popular ? 'bg-accent text-white hover:bg-amber-500' : 'bg-primary text-white hover:bg-primary/80'}`}>
                    {pkg.price === 'Báo giá' ? 'Liên hệ báo giá' : 'Nhận báo giá'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* Giá tham khảo, chưa bao gồm VAT. Giá in ấn phụ thuộc số lượng và thông số kỹ thuật thực tế.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary">Quy Trình Thực Hiện</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {[
              ['01', '📝', 'Thu thập thông tin', 'Nhận brief, nội dung công ty và yêu cầu thiết kế từ khách hàng.'],
              ['02', '🎨', 'Thiết kế layout', 'Phác thảo bố cục và thiết kế trang bìa, các trang nội dung theo brand.'],
              ['03', '✅', 'Duyệt & chỉnh sửa', 'Khách hàng duyệt, góp ý và chỉnh sửa đến khi hài lòng.'],
              ['04', '🖨️', 'In ấn & hoàn thiện', 'Xuất file in, in offset, bế, gấp và đóng cuốn hoàn thiện.'],
              ['05', '🚚', 'Giao hàng', 'Đóng gói cẩn thận và giao hàng tận địa chỉ của bạn.'],
            ].map(([step, icon, title, desc]) => (
              <div key={step} className="flex-1 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-black text-sm mx-auto mb-3">
                  {step}
                </div>
                <div className="text-2xl mb-2">{icon}</div>
                <h4 className="font-bold text-primary text-sm mb-1">{title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Bắt Đầu Làm Hồ Sơ Năng Lực</h2>
          <p className="text-white/70 mb-7">Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết theo nhu cầu thực tế của doanh nghiệp bạn.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Nhận báo giá ngay →</Link>
            <a href="tel:0964699499" className="btn-outline text-lg px-8 py-4">📞 0964.699.499</a>
          </div>
        </div>
      </section>
    </main>
  );
}
