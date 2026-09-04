import { Link } from 'react-router-dom'

export type OpsCase = {
  name: string
  noticeId?: string | null
}

type Props = {
  items: readonly OpsCase[]
  pendingNote?: string
}

export function OpsCasesMarquee({ items, pendingNote }: Props) {
  const source = items.length > 0 ? items : [{ name: '지점 운영사례 취합 중', noticeId: null }]
  const loop = [...source, ...source]

  return (
    <div>
      {pendingNote ? <p className="mb-6 max-w-2xl text-sm text-muted">{pendingNote}</p> : null}
      <div className="overflow-hidden">
        <div className="lala-marquee-track flex gap-3">
          {loop.map((c, i) => {
            const card = (
              <span className="inline-flex min-w-[14rem] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
                <span className="text-sm font-semibold text-slate-600">{c.name}</span>
                <span className="text-xs text-slate-400">사진 준비 중</span>
                {c.noticeId ? <span className="text-xs font-bold text-lala-600">소식 보기 →</span> : null}
              </span>
            )
            return c.noticeId ? (
              <Link key={`${c.name}-${i}`} to={`/notice/${c.noticeId}`} className="shrink-0">
                {card}
              </Link>
            ) : (
              <span key={`${c.name}-${i}`} className="shrink-0">
                {card}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
