import { useState, useEffect } from 'react';
import api from '../api';

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    api.get('/api/portfolio/testimonials')
      .then(r => setItems(r.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Khách hàng nói gì?</span>
          <h2 className="section-title mt-2">Đánh Giá Từ Khách Hàng</h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-accent text-5xl mb-4">"</div>
          <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
            {items[active]?.content}
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src={items[active]?.avatar_url} alt={items[active]?.client_name}
              className="w-12 h-12 rounded-full object-cover border-2 border-accent"
              onError={e => { e.target.src = 'https://i.pravatar.cc/80?img=10'; }}
            />
            <div className="text-left">
              <div className="font-bold text-primary">{items[active]?.client_name}</div>
              <div className="text-sm text-gray-400">{items[active]?.company}</div>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(items[active]?.rating || 5)].map((_, i) => (
              <span key={i} className="text-accent">★</span>
            ))}
          </div>
        </div>

        {/* Avatars row */}
        <div className="flex justify-center gap-3 flex-wrap">
          {items.map((t, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-200
                ${i === active ? 'border-accent scale-110 shadow-lg' : 'border-gray-200 opacity-60 hover:opacity-100'}`}>
              <img src={t.avatar_url} alt={t.client_name} className="w-full h-full object-cover"
                onError={e => { e.target.src = `https://i.pravatar.cc/80?img=${i + 1}`; }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
