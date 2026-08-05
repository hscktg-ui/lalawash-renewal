import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { CERTIFICATIONS, HYGIENE_CHECKS, IMAGES, WASH_GALLERY, WASH_STEPS } from '../data'

export default function CertHygienePage() {
  return (
    <>
      <PageHero
        eyebrow="라라워시 · 인증획득 및 위생관리"
        title="국제 표준 인증과 엄격한 위생 검사로 증명된 청결"
        desc="라라워시는 일회용품보다 안전하고 완벽한 위생을 약속합니다."
        image={IMAGES.platesRack}
      />

      <Section
        title="관공서, 학교, 대기업이 라라워시를 믿고 선택하는 이유"
        desc="눈에 보이지 않는 세균까지 차단하기 위해 까다로운 국제 인증을 획득하고 공인기관의 위생검사를 정기적으로 실시합니다."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="bg-gradient-to-br from-lala-800 to-lala-600 px-6 py-8 text-center text-white">
                <p className="text-xs font-semibold tracking-[0.16em] text-lala-200">CERTIFICATION</p>
                <p className="mt-3 text-2xl font-extrabold tracking-tight">{c.badge}</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-lala-800">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          인증서 스캔본(이미지)은 자료 확보 후 게시합니다. 우선 회사소개서에서 인증·실적 요지를 확인하시거나,{' '}
          <Link to="/contact" className="font-semibold text-lala-600">
            견적·상담 문의
          </Link>
          로 원본 자료를 요청해 주세요.
        </p>
        <div className="mt-4">
          <CompanyProfileDownload label="회사소개서에서 인증·실적 확인" />
        </div>
      </Section>

      <Section title="공인기관 위생 검사 및 자체 검증" className="bg-slate-50">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-lala-900 to-lala-700 p-7 text-white">
          <h3 className="text-lg font-bold">경기도보건환경연구원 정기 검사</h3>
          <p className="mt-3 text-sm leading-relaxed text-lala-100">
            라라워시 다회용기는 연 2회 경기도보건환경연구원의 철저한 정기검사를 실시합니다. 이를 통해
            용기 재질의 안전성과 전 세척과정의 위생성을 공인받았습니다.
          </p>
        </div>
        <h3 className="text-xl font-extrabold text-ink">식약처 지침 3대 안심 위생검사 (매일 실시)</h3>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          식약처의 다회용 기구·용기 위생관리 지침에 근거하여 당일 세척 완료된 용기를 무작위로 추출해
          ATP 세균 오염도 검사, 잔류세제 검사, 고온 건조 온도라벨 테스트를 매일 실시합니다.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((h) => (
            <article key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h4 className="font-bold text-ink">{h.title}</h4>
              <p className="mt-2 text-sm text-muted">{h.desc}</p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-lala-700">상세내용</span>
                <br />
                {h.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="초순수물(UPW) 6단계 세척시스템"
        desc="전 지점 동일 매뉴얼로 깨끗함을 전달합니다."
      >
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {WASH_GALLERY.map((g) => (
            <figure key={g.title} className="text-center">
              <img
                src={g.image}
                alt={g.title}
                className="mx-auto aspect-square w-full max-w-[220px] rounded-full object-cover ring-4 ring-lala-50"
              />
              <figcaption className="mt-3 text-sm font-bold text-ink">{g.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WASH_STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">STEP {i + 1}</p>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/services#wash" className="mt-8 inline-flex text-sm font-bold text-lala-600">
          다회용기 서비스에서 세척·위생 더 보기 →
        </Link>
      </Section>
    </>
  )
}
