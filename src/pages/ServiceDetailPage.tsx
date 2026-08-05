import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { PUBLIC_OPS, SOLUTIONS, SOLUTION_ALIASES } from '../data'

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
        <div className="border-b border-amber-100 bg-amber-50/90 px-5 py-4 text-center text-sm text-amber-950">
          세부 메뉴·구성은 확인 후 업데이트합니다. 일정·인원·용기 구성을 알려주시면 맞춤 상담드립니다.
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

      {s.featureBlocks && s.featureBlocks.length > 0 && (
        <Section title="상세 안내" className="bg-slate-50">
          <div className="grid gap-5 md:grid-cols-2">
            {s.featureBlocks.map((b) => (
              <article key={b.title} className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-lala-800">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.desc}</p>
              </article>
            ))}
          </div>
        </Section>
      )}

      {s.listBlocks && s.listBlocks.length > 0 && (
        <Section title="구성 · 선택 안내">
          <div className="grid gap-5 md:grid-cols-2">
            {s.listBlocks.map((b) => (
              <article key={b.title} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-6">
                <h3 className="font-bold text-ink">{b.title}</h3>
                <ul className="mt-4 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      )}

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

      {s.slug === 'cup' && (
        <Section title="지자체·공공 운영 현황" className="bg-slate-50" desc="공공기관 다회용컵 현장 운영 규모입니다.">
          <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-lala-800 text-white">
                <tr>
                  <th className="px-4 py-3">지역</th>
                  <th className="px-4 py-3">기관</th>
                  <th className="px-4 py-3">지점</th>
                  <th className="px-4 py-3">운영</th>
                </tr>
              </thead>
              <tbody>
                {PUBLIC_OPS.map((r) => (
                  <tr key={r.region} className="border-t border-slate-100 bg-white">
                    <td className="px-4 py-3 font-medium">{r.region}</td>
                    <td className="px-4 py-3 text-muted">{r.org}</td>
                    <td className="px-4 py-3 text-muted">{r.branch}</td>
                    <td className="px-4 py-3 font-semibold text-lala-700">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section title="견적 문의">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
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
