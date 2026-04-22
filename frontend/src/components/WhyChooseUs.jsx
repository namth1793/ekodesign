const reasons = [
  {
    icon: '🏆',
    title: 'Hơn 500 khách hàng tin tưởng',
    desc: 'Chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp từ startup đến công ty lớn trong việc xây dựng và phát triển thương hiệu.',
  },
  {
    icon: '🎓',
    title: 'Đội ngũ chuyên nghiệp, bài bản',
    desc: 'Designer và chuyên gia thương hiệu được đào tạo bài bản, có nhiều năm kinh nghiệm thực chiến trong ngành thiết kế và branding.',
  },
  {
    icon: '🖨️',
    title: 'Thiết kế – In ấn trọn gói',
    desc: 'Cung cấp dịch vụ trọn gói từ thiết kế đến in ấn hồ sơ năng lực, profile, namecard và các ấn phẩm doanh nghiệp.',
  },
  {
    icon: '♾️',
    title: 'Chỉnh sửa không giới hạn',
    desc: 'Cam kết chỉnh sửa cho đến khi bạn 100% hài lòng với thiết kế, không phát sinh chi phí thêm.',
  },
  {
    icon: '📋',
    title: 'Tư vấn chiến lược thương hiệu',
    desc: 'Không chỉ thiết kế đẹp – chúng tôi tư vấn chiến lược định vị và phát triển thương hiệu phù hợp với ngành nghề và thị trường mục tiêu.',
  },
  {
    icon: '⚡',
    title: 'Tiến độ nhanh, đúng hạn',
    desc: 'Quy trình làm việc chuyên nghiệp, đảm bảo bàn giao đúng hạn và đáp ứng mọi yêu cầu khẩn cấp của doanh nghiệp.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao chọn chúng tôi?</span>
          <h2 className="section-title mt-2">6 Lý Do Doanh Nghiệp Tin Tưởng Eko</h2>
          <p className="section-sub">
            Chúng tôi không chỉ thiết kế logo – chúng tôi xây dựng thương hiệu bền vững và cung cấp giải pháp truyền thông tổng thể.
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
