import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    tag: 'Dự án nổi bật',
    client: 'Petimex Group',
    title: 'Nhận diện thương hiệu\ntầm vóc quốc tế',
    desc: 'Tái định vị thương hiệu tập đoàn dầu khí với bộ nhận diện toàn diện, chuyên nghiệp và đẳng cấp.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    badge: 'Dầu khí & Năng lượng',
  },
  {
    tag: 'Thương hiệu mới',
    client: 'Sunrise Sapa Hotel',
    title: 'Logo sang trọng\ncho khách sạn 5 sao',
    desc: 'Thiết kế logo và bộ nhận diện cao cấp, truyền tải tinh thần yên bình và sang trọng của núi rừng Sapa.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    badge: 'Hospitality & Du lịch',
  },
  {
    tag: 'Startup thành công',
    client: 'TechViet Solutions',
    title: 'Thương hiệu công nghệ\nhiện đại & sáng tạo',
    desc: 'Xây dựng nhận diện thương hiệu mạnh mẽ cho startup công nghệ – từ logo đến toàn bộ collateral.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    badge: 'Công nghệ & Startup',
  },
  {
    tag: 'Case study',
    client: 'GreenFarm Foods',
    title: 'Bao bì xanh\ncuốn hút người tiêu dùng',
    desc: 'Thiết kế bao bì và nhận diện thương hiệu cho dòng sản phẩm organic, tăng 40% doanh số sau 3 tháng.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
    badge: 'FMCG & Thực phẩm',
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
      {/* Background */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${s.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      {/* Content */}
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
            <Link to="/lien-he" className="btn-outline">Tư vấn ngay</Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div><span className="text-white font-bold text-2xl">5.000+</span><br/>Khách hàng</div>
            <div className="w-px h-10 bg-white/20"/>
            <div><span className="text-white font-bold text-2xl">12+</span><br/>Năm kinh nghiệm</div>
            <div className="w-px h-10 bg-white/20"/>
            <div><span className="text-white font-bold text-2xl">98%</span><br/>Hài lòng</div>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">
        {s.badge}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
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
