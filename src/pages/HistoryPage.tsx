import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { EnvironmentalComparison, ImpactSummary, NativeTimeline } from '../components/NativeVisuals'
import { FieldProofSection, YearlyImpactSection } from '../components/TrustSections'
import { ENV_SCENARIO } from '../data'

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="라라워시 · 연혁 및 성과"
        title="라라워시가 만든 지속가능한 변화"
      />

      <Section title="연혁">
        <NativeTimeline />
      </Section>

      <Section title="한눈에 보는 성과" className="bg-slate-50">
        <ImpactSummary />
      </Section>

      <YearlyImpactSection />

      <Section title="라라워시 다회용컵 사용에 따른 환경적 효과" desc={ENV_SCENARIO.title}>
        <EnvironmentalComparison />
        <p className="mt-6 text-xs text-slate-400">{ENV_SCENARIO.footnote}</p>
      </Section>

      <FieldProofSection />

      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <Link to="/about/cert" className="text-sm font-bold text-lala-600">
            인증·위생관리 보기 →
          </Link>
          <Link to="/contact" className="text-sm font-bold text-lala-600">
            견적 문의하기 →
          </Link>
        </div>
      </section>
    </>
  )
}
