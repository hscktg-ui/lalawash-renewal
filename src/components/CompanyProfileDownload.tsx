import { Download } from 'lucide-react'
import { EXTERNAL } from '../lib/content'

type Props = {
  variant?: 'primary' | 'secondary' | 'dark' | 'link'
  className?: string
  label?: string
}

export function CompanyProfileDownload({
  variant = 'primary',
  className = '',
  label = '회사소개서 다운로드',
}: Props) {
  const styles =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700'
      : variant === 'secondary'
        ? 'inline-flex items-center gap-2 rounded-full border border-lala-300 bg-white px-5 py-3 text-sm font-bold text-lala-800 hover:bg-lala-50'
        : variant === 'dark'
          ? 'inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15'
          : 'inline-flex items-center gap-1.5 text-sm font-bold text-lala-600 hover:text-lala-800'

  return (
    <a
      href={EXTERNAL.companyProfile}
      download={EXTERNAL.companyProfileName}
      target="_blank"
      rel="noreferrer"
      className={`${styles} ${className}`}
    >
      <Download className="h-4 w-4 shrink-0" />
      {label}
    </a>
  )
}
