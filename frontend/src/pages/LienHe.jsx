import { useState } from 'react';
import api from '../api';

const SERVICES = [
  'Thiết kế Logo',
  'Thiết kế Nhận diện Thương hiệu',
  'Xây dựng & Phát triển Thương hiệu',
  'Hồ sơ Năng lực (Company Profile)',
  'In ấn Ấn phẩm Doanh nghiệp',
  'Namecard & Văn phòng phẩm',
  'Khác',
];

export default function LienHe() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name.trim()) { setStatus({ type: 'error', msg: 'Vui lòng nhập họ tên.' }); return; }
    if (!form.phone.trim() && !form.email.trim()) { setStatus({ type: 'error', msg: 'Vui lòng nhập số điện thoại hoặc email.' }); return; }
    setLoading(true);
    setStatus(null);
    try {
      const r = await api.post('/api/contacts', form);
      setStatus({ type: 'success', msg: r.data.message || 'Gửi thành công! Chúng tôi sẽ liên hệ sớm.' });
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: 'Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Liên hệ</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Tư Vấn Miễn Phí</h1>
          <p className="text-white/70 text-lg">
            Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-primary mb-6">Thông Tin Liên Hệ</h2>
                <div className="space-y-5">
                  {[
                    { icon: '📞', label: 'Hotline tư vấn', val: '0964.699.499', link: 'tel:0964699499' },
                    { icon: '✉️', label: 'Email', val: 'info@ekodesign.vn', link: 'mailto:info@ekodesign.vn' },
                    { icon: '🕐', label: 'Giờ làm việc', val: 'Thứ 2 – Thứ 7: 8:00 – 18:00' },
                  ].map(item => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                        {item.link
                          ? <a href={item.link} className="font-semibold text-primary hover:text-accent transition-colors">{item.val}</a>
                          : <div className="font-semibold text-primary">{item.val}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-primary">Văn phòng Hà Nội</h3>
                <div className="rounded-xl overflow-hidden h-40 bg-gray-100">
                  <iframe
                    title="Hà Nội"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8093076063375!2d105.81037661489764!3d21.00339999353085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad43ddb5abf7%3A0x3e9f7f73ab8ce04d!2sStella%20Garden!5e0!3m2!1svi!2s!4v1678000000000"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-500">Tầng 3, Stellar Garden, 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</p>

                <h3 className="font-bold text-primary mt-4">Văn phòng TP. Hồ Chí Minh</h3>
                <p className="text-sm text-gray-500">Tầng 3, Tòa nhà Hoa Lam, 02 Thi Sách, Quận 1, TP.HCM</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-light rounded-2xl p-8">
              <h2 className="text-2xl font-black text-primary mb-2">Gửi Yêu Cầu Tư Vấn</h2>
              <p className="text-gray-400 text-sm mb-7">Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 2 giờ làm việc.</p>

              {status && (
                <div className={`mb-5 p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {status.type === 'success' ? '✓ ' : '✗ '}{status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Số điện thoại</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="0912 345 678"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Dịch vụ quan tâm</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-sm">
                    <option value="">-- Chọn dịch vụ --</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nội dung yêu cầu</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Mô tả ngắn gọn về nhu cầu thiết kế, ngành nghề và phong cách mong muốn..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-sm resize-none"
                  />
                </div>

                <button type="submit" disabled={loading}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-colors text-lg
                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-amber-500'}`}>
                  {loading ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn →'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Bằng cách gửi form, bạn đồng ý với chính sách bảo mật của EkoDesign.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
