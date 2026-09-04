import { Link } from 'react-router-dom'
import type { VesselSpec } from '../data/vesselSpecs'

function primaryMeasure(size: string) {
  const m = size.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/)
  return m ? Number(m[1]) : 0
}

function SizeScale({ size }: { size: string }) {
  const n = primaryMeasure(size)
  if (!n) return null
  const isOz = size.includes('온스')
  const max = isOz ? 24 : 360
  const pct = Math.max(14, Math.min(100, (n / max) * 100))
  return (
    <div className="mt-3">
      <p className="text-[11px] text-slate-400">{isOz ? '용량 비교 (5–22온스)' : '크기 비교 (최대 식판 기준)'}</p>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <span className="block h-full rounded-full bg-lala-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function SpecCardGrid({ items }: { items: readonly VesselSpec[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.group ?? ''}-${item.name}-${item.size}-${item.image ?? ''}`} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full bg-[#f6f6f4] object-contain p-3"
            />
          ) : (
            <div className="flex aspect-square items-center justify-center bg-slate-50 text-xs text-slate-400">
              제품 사진 준비 중
            </div>
          )}
          <div className="border-t border-slate-100 p-4">
            {item.group ? <p className="text-[11px] font-bold tracking-wide text-lala-600">{item.group}</p> : null}
            <h3 className="mt-1 break-keep text-sm font-bold text-ink">{item.name}</h3>
            {item.size ? (
              <p className="mt-2 font-mono text-[15px] tabular-nums tracking-tight text-ink">{item.size}</p>
            ) : (
              <p className="mt-2 text-sm text-slate-400">규격 협의</p>
            )}
            {item.material ? <p className="mt-1 text-xs text-slate-500">재질 {item.material}</p> : null}
            {item.note ? <p className="mt-2 text-xs leading-relaxed text-lala-700">{item.note}</p> : null}
            <SizeScale size={item.size} />
          </div>
        </article>
      ))}
    </div>
  )
}

export function SpecQuoteCta({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
      <div>
        <p className="text-xl font-extrabold">{title}</p>
        <p className="mt-2 text-sm text-lala-100">{desc}</p>
      </div>
      <Link
        to="/contact"
        className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
      >
        견적·상담 문의
      </Link>
    </div>
  )
}
