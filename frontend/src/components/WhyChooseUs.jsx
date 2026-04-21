const reasons = [
  {
    icon: '🏆',
    title: 'Hơn 5.000 khách hàng tin tưởng',
    desc: 'Chúng tôi đã thành công cùng hàng nghìn doanh nghiệp từ startup đến tập đoàn lớn trên toàn quốc.',
  },
  {
    icon: '🎓',
    title: 'Designer được đào tạo bài bản',
    desc: 'Đội ngũ thiết kế tốt nghiệp từ các trường mỹ thuật uy tín, có kinh nghiệm thực chiến nhiều năm.',
  },
  {
    icon: '👥',
    title: 'Nhóm 4+ designer mỗi dự án',
    desc: 'Mỗi dự án có ít nhất 4 designer và 1 creative director phụ trách, đảm bảo chất lượng tốt nhất.',
  },
  {
    icon: '♾️',
    title: 'Sửa đổi không giới hạn',
    desc: 'Cam kết chỉnh sửa cho đến khi bạn 100% hài lòng với thiết kế, không phát sinh chi phí thêm.',
  },
  {
    icon: '🛡️',
    title: 'Bảo hộ bản quyền độc quyền',
    desc: 'Hỗ trợ đăng ký nhãn hiệu độc quyền tại Cục Sở hữu trí tuệ, bảo vệ tài sản thương hiệu cho bạn.',
  },
  {
    icon: '📍',
    title: 'Văn phòng tại Hà Nội & TP.HCM',
    desc: 'Đội ngũ tư vấn sẵn sàng gặp mặt trực tiếp tại 2 văn phòng ở cả 2 miền Nam – Bắc.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao chọn chúng tôi?</span>
          <h2 className="section-title mt-2">6 Lý Do Doanh Nghiệp Tin Tưởng EkoDesign</h2>
          <p className="section-sub">
            Chúng tôi không chỉ tạo ra logo đẹp – chúng tôi xây dựng nền tảng thương hiệu bền vững cho doanh nghiệp của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
