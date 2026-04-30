const contacts = [
  {
    label: 'Chat Zalo',
    href: 'https://zalo.me/0877658973',
    color: '#0068FF',
    delay: '0s',
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <text x="24" y="33" textAnchor="middle" fontSize="26" fontWeight="900"
          fontFamily="Arial, sans-serif" fill="white">Z</text>
      </svg>
    ),
  },
  {
    label: 'Messenger',
    href: 'https://m.me/', // cập nhật link Facebook page của bạn
    color: '#0084FF',
    delay: '0.4s',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.928 1.41 5.545 3.626 7.28V22l3.305-1.803c.883.244 1.82.376 2.789.376 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2zm1.006 12.466-2.553-2.696-4.979 2.696 5.478-5.813 2.616 2.696 4.916-2.696-5.478 5.813z"/>
      </svg>
    ),
  },
  {
    label: 'Gọi ngay',
    href: 'tel:0877658973',
    color: '#22c55e',
    delay: '0.8s',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.3 1l-2.2 2.2z"/>
      </svg>
    ),
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-4">
      {contacts.map((c) => (
        <div key={c.label} className="relative group flex items-center">
          {/* Tooltip */}
          <span className="absolute right-14 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200">
            {c.label}
          </span>

          {/* Pulse ring */}
          <span
            className="absolute inline-flex h-12 w-12 rounded-full animate-ping opacity-50"
            style={{ backgroundColor: c.color, animationDelay: c.delay, animationDuration: '1.8s' }}
          />

          {/* Button */}
          <a
            href={c.href}
            target={c.href.startsWith('tel') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={c.label}
            className="relative flex w-12 h-12 rounded-full items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
            style={{ backgroundColor: c.color }}
          >
            {c.icon}
          </a>
        </div>
      ))}
    </div>
  );
}
