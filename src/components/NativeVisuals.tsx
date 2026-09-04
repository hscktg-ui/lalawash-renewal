import { useEffect, useRef, useState } from 'react'
import {
  CheckCircle2,
  PackageCheck,
  PhoneCall,
  Recycle,
  Sparkles,
  Truck,
  Utensils,
} from 'lucide-react'
import { ENV_SCENARIO, HISTORY, HOW_TO, IMPACT } from '../data'

const howToIcons = [PhoneCall, CheckCircle2, Truck, Utensils, Recycle, Sparkles]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduced) {
      setN(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration, reduced])

  return n
}

function ImpactStat({
  value,
  suffix,
  label,
  active,
  onDark,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
  onDark: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <article
      className={
        onDark
          ? 'rounded-2xl bg-white p-6 text-lala-900 ring-1 ring-white/25'
          : 'rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-6 text-white shadow-sm'
      }
    >
      <p
        className={`text-2xl font-extrabold tracking-tight tabular-nums md:text-3xl ${
          onDark ? 'text-lala-900' : ''
        }`}
      >
        {n.toLocaleString('ko-KR')}
        <span className={`ml-1 text-sm font-semibold ${onDark ? 'text-lala-600' : 'text-lala-100'}`}>
          {suffix}
        </span>
      </p>
      <p className={`mt-2 text-sm leading-relaxed ${onDark ? 'text-slate-600' : 'text-lala-50'}`}>
        {label}
      </p>
    </article>
  )
}

export function ImpactSummary({
  compact = false,
  onDark = false,
}: {
  compact?: boolean
  /** 다크 섹션 위 — 카드 대비를 높인다 (패널 B) */
  onDark?: boolean
}) {
  const items = compact ? IMPACT.slice(1) : IMPACT
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true)
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`grid gap-3 ${compact ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}
    >
      {items.map((item) => (
        <ImpactStat
          key={item.label}
          value={item.value}
          suffix={item.suffix}
          label={item.label}
          active={active}
          onDark={onDark}
        />
      ))}
    </div>
  )
}

export function NativeTimeline() {
  return (
    <ol className="relative space-y-0 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-lala-200 md:before:left-32">
      {HISTORY.map(([year, text], index) => (
        <li key={year} className="relative grid gap-2 py-5 pl-14 md:grid-cols-[8rem_1fr] md:pl-0">
          <span className="absolute left-2 top-7 z-10 h-6 w-6 rounded-full border-4 border-white bg-lala-500 ring-1 ring-lala-200 md:left-[7.28rem]" />
          <p className="text-lg font-extrabold text-lala-700">{year}</p>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 md:ml-8">
            <p className="text-sm leading-relaxed text-slate-700">{text}</p>
            {index === HISTORY.length - 1 && (
              <span className="mt-3 inline-flex rounded-full bg-lala-100 px-3 py-1 text-xs font-bold text-lala-800">
                현재
              </span>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function EnvironmentalComparison() {
  const highlights = ENV_SCENARIO.items.slice(2)

  return (
    <div>
      <div className="rounded-3xl bg-[#0b1f2e] p-6 text-white md:p-8">
        <p className="text-sm font-semibold text-lala-200">1인당 연간 온실가스 배출량 비교</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {ENV_SCENARIO.items.slice(0, 2).map((item) => (
            <div key={item.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs text-lala-200">{item.label}</p>
              <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 space-y-5">
          <div>
            <div className="mb-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span>일회용컵</span>
              <strong>10.2kgCO₂e · 100%</strong>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-slate-300" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span>라라워시 다회용컵</span>
              <strong className="text-lala-200">2.0kgCO₂e · 19.6%</strong>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[19.6%] rounded-full bg-lala-300" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-300">
          개당 100회 사용 후 폐기를 기준으로 한 회사소개서의 시나리오입니다.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.label} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-xs font-bold text-lala-600">{item.label}</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export function HowToFlow() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {HOW_TO.map((item, index) => {
        const Icon = howToIcons[index]
        return (
          <li key={item.step} className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lala-600 text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-extrabold tracking-wider text-lala-500">STEP {item.step}</span>
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
          </li>
        )
      })}
    </ol>
  )
}

const cupCycle = [
  { title: '비치', desc: '현장 규모에 맞춰 컵과 반납함을 비치합니다.', icon: PackageCheck },
  { title: '사용·반납', desc: '사용한 컵은 가까운 라라워시 반납함에 넣습니다.', icon: Utensils },
  { title: '수거', desc: '지역 거점이 반납된 컵을 직접 수거합니다.', icon: Truck },
  { title: '세척·검수', desc: '6단계 세척과 위생검사를 진행합니다.', icon: Sparkles },
  { title: '재공급', desc: '깨끗해진 컵을 현장에 다시 공급합니다.', icon: Recycle },
]

export function CupCirculation() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cupCycle.map((item, index) => (
        <li key={item.title} className="relative rounded-2xl bg-white p-5 text-center ring-1 ring-slate-200">
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-lala-100 text-lala-700">
            <item.icon className="h-6 w-6" aria-hidden />
          </span>
          <p className="mt-4 text-xs font-bold text-lala-500">0{index + 1}</p>
          <h3 className="mt-1 font-extrabold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
        </li>
      ))}
    </ol>
  )
}
