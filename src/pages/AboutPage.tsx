import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { IMAGES } from '../data'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="소개"
        title="지속가능한 깨끗함, 라라워시"
        desc="경기도에서 다회용기를 빌려드리고, 수거해 씻어 다시 가져다 드리는 지역 브랜드입니다. 환경과 일자리, 둘 다 생각합니다."
        image={IMAGES.about}
      />
      <Section
        title="어떻게 시작했을까요?"
        desc="2019년 이유식 식판 세척에서 시작해, 지금은 공공·축제·장례까지 이어지는 순환 서비스로 자랐습니다."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={IMAGES.intro} alt="라라워시 소개" className="h-80 w-full rounded-3xl object-cover" />
          <div className="space-y-6 text-sm leading-relaxed text-muted md:text-base">
            <p>
              일회용품이 늘면서 생기는 쓰레기 문제를, 거창한 구호보다 ‘다회용기 쓰기’라는 작은 실천으로
              풀어 보려 합니다. 가까운 세척망이 있으면, 누구나 더 쉽게 동참할 수 있다고 믿습니다.
            </p>
            <ol className="space-y-4">
              {[
                ['2019', '이유식 식판 세척으로 시작 · 성남 자활 세척장'],
                ['2020', '식판케어로 확대 · 세척장 4곳'],
                ['2021', '라라워시 브랜드 출범 · 다회용기 사업으로'],
                ['2022~', '사업장 확대 · 협동조합 · 경기도청 프로젝트'],
                ['2026', '18개 지역·20곳 세척망 · 부천나눔 2호점 개소'],
              ].map(([y, t]) => (
                <li key={y} className="flex gap-4">
                  <span className="w-16 shrink-0 font-bold text-lala-600">{y}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Section title="라라워시가 지키는 세 가지" className="bg-slate-50">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['다회용기', '한 번 쓰고 버리지 않고, 다시 쓰는 습관을 만듭니다.'],
            ['깨끗한 세척', '6단계 공정과 검사로 안심하고 쓰실 수 있게 합니다.'],
            ['지역 일자리', '자활과 함께 일자리 270명을 만들어 갑니다.'],
          ].map(([t, d]) => (
            <article key={t} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-lala-800">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
        <Link to="/services" className="mt-8 inline-block text-sm font-bold text-lala-600">
          서비스 안내 보기 →
        </Link>
      </Section>
    </>
  )
}
