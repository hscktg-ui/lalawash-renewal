import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Pause, Play } from 'lucide-react'
import {
  BRAND,
  FIELD_ACTIVITIES,
  HOME_TRUST_LINKS,
  IMAGES,
  IMPACT,
  SOLUTIONS,
} from '../data'
import { EXTERNAL } from '../lib/content'
import { ImpactSummary } from '../components/NativeVisuals'
import { PhotoGallery } from '../components/PhotoGallery'
import { PartnerMarquee } from '../components/TrustSections'

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return n
}

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

/** PDF: 유형별 다회용기 이용사례 롤링 */
const HERO_CASES = SOLUTIONS.map((s) => ({
  slug: s.slug,
  title: s.title,
  short: s.short,
  image: s.image,
}))

export default function HomePage() {
  const [impactOn, setImpactOn] = useState(false)
  const [caseIdx, setCaseIdx] = useState(0)
  const [casePaused, setCasePaused] = useState(false)
  const impactRef = useRef<HTMLDivElement>(null)
  const washCount = useCountUp(IMPACT[0].value, impactOn)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = impactRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setImpactOn(true), {
      threshold: 0.2,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion || casePaused) return
    const id = window.setInterval(() => {
      setCaseIdx((i) => (i + 1) % HERO_CASES.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [casePaused, reducedMotion])

  const activeCase = HERO_CASES[caseIdx]
  const heroVideoSrc =
    `https://www.youtube-nocookie.com/embed/${EXTERNAL.caseVideoId}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${EXTERNAL.caseVideoId}` +
    `&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`

  return (
    <>
      {/* 메인 상단 — 영상 배경 + 유형별 이용사례 롤링 */}
      <section className="relative min-h-[92svh] overflow-hidden text-white">
        {reducedMotion ? (
          <img
            src={IMAGES.hero}
            alt="라라워시 다회용기 현장"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <img
              src={IMAGES.hero}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <iframe
                title="라라워시 다회용기 이용사례"
                src={heroVideoSrc}
                className="absolute left-1/2 top-1/2 aspect-video h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,46,0.5)_0%,rgba(11,31,46,0.22)_38%,rgba(11,31,46,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(15,45,69,0.4)_0%,transparent_58%)]" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end gap-10 px-5 pb-12 pt-28 md:justify-center md:pb-16">
          <div className="max-w-3xl">
            <p className="lala-fade-up text-sm font-semibold tracking-[0.14em] text-lala-200">
              {BRAND.slogan}
            </p>
            <h1 className="lala-fade-up mt-4 max-w-[16em] text-balance break-keep text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {BRAND.heroTitle}
            </h1>
            <p className="lala-fade-up-delay mt-5 max-w-2xl text-pretty break-keep text-lg font-medium text-lala-50 md:text-xl">
              {BRAND.heroLead}
            </p>
            <p className="lala-fade-up-delay mt-3 max-w-2xl text-pretty break-keep text-base leading-relaxed text-lala-50/90 md:text-lg">
              {BRAND.heroBridge}
            </p>
            <p className="lala-fade-up-delay mt-2 max-w-2xl text-pretty break-keep text-base leading-relaxed text-lala-50/90 md:text-lg">
              {BRAND.heroDesc}
            </p>
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

          {/* 유형별 이용사례 롤링 배너 */}
          <div className="lala-fade-up-delay">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold tracking-[0.14em] text-lala-200 uppercase">
                유형별 다회용기 이용사례
              </p>
              <div className="flex items-center gap-3">
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={() => setCasePaused((paused) => !paused)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-lala-100 hover:text-white"
                    aria-pressed={casePaused}
                  >
                    {casePaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                    {casePaused ? '자동재생' : '일시정지'}
                  </button>
                )}
                <a
                  href={EXTERNAL.caseVideo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-lala-100 underline underline-offset-2 hover:text-white"
                >
                  영상 크게 보기
                </a>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <Link
                to={`/services/${activeCase.slug}`}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-white/25"
              >
                <img
                  src={activeCase.image}
                  alt=""
                  className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lala-900/90 via-lala-900/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-bold text-lala-200">
                    0{caseIdx + 1} / 0{HERO_CASES.length}
                  </p>
                  <p className="mt-1 text-lg font-extrabold md:text-xl">{activeCase.title}</p>
                  <p className="mt-1 text-sm text-lala-50/90">{activeCase.short}</p>
                </div>
              </Link>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                {HERO_CASES.map((c, i) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setCaseIdx(i)}
                    aria-pressed={i === caseIdx}
                    className={`rounded-xl px-3 py-3 text-left text-xs font-semibold transition ring-1 ${
                      i === caseIdx
                        ? 'bg-white text-lala-900 ring-white'
                        : 'bg-white/10 text-lala-50 ring-white/15 hover:bg-white/15'
                    }`}
                  >
                    {c.title.replace(' 대여 및 세척', '').replace(' 대여', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 중상단 — 세척량 + 파트너 */}
      <section className="bg-[#0b1f2e] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <div ref={impactRef} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-lala-300">하루 1번의 선택이, 100년의 변화를 만듭니다</p>
              <p className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl">
                {washCount.toLocaleString('ko-KR')}
                <span className="ml-2 text-2xl font-bold text-lala-300">개</span>
              </p>
              <p className="mt-2 text-lg font-semibold text-lala-100">라라워시가 세척한 다회용기 연간</p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                무심코 버린 일회용기가 쌓이며, 탄소는 대기를 뜨겁게 만들고 산림이 사라집니다.
                라라워시와 함께 오늘부터 다회용기로 바꿔보세요.
              </p>
              <Link
                to="/notice"
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-lala-200 hover:text-white"
              >
                다회용기 서비스 이용사례 · 소식 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs font-semibold tracking-wider text-lala-300 uppercase">
                라라워시와 함께하는 기관
              </p>
              <PartnerMarquee dark className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* PDF 현장 활동 이미지 */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">현장 이용사례</p>
          <h2 className="mt-3 max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            경기도에서 친환경 활동을 실천하는 라라워시
          </h2>
          <PhotoGallery items={FIELD_ACTIVITIES} className="mt-10" />
          <div className="mt-12">
            <p className="mb-4 text-sm font-semibold text-lala-700">수치로 확인하는 자원순환 성과</p>
            <ImpactSummary compact />
            <p className="mt-3 text-xs text-slate-400">※ 라라워시 회사소개서 기준</p>
          </div>
        </div>
      </section>

      {/* 메인 중단 — 위생·인증 (PDF 문구) */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">안심 위생</p>
          <h2 className="mt-3 max-w-3xl text-balance break-keep text-3xl font-extrabold tracking-tight md:text-4xl">
            초순수(UPW) 6단계 위생 세척으로 지속가능한 깨끗함을 전합니다
          </h2>
          <p className="mt-4 max-w-2xl text-pretty break-keep leading-relaxed text-muted">
            라라워시만의 깐깐한 위생 기준과 세척시스템으로 우리 아이 식판부터 축제에서 사용하는
            다회용기까지 언제나 새것처럼 안심하고 사용할 수 있습니다.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_TRUST_LINKS.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group flex flex-col border-t-2 border-lala-600 bg-slate-50 p-6 transition hover:bg-lala-50"
              >
                <h3 className="text-base font-bold leading-snug text-ink md:text-lg">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{card.desc}</p>
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
            수거부터 완벽한 세척까지 알아서 해결하는 지속가능한 다회용기 솔루션.
            환경 오염 고민 없는 깨끗한 행사를 위해, 라라워시의 맞춤형 서비스를 지금 선택하세요.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-bold text-lala-500">0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
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
