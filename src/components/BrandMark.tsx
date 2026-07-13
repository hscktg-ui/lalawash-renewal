import { Link } from 'react-router-dom'
import { BRAND } from '../data'

type Props = {
  to?: string
  onClick?: () => void
  /** header: 내비용 · footer: 푸터용 · plain: 링크 없음 */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClass = {
  sm: 'text-base',
  md: 'text-lg md:text-xl',
  lg: 'text-xl md:text-2xl',
} as const

/** 라라워시 워드마크 — 전 구간 텍스트로 통일 */
export function BrandMark({ to = '/', onClick, size = 'md', className = '' }: Props) {
  const mark = (
    <span
      className={`font-extrabold tracking-tight text-lala-800 ${sizeClass[size]} ${className}`}
    >
      {BRAND.name}
    </span>
  )

  if (!to) return mark

  return (
    <Link to={to} onClick={onClick} className="inline-flex items-center" aria-label={BRAND.name}>
      {mark}
    </Link>
  )
}
