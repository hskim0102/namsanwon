import { prisma } from '@/lib/prisma'
import ImageSlider from '@/components/home/ImageSlider'
import QuickLinks from '@/components/home/QuickLinks'
import RecentPostsSection from '@/components/home/RecentPostsSection'

export const revalidate = 600 // 10분 캐시

export default async function HomePage() {
  const sliderImages = await prisma.sliderImage.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  })

  return (
    <>
      <ImageSlider images={sliderImages} />
      <QuickLinks />
      <RecentPostsSection />
      {/* 기관 소개 배너 */}
      <section className="bg-[#E8863A]/10 py-12 mt-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#3D2B1F] mb-3">사회복지법인 남산원</h2>
          <p className="text-[#3D2B1F]/70 max-w-xl mx-auto leading-relaxed">
            1953년 설립 이후 서울 남산 자락에서 아동들의 건강한 성장과 자립을 지원해온 사회복지기관입니다.
          </p>
        </div>
      </section>
    </>
  )
}
