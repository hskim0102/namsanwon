export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[#F5C842] mb-3">사회복지법인 남산원</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            서울시 중구 소파로 2길 31 (우) 04628<br />
            전화: 02-752-9836 | 팩스: 02-755-9836<br />
            홈페이지: www.namsanwon.or.kr
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end justify-end">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 사회복지법인 남산원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
