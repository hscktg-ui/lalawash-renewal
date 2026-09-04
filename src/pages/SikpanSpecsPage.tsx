import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SpecCardGrid, SpecQuoteCta } from '../components/SpecCatalog'
import { SIKPAN_HYGIENE, IMAGES } from '../data'
import { SIKPAN_VESSEL_SPECS } from '../data/vesselSpecs'

export default function SikpanSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 식판"
        title="식판 세부사양"
        desc="현재 사용 중인 식판의 품명·규격·재질입니다."
        image={IMAGES.sikpanMachine}
      />

      <Section title="식판 사양">
        <SpecCardGrid items={SIKPAN_VESSEL_SPECS} />
      </Section>

      <Section title={SIKPAN_HYGIENE.title} desc={SIKPAN_HYGIENE.desc} className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-3">
          {SIKPAN_HYGIENE.items.map((item) => (
            <article key={item.title} className="rounded-2xl border-t-2 border-lala-600 bg-white p-6">
              <h3 className="font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-lg font-extrabold text-lala-700">{item.standard}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </article>
          ))}
        </div>
        <Link to="/services/sikpan" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700">
          <ArrowLeft className="h-4 w-4" /> 식판 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적문의">
        <SpecQuoteCta
          title="식판 대여·세척 견적 문의"
          desc="식판 수량·수거·공급 일정을 알려주시면 맞춰 안내드립니다."
        />
      </Section>
    </>
  )
}
