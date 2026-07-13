import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { noticeCover } from '../lib/noticeImages'
import type { Notice } from '../lib/content'

/** 본문을 문단 단위로 깔끔히 렌더 */
export function NoticeBody({ body }: { body: string }) {
  const paragraphs = body
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="space-y-4 text-[15px] leading-7 text-slate-700 md:text-base md:leading-8">
      {paragraphs.map((p, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {p}
        </p>
      ))}
    </div>
  )
}

export function NoticeGallery({
  images,
  altPrefix = '첨부 이미지',
}: {
  images: string[]
  altPrefix?: string
}) {
  const [open, setOpen] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (images.length === 0) return null

  return (
    <>
      <div
        className={`mt-8 grid gap-3 ${
          images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
        }`}
      >
        {images.map((src, i) => (
          <button
            key={`${src.slice(0, 40)}-${i}`}
            type="button"
            onClick={() => setOpen(src)}
            className="group overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 focus-visible:outline-none"
          >
            <img
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              className={`w-full object-cover transition duration-300 group-hover:scale-[1.02] ${
                images.length === 1 ? 'max-h-[420px] object-contain bg-slate-50' : 'aspect-[4/3]'
              }`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-ink"
            aria-label="닫기"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={open}
            alt="확대 이미지"
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export function NoticeCoverBanner({ notice }: { notice: Notice }) {
  const cover = noticeCover(notice)
  if (!cover) return null
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
      <img
        src={cover}
        alt=""
        className="max-h-[360px] w-full object-cover md:max-h-[420px]"
      />
    </div>
  )
}
