import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { SOLUTIONS } from '../data'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const s = SOLUTIONS.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero eyebrow="Solution" title={s.title} desc={s.short} image={s.image} />
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
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-lala-600 px-6 py-3 text-sm font-bold text-white"
            >
              이 서비스로 상담하기
            </Link>
          </div>
        </div>
      </Section>
      <Section title="다른 서비스도 있어요" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-3">
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
