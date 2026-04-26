import { useState } from 'react';

const imageModules = import.meta.glob('../../assets/project/*.jpg', { eager: true });
const allImages = Object.values(imageModules).map(m => m.default);
const mid = Math.ceil(allImages.length / 2);
const row1 = allImages.slice(0, mid);
const row2 = allImages.slice(mid);

function CarouselRow({ images, direction, onZoom }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...images, ...images];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-4 py-1"
        style={{
          width: 'max-content',
          animation: `scroll-${direction} 35s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Dự án ${(i % images.length) + 1}`}
            className="h-56 w-auto object-cover rounded-xl flex-shrink-0 cursor-zoom-in hover:brightness-90 transition-all duration-200 shadow-sm"
            onClick={() => onZoom(src)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [zoomed, setZoomed] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mt-2">Dự Án Tiêu Biểu</h2>
          <p className="section-sub">
            Hơn 5.000 dự án đã được thực hiện cho các doanh nghiệp thuộc mọi lĩnh vực trên toàn quốc.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <CarouselRow images={row1} direction="left" onZoom={setZoomed} />
        <CarouselRow images={row2} direction="right" onZoom={setZoomed} />
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoomed(null)}
        >
          <img
            src={zoomed}
            alt="Dự án"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomed(null)}
            className="absolute top-5 right-6 text-white text-5xl font-light hover:text-accent transition-colors leading-none"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
