import { Link } from 'react-router-dom'
import { BRAND, LOGO, LOGO_ON_DARK } from '../data'

type Props = {
  to?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  /** light: 밝은 배경(기본) · dark: 어두운 배경 */
  tone?: 'light' | 'dark'
  className?: string
}

const sizeClass = {
  sm: 'h-8',
  md: 'h-9 max-md:h-10 md:h-10',
  lg: 'h-11 md:h-12',
} as const

/** 라라워시 공식 이미지 로고 (헤더·푸터·관리자) */
export function BrandMark({
  to = '/',
  onClick,
  size = 'md',
  tone = 'light',
  className = '',
}: Props) {
  const src = tone === 'dark' ? LOGO_ON_DARK : LOGO
  const mark = (
    <img
      src={src}
      alt={BRAND.name}
      width={320}
      height={140}
      decoding="async"
      className={`${sizeClass[size]} w-auto max-w-[42vw] object-contain object-left ${className}`}
    />
  )

  if (!to) return mark

  return (
    <Link to={to} onClick={onClick} className="inline-flex items-center" aria-label={BRAND.name}>
      {mark}
    </Link>
  )
}
