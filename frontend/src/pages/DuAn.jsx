import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const INDUSTRIES = [
  'Tất cả', 'Dầu khí', 'Khách sạn', 'Y tế', 'Thời trang',
  'Thực phẩm', 'Công nghệ', 'Giáo dục', 'Bất động sản',
  'Dược phẩm', 'Vận tải', 'Xây dựng', 'Pháp lý',
];

export default function DuAn() {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('Tất cả');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/portfolio')
      .then(r => { setProjects(r.data); setFiltered(r.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (industry) => {
    setActive(industry);
    setFiltered(industry === 'Tất cả' ? projects : projects.filter(p => p.industry === industry));
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Dự Án Của Chúng Tôi</h1>
          <p className="text-white/70 text-lg">
            Tổng hợp các dự án thiết kế thương hiệu, logo và nhận diện doanh nghiệp mà EkoDesign đã thực hiện.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 flex-wrap">
            {INDUSTRIES.map(ind => (
              <button
                key={ind}
                onClick={() => handleFilter(ind)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  active === ind
                    ? 'bg-primary text-white'
                    : 'bg-light text-gray-600 hover:text-primary border border-gray-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-24 text-gray-400">Đang tải dự án...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">Không có dự án trong ngành này.</div>
          ) : (
            <>
              <p className="text-gray-400 text-sm mb-8">{filtered.length} dự án</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(project => (
                  <Link
                    key={project.id}
                    to={`/du-an/${project.id}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={project.image_url}
                        alt={project.client_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-accent font-semibold uppercase tracking-wide">{project.industry}</span>
                      <h3 className="font-black text-gray-900 text-lg mt-1 mb-2 group-hover:text-primary transition-colors">
                        {project.client_name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.split(',').slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs bg-light text-primary px-2.5 py-0.5 rounded-full font-medium">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Bạn muốn có dự án tương tự?</h2>
          <p className="text-white/70 mb-8">Liên hệ để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
          <Link
            to="/lien-he"
            className="inline-block bg-accent text-white font-bold px-8 py-3.5 rounded-lg hover:bg-amber-500 transition-colors"
          >
            Tư vấn miễn phí →
          </Link>
        </div>
      </section>
    </main>
  );
}
