import Link from 'next/link'
import { prisma } from '@/lib/prisma'

async function getRecentPosts(category: string, limit = 5) {
  return prisma.post.findMany({
    where: { category },
    orderBy: { createdAt: 'desc' },
    take: limit,
    select: { id: true, title: true, createdAt: true },
  })
}

type Post = { id: number; title: string; createdAt: Date }

function PostSection({
  title,
  posts,
  href,
  category,
}: {
  title: string
  posts: Post[]
  href: string
  category: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-3 border-b-2 border-[#E8863A] pb-2">
        <h3 className="font-bold text-[#3D2B1F]">{title}</h3>
        <Link href={href} className="text-xs text-[#E8863A] hover:underline">
          더보기
        </Link>
      </div>
      <ul className="space-y-2">
        {posts.length === 0 ? (
          <li className="text-sm text-gray-400">게시글이 없습니다.</li>
        ) : (
          posts.map((p) => (
            <li key={p.id} className="flex justify-between items-center text-sm gap-2">
              <Link
                href={`/board/${category}/${p.id}`}
                className="hover:text-[#E8863A] truncate"
              >
                {p.title}
              </Link>
              <span className="text-gray-400 text-xs whitespace-nowrap">
                {p.createdAt.toLocaleDateString('ko-KR')}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default async function RecentPostsSection() {
  const [notices, frees] = await Promise.all([
    getRecentPosts('notice'),
    getRecentPosts('free'),
  ])

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PostSection title="공지사항" posts={notices} href="/board/notice" category="notice" />
      <PostSection title="자유게시판" posts={frees} href="/board/free" category="free" />
    </section>
  )
}
