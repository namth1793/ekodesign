import { Link } from 'react-router-dom';

const team = [
  { name: 'Nguyễn Minh Trí', role: 'Founder & Creative Director', img: 'https://i.pravatar.cc/200?img=11', exp: '15 năm' },
  { name: 'Trần Thu Hà', role: 'Senior Brand Designer', img: 'https://i.pravatar.cc/200?img=21', exp: '10 năm' },
  { name: 'Lê Quang Hùng', role: 'Logo & Identity Specialist', img: 'https://i.pravatar.cc/200?img=15', exp: '8 năm' },
  { name: 'Phạm Lan Anh', role: 'Brand Strategist', img: 'https://i.pravatar.cc/200?img=47', exp: '7 năm' },
];

const milestones = [
  { year: '2012', title: 'Thành lập EkoDesign', desc: 'Ra đời với sứ mệnh mang thiết kế thương hiệu chuyên nghiệp đến mọi doanh nghiệp Việt.' },
  { year: '2015', title: 'Mở rộng ra TP.HCM', desc: 'Khai trương văn phòng thứ hai tại Quận 1, TP.HCM để phục vụ khách hàng miền Nam.' },
  { year: '2018', title: '2.000 dự án hoàn thành', desc: 'Chạm mốc 2.000 dự án thành công, khẳng định vị thế hàng đầu trong ngành.' },
  { year: '2021', title: 'Mở rộng dịch vụ số', desc: 'Ra mắt dịch vụ thiết kế thương hiệu cho môi trường kỹ thuật số và mạng xã hội.' },
  { year: '2025', title: '5.000+ khách hàng tin tưởng', desc: 'Hơn 5.000 doanh nghiệp tin tưởng và đồng hành cùng EkoDesign trên hành trình xây dựng thương hiệu.' },
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
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">EkoDesign Studio</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Hơn 12 năm kiến tạo thương hiệu cho hàng nghìn doanh nghiệp Việt – từ startup nhỏ đến tập đoàn hàng đầu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Câu chuyện của chúng tôi</span>
              <h2 className="text-3xl font-black text-primary mt-2 mb-5">Từ Đam Mê Đến Sứ Mệnh</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                EkoDesign Studio được thành lập năm 2012 bởi một nhóm designer đam mê với khát vọng đưa chất lượng thiết kế thương hiệu đẳng cấp quốc tế đến với doanh nghiệp Việt Nam.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Qua hơn 12 năm, chúng tôi đã đồng hành cùng hơn 5.000 doanh nghiệp trong hành trình xây dựng nhận diện thương hiệu – từ startup đang tìm kiếm bản sắc riêng đến các tập đoàn lớn cần tái định vị thương hiệu.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Triết lý của chúng tôi đơn giản: <strong className="text-primary">một logo tốt không chỉ đẹp – nó phải kể được câu chuyện thương hiệu và tạo kết nối cảm xúc với khách hàng.</strong>
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[['12+', 'Năm kinh nghiệm'], ['5.000+', 'Dự án hoàn thành'], ['98%', 'Khách hàng hài lòng']].map(([val, label]) => (
                  <div key={label} className="text-center p-4 rounded-xl bg-light">
                    <div className="text-3xl font-black text-accent">{val}</div>
                    <div className="text-sm text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="EkoDesign team" className="rounded-2xl shadow-xl w-full object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-xl shadow-lg">
                <div className="text-3xl font-black">12</div>
                <div className="text-sm font-medium">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Đội ngũ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">Những Người Tạo Nên EkoDesign</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Đội ngũ designer tài năng, được đào tạo bài bản từ các trường mỹ thuật uy tín trong và ngoài nước.
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Hành trình phát triển</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Những Cột Mốc Đáng Tự Hào</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8 items-start pl-16">
                  <div className="absolute left-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-black text-xs text-center leading-tight">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{m.title}</h3>
                    <p className="text-gray-500 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Hãy Cùng Chúng Tôi Xây Dựng Thương Hiệu</h2>
          <p className="text-white/70 mb-7">Liên hệ ngay để được tư vấn miễn phí từ đội ngũ chuyên gia của EkoDesign.</p>
          <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Tư vấn miễn phí →</Link>
        </div>
      </section>
    </main>
  );
}
