import { Link } from 'react-router-dom';

const elements = [
  { icon: '🎨', title: 'Logo System', desc: 'Logo chính, logo phụ, logo đơn sắc – linh hoạt cho mọi ứng dụng.' },
  { icon: '🎭', title: 'Color Palette', desc: 'Bảng màu thương hiệu chính và phụ, cùng quy tắc sử dụng màu sắc.' },
  { icon: '✍️', title: 'Typography', desc: 'Font chữ thương hiệu và quy tắc sử dụng cho mọi tài liệu.' },
  { icon: '🖼️', title: 'Visual Language', desc: 'Phong cách hình ảnh, icon, họa tiết và các yếu tố đồ họa đặc trưng.' },
  { icon: '📋', title: 'Brand Guideline', desc: 'Cẩm nang thương hiệu hướng dẫn sử dụng nhất quán trên mọi kênh.' },
  { icon: '💼', title: 'Stationery', desc: 'Namecard, phong bì, tiêu đề thư, folder và văn phòng phẩm đồng bộ.' },
  { icon: '📱', title: 'Digital Assets', desc: 'Avatar, banner mạng xã hội, email signature, thumbnail YouTube.' },
  { icon: '📦', title: 'Packaging', desc: 'Thiết kế bao bì sản phẩm đồng nhất với nhận diện thương hiệu.' },
];

const cases = [
  {
    client: 'Sunrise Sapa Hotel',
    industry: 'Khách sạn 5 sao',
    desc: 'Xây dựng bộ nhận diện thương hiệu hoàn chỉnh cho resort cao cấp, từ logo đến đồng phục nhân viên và ấn phẩm marketing.',
    result: 'Tăng 35% nhận diện thương hiệu sau 6 tháng',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    client: 'GreenFarm Foods',
    industry: 'Thực phẩm organic',
    desc: 'Thiết kế bộ nhận diện thương hiệu "xanh" và hệ thống bao bì sản phẩm đồng bộ cho dòng sản phẩm organic cao cấp.',
    result: 'Doanh số tăng 40% trong quý đầu tiên',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
  },
  {
    client: 'TechViet Solutions',
    industry: 'Công nghệ',
    desc: 'Tái định vị thương hiệu hoàn toàn cho startup công nghệ, từ tên gọi, logo đến toàn bộ hệ thống visual identity.',
    result: 'Gọi vốn thành công Series A sau khi rebrand',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
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
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ</span>
            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Thiết Kế Nhận Diện<br/>Thương Hiệu Toàn Diện</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Xây dựng hệ thống nhận diện thương hiệu đồng bộ và nhất quán – nền tảng vững chắc cho mọi chiến lược marketing.
            </p>
            <div className="flex gap-4">
              <Link to="/lien-he" className="btn-primary">Tư vấn ngay</Link>
              <Link to="/lien-he" className="btn-outline">Tư vấn ngay</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Brand Identity bao gồm gì?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">8 Yếu Tố Nhận Diện Thương Hiệu</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Một bộ nhận diện thương hiệu hoàn chỉnh bao gồm nhiều yếu tố đồng bộ, tạo nên sức mạnh tổng thể.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((el, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="text-4xl mb-3">{el.icon}</div>
                <h3 className="font-bold text-primary mb-2">{el.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why need brand identity */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=700&q=80"
                alt="Brand Identity" className="rounded-2xl shadow-xl w-full object-cover" />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao cần Brand Identity?</span>
              <h2 className="text-3xl font-black text-primary mt-2 mb-5">Thương Hiệu Mạnh = Kinh Doanh Mạnh</h2>
              {[
                ['Tăng nhận diện', 'Khách hàng nhận ra thương hiệu của bạn trước đối thủ chỉ trong vài giây.'],
                ['Xây dựng niềm tin', 'Bộ nhận diện chuyên nghiệp tạo ấn tượng đáng tin cậy ngay lần đầu tiếp xúc.'],
                ['Nhất quán trên mọi kênh', 'Từ biển hiệu đến mạng xã hội – khách hàng luôn nhận ra bạn.'],
                ['Tăng giá trị tài sản', 'Thương hiệu mạnh là tài sản vô hình nhưng có giá trị thực sự cao.'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Thành Quả Thực Tế</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.client} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wide">{c.industry}</span>
                  <h3 className="font-bold text-primary text-lg mt-1 mb-2">{c.client}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{c.desc}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2.5">
                    <span className="text-green-700 font-semibold text-sm">✓ {c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Bắt Đầu Xây Dựng Thương Hiệu</h2>
          <p className="text-white/70 mb-7">Liên hệ để được tư vấn miễn phí về chiến lược nhận diện thương hiệu phù hợp với doanh nghiệp bạn.</p>
          <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Nhận tư vấn miễn phí →</Link>
        </div>
      </section>
    </main>
  );
}
