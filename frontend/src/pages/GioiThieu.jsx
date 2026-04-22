import { Link } from 'react-router-dom';

const team = [
  { name: 'Nguyễn Minh Trí', role: 'Founder & Creative Director', img: 'https://i.pravatar.cc/200?img=11', exp: '10 năm' },
  { name: 'Trần Thu Hà', role: 'Senior Brand Designer', img: 'https://i.pravatar.cc/200?img=21', exp: '8 năm' },
  { name: 'Lê Quang Hùng', role: 'Logo & Identity Specialist', img: 'https://i.pravatar.cc/200?img=15', exp: '6 năm' },
  { name: 'Phạm Lan Anh', role: 'Brand Strategist', img: 'https://i.pravatar.cc/200?img=47', exp: '5 năm' },
];

const services = [
  {
    icon: '🎨',
    title: 'Thiết kế Logo & Thương hiệu',
    desc: 'Tạo ra logo độc đáo và hệ thống nhận diện thương hiệu đồng bộ, chuyên nghiệp cho doanh nghiệp.',
    link: '/thiet-ke-logo',
  },
  {
    icon: '🚀',
    title: 'Xây dựng & Phát triển Thương hiệu',
    desc: 'Tư vấn chiến lược, định vị và xây dựng thương hiệu bền vững từ nền tảng đến truyền thông.',
    link: '/thiet-ke-thuong-hieu',
  },
  {
    icon: '🖨️',
    title: 'Hồ sơ Năng lực & In ấn',
    desc: 'Thiết kế và in ấn hồ sơ năng lực, profile công ty chuyên nghiệp – ấn tượng ngay lần đầu gặp gỡ.',
    link: '/ho-so-nang-luc',
  },
];

export default function GioiThieu() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Về chúng tôi</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Eko Design Studio</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Chuyên gia xây dựng & phát triển thương hiệu – thiết kế logo – thiết kế và in ấn hồ sơ năng lực chuyên nghiệp.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Câu chuyện của chúng tôi</span>
              <h2 className="text-3xl font-black text-primary mt-2 mb-5">Eko – Người Đồng Hành Xây Dựng Thương Hiệu</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eko được thành lập với sứ mệnh rõ ràng: giúp doanh nghiệp Việt Nam xây dựng thương hiệu chuyên nghiệp, bền vững và có giá trị thực sự trên thị trường.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chúng tôi cung cấp 3 dịch vụ cốt lõi: <strong className="text-primary">thiết kế logo & thương hiệu</strong>, <strong className="text-primary">xây dựng & phát triển thương hiệu</strong>, và <strong className="text-primary">thiết kế & in ấn hồ sơ năng lực</strong> – tất cả được thực hiện bởi đội ngũ chuyên gia có nhiều năm kinh nghiệm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Triết lý của chúng tôi: <strong className="text-primary">mỗi thương hiệu là một câu chuyện riêng</strong> – và chúng tôi ở đây để giúp bạn kể câu chuyện đó một cách ấn tượng nhất.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[['500+', 'Khách hàng'], ['8+', 'Năm kinh nghiệm'], ['98%', 'Hài lòng']].map(([val, label]) => (
                  <div key={label} className="text-center p-4 rounded-xl bg-light">
                    <div className="text-3xl font-black text-accent">{val}</div>
                    <div className="text-sm text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Eko team" className="rounded-2xl shadow-xl w-full object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-xl shadow-lg">
                <div className="text-3xl font-black">3</div>
                <div className="text-sm font-medium">Dịch vụ cốt lõi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ của chúng tôi</span>
            <h2 className="text-3xl font-bold text-primary mt-2">3 Dịch Vụ Cốt Lõi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(s => (
              <Link key={s.title} to={s.link}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-primary text-lg mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-accent text-sm font-semibold">Tìm hiểu thêm →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Đội ngũ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">Những Người Tạo Nên Eko</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Đội ngũ designer và chuyên gia thương hiệu tài năng, nhiệt huyết với nghề.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(m => (
              <div key={m.name} className="text-center group">
                <div className="relative inline-block mb-4">
                  <img src={m.img} alt={m.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:border-accent transition-colors"
                    onError={e => { e.target.src = 'https://i.pravatar.cc/200?img=10'; }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {m.exp}
                  </div>
                </div>
                <h3 className="font-bold text-primary">{m.name}</h3>
                <p className="text-gray-400 text-sm">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Sẵn Sàng Xây Dựng Thương Hiệu?</h2>
          <p className="text-white/70 mb-7">Liên hệ ngay để được tư vấn miễn phí từ đội ngũ chuyên gia của Eko.</p>
          <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Tư vấn miễn phí →</Link>
        </div>
      </section>
    </main>
  );
}
