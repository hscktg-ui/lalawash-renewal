type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  imgClassName?: string
}

/** 지점 맵 프레임 — 이미지는 배경만 재채색, 부가 설명은 HTML 타이포로 유지 */
export function BranchMapFrame({
  src,
  alt,
  caption = '부천 규모 세척장 · 시흥작은자리점 자동화 라인 · 부천나눔 2호점(2026.6) 개소',
  className = '',
  imgClassName = '',
}: Props) {
  return (
    <figure
      className={`overflow-hidden rounded-3xl bg-gradient-to-br from-lala-50 via-white to-slate-50 ring-1 ring-lala-100 ${className}`}
    >
      <div className="relative px-3 pt-3 md:px-5 md:pt-5">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-lala-300/60 to-transparent" />
        <img
          src={src}
          alt={alt}
          className={`mx-auto h-auto w-full object-contain ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption className="border-t border-lala-100/80 bg-white/80 px-5 py-4 text-center text-sm leading-relaxed text-muted md:px-8">
          <span className="font-semibold text-lala-700">규모 세척장</span>
          <span className="mx-2 text-slate-300">·</span>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
