import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Tất cả');

  useEffect(() => {
    api.get('/api/portfolio')
      .then(r => setItems(r.data))
      .catch(() => {});
  }, []);

  const industries = ['Tất cả', ...new Set(items.map(i => i.industry))];
  const filtered = filter === 'Tất cả' ? items : items.filter(i => i.industry === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="section-title mt-2">Dự Án Tiêu Biểu</h2>
          <p className="section-sub">
            Hơn 5.000 dự án đã được thực hiện cho các doanh nghiệp thuộc mọi lĩnh vực trên toàn quốc.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {industries.map(ind => (
            <button key={ind} onClick={() => setFilter(ind)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === ind ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {ind}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.client_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600'; }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-accent text-xs font-bold uppercase tracking-wide mb-1">{item.industry}</span>
                <h3 className="text-white font-bold text-lg">{item.client_name}</h3>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
              <div className="absolute top-3 left-3 bg-white/90 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                {item.industry}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/lien-he" className="btn-outline-dark">Tư vấn dự án của bạn →</Link>
        </div>
      </div>
    </section>
  );
}
