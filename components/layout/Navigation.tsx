'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV_ITEMS = [
  {
    label: '기관소개',
    children: [
      { label: '인사말', href: '/about/greeting' },
      { label: '연혁', href: '/about/history' },
      { label: '현황', href: '/about/status' },
      { label: '시설안내', href: '/about/facility' },
      { label: '오시는 길', href: '/about/directions' },
      { label: '역사사진', href: '/about/photos' },
    ],
  },
  {
    label: '사업소개',
    children: [
      { label: '후원금품현황', href: '/business/admin-support/donation' },
      { label: '영양소식', href: '/business/admin-support/nutrition' },
      { label: '자립지원', href: '/business/independence' },
      { label: '교육지원팀', href: '/business/child-support/education' },
      { label: '보육지원팀', href: '/business/child-support/care' },
    ],
  },
  {
    label: '남산 이야기',
    children: [
      { label: '아동 소식', href: '/story/news' },
      { label: '아동 사진첩', href: '/story/album' },
    ],
  },
  {
    label: '후원/자원봉사',
    children: [
      { label: '후원안내', href: '/support/donation' },
      { label: '자원봉사 안내', href: '/support/volunteer' },
    ],
  },
  {
    label: '게시판',
    children: [
      { label: '공지사항', href: '/board/notice' },
      { label: '채용공고', href: '/board/job' },
      { label: '자유게시판', href: '/board/free' },
      { label: '외국인게시판', href: '/board/foreign' },
      { label: '후원·봉사 갤러리', href: '/board/gallery' },
    ],
  },
  {
    label: '사회복지법인',
    children: [
      { label: '법인게시판', href: '/corporation/board' },
    ],
  },
]

export default function Navigation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpandIndex, setMobileExpandIndex] = useState<number | null>(null)

  return (
    <>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex items-center gap-1" aria-label="주요 메뉴">
        {NAV_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setOpenIndex(idx)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              aria-label={`${item.label} 메뉴`}
              aria-expanded={openIndex === idx}
              className="px-4 py-2 text-[#3D2B1F] font-medium hover:text-[#E8863A] transition-colors"
            >
              {item.label}
            </button>
            {openIndex === idx && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[140px] z-50 border-t-2 border-[#E8863A]"
                role="menu"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-[#3D2B1F] hover:bg-[#FFF8F0] hover:text-[#E8863A] transition-colors"
                    onClick={() => setOpenIndex(null)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 모바일 햄버거 버튼 */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#3D2B1F] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* 모바일 메뉴 패널 */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto" aria-label="모바일 메뉴">
          <nav>
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-[#3D2B1F]"
                  aria-expanded={mobileExpandIndex === idx}
                  onClick={() => setMobileExpandIndex(mobileExpandIndex === idx ? null : idx)}
                >
                  {item.label}
                  <span className="text-[#E8863A]">{mobileExpandIndex === idx ? '▲' : '▼'}</span>
                </button>
                {mobileExpandIndex === idx && (
                  <div className="bg-[#FFF8F0] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#3D2B1F] hover:text-[#E8863A]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
