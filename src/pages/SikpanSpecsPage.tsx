import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { HYGIENE_CHECKS, IMAGES, SIKPAN_HYGIENE, SIKPAN_TYPES } from '../data'

export default function SikpanSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스 · 식판"
        title="라라워시 식판 세부사양"
        desc="스텐식판·멜라민식판 등 급식 환경에 맞는 식판 유형과 안심위생 관리를 안내합니다."
        image={IMAGES.sikpanMachine}
      />

      <Section title="라라워시 식판" desc="학교·구내식당·병원식당·급식소 운영에 맞춘 식판 유형입니다.">
        <div className="grid gap-5 md:grid-cols-2">
          {SIKPAN_TYPES.map((t) => (
            <article key={t.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed border-slate-200 bg-slate-50 px-6 text-center text-sm font-medium text-slate-400">
                  {t.title} 사진 준비 중
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title={SIKPAN_HYGIENE.title} desc={SIKPAN_HYGIENE.desc} className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((c) => (
            <article key={c.title} className="rounded-2xl border-t-2 border-lala-600 bg-white p-6">
              <h3 className="font-bold text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              <p className="mt-3 flex gap-2 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                {c.detail}
              </p>
            </article>
          ))}
        </div>
        <Link
          to="/services/sikpan"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lala-700"
        >
          <ArrowLeft className="h-4 w-4" /> 식판 서비스로 돌아가기
        </Link>
      </Section>

      <Section title="견적 문의">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">식판 대여·세척 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">식판 수량·수거·공급 일정을 알려주시면 맞춰 안내드립니다.</p>
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
