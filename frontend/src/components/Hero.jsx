
export default function Hero() {
  return (
    <section className="bg-primary">
      {/* Banner image */}
      <div className="w-full">
        <img
          src="/banner.png"
          alt="Eko Design – Đồng hành xây dựng thương hiệu bền vững"
          className="w-full object-cover"
          style={{ maxHeight: '720px', objectPosition: 'center' }}
        />
      </div>
    </section>
  );
}
