import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SpecCardGrid, SpecQuoteCta } from '../components/SpecCatalog'
import { IMAGES } from '../data'
import { FESTIVAL_SPEC_GROUPS, FESTIVAL_VESSEL_SPECS } from '../data/vesselSpecs'

export default function FestivalSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 축제 및 행사"
        title="축제용 다회용기 전체 보기"
        desc="접시·면기·다회용컵·커트러리·기타 구성의 품명·규격·재질입니다."
        image={IMAGES.festivalFood}
      />

      {FESTIVAL_SPEC_GROUPS.map((group) => (
        <Section
          key={group}
          title={group}
          className={group === '면기' || group === '커트러리' ? 'bg-slate-50' : ''}
        >
          <SpecCardGrid items={FESTIVAL_VESSEL_SPECS.filter((p) => p.group === group)} />
        </Section>
      ))}

      <div className="px-5 pb-16">
        <div className="mx-auto max-w-6xl">
          <Link to="/services/festival" className="inline-flex items-center gap-2 text-sm font-bold text-lala-700">
            <ArrowLeft className="h-4 w-4" /> 축제·행사 서비스로 돌아가기
          </Link>
        </div>
      </div>

      <Section title="견적문의" className="bg-slate-50">
        <SpecQuoteCta
          title="축제·행사 다회용기 견적"
          desc="행사 일정·인원·필요 용기 종류를 알려주시면 맞춰 안내드립니다."
        />
      </Section>
    </>
  )
}
