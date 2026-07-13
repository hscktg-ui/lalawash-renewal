import { ArrowUpRight } from 'lucide-react'
import { LATEST_INSIGHTS } from '../data'
import { EXTERNAL } from '../lib/content'

export function InsightsSection() {
  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-lala-600">최근 소식</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">지금 라라워시는 이렇게 움직입니다</h2>
            <p className="mt-4 max-w-2xl text-muted">
              새 지점, 축제 현장, 운영 이야기를 모아 두었습니다. 더 자세한 현장 소식은 블로그에서도 보실 수 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={EXTERNAL.officialNotice}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-lala-800"
            >
              더 많은 소식 <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={EXTERNAL.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-lala-700 px-4 py-2 text-sm font-bold text-white"
            >
              네이버 블로그 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LATEST_INSIGHTS.map((item) => (
            <a
              key={`${item.date}-${item.title}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition hover:bg-lala-50 hover:ring-lala-200"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-bold tracking-wide text-lala-600">{item.tag}</span>
                <time className="text-xs text-slate-400">{item.date}</time>
              </div>
              <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-lala-800">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                이야기 보기 <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
