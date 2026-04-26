const reasons = [
  {
    title: 'Hơn 500 khách hàng tin tưởng',
    desc: 'Chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp từ startup đến công ty lớn trong việc xây dựng và phát triển thương hiệu.',
  },
  {
    title: 'Đội ngũ chuyên nghiệp, bài bản',
    desc: 'Designer và chuyên gia thương hiệu được đào tạo bài bản, có nhiều năm kinh nghiệm thực chiến trong ngành thiết kế và branding.',
  },
  {
    title: 'Thiết kế – In ấn trọn gói',
    desc: 'Cung cấp dịch vụ trọn gói từ thiết kế đến in ấn hồ sơ năng lực, profile, namecard và các ấn phẩm doanh nghiệp.',
  },
  {
    title: 'Chỉnh sửa không giới hạn',
    desc: 'Cam kết chỉnh sửa cho đến khi bạn 100% hài lòng với thiết kế, không phát sinh chi phí thêm.',
  },
  {
    title: 'Tư vấn chiến lược thương hiệu',
    desc: 'Không chỉ thiết kế đẹp – chúng tôi tư vấn chiến lược định vị và phát triển thương hiệu phù hợp với ngành nghề và thị trường mục tiêu.',
  },
  {
    title: 'Tiến độ nhanh, đúng hạn',
    desc: 'Quy trình làm việc chuyên nghiệp, đảm bảo bàn giao đúng hạn và đáp ứng mọi yêu cầu khẩn cấp của doanh nghiệp.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Tại sao chọn chúng tôi?</span>
          <h2 className="section-title mt-2">6 Lý Do Doanh Nghiệp Tin Tưởng Eko</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Chúng tôi không chỉ thiết kế logo – chúng tôi xây dựng thương hiệu bền vững<br />
            và cung cấp giải pháp truyền thông tổng thể.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-7xl font-bold text-primary leading-none mb-4">{i + 1}</span>
              <h3 className="font-bold text-primary text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
