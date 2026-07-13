import { Link } from 'react-router-dom'
import { BRAND, LOGO } from '../data'

type Props = {
  to?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClass = {
  sm: 'h-7',
  md: 'h-9 md:h-10',
  lg: 'h-11 md:h-12',
} as const

/** 라라워시 공식 이미지 로고 (헤더·푸터·관리자) */
export function BrandMark({ to = '/', onClick, size = 'md', className = '' }: Props) {
  const mark = (
    <img
      src={LOGO}
      alt={BRAND.name}
      width={320}
      height={140}
      decoding="async"
      className={`${sizeClass[size]} w-auto object-contain object-left ${className}`}
    />
  )

  if (!to) return mark

  return (
    <Link to={to} onClick={onClick} className="inline-flex items-center" aria-label={BRAND.name}>
      {mark}
    </Link>
  )
}
