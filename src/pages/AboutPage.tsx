import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import {
  ABOUT_INTRO,
  CIRCULAR_CARE,
  CORE_CAPABILITIES,
  CORE_VALUES,
  GREETING,
  IMAGES,
} from '../data'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            지속가능한 깨끗함,
            <br />
            지속가능한 일자리
          </>
        }
        image={IMAGES.funeralRack}
      />

      <Section title="라라워시">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.funeralMeal}
            alt="현장에서 쓰는 라라워시 다회용기"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div className="space-y-6">
            <p className="text-pretty break-keep text-base leading-[1.85] text-ink md:text-lg">{ABOUT_INTRO}</p>
            <CompanyProfileDownload label="회사소개서 다운받기" />
          </div>
        </div>
      </Section>

      <section className="bg-lala-900 px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-lala-300">ENVIRONMENT · SOCIAL · GOVERNANCE</p>
          <h2 className="mt-4 text-[4.5rem] font-medium leading-none tracking-[0.12em] md:text-[7rem]">ESG</h2>
          <div className="mt-12 grid gap-px overflow-hidden bg-white/15 md:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <article key={value.letter} className="bg-lala-900 p-7 md:p-8">
                <p className="font-mono text-5xl font-medium tracking-tight text-lala-300">{value.letter}</p>
                <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-lala-400">{value.axis}</p>
                <h3 className="mt-2 text-xl font-bold">{value.title}</h3>
                <ul className="mt-5 space-y-2">
                  {value.items.map((item) => (
                    <li key={item} className="text-pretty break-keep text-sm leading-relaxed text-lala-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section title="라라워시 핵심역량">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CORE_CAPABILITIES.map((c, i) => (
            <article key={c.title} className="border-t-2 border-lala-600 pt-5">
              <p className="text-xs font-bold text-lala-500">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={CIRCULAR_CARE.title} desc={CIRCULAR_CARE.desc} className="bg-slate-50">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CIRCULAR_CARE.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="인사말">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,14rem)_1fr]">
          <img
            src={IMAGES.character}
            alt="라라 캐릭터"
            className="mx-auto w-44 object-contain lg:mx-0 lg:w-full"
          />
          <blockquote>
            <p className="text-pretty break-keep text-xl font-bold leading-snug text-lala-800 md:text-2xl">
              {GREETING.quote}
            </p>
            {GREETING.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-pretty break-keep text-sm leading-[1.85] text-muted md:text-base"
              >
                {p}
              </p>
            ))}
            <p className="mt-8 text-right text-sm font-semibold text-ink">{GREETING.sign}</p>
          </blockquote>
        </div>
        <div className="mt-12 rounded-2xl bg-lala-50 p-8 text-center ring-1 ring-lala-100">
          <div className="flex flex-wrap justify-center gap-3">
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
