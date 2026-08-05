import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { HOW_TO, IMAGES } from '../data'

export default function HowToPage() {
  return (
    <>
      <PageHero
        eyebrow="이용문의 · 이용방법"
        title="문의부터 회수까지, 이렇게 이용하세요"
        desc="복잡한 절차 없이 상담 → 신청 → 사용 → 회수로 이어집니다."
        image={IMAGES.order}
      />
      <Section title="이용 순서">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_TO.map((s) => (
            <article key={s.step} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-6">
              <p className="text-xs font-bold text-lala-500">{s.step}</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
            </article>
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
