import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { FAQ, IMAGES } from '../data'

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="이용문의 · Q&A"
        title="자주 묻는 질문"
        desc="먼저 확인하시면 빠른 상담에 도움이 됩니다. 더 궁금한 점은 견적·상담 문의로 남겨 주세요."
        image={IMAGES.notice}
      />
      <Section title="FAQ">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none break-keep font-bold text-lala-800 marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-xl font-normal text-lala-500 transition group-open:rotate-45" aria-hidden>+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-pretty break-keep text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-slate-50 p-6 text-sm text-muted ring-1 ring-slate-200">
          <p>원하시는 답을 찾지 못하셨다면 사용 장소·수량·기간과 함께 문의해 주세요.</p>
          <Link to="/contact" className="mt-4 inline-flex font-bold text-lala-600">
            견적·상담 문의 →
          </Link>
        </div>
      </Section>
    </>
  )
}
