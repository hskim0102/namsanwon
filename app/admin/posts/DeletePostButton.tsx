'use client'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({ id }: { id: number }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm('삭제하시겠습니까?')) return
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 text-xs"
    >
      삭제
    </button>
  )
}
