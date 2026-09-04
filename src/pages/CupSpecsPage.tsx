import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SpecCardGrid, SpecQuoteCta } from '../components/SpecCatalog'
import { IMAGES } from '../data'
import { CUP_VESSEL_SPECS } from '../data/vesselSpecs'

export default function CupSpecsPage() {
  const office = CUP_VESSEL_SPECS.filter((p) => p.group === '오피스컵')
  const cafe = CUP_VESSEL_SPECS.filter((p) => p.group === '카페컵')

  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 다회용컵"
        title="다회용컵 전체 보기"
        desc="오피스컵·카페컵의 용량·재질입니다. 반납함은 제작 예정입니다."
        image={IMAGES.reusableCups}
      />

      <Section title="오피스컵" desc="오피스컵은 리드가 없습니다.">
        <SpecCardGrid items={office} />
      </Section>

      <Section title="카페컵" className="bg-slate-50">
        <SpecCardGrid items={cafe} />
        <p className="mt-6 text-sm text-muted">다회용컵 반납함은 제작 예정입니다.</p>
        <Link to="/services/cup" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700">
          <ArrowLeft className="h-4 w-4" /> 다회용컵 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적문의">
        <SpecQuoteCta title="다회용컵 견적 문의" desc="사용 장소·수량·기간을 알려주시면 맞춰 안내드립니다." />
      </Section>
    </>
  )
}
