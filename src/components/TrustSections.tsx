import {
  IMPACT_FORMULA,
  PARTNERS,
  PORTFOLIO_POLICY,
  TRUST_BADGES,
  VERIFIED_ACHIEVEMENTS,
  YEARLY_IMPACT,
} from '../data'
import { CompanyProfileDownload } from './CompanyProfileDownload'

export function YearlyImpactSection({ dark = false }: { dark?: boolean }) {
  const maxEvents = Math.max(...YEARLY_IMPACT.map((y) => y.events))
  return (
    <section className={`px-5 py-20 md:py-28 ${dark ? 'bg-[#0b1f2e] text-white' : 'bg-white'}`}>
      <div className="mx-auto max-w-6xl">
        <p className={`text-sm font-semibold ${dark ? 'text-lala-300' : 'text-lala-600'}`}>연도별 성장</p>
        <h2 className="mt-3 text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
          해마다 이렇게 커졌습니다
        </h2>
        <p className={`mt-4 max-w-2xl text-pretty break-keep text-sm md:text-base ${dark ? 'text-slate-300' : 'text-muted'}`}>
          축제·행사 건수, 사용량, 사업장, 일자리를 한눈에 보실 수 있습니다.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {YEARLY_IMPACT.map((y) => (
            <article
              key={y.year}
              className={`rounded-2xl p-6 ${
                y.highlight
                  ? 'bg-lala-600 text-white'
                  : dark
                    ? 'bg-white/5 ring-1 ring-white/10'
                    : 'bg-slate-50 ring-1 ring-slate-200'
              }`}
            >
              <p className={`text-sm font-bold ${y.highlight ? 'text-lala-100' : dark ? 'text-lala-300' : 'text-lala-600'}`}>
                {y.year}년
              </p>
              <p className="mt-4 text-3xl font-extrabold">{y.events}건</p>
              <p className={`text-xs ${y.highlight ? 'text-lala-100' : 'opacity-70'}`}>축제·행사</p>
              <div
                className={`mt-3 h-1.5 overflow-hidden rounded-full ${y.highlight ? 'bg-white/20' : dark ? 'bg-white/10' : 'bg-slate-200'}`}
              >
                <div
                  className={`h-full rounded-full ${y.highlight ? 'bg-white' : 'bg-lala-500'}`}
                  style={{ width: `${(y.events / maxEvents) * 100}%` }}
                />
              </div>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="opacity-70">사용·순환량</dt>
                  <dd className="break-all font-semibold tabular-nums">{y.containers.toLocaleString('ko-KR')}개</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="opacity-70">사업장</dt>
                  <dd className="font-semibold">{y.branches}곳</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="opacity-70">일자리</dt>
                  <dd className="font-semibold">{y.jobs}명</dd>
                </div>
              </dl>
              <p className={`mt-4 text-xs leading-relaxed ${y.highlight ? 'text-lala-100' : 'opacity-60'}`}>{y.note}</p>
            </article>
          ))}
        </div>

        <div className={`mt-10 rounded-2xl p-6 ${dark ? 'bg-white/5' : 'bg-lala-50'}`}>
          <p className={`text-sm font-bold ${dark ? 'text-lala-200' : 'text-lala-800'}`}>숫자는 이렇게 이해하시면 됩니다</p>
          <ul className={`mt-3 grid gap-2 text-sm md:grid-cols-2 ${dark ? 'text-slate-300' : 'text-muted'}`}>
            {IMPACT_FORMULA.map((f) => (
              <li key={f}>· {f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function PortfolioGallery() {
  if (!PORTFOLIO_POLICY.showVerifiedMetrics) return null

  return (
    <section className="bg-slate-50 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-lala-600">현장 실적</p>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">이미 함께하고 있는 곳들</h2>
        <p className="mt-4 max-w-2xl text-muted">{PORTFOLIO_POLICY.note}</p>
        <div className="mt-5">
          <CompanyProfileDownload variant="secondary" label="소개 자료 받기" />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VERIFIED_ACHIEVEMENTS.map((p) => (
            <article
              key={`${p.category}-${p.title}`}
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200"
            >
              <p className="text-[11px] font-bold tracking-wide text-lala-600">{p.category}</p>
              <h3 className="mt-2 text-base font-bold text-ink">{p.title}</h3>
              <p className="mt-3 text-lg font-extrabold text-lala-700">{p.metric}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/** PDF: 라라워시와 함께하는 기관 롤링 배너 */
export function PartnerMarquee({
  dark = false,
  className = '',
}: {
  dark?: boolean
  className?: string
}) {
  const row = [...PARTNERS, ...PARTNERS]
  return (
    <div className={`overflow-hidden ${className}`} aria-label="함께하는 기관">
      <div className="lala-marquee-track gap-3 py-1">
        {row.map((p, i) => {
          const cellClass = dark
            ? 'inline-flex shrink-0 items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-lala-50 ring-1 ring-white/15'
            : 'inline-flex shrink-0 items-center rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200'
          const key = `${p.name}-${i}`
          if (p.href) {
            return (
              <a
                key={key}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`${cellClass} transition hover:ring-lala-400`}
              >
                {p.name}
              </a>
            )
          }
          return (
            <span key={key} className={cellClass}>
              {p.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export function PartnerLogoWall() {
  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-lala-600">함께하는 곳</p>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">믿고 맡겨 주신 기관·현장</h2>
        <p className="mt-4 max-w-2xl text-muted">
          지자체·공공기관부터 축제·의료 현장까지, 가까운 세척망으로 함께하고 있습니다.
        </p>

        <PartnerMarquee className="mt-8" />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((b) => (
            <div key={b.title} className="rounded-2xl border border-lala-100 bg-lala-50/60 px-5 py-4">
              <p className="font-bold text-lala-800">{b.title}</p>
              <p className="mt-1 text-sm text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
