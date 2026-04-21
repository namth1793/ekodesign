const industries = [
  { icon: '🏢', name: 'Bất động sản' },
  { icon: '💊', name: 'Dược phẩm' },
  { icon: '🌾', name: 'Nông nghiệp' },
  { icon: '💻', name: 'Công nghệ' },
  { icon: '🚚', name: 'Vận tải' },
  { icon: '🎓', name: 'Giáo dục' },
  { icon: '🏗️', name: 'Xây dựng' },
  { icon: '⚖️', name: 'Pháp lý' },
  { icon: '👗', name: 'Thời trang' },
  { icon: '🍽️', name: 'F&B' },
  { icon: '🏨', name: 'Khách sạn' },
  { icon: '⛽', name: 'Dầu khí' },
];

export default function Industries() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Đa dạng ngành nghề</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Chúng Tôi Phục Vụ Mọi Lĩnh Vực
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Kinh nghiệm thiết kế thương hiệu đa dạng trên 12+ lĩnh vực khác nhau.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all duration-200 cursor-pointer group">
              <span className="text-3xl">{ind.icon}</span>
              <span className="text-xs text-white/70 group-hover:text-white text-center transition-colors">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
