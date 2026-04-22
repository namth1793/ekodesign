import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-primary">
      {/* Banner image */}
      <div className="w-full">
        <img
          src="/banner.png"
          alt="Eko Design – Đồng hành xây dựng thương hiệu bền vững"
          className="w-full object-cover"
          style={{ maxHeight: '520px', objectPosition: 'center' }}
        />
      </div>

      {/* CTA bar */}
      <div className="bg-primary border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black">
              Thiết kế logo • Xây dựng thương hiệu • Hồ sơ năng lực
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Tư vấn miễn phí – Phản hồi trong 2 giờ làm việc
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/lien-he" className="btn-primary whitespace-nowrap">
              Tư vấn miễn phí →
            </Link>
            <a href="tel:0964699499"
              className="border-2 border-white/40 text-white font-semibold px-5 py-3 rounded hover:bg-white/10 transition-colors whitespace-nowrap">
              📞 0964.699.499
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ['10.000+', 'Dự án thành công'],
              ['8+', 'Năm kinh nghiệm'],
              ['3', 'Dịch vụ cốt lõi'],
              ['98%', 'Khách hàng hài lòng'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-accent font-black text-2xl">{val}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
