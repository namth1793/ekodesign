import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PHONE = '0964.699.499';

const navLinks = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Giới thiệu', to: '/gioi-thieu' },
  {
    label: 'Dịch vụ', to: '#',
    children: [
      { label: 'Thiết kế Logo & Thương hiệu', to: '/thiet-ke-logo' },
      { label: 'Xây dựng & Phát triển Thương hiệu', to: '/thiet-ke-thuong-hieu' },
      { label: 'Hồ sơ Năng lực & In ấn', to: '/ho-so-nang-luc' },
    ]
  },
  { label: 'Liên hệ', to: '/lien-he' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [location]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <span>✉ info@ekodesign.vn</span>
          <div className="flex gap-6 items-center">
            <span>☎ Hotline tư vấn miễn phí: <a href={`tel:${PHONE}`} className="font-bold text-accent">{PHONE}</a></span>
            <a href="/lien-he" className="bg-accent text-white px-4 py-1 rounded font-semibold hover:bg-amber-500 transition-colors">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="Eko Design" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <div key={link.to} className="relative group">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                      className={`px-4 py-2 rounded font-medium text-sm transition-colors flex items-center gap-1
                        ${link.children.some(c => isActive(c.to)) ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}
                    >
                      {link.label}
                      <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg overflow-hidden w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 border border-gray-100">
                      {link.children.map(c => (
                        <Link key={c.to} to={c.to}
                          className={`block px-5 py-3 text-sm hover:bg-light hover:text-accent transition-colors
                            ${isActive(c.to) ? 'text-accent font-semibold bg-light' : 'text-gray-700'}`}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.to}
                    className={`px-4 py-2 rounded font-medium text-sm transition-colors
                      ${isActive(link.to) ? 'text-accent font-semibold' : 'text-gray-700 hover:text-accent'}`}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="text-primary font-bold text-sm flex items-center gap-1">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE}
            </a>
            <Link to="/lien-he" className="btn-primary text-sm">Tư vấn miễn phí</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded text-primary">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <div key={link.to}>
                {link.children ? (
                  <>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mt-2">{link.label}</div>
                    {link.children.map(c => (
                      <Link key={c.to} to={c.to}
                        className="block px-3 py-2 text-sm rounded hover:bg-light hover:text-accent transition-colors text-gray-700">
                        → {c.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link to={link.to}
                    className={`block px-3 py-2 text-sm rounded transition-colors
                      ${isActive(link.to) ? 'bg-light text-accent font-semibold' : 'text-gray-700 hover:bg-light hover:text-accent'}`}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link to="/lien-he" className="btn-primary w-full text-center text-sm">Tư vấn miễn phí</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
