import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { PartnerLogoWall, PortfolioGallery, YearlyImpactSection } from '../components/TrustSections'
import { IMAGES, IMPACT } from '../data'

const PROOFS = [
  {
    title: '공공·기관',
    points: [
      '경기도청 다회용컵 순환 사업 선정 (’24.3~’27.2)',
      '과천·부천·시흥 등 일 최대 2,000개 처리',
      '용인시청 주 3,500컵 규모 운영',
    ],
  },
  {
    title: '축제·행사',
    points: [
      '행사 10건(’22) → 25건(’23) → 50건(’24)',
      '누적 다회용기 약 23.4만개 사용',
      '서울재즈페스티벌 등 대형 행사 대응',
    ],
  },
  {
    title: '장례·의료',
    points: [
      '경기도의료원(수원·이천·포천) 운영',
      '수원연화장 다회용기 시스템',
      '연간 수십만 개 규모 전망',
    ],
  },
]

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="성과"
        title="함께 만든 변화를 숫자로"
        desc="얼마나 자랐는지, 어디서 쓰였는지, 탄소는 어떻게 줄어드는지 쉽게 정리했습니다."
        image={IMAGES.video}
      />
      <Section title="한눈에 보는 성과">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-lala-50 p-6 ring-1 ring-lala-100 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-lala-800">기관·기업 담당자용 소개 자료</p>
            <p className="mt-1 text-sm text-muted">연혁·실적·서비스 구성이 정리된 PDF를 받아 보실 수 있습니다.</p>
          </div>
          <CompanyProfileDownload label="소개 자료 받기" />
        </div>
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

      <Section title="어떤 현장에서 쓰였나요?" className="bg-slate-50">
        <div className="grid gap-5 md:grid-cols-3">
          {PROOFS.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-lala-800">{p.title}</h3>
              <ul className="mt-4 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-lala-900 px-8 py-10 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-lala-300">왜 다회용기인가요?</p>
            <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">3번만 써도 환경이 달라집니다</h3>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              같은 컵을 세 번만 써도 일회용보다 환경에 이롭습니다. 하루 한 잔이 쌓이면 탄소를 크게 줄일 수 있습니다.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 px-6 py-5 text-center md:mt-0">
            <p className="text-4xl font-extrabold text-lala-200">75%</p>
            <p className="mt-1 text-sm text-slate-300">탄소 감축 가능</p>
          </div>
        </div>
      </Section>

      <PortfolioGallery />
      <PartnerLogoWall />
    </>
  )
}
