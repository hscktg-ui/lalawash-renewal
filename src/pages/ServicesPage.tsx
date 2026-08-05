import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { HYGIENE_CHECKS, IMAGES, SOLUTIONS, WASH_GALLERY, WASH_STEPS } from '../data'

export default function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }
  }, [location.hash])

  return (
    <>
      <PageHero
        eyebrow="다회용기서비스"
        title="축제, 장례식장, 오피스 등 어디서나 쓰레기 Zero"
        desc="수거부터 완벽한 세척까지 알아서 해결하는 지속가능한 다회용기 솔루션. 환경 오염 고민 없는 깨끗한 행사를 위해, 라라워시의 맞춤형 서비스를 지금 선택하세요."
        image={IMAGES.sikpanMachine}
      />

      <Section
        title="라라워시 다회용기 서비스"
        desc="장례식장, 행사장, 학교, 유치원, 공공기관 등 장소와 상황에 맞는 다회용기를 이용해보세요."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                  자세히 보기 <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="wash"
        title="라라워시 다회용기 세척프로세스"
        desc="전 지점 6단계 안심 세척 프로세스를 통해 “깨끗함”을 제공해드립니다."
        className="bg-slate-50 scroll-mt-24"
      >
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {WASH_GALLERY.map((g) => (
            <figure key={g.title} className="text-center">
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                decoding="async"
                className="mx-auto aspect-square w-full max-w-[220px] rounded-full object-cover ring-4 ring-white"
              />
              <figcaption className="mt-3 text-sm font-bold text-ink">{g.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WASH_STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">STEP {i + 1}</p>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="hygiene"
        title="라라워시 위생관리"
        desc="식약처 위생지침에 근거한 3대검사(ATP·잔류세제·온도라벨)를 매일 실시하여 ‘한 번 더 철저한 위생’을 검증합니다."
        className="scroll-mt-24"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((h) => (
            <article key={h.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="font-bold text-ink">{h.title}</h3>
              <p className="mt-2 text-sm text-muted">{h.desc}</p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-lala-700">상세내용</span>
                <br />
                {h.detail}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          정기적인 공인기관 검사와 매일 수치화된 데이터 관리로 세척 품질을 확인하고,
          기준을 통과한 다회용기만 공급합니다.
        </p>
        <Link to="/about/cert" className="mt-4 inline-flex text-sm font-bold text-lala-600">
          인증획득 및 위생관리 자세히 보기 →
        </Link>
      </Section>
    </>
  )
}
