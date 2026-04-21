import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <div>
                <div className="font-black text-white text-lg">EkoDesign</div>
                <div className="text-xs text-white/40 tracking-widest uppercase">Studio</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Đơn vị thiết kế logo và nhận diện thương hiệu chuyên nghiệp hàng đầu Việt Nam. Hơn 12 năm kinh nghiệm.
            </p>
            <div className="flex gap-3">
              {['fb', 'ig', 'yt', 'in'].map(s => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-xs font-bold transition-colors">
                  {s === 'fb' ? 'f' : s === 'ig' ? 'ig' : s === 'yt' ? '▶' : 'in'}
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
                ['Thiết kế Thương hiệu', '/thiet-ke-thuong-hieu'],
                ['Namecard & Văn phòng phẩm', '/lien-he'],
                ['Thiết kế Bao bì', '/lien-he'],
                ['Thiết kế Website', '/lien-he'],
                ['Đăng ký Bản quyền', '/lien-he'],
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
                ['Giới thiệu', '/gioi-thieu'],
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
                <span className="text-accent font-semibold block mb-0.5">Hà Nội</span>
                Tầng 3, Stellar Garden, 35 Lê Văn Thiêm, Thanh Xuân
              </li>
              <li>
                <span className="text-accent font-semibold block mb-0.5">TP. Hồ Chí Minh</span>
                Tầng 3, Tòa nhà Hoa Lam, 02 Thi Sách, Quận 1
              </li>
              <li>
                <a href="tel:0964699499" className="hover:text-accent transition-colors">📞 0964.699.499</a>
              </li>
              <li>
                <a href="mailto:info@ekodesign.vn" className="hover:text-accent transition-colors">✉ info@ekodesign.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <span>© 2025 EkoDesign Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
