import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#E8863A]">사회복지법인</span>
          <span className="text-xl font-bold text-[#3D2B1F]">남산원</span>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
