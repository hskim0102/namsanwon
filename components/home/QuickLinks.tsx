import Link from 'next/link'

const QUICK_LINKS = [
  { label: '공지사항', href: '/board/notice', icon: '📢' },
  { label: '후원안내', href: '/support/donation', icon: '💛' },
  { label: '자원봉사', href: '/support/volunteer', icon: '🤝' },
  { label: '오시는 길', href: '/about/directions', icon: '📍' },
  { label: '채용공고', href: '/board/job', icon: '📋' },
]

export default function QuickLinks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-[#E8863A] border-2 border-transparent transition-all"
          >
            <span className="text-3xl" aria-hidden="true">{link.icon}</span>
            <span className="text-sm font-medium text-[#3D2B1F] text-center">{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
