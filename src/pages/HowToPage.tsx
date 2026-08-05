import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { HOW_TO, IMAGES, SOLUTIONS } from '../data'

export default function HowToPage() {
  return (
    <>
      <PageHero
        eyebrow="이용문의 · 이용방법"
        title="문의부터 세척까지, 이렇게 이용하세요"
        desc="라라워시의 다회용기 서비스는 간편하고 체계적인 과정을 통해 제공됩니다."
        image={IMAGES.order}
      />

      <Section title="라라워시 서비스 이용방법">
        <img
          src={IMAGES.howto6steps}
          alt="라라워시 서비스 이용방법 6단계"
          className="mb-10 w-full rounded-2xl object-cover ring-1 ring-slate-200"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_TO.map((s) => (
            <article key={s.step} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-6">
              <p className="text-xs font-bold text-lala-500">{s.step}</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="어떤 서비스를 신청할까요?"
        desc="현장 유형에 맞는 안내 페이지를 먼저 보신 뒤 견적 문의하시면 더 빠릅니다."
        className="bg-slate-50"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 hover:shadow-sm"
            >
              <img src={s.image} alt="" className="h-28 w-full object-cover" />
              <p className="px-4 py-3 text-sm font-semibold text-ink">{s.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-lala-600 px-6 py-3 text-sm font-bold text-white">
            견적·상담 문의하기
          </Link>
          <Link
            to="/contact/faq"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-lala-700"
          >
            Q&A 보기
          </Link>
        </div>
      </Section>
    </>
  )
}
