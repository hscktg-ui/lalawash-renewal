import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SOLUTIONS, SOLUTION_ALIASES } from '../data'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const resolved = slug ? (SOLUTION_ALIASES[slug] ?? slug) : undefined
  if (slug && SOLUTION_ALIASES[slug]) {
    return <Navigate to={`/services/${SOLUTION_ALIASES[slug]}`} replace />
  }
  const s = SOLUTIONS.find((x) => x.slug === resolved)
  if (!s) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero eyebrow="다회용기서비스" title={s.title} desc={s.short} image={s.image} />

      {s.pending && (
        <div className="border-b border-amber-100 bg-amber-50 px-5 py-4 text-center text-sm text-amber-900">
          이 페이지의 세부 구성은 준비 중입니다. 일정·인원·용기 구성을 알려주시면 맞춤 상담드립니다.
        </div>
      )}

      <Section title="서비스 소개">
        <div className="grid gap-8 lg:grid-cols-2">
          <img src={s.image} alt={s.title} className="h-80 w-full rounded-3xl object-cover" />
          <div>
            <p className="text-base leading-relaxed text-muted">{s.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full bg-lala-50 px-3 py-1 text-xs font-semibold text-lala-700">
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="서비스 운영방법" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {s.process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{p.step}</p>
              <p className="mt-2 font-bold text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {s.cases && s.cases.length > 0 && (
        <Section title="운영사례">
          <div className="flex flex-wrap gap-2">
            {s.cases.map((c) => (
              <span
                key={c}
                className="rounded-full bg-lala-50 px-4 py-2 text-sm font-medium text-lala-800 ring-1 ring-lala-100"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>
      )}

      <Section title="견적 문의">
        <div className="rounded-2xl bg-lala-700 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">{s.title} 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">사용 장소·수량·기간을 알려주시면 맞춰 안내드립니다.</p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
          >
            상담페이지로 이동
          </Link>
        </div>
      </Section>

      <Section title="다른 서비스도 있어요" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.filter((x) => x.slug !== s.slug).map((x) => (
            <Link key={x.slug} to={`/services/${x.slug}`} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="font-bold">{x.title}</p>
              <p className="mt-2 text-sm text-muted">{x.short}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
