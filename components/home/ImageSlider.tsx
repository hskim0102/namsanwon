'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

type SliderImage = { id: number; url: string; alt: string }

export default function ImageSlider({ images }: { images: SliderImage[] }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  if (!images.length) return null

  return (
    <div className="relative w-full h-[400px] md:h-[560px] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
      {/* 이전 버튼 */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors text-xl"
        aria-label="이전 슬라이드"
      >
        ‹
      </button>
      {/* 다음 버튼 */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors text-xl"
        aria-label="다음 슬라이드"
      >
        ›
      </button>
      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === current ? 'bg-[#E8863A]' : 'bg-white/60'
            }`}
            aria-label={`슬라이드 ${idx + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  )
}
