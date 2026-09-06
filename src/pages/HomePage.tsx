import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BRAND, HOME_TRUST_LINKS, IMAGES, PUBLIC_PROOF, SOLUTIONS } from '../data'
import { ImpactSummary } from '../components/NativeVisuals'
import { ActivityMarquee, PartnerMarquee, YearlyImpactSection } from '../components/TrustSections'

export default function HomePage() {
  return (
    <>
      {/* 메인 상단 — 26.08.07: 타이틀 최대 · 본문 4줄 동일 크기 · 영상 삭제 */}
      <section className="relative min-h-[78svh] overflow-hidden text-white md:min-h-[84svh]">
        <img
          src={IMAGES.hero}
          alt="다회용기에 담긴 식사 현장"
          className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,46,0.48)_0%,rgba(11,31,46,0.38)_42%,rgba(11,31,46,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,46,0.58)_0%,rgba(11,31,46,0.22)_46%,transparent_72%)]" />

        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:min-h-[84svh] md:justify-center md:pb-20">
          <div className="max-w-3xl">
            <h1 className="lala-fade-up max-w-[14em] text-balance break-keep text-4xl font-extrabold leading-tight tracking-tight [text-shadow:0_2px_18px_rgba(11,31,46,0.55)] md:text-6xl lg:text-7xl">
              {BRAND.heroTitle}
            </h1>
            <div className="lala-fade-up-delay mt-6 max-w-2xl space-y-1.5 text-pretty break-keep text-base leading-relaxed text-lala-50 [text-shadow:0_1px_10px_rgba(11,31,46,0.45)] md:text-lg">
              {BRAND.heroLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="lala-fade-up-delay mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-lala-900"
              >
                다회용기 서비스 소개 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white"
              >
                견적·상담 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 중상단 — 카피 + 4칸 자원순환 성과 */}
      <section className="border-t border-white/10 bg-[#0b1f2e] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {BRAND.impactHeadline}
          </h2>
          <div className="mt-5 max-w-2xl space-y-1 text-pretty break-keep text-base leading-relaxed text-slate-300 md:text-lg">
            {BRAND.impactLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-12">
            <p className="mb-5 text-sm font-semibold tracking-wide text-lala-300">
              라라워시 다회용기 자원순환 성과
            </p>
            <ImpactSummary onDark />
            <p className="mt-3 text-xs text-slate-400">
              ※ 연혁 및 성과 · 회사소개서 기준 ·{' '}
              <Link to="/about/history" className="underline underline-offset-2 hover:text-lala-200">
                연혁·성과 자세히
              </Link>
            </p>
          </div>
        </div>
      </section>

      <YearlyImpactSection dark />

      {/* 현장 이용사례 롤링 + 기관 롤링 */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">현장 이용사례</p>
          <h2 className="mt-3 max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            경기도에서 친환경 활동을 실천하는 라라워시
          </h2>
          <ActivityMarquee className="mt-8" />
          <p className="mt-3 text-xs text-slate-400">
            ※ 현장 사진·캡션은 추가 전달 후 교체 예정입니다.
          </p>
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <p className="text-sm font-semibold text-lala-600">라라워시와 함께하는 기관</p>
              <Link to="/notice" className="text-sm font-semibold text-lala-700 hover:text-lala-600">
                소식 더보기 →
              </Link>
            </div>
            <PartnerMarquee className="mt-4" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PUBLIC_PROOF.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-lala-100 bg-lala-50/50 px-5 py-4"
                >
                  <p className="text-xs font-semibold tracking-wide text-lala-600">{item.label}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 메인 중단 — 위생·인증 */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            초순수(UPW) 6단계 위생 세척으로 지속가능한 깨끗함을 전합니다
          </h2>
          <p className="mt-4 max-w-2xl text-pretty break-keep leading-relaxed text-muted">
            라라워시만의 깐깐한 위생 기준과 세척시스템으로 우리 아이 식판부터 축제에서 사용하는
            다회용기까지
            <br className="hidden sm:block" />
            언제나 새것처럼 안심하고 사용할 수 있습니다.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_TRUST_LINKS.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group flex flex-col border-t-2 border-lala-600 bg-slate-50 p-6 transition hover:bg-lala-50"
              >
                <h3 className="text-base font-bold leading-snug text-ink md:text-lg">{card.title}</h3>
                {'lines' in card && card.lines ? (
                  <ul className="mt-2 flex-1 space-y-1 text-sm text-muted">
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 flex-1 text-sm text-muted">{card.desc}</p>
                )}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-lala-600 group-hover:gap-2">
                  {card.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 메인 중하단 — 서비스 6유형 */}
      <section className="bg-slate-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">다회용기 솔루션</p>
          <h2 className="mt-3 max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            축제, 장례식장, 오피스 등 어디서나 쓰레기 Zero
          </h2>
          <p className="mt-4 max-w-2xl text-pretty break-keep leading-relaxed text-muted">
            수거부터 완벽한 세척까지 알아서 해결하는 지속가능한 다회용기 솔루션
            <br />
            환경 오염 고민 없는 깨끗한 행사를 위해, 라라워시의 맞춤형 서비스를 지금 선택하세요
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                    안내 보기 <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 메인 하단 CTA */}
      <section className="relative overflow-hidden px-5 py-20 text-white">
        <img
          src={IMAGES.about}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-lala-900/80" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            지금 라라워시와 함께 지속 가능한 변화를 시작하세요
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-lala-900"
          >
            견적·상담 문의 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
