import { Link } from 'react-router-dom';
import logoBot from '../../assets/logo_bot.png';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={logoBot} alt="Eko Design" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Dịch vụ xây dựng & phát triển thương hiệu – Thiết kế logo & thương hiệu – Thiết kế & in ấn hồ sơ năng lực chuyên nghiệp.
            </p>
            <div className="flex gap-3">
              {['f', 'ig', '▶', 'in'].map((s, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Dịch vụ</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                ['Thiết kế Logo', '/thiet-ke-logo'],
                ['Thiết kế Thương hiệu', '/thiet-ke-logo'],
                ['Xây dựng & Phát triển Thương hiệu', '/thiet-ke-thuong-hieu'],
                ['Hồ sơ Năng lực', '/ho-so-nang-luc'],
                ['In ấn Ấn phẩm Doanh nghiệp', '/ho-so-nang-luc'],
                ['Namecard & Văn phòng phẩm', '/lien-he'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-accent transition-colors">→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Công ty</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                ['Giới thiệu về Eko', '/gioi-thieu'],
                ['Dự án thực hiện', '/du-an'],
                ['Bảng giá dịch vụ', '/thiet-ke-logo'],
                ['Liên hệ tư vấn', '/lien-he'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-accent transition-colors">→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:0877658973" className="hover:text-accent transition-colors">📞 0877.658.973</a>
              </li>
              <li>
                <a href="mailto:ekoagency3@gmail.com" className="hover:text-accent transition-colors">✉ ekoagency3@gmail.com</a>
              </li>
              <li className="leading-relaxed">
                📍 Hà Nội & TP. Hồ Chí Minh
              </li>
              <li className="text-white/40">
                Thứ 2 – Thứ 7: 8:00 – 18:00
              </li>
            </ul>
            <Link to="/lien-he"
              className="mt-5 inline-block bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-amber-500 transition-colors">
              Tư vấn miễn phí →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <span>© 2025 Eko Design Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
