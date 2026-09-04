import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SpecCardGrid, SpecQuoteCta } from '../components/SpecCatalog'
import { IMAGES } from '../data'
import { KIDS_VESSEL_SPECS } from '../data/vesselSpecs'

export default function KidsSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 유아식판"
        title="유아식판 사양"
        desc="현재 사용 중인 유아·간식 식판의 품명·규격·재질입니다."
        image={IMAGES.kidsTrayIllustration}
      />

      <Section title="라라워시 유아식판">
        <SpecCardGrid items={KIDS_VESSEL_SPECS} />
        <Link to="/services/kids-tray" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700">
          <ArrowLeft className="h-4 w-4" /> 유아식판 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적문의" className="bg-slate-50">
        <SpecQuoteCta
          title="유아식판 견적 문의"
          desc="원아 수·결제 방식·도입 희망일을 알려주시면 맞춰 안내드립니다."
        />
      </Section>
    </>
  )
}
