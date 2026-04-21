import { Link } from 'react-router-dom';
import Packages from '../components/Packages';

const process = [
  { step: '01', title: 'Brief & Nghiên cứu', desc: 'Thu thập thông tin về doanh nghiệp, ngành nghề, đối thủ và khách hàng mục tiêu để định hướng thiết kế.' },
  { step: '02', title: 'Brainstorm ý tưởng', desc: 'Đội ngũ 4+ designer cùng sáng tạo, tìm kiếm các ý tưởng độc đáo phù hợp với DNA thương hiệu.' },
  { step: '03', title: 'Phác thảo & Concept', desc: 'Phát triển 3-5 concept logo tốt nhất, trình bày trên các ứng dụng thực tế để bạn dễ hình dung.' },
  { step: '04', title: 'Phản hồi & Chỉnh sửa', desc: 'Nhận phản hồi của bạn và chỉnh sửa chi tiết cho đến khi đạt kết quả hoàn hảo nhất.' },
  { step: '05', title: 'Hoàn thiện', desc: 'Tinh chỉnh từng pixel, đảm bảo logo đẹp trên mọi kích thước và nền màu khác nhau.' },
  { step: '06', title: 'Bàn giao & Hướng dẫn', desc: 'Cung cấp đầy đủ file gốc (AI, EPS, SVG, PNG, PDF) và hướng dẫn sử dụng logo chuyên nghiệp.' },
];

const logoTypes = [
  { type: 'Wordmark', desc: 'Logo chữ thuần túy – tên thương hiệu được thiết kế với font chữ độc quyền.', ex: 'Google, Coca-Cola, FedEx' },
  { type: 'Lettermark', desc: 'Logo viết tắt – chữ cái đầu của tên thương hiệu được thiết kế tinh tế.', ex: 'IBM, HP, NASA' },
  { type: 'Pictorial', desc: 'Logo hình ảnh – biểu tượng hình học hoặc minh họa đại diện cho thương hiệu.', ex: 'Apple, Twitter, Target' },
  { type: 'Combination', desc: 'Logo kết hợp – sự kết hợp hoàn hảo giữa hình ảnh và chữ viết.', ex: 'Burger King, Adidas, Lacoste' },
];

export default function ThietKeLogo() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400)', backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Dịch vụ</span>
            <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Thiết Kế Logo<br/>Chuyên Nghiệp</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Tạo nên biểu tượng thương hiệu độc đáo, ghi dấu ấn sâu sắc trong tâm trí khách hàng và đối tác.
            </p>
            <div className="flex gap-4">
              <Link to="/lien-he" className="btn-primary">Tư vấn ngay</Link>
              <a href="#bang-gia" className="btn-outline">Xem bảng giá</a>
            </div>
          </div>
        </div>
      </section>

      {/* What is logo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Logo là gì?</span>
              <h2 className="text-3xl font-black text-primary mt-2 mb-5">Logo – Bộ Mặt Của Thương Hiệu</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Logo là yếu tố nhận diện thương hiệu quan trọng nhất – xuất hiện trên mọi điểm tiếp xúc với khách hàng, từ biển hiệu đến bao bì, từ website đến mạng xã hội.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Một logo tốt cần đảm bảo 5 tiêu chí: <strong>Đơn giản</strong>, <strong>Ghi nhớ được</strong>, <strong>Bền vững theo thời gian</strong>, <strong>Linh hoạt</strong> và <strong>Phù hợp</strong> với ngành nghề.
              </p>
              <div className="bg-light rounded-xl p-5 mt-6">
                <p className="text-primary font-semibold">"Logo không chỉ là một hình ảnh đẹp – nó là câu chuyện thương hiệu được kể trong một dấu hiệu duy nhất."</p>
                <p className="text-gray-400 text-sm mt-2">– EkoDesign Studio</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {logoTypes.map(lt => (
                <div key={lt.type} className="p-5 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all">
                  <div className="font-black text-primary text-lg mb-1">{lt.type}</div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2">{lt.desc}</p>
                  <p className="text-accent text-xs font-semibold">VD: {lt.ex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Quy trình làm việc</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">6 Bước Thiết Kế Logo Tại EkoDesign</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Quy trình bài bản, minh bạch và lấy khách hàng làm trung tâm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-accent/20 mb-3">{p.step}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <div id="bang-gia">
        <Packages />
      </div>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-3">Bắt Đầu Dự Án Logo Của Bạn</h2>
          <p className="text-white/70 mb-7">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong 2 giờ.</p>
          <Link to="/lien-he" className="btn-primary text-lg px-8 py-4">Tư vấn miễn phí →</Link>
        </div>
      </section>
    </main>
  );
}
