import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { FAQ, IMAGES } from '../data'

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="이용문의 · Q&A"
        title="자주 묻는 질문"
        desc="먼저 확인하시면 빠른 상담에 도움이 됩니다. 추가 Q&A는 정리되는 대로 업데이트합니다."
        image={IMAGES.notice}
      />
      <Section title="FAQ">
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="font-bold text-lala-800">{f.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-sm text-muted ring-1 ring-slate-200">
          <p>더 궁금한 점이 있으시면 견적문의로 남겨 주세요. 추가 질문·답변 목록은 준비 중입니다.</p>
          <Link to="/contact" className="mt-4 inline-flex font-bold text-lala-600">
            견적문의하기 →
          </Link>
        </div>
      </Section>
    </>
  )
}
