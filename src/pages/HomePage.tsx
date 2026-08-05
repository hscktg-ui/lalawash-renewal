import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  BRAND,
  HOME_TRUST_LINKS,
  IMAGES,
  IMPACT,
  SOLUTIONS,
} from '../data'
import { EXTERNAL } from '../lib/content'
import { PartnerLogoWall, PartnerMarquee } from '../components/TrustSections'

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

const HERO_ROLLING = [
  '장례식장 · 빈소 다회용기 순환 현장',
  '축제·행사 · 반납부스 운영 사례',
  '학교·기업 식판 세척 운영',
  '공공기관·카페 다회용컵 순환',
  '유아식판 · 안심 세척 케어',
]

export default function HomePage() {
  const [impactOn, setImpactOn] = useState(false)
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

  const heroVideoSrc =
    `https://www.youtube-nocookie.com/embed/${EXTERNAL.caseVideoId}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${EXTERNAL.caseVideoId}` +
    `&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`

  return (
    <>
      {/* 메인 상단 — PDF: 히어로에서 이용사례 영상 재생 */}
      <section className="relative min-h-[88svh] overflow-hidden text-white">
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
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,45,69,0.88)_0%,rgba(30,122,173,0.45)_55%,rgba(15,45,69,0.55)_100%)]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:pb-24">
          <p className="lala-fade-up text-sm font-semibold tracking-[0.14em] text-lala-200">
            {BRAND.slogan}
          </p>
          <h1 className="lala-fade-up mt-4 max-w-4xl whitespace-pre-line text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {BRAND.heroTitle}
          </h1>
          <p className="lala-fade-up-delay mt-5 max-w-2xl text-lg font-medium text-lala-50 md:text-xl">
            {BRAND.heroLead}
          </p>
          <p className="lala-fade-up-delay mt-3 max-w-2xl text-base leading-relaxed text-lala-50/90 md:text-lg">
            {BRAND.heroDesc}
          </p>
          <div className="lala-fade-up-delay relative mt-6 h-8 overflow-hidden md:h-9">
            {HERO_ROLLING.map((line) => (
              <p key={line} className="lala-benefit-line text-sm font-medium text-lala-100 md:text-base">
                {line}
              </p>
            ))}
          </div>
          <div className="lala-fade-up-delay mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-lala-900"
            >
              다회용기 서비스 소개 <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={EXTERNAL.caseVideo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white"
            >
              이용사례 영상 보기
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white"
            >
              서비스 신청하기
            </Link>
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
              <p className="text-xs font-semibold tracking-wider text-lala-300 uppercase">함께하는 기관</p>
              <PartnerMarquee dark className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      <PartnerLogoWall />

      {/* 메인 중단 — 위생·인증 */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">안심 위생</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
            라라워시는 초순수물을 사용한 6단계 위생세척프로세스로
            <br className="hidden md:block" />
            지속가능한 깨끗함을 전달해드립니다.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
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
                <h3 className="text-lg font-bold text-ink">{card.title}</h3>
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
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
            축제, 장례식장, 오피스 등 어디서나 쓰레기 Zero
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
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
                <img src={s.image} alt="" className="h-40 w-full object-cover" />
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
        <img src={IMAGES.about} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-lala-900/85" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            지금 라라워시와 함께
            <br />
            지속 가능한 변화를 시작하세요
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-lala-900"
          >
            다회용기서비스 신청하기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
