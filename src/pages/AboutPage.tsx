import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { BRAND, CORE_CAPABILITIES, IMAGES, NETWORK } from '../data'

const MISSIONS = [
  {
    code: 'E',
    title: '환경(Environmental)을 위한 선택',
    desc: '친환경 자원순환을 통한 탄소 배출 저감으로 저탄소 ESG경영을 선도합니다.',
  },
  {
    code: 'S',
    title: '사회적 가치(Social) 추구',
    desc: '취약계층을 위한 친환경 일자리를 창출하고 지역사회에 책임 문화를 확산합니다.',
  },
  {
    code: 'G',
    title: '지역사회와 상생하는 책임경영',
    desc: '표준 세척 시스템과 민관협업으로 투명하고 지속 가능한 상생 모델을 구축합니다.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="라라워시 · 회사소개"
        title="편리함 때문에 포기했던 환경을 다시 생각합니다"
        desc="라라워시가 전문 세척 솔루션으로 일회용품 없는 지속가능한 일상을 만듭니다."
        image={IMAGES.about}
      />

      <Section
        title="라라워시 소개"
        desc={`${BRAND.name}는 다회용기 대여부터 수거·세척·재공급까지 토탈 솔루션을 제공하는 경기도의 지역 브랜드입니다.`}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={IMAGES.sikpanMachine} alt="라라워시 식판 세척" className="h-80 w-full rounded-3xl object-cover" />
          <div className="space-y-5 text-pretty break-keep text-sm leading-relaxed text-muted md:text-base">
            <p>
              지속가능한 다회용기 세척사업을 통해 환경문제에 대응하고, 지역 내 다회용기 순환체계 정착으로
              취약계층의 일자리 창출 및 지역경제에 기여합니다.
            </p>
            <p className="font-semibold text-ink">
              소셜미션: 지속가능한 깨끗함, 지속가능한 일자리
            </p>
            <p>
              경기도 {NETWORK.regions}개 지역 · {NETWORK.sites}개 전문세척장 인프라로, 가장 가까운 곳에서
              가장 신속하게 움직입니다.
            </p>
            <CompanyProfileDownload label="회사소개서 다운받기" />
          </div>
        </div>
      </Section>

      <Section title="비전 · 소셜미션" className="bg-slate-50">
        <div className="mb-8 rounded-2xl bg-lala-700 p-8 text-white">
          <p className="text-sm font-semibold text-lala-200">비전</p>
          <p className="mt-3 text-lg leading-relaxed md:text-xl">
            지속가능한 다회용기 세척사업을 통해 환경문제에 대응하고 지역 내 다회용기 순환체계 정착으로
            취약계층의 일자리 창출 및 지역경제에 기여합니다.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {MISSIONS.map((m) => (
            <article key={m.title} className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lala-600 text-sm font-extrabold text-white">
                {m.code}
              </p>
              <h3 className="mt-4 text-lg font-bold text-lala-800">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="라라워시 핵심 역량">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CORE_CAPABILITIES.map((c, i) => (
            <article key={c.title} className="border-t-2 border-lala-600 pt-5">
              <p className="text-xs font-bold text-lala-500">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-lala-50 p-8 text-center ring-1 ring-lala-100">
          <p className="text-xl font-extrabold text-lala-900 md:text-2xl">
            지속가능한 내일을 위한 다회용기 사용, 라라워시와 함께 하세요
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/services" className="rounded-full bg-lala-600 px-6 py-3 text-sm font-bold text-white">
              서비스 안내
            </Link>
            <Link
              to="/about/history"
              className="rounded-full border border-lala-200 bg-white px-6 py-3 text-sm font-bold text-lala-700"
            >
              연혁 및 성과
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
