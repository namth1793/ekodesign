import { Link } from 'react-router-dom';

const stages = [
  { icon: '🔍', title: 'Nghiên cứu & Phân tích', desc: 'Phân tích thị trường, đối thủ cạnh tranh, khách hàng mục tiêu và điểm khác biệt của doanh nghiệp bạn.' },
  { icon: '🎯', title: 'Định vị Thương hiệu', desc: 'Xác định vị thế thương hiệu trên thị trường, thông điệp cốt lõi và giá trị cảm nhận muốn truyền tải.' },
  { icon: '✍️', title: 'Đặt tên & Slogan', desc: 'Sáng tạo tên thương hiệu và slogan ấn tượng, dễ nhớ, phù hợp với định vị và thị trường mục tiêu.' },
  { icon: '🎨', title: 'Thiết kế Nhận diện', desc: 'Xây dựng hệ thống nhận diện thương hiệu đồng bộ: logo, màu sắc, font chữ, hình ảnh và ngôn ngữ thiết kế.' },
  { icon: '📋', title: 'Brand Guideline', desc: 'Xây dựng bộ cẩm nang thương hiệu hướng dẫn sử dụng nhất quán trên mọi kênh truyền thông.' },
  { icon: '📣', title: 'Triển khai & Truyền thông', desc: 'Tư vấn kế hoạch ra mắt thương hiệu, triển khai trên các kênh phù hợp và đo lường hiệu quả.' },
];

const elements = [
  { icon: '🏷️', title: 'Tên thương hiệu & Slogan', desc: 'Đặt tên độc đáo, dễ nhớ, có ý nghĩa và phù hợp với định vị thương hiệu.' },
  { icon: '🎨', title: 'Logo & Hệ thống nhận diện', desc: 'Thiết kế logo và bộ nhận diện đồng bộ, chuyên nghiệp trên mọi điểm chạm.' },
  { icon: '🖼️', title: 'Visual Language', desc: 'Phong cách hình ảnh, họa tiết, icon và ngôn ngữ đồ họa đặc trưng của thương hiệu.' },
  { icon: '💬', title: 'Tone of Voice', desc: 'Giọng điệu và phong cách giao tiếp nhất quán trên mọi kênh truyền thông.' },
  { icon: '📱', title: 'Digital Presence', desc: 'Nhận diện trên mạng xã hội, website, email và các kênh kỹ thuật số.' },
  { icon: '📦', title: 'Ấn phẩm & Bao bì', desc: 'Thiết kế bao bì sản phẩm, ấn phẩm marketing đồng nhất với thương hiệu.' },
];

export default function ThietKeThuongHieu() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ chiến lược</span>
            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Xây Dựng &<br/>Phát Triển Thương Hiệu</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Từ định vị thị trường, chiến lược thương hiệu đến hệ thống nhận diện toàn diện – chúng tôi xây dựng nền tảng thương hiệu bền vững cho doanh nghiệp của bạn.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/lien-he" className="btn-primary">Tư vấn miễn phí</Link>
              <Link to="/lien-he" className="btn-outline">Nhận báo giá</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why brand building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao cần xây dựng thương hiệu?</span>
              <h2 className="text-3xl font-black text-primary mt-2 mb-5">Thương Hiệu Mạnh = Kinh Doanh Bền Vững</h2>
              {[
                ['Tăng nhận diện & ghi nhớ', 'Khách hàng nhận ra và nhớ đến doanh nghiệp của bạn trước đối thủ trong cùng phân khúc.'],
                ['Tạo niềm tin & uy tín', 'Thương hiệu chuyên nghiệp xây dựng sự tin tưởng ngay từ lần tiếp xúc đầu tiên.'],
                ['Tăng giá trị cảm nhận', 'Khách hàng sẵn sàng trả giá cao hơn cho một thương hiệu mạnh và có định vị rõ ràng.'],
                ['Lợi thế cạnh tranh bền vững', 'Thương hiệu là tài sản khó sao chép – lợi thế cạnh tranh dài hạn không phụ thuộc vào giá.'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=700&q=80"
                alt="Brand Strategy" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Phạm vi dịch vụ</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Xây Dựng Thương Hiệu Toàn Diện</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Chúng tôi đảm nhận toàn bộ hành trình xây dựng thương hiệu – từ chiến lược đến triển khai thực tế.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((el, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="text-4xl mb-3">{el.icon}</div>
                <h3 className="font-bold text-primary mb-2">{el.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Quy trình</span>
            <h2 className="text-3xl font-bold text-primary mt-2">6 Giai Đoạn Phát Triển Thương Hiệu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <div key={i} className="p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Giai đoạn {i + 1}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Bắt Đầu Xây Dựng Thương Hiệu Ngay</h2>
          <p className="text-white/70 mb-7">Để lại thông tin, đội ngũ chuyên gia Eko sẽ liên hệ tư vấn miễn phí trong vòng 2 giờ.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Nhận tư vấn miễn phí →</Link>
            <a href="tel:0964699499" className="btn-outline text-lg px-8 py-4">📞 0964.699.499</a>
          </div>
        </div>
      </section>
    </main>
  );
}
