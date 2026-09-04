import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SpecCardGrid, SpecQuoteCta } from '../components/SpecCatalog'
import { FUNERAL_OPS_GUIDE, FUNERAL_SPEC_ITEMS, FUNERAL_SPEC_NOTES, IMAGES } from '../data'
import { FUNERAL_VESSEL_SPECS } from '../data/vesselSpecs'

export default function FuneralSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 장례식장"
        title="라라워시 다회용 장례용기 세부사양"
        desc="장례식장 운영 환경에 적합한 전용 다회용기로, 안전성과 위생성을 고려한 식기 시스템을 제공합니다."
        image={IMAGES.funeralSetTable}
      />

      <Section
        title="1인 기준 제공 구성"
        desc="기본 10인 단위로 포장해 드립니다. 현장 규모와 빈소 운영 방식에 맞춰 수량·구성을 협의할 수 있습니다."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FUNERAL_SPEC_ITEMS.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-ink ring-1 ring-slate-200">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-1 text-sm leading-relaxed text-muted">
          {FUNERAL_SPEC_NOTES.map((n) => (
            <p key={n}>· {n}</p>
          ))}
        </div>
      </Section>

      <Section title="운영 안내" className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-3">
          {FUNERAL_OPS_GUIDE.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <h3 className="font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="용기 사양" desc="품명·규격·재질만 안내합니다.">
        <SpecCardGrid items={FUNERAL_VESSEL_SPECS} />
        <Link to="/services/funeral" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700">
          <ArrowLeft className="h-4 w-4" /> 장례식장 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적문의">
        <SpecQuoteCta
          title="장례용기 구입·세척 비용 문의"
          desc="빈소 수·예상 조문객·운영 일정을 알려주시면 맞춰 안내드립니다."
        />
      </Section>
    </>
  )
}
