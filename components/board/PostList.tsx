import Link from 'next/link'
import { prisma } from '@/lib/prisma'

type Props = { category: string; page: number }

export default async function PostList({ category, page }: Props) {
  const limit = 15
  const skip = (page - 1) * limit

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { category },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        author: true,
        views: true,
        createdAt: true,
        isAdmin: true,
      },
    }),
    prisma.post.count({ where: { category } }),
  ])

  const totalPages = Math.ceil(total / limit)

  return (
    <div>
      <table className="w-full text-sm">
        <thead className="bg-[#FFF8F0] border-b-2 border-[#E8863A]">
          <tr>
            <th className="py-3 px-4 text-center w-16 text-[#3D2B1F]">번호</th>
            <th className="py-3 px-4 text-left text-[#3D2B1F]">제목</th>
            <th className="py-3 px-4 text-center w-24 text-[#3D2B1F]">작성자</th>
            <th className="py-3 px-4 text-center w-28 text-[#3D2B1F]">날짜</th>
            <th className="py-3 px-4 text-center w-16 text-[#3D2B1F]">조회</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-12 text-center text-gray-400">
                게시글이 없습니다.
              </td>
            </tr>
          ) : (
            posts.map((p, idx) => (
              <tr key={p.id} className="border-b hover:bg-[#FFF8F0] transition-colors">
                <td className="py-3 px-4 text-center text-gray-400">
                  {total - skip - idx}
                </td>
                <td className="py-3 px-4">
                  <Link
                    href={`/board/${category}/${p.id}`}
                    className="hover:text-[#E8863A] transition-colors"
                  >
                    {p.isAdmin && (
                      <span className="text-[#E8863A] font-bold mr-1 text-xs">[공지]</span>
                    )}
                    {p.title}
                  </Link>
                </td>
                <td className="py-3 px-4 text-center text-gray-500">{p.author}</td>
                <td className="py-3 px-4 text-center text-gray-400">
                  {new Date(p.createdAt).toLocaleDateString('ko-KR')}
                </td>
                <td className="py-3 px-4 text-center text-gray-400">{p.views}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`?page=${p}`}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm transition-colors ${
                p === page
                  ? 'bg-[#E8863A] text-white'
                  : 'bg-white border border-gray-200 hover:border-[#E8863A] text-[#3D2B1F]'
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
