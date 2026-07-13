import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { IMAGES, SOLUTIONS, WASH_STEPS } from '../data'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="서비스"
        title="다회용기, 빌려 쓰고 씻어 드립니다"
        desc="공공기관, 사내 카페, 행사처럼 일회용품이 많은 곳에 맞춰 준비합니다. 필요하신 유형만 골라 보시면 됩니다."
        image={IMAGES.service}
      />
      <Section title="어떤 서비스가 필요하신가요?">
        <div className="grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md"
            >
              <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                  자세히 보기 <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="세척은 이렇게 진행됩니다" desc="6단계로 씻고 확인한 뒤 다시 보내드립니다." className="bg-slate-50">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WASH_STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">STEP {i + 1}</p>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
