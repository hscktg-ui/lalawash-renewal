import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { FESTIVAL_SPEC_LINES, FESTIVAL_VESSEL_TYPES, IMAGES } from '../data'

export default function FestivalSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 축제 및 행사"
        title="축제·행사 다회용기 세부사양"
        desc="리디쉬 용기와 개발원 용기 등 행사 맞춤 다회용기 라인을 안내합니다."
        image={IMAGES.festivalFood}
      />

      <Section title="다회용기 종류" desc="접시류·면기류·다회용컵·커트러리·기타 행사 맞춤 용기를 보유합니다.">
        <div className="flex flex-wrap gap-2">
          {FESTIVAL_VESSEL_TYPES.map((t) => (
            <span
              key={t}
              className="rounded-full bg-lala-50 px-4 py-2 text-sm font-semibold text-lala-800 ring-1 ring-lala-100"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="용기 라인 안내" className="bg-slate-50">
        <div className="grid gap-5 md:grid-cols-2">
          {FESTIVAL_SPEC_LINES.map((line) => (
            <article key={line.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              {line.image ? (
                <img
                  src={line.image}
                  alt={line.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed border-slate-200 bg-slate-50 px-6 text-center text-sm font-medium text-slate-400">
                  {line.title} 사진 준비 중
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{line.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{line.desc}</p>
                {'items' in line && line.items ? (
                  <ul className="mt-4 space-y-1.5">
                    {line.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 before:mr-2 before:text-lala-500 before:content-['·']">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <Link
          to="/services/festival"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700"
        >
          <ArrowLeft className="h-4 w-4" /> 축제·행사 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적 문의">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">축제·행사 다회용기 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">행사 일정·인원·필요 용기 종류를 알려주시면 맞춰 안내드립니다.</p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
          >
            견적·상담 문의
          </Link>
        </div>
      </Section>
    </>
  )
}
