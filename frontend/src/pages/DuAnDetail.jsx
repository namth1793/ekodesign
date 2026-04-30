import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../api';

export default function DuAnDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setProject(null);
    setRelated([]);
    api.get(`/api/portfolio/${id}`)
      .then(r => {
        setProject(r.data);
        return api.get(`/api/portfolio?industry=${encodeURIComponent(r.data.industry)}`);
      })
      .then(r => setRelated(r.data.filter(p => p.id !== Number(id)).slice(0, 3)))
      .catch(() => navigate('/du-an'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        Đang tải...
      </div>
    );
  }

  if (!project) return null;

  const tags = project.tags ? project.tags.split(',').map(t => t.trim()) : [];
  const dateStr = new Date(project.created_at).toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' });

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link to="/du-an" className="hover:text-primary transition-colors">Dự án</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{project.client_name}</span>
        </div>
      </div>

      {/* Hero image */}
      <section className="bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <img
            src={project.image_url}
            alt={project.client_name}
            className="w-full max-h-[520px] object-cover"
          />
        </div>
      </section>

      {/* Main content */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full mb-3">
                {project.industry}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                {project.client_name}
              </h1>
            </div>
            <Link
              to="/lien-he"
              className="flex-shrink-0 bg-accent text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
            >
              Yêu cầu tương tự →
            </Link>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">{project.description}</p>

          {/* Info grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-light rounded-xl p-6 mb-10">
            {[
              { label: 'Ngành nghề', val: project.industry },
              { label: 'Dịch vụ chính', val: tags[0] || '—' },
              { label: 'Hoàn thành', val: dateStr },
            ].map(item => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-primary">{item.val}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-10">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Dịch vụ thực hiện</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Process steps */}
          <div className="border border-gray-100 rounded-xl p-6 mb-10">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Quy trình thực hiện</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Tiếp nhận brief', 'Nghiên cứu & phân tích', 'Phát triển concept', 'Trình bày & góp ý', 'Hoàn thiện', 'Bàn giao file'].map((step, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/du-an"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
          >
            ← Xem tất cả dự án
          </Link>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-14 bg-light">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-black text-primary mb-8">Dự án cùng ngành</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map(p => (
                <Link
                  key={p.id}
                  to={`/du-an/${p.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image_url}
                      alt={p.client_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-accent font-semibold">{p.industry}</span>
                    <h3 className="font-black text-gray-900 mt-1 group-hover:text-primary transition-colors">
                      {p.client_name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-4">Bạn muốn dự án tương tự?</h2>
          <p className="text-white/70 mb-8">Liên hệ ngay để được tư vấn miễn phí và nhận báo giá.</p>
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
