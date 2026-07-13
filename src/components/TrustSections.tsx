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
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">해마다 이렇게 커졌습니다</h2>
        <p className={`mt-4 max-w-2xl text-sm md:text-base ${dark ? 'text-slate-300' : 'text-muted'}`}>
          축제·행사 건수, 사용량, 사업장, 일자리를 한눈에 보실 수 있습니다.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                <div className="flex justify-between gap-2">
                  <dt className="opacity-70">사용·순환량</dt>
                  <dd className="font-semibold">{y.containers.toLocaleString('ko-KR')}개</dd>
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

export function PartnerLogoWall() {
  return (
    <section className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold text-lala-600">함께하는 곳</p>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">믿고 맡겨 주신 기관·현장</h2>
        <p className="mt-4 max-w-2xl text-muted">
          지자체·공공기관부터 축제·의료 현장까지, 가까운 세척망으로 함께하고 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((p) =>
            p.logo ? (
              <a
                key={p.name}
                href={p.href ?? '#'}
                target={p.href ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-24 items-center justify-center rounded-xl bg-white px-4 ring-1 ring-slate-200 transition hover:ring-lala-300"
              >
                <img src={p.logo} alt={p.name} className="max-h-12 w-auto max-w-full object-contain" />
              </a>
            ) : (
              <div
                key={p.name}
                className="flex h-24 items-center justify-center rounded-xl bg-slate-50 px-3 text-center text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
              >
                {p.name}
              </div>
            ),
          )}
        </div>

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
