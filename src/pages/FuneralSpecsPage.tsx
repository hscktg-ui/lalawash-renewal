import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import {
  FUNERAL_SPEC_ITEMS,
  FUNERAL_SPEC_NOTES,
  FUNERAL_WASH_STEPS,
  FUNERAL_HYGIENE,
  IMAGES,
} from '../data'

export default function FuneralSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 장례식장"
        title="라라워시 다회용 장례용기 세부사양"
        desc="장례식장 운영 환경에 적합한 전용 다회용기로 안전성과 위생성을 모두 고려한 식기 시스템을 제공합니다."
        image={IMAGES.funeralSetTable}
      />

      <Section
        title="장례식장 운영에 최적화된 라라워시 다회용 장례용기"
        desc="1인 기준 제공 구성입니다. 현장 규모와 빈소 운영 방식에 맞춰 수량·구성을 협의할 수 있습니다."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.funeralSetTable}
            alt="라라워시 장례용 다회용기 1인 세팅"
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-lala-600">1인 기준 제공 구성</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {FUNERAL_SPEC_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-lala-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-muted ring-1 ring-slate-200">
              {FUNERAL_SPEC_NOTES.map((n) => (
                <p key={n}>· {n}</p>
              ))}
            </div>
            <Link
              to="/services/funeral"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lala-700"
            >
              <ArrowLeft className="h-4 w-4" /> 장례식장 서비스로 돌아가기
            </Link>
          </div>
        </div>
      </Section>

      <Section title="6단계 안심 세척 프로세스" className="bg-slate-50" desc="위생을 최우선으로 하는 전문세척 시스템으로 깨끗함을 제공합니다.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNERAL_WASH_STEPS.map((step) => (
            <article key={step.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{step.step}</p>
              <p className="mt-2 font-bold text-ink">{step.title}</p>
              <p className="mt-2 text-sm text-muted">{step.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="위생 관리 시스템" desc="식약처 다회용기 위생가이드와 국내·외 위생 기준을 기반으로 안전한 다회용기 서비스를 제공합니다.">
        <div className="grid gap-5 md:grid-cols-3">
          {FUNERAL_HYGIENE.map((block) => (
            <article key={block.title} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-6">
              <h3 className="font-bold text-ink">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{block.desc}</p>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="견적 문의">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">장례용기 구입·세척 비용 문의</p>
            <p className="mt-2 text-sm text-lala-100">빈소 수·예상 조문객·운영 일정을 알려주시면 맞춰 안내드립니다.</p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
          >
            견적·상담 문의
          </Link>
        </div>
      </Section>
    </>
  )
}
