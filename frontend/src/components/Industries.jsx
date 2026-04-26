const clients = [
  { name: 'VietinBank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/VietinBank_logo.svg/320px-VietinBank_logo.svg.png' },
  { name: 'MB Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/MB_Bank_logo_2022.svg/320px-MB_Bank_logo_2022.svg.png' },
  { name: 'BIDV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/BIDV_logo.svg/320px-BIDV_logo.svg.png' },
  { name: 'Chứng khoán Agribank', logo: 'https://placehold.co/180x70/ffffff/1a5276?font=roboto&text=Agribank+Securities' },
  { name: 'PVCB Capital', logo: 'https://placehold.co/180x70/ffffff/154360?font=roboto&text=PVCB+Capital' },
  { name: 'MGN', logo: 'https://placehold.co/180x70/ffffff/7d6608?font=roboto&text=MGN' },
  { name: 'VBSE', logo: 'https://placehold.co/180x70/ffffff/1a5276?font=roboto&text=VBSE' },
  { name: 'Vietcap', logo: 'https://placehold.co/180x70/ffffff/154360?font=roboto&text=Vietcap' },
  { name: 'BSC', logo: 'https://placehold.co/180x70/ffffff/1f618d?font=roboto&text=BSC' },
  { name: 'FPT Securities', logo: 'https://placehold.co/180x70/ffffff/ff6600?font=roboto&text=FPT+Securities' },
  { name: 'ABS', logo: 'https://placehold.co/180x70/ffffff/1a5276?font=roboto&text=ABS' },
  { name: 'F88', logo: 'https://placehold.co/180x70/ffffff/27ae60?font=roboto&text=F88' },
  { name: 'DABACO Group', logo: 'https://placehold.co/180x70/ffffff/1a5276?font=roboto&text=DABACO' },
  { name: 'Lộc Trời', logo: 'https://placehold.co/180x70/ffffff/e67e22?font=roboto&text=Lộc+Trời' },
  { name: 'Ajinomoto', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ajinomoto_logo.svg/320px-Ajinomoto_logo.svg.png' },
  { name: 'DAESANG Đại Việt', logo: 'https://placehold.co/180x70/ffffff/c0392b?font=roboto&text=DAESANG' },
  { name: 'Ngọc Mầm', logo: 'https://placehold.co/180x70/ffffff/27ae60?font=roboto&text=Ngọc+Mầm' },
  { name: 'VKD', logo: 'https://placehold.co/180x70/ffffff/7d6608?font=roboto&text=VKD' },
];

export default function Industries() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Được tin tưởng bởi</span>
          <h2 className="section-title mt-2">Khách Hàng Tiêu Biểu</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {clients.map((c, i) => (
            <div key={i} className="flex items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
              <img
                src={c.logo}
                alt={c.name}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-gray-500 text-center leading-tight">${c.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
