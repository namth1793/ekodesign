import { Link } from 'react-router-dom';

const plans = [
  {
    index: '1/4',
    tier: 'Logo & Thương Hiệu',
    name: 'BASE',
    code: 'B',
    badgeColor: '#1e3a6e',
    originalPrice: '1.250.000',
    salePrice: '750.000',
    desc: 'Phù hợp với các dự án khởi nghiệp dành cho khách hàng mới bắt đầu',
    features: [
      '1–2 concept logo ban đầu',
      'Chỉnh sửa tối đa 4 lần',
      'Thiết kế logo đơn giản theo brief',
      'Logo màu + trắng đen',
      'Bàn giao file PNG + JPG',
      'Ứng dụng logo cơ bản (avatar, watermark)',
    ],
    duration: '3 – 5 ngày',
  },
  {
    index: '2/4',
    tier: 'Logo & Thương Hiệu',
    name: 'FLOW',
    code: 'F',
    badgeColor: '#5b3fa6',
    originalPrice: '2.150.000',
    salePrice: '1.850.000',
    desc: 'Gói nâng cao, linh hoạt & sáng tạo hơn phù hợp với khách hàng có định hướng rõ ràng',
    features: [
      '2–3 concept logo',
      'Chỉnh sửa tối đa 5 lần',
      'Nghiên cứu concept & ý tưởng logo',
      'Logo full color + monochrome',
      'Bàn giao file PNG / JPG / AI / PDF',
      'Mockup logo cơ bản (card, signage, avatar)',
    ],
    duration: '5 – 7 ngày',
  },
  {
    index: '3/4',
    tier: 'Logo & Thương Hiệu',
    name: 'GROW',
    code: 'G',
    badgeColor: '#e07b1a',
    originalPrice: '4.550.000',
    salePrice: '3.750.000',
    desc: 'Phù hợp với Doanh nghiệp đang phát triển cần logo chuyên nghiệp và nhận diện đồng bộ',
    features: [
      '3–4 concept logo sáng tạo',
      'Chỉnh sửa đến khi hoàn thiện concept',
      'Thiết kế logo system: Primary logo, Submark logo, Icon mark',
      'Hệ màu thương hiệu & Typography',
      'Mockup ứng dụng logo (namecard, bao bì, social…)',
      'Brand Guideline mini (5–8 trang)',
    ],
    duration: '7 – 10 ngày',
  },
  {
    index: '4/4',
    tier: 'Logo & Thương Hiệu',
    name: 'MASTER',
    code: 'M',
    badgeColor: '#111111',
    originalPrice: '10.550.000',
    salePrice: '8.550.000',
    desc: 'Startup lớn, doanh nghiệp xây dựng thương hiệu bài bản hoặc cần hệ thống nhận diện đầy đủ',
    features: [
      'Nghiên cứu thương hiệu & đối thủ',
      '4–5 concept logo độc quyền',
      'Logo system hoàn chỉnh (Primary, Secondary, Icon, Pattern)',
      'Hệ màu đầy đủ + Typography system',
      'Brand Guideline chi tiết (15–20 trang)',
      'Bộ ứng dụng: Namecard, Social, Email, Packaging mockup',
    ],
    duration: '10 – 14 ngày',
  },
];

export default function PricingLogo() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Bảng giá</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Bảng Giá Thiết Kế Logo & Thương Hiệu
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Đa dạng gói dịch vụ phù hợp với mọi quy mô doanh nghiệp – từ startup đến tập đoàn lớn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {plans.map((plan, i) => (
            <div key={i} className="relative flex rounded-xl overflow-hidden border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300">
              {/* Arrow indicator */}
              <div className="flex items-center pl-3 pr-1 text-white/40 text-lg select-none">◄</div>

              {/* Card content */}
              <div className="flex-1 p-5 pr-20">
                {/* Header */}
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-white/50 text-xs font-semibold tracking-widest">{plan.index} &nbsp; {plan.tier}</p>
                    <h3 className="text-white text-2xl font-black tracking-wide mt-0.5">{plan.name} <span className="font-normal">( {plan.code} )</span></h3>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-sm line-through">{plan.originalPrice}</p>
                    <p className="text-white text-3xl font-black leading-tight">{plan.salePrice}</p>
                  </div>
                </div>

                <p className="text-white/60 text-xs mb-4 leading-relaxed">{plan.desc}</p>

                <div className="mb-4">
                  <p className="text-white/70 text-xs font-bold mb-2">Hạng mục chính</p>
                  <ul className="space-y-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="text-white/80 text-xs flex gap-1.5">
                        <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-white/50 text-xs italic">Thời gian thực hiện: <span className="text-white/80 not-italic font-semibold">{plan.duration}</span></p>
              </div>

              {/* Badge letter */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center rounded-tl-2xl"
                style={{ backgroundColor: plan.badgeColor }}
              >
                <span className="text-white text-3xl font-black">{plan.code}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/lien-he"
            className="inline-block bg-accent text-white font-bold px-8 py-3.5 rounded-lg hover:bg-amber-500 transition-colors text-sm tracking-wide">
            Tư vấn & Nhận báo giá miễn phí →
          </Link>
        </div>
      </div>
    </section>
  );
}
