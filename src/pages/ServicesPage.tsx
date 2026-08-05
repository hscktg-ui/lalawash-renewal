import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { HYGIENE_CHECKS, IMAGES, SOLUTIONS, WASH_STEPS } from '../data'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스"
        title="축제, 장례식장, 오피스 등 어디서나 쓰레기 Zero"
        desc="수거부터 완벽한 세척까지 알아서 해결하는 지속가능한 다회용기 솔루션입니다. 장소와 상황에 맞는 서비스를 선택해 보세요."
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
        title="라라워시 다회용기 세척 프로세스"
        desc="전 지점에서 동일한 초순수(UPW) 6단계 세척 기준을 적용합니다."
        className="bg-slate-50 scroll-mt-24"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WASH_STEPS.map((s, i) => (
            <li key={s.title} className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">STEP {i + 1}</p>
              <p className="break-keep font-bold">{s.title}</p>
            </li>
          ))}
        </ol>
        <Link to="/about/cert#wash" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
          세척 설비와 단계별 설명 보기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section
        id="hygiene"
        title="라라워시 위생관리"
        desc="식약처 위생지침에 근거한 ATP·잔류세제·온도라벨 검사를 매일 실시합니다."
        className="scroll-mt-24"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((h) => (
            <article key={h.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="font-bold text-ink">{h.title}</h3>
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{h.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          정기적인 공인기관 검사와 매일 수치화된 데이터 관리로 세척 품질을 확인하고,
          기준을 통과한 다회용기만 공급합니다.
        </p>
        <Link to="/about/cert#hygiene" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
          검사 방법과 인증 자세히 보기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  )
}
