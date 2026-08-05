import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { PartnerLogoWall, PortfolioGallery, YearlyImpactSection } from '../components/TrustSections'
import { ENV_SCENARIO, HISTORY, IMAGES, IMPACT } from '../data'

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
        <img
          src={IMAGES.historyTimeline}
          alt="라라워시 연혁 타임라인"
          className="mb-10 w-full rounded-2xl object-cover ring-1 ring-slate-200"
        />
        <ol className="space-y-5">
          {HISTORY.map(([y, t]) => (
            <li key={y} className="flex gap-5 border-b border-slate-100 pb-5 last:border-0">
              <span className="w-28 shrink-0 text-lg font-extrabold text-lala-600">{y}</span>
              <span className="text-sm text-muted md:text-base">{t}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="한눈에 보는 성과" className="bg-slate-50">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-lala-800">기관·기업 담당자용 소개 자료</p>
            <p className="mt-1 text-sm text-muted">연혁·실적·서비스 구성이 정리된 PDF를 받아 보실 수 있습니다.</p>
          </div>
          <CompanyProfileDownload label="소개 자료 받기" />
        </div>
        <img
          src={IMAGES.impactInfographic}
          alt="세척량·탄소저감·소나무 환산 인포그래픽"
          className="mb-8 w-full rounded-2xl bg-white object-contain p-4 ring-1 ring-slate-100"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((i) => (
            <div key={i.label} className="rounded-2xl bg-lala-700 p-6 text-white">
              <p className="text-2xl font-extrabold md:text-3xl">
                {i.value.toLocaleString('ko-KR')}
                <span className="text-base font-semibold text-lala-200">{i.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-lala-100">{i.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <YearlyImpactSection />

      <Section
        title="라라워시 다회용컵 사용에 따른 환경적 효과"
        desc={ENV_SCENARIO.title}
      >
        <img
          src={IMAGES.envChart}
          alt="일회용·다회용 온실가스 비교 그래프"
          className="mb-8 w-full rounded-2xl bg-white object-contain p-4 ring-1 ring-slate-100"
        />
        <div className="grid gap-3 md:grid-cols-2">
          {ENV_SCENARIO.items.map((item) => (
            <div key={item.label} className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm font-bold text-lala-800">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.value}</p>
            </div>
          ))}
        </div>
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
