import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[#1a3a5c] text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
          Bắt đầu ngay hôm nay
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Sẵn Sàng Xây Dựng<br/>
          <span className="text-accent">Thương Hiệu Của Bạn?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Thiết kế logo, xây dựng thương hiệu hay in ấn hồ sơ năng lực – Eko đồng hành cùng bạn từ đầu đến cuối.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/lien-he" className="bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors text-lg">
            Tư vấn miễn phí ngay
          </Link>
          <a href="tel:0964699499"
            className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg flex items-center gap-2">
            <span>📞</span> 0964.699.499
          </a>
        </div>
        <p className="text-white/40 text-sm mt-6">Phản hồi trong vòng 2 giờ làm việc • Tư vấn hoàn toàn miễn phí</p>
      </div>
    </section>
  );
}
