import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { EnvironmentalComparison, ImpactSummary, NativeTimeline } from '../components/NativeVisuals'
import { PartnerLogoWall, PortfolioGallery, YearlyImpactSection } from '../components/TrustSections'
import { ENV_SCENARIO, IMAGES } from '../data'

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="라라워시 · 연혁 및 성과"
        title="라라워시가 쌓아 온 변화"
        desc="연혁과 성과, 그리고 다회용기 사용이 만드는 환경적 효과를 정리했습니다."
        image={IMAGES.video}
      />

      <Section title="연혁">
        <NativeTimeline />
      </Section>

      <Section title="한눈에 보는 성과" className="bg-slate-50">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-lala-800">기관·기업 담당자용 소개 자료</p>
            <p className="mt-1 text-sm text-muted">연혁·실적·서비스 구성이 정리된 PDF를 받아 보실 수 있습니다.</p>
          </div>
          <CompanyProfileDownload label="소개 자료 받기" />
        </div>
        <ImpactSummary />
      </Section>

      <YearlyImpactSection />

      <Section
        title="라라워시 다회용컵 사용에 따른 환경적 효과"
        desc={ENV_SCENARIO.title}
      >
        <EnvironmentalComparison />
        <p className="mt-6 text-xs text-slate-400">
          ※ 출처: 라라워시 환경평가 및 사회적가치 성과측정 연구(아주대학교, 2023) 등 PDF 구성안 수치.
        </p>
      </Section>

      <PortfolioGallery />
      <PartnerLogoWall />

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
