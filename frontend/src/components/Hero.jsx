import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    tag: 'Dịch vụ trọng tâm',
    client: 'Thiết kế Logo & Thương hiệu',
    title: 'Bộ nhận diện thương hiệu\nchuyên nghiệp & độc đáo',
    desc: 'Chúng tôi tạo ra logo và hệ thống nhận diện thương hiệu giúp doanh nghiệp của bạn nổi bật và ghi dấu ấn trong tâm trí khách hàng.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
    badge: 'Logo & Brand Identity',
    link: '/thiet-ke-logo',
  },
  {
    tag: 'Chiến lược thương hiệu',
    client: 'Xây dựng & Phát triển Thương hiệu',
    title: 'Xây dựng thương hiệu\nbền vững từ nền tảng',
    desc: 'Từ định vị thị trường đến chiến lược truyền thông – chúng tôi đồng hành cùng bạn xây dựng thương hiệu mạnh và phát triển bền vững.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    badge: 'Brand Building & Strategy',
    link: '/thiet-ke-thuong-hieu',
  },
  {
    tag: 'In ấn chuyên nghiệp',
    client: 'Hồ sơ Năng lực & In ấn',
    title: 'Hồ sơ năng lực ấn tượng\ntạo niềm tin tức thì',
    desc: 'Thiết kế và in ấn hồ sơ năng lực, profile công ty chuyên nghiệp – công cụ bán hàng mạnh mẽ nhất cho doanh nghiệp B2B.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    badge: 'Profile Design & Printing',
    link: '/ho-so-nang-luc',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (idx) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 300);
  };

  const s = slides[active];

  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${s.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      <div className={`relative h-full max-w-7xl mx-auto px-6 flex items-center transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-xl text-white">
          <span className="inline-block bg-accent/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
            {s.tag}
          </span>
          <p className="text-accent font-semibold text-lg mb-1">{s.client}</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 whitespace-pre-line">
            {s.title}
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">{s.desc}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/lien-he" className="btn-primary">Tư vấn miễn phí</Link>
            <Link to={s.link} className="btn-outline">Tìm hiểu thêm</Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div><span className="text-white font-bold text-2xl">500+</span><br/>Khách hàng</div>
            <div className="w-px h-10 bg-white/20"/>
            <div><span className="text-white font-bold text-2xl">8+</span><br/>Năm kinh nghiệm</div>
            <div className="w-px h-10 bg-white/20"/>
            <div><span className="text-white font-bold text-2xl">3</span><br/>Dịch vụ cốt lõi</div>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">
        {s.badge}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      <button onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
        ‹
      </button>
      <button onClick={() => goTo((active + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
        ›
      </button>
    </section>
  );
}
