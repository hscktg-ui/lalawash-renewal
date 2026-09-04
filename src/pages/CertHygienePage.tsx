import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import {
  CERTIFICATIONS,
  FUNERAL_HYGIENE_REPORT,
  HYGIENE_CHECKS,
  IMAGES,
  WASH_EQUIPMENT,
  WASH_STEPS,
} from '../data'

export default function CertHygienePage() {
  return (
    <>
      <PageHero
        eyebrow="라라워시 · 인증획득 및 위생관리"
        title="글로벌 인증과 안심위생 시스템"
        desc="국제 기준의 인증과 엄격한 위생 검사로 다회용기의 완벽한 안전을 증명합니다."
        image={IMAGES.platesRack}
      />

      <Section
        id="wash"
        title="초순수(UPW) 정제수로 완성하는 6단계 안심 세척 시스템"
        desc="기준은 엄격하게, 세척은 완벽하게. 라라워시만의 초순수물(UPW) 세척공정으로 잔여물 없는 청결을 전달합니다."
        className="scroll-mt-24"
      >
        <h3 className="text-lg font-bold text-ink">초순수 위생케어 설비시스템</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {WASH_EQUIPMENT.map((item, i) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
              <div className={`aspect-[4/3] ${item.fit === 'contain' ? 'bg-white p-5' : 'bg-slate-100'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-lala-500">{String(i + 1).padStart(2, '0')}</p>
                <h4 className="mt-2 font-bold text-ink">{item.title}</h4>
                <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold text-ink">6단계 전문 순환 세척 공정</h3>
        <p className="mt-3 max-w-3xl text-pretty break-keep text-sm leading-relaxed text-muted">
          라라워시의 다회용기는 과학적이고 체계적인 6단계 공정을 거쳐 새 제품보다 더 깨끗한 상태로 재탄생합니다.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WASH_STEPS.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">STEP {i + 1}</p>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="관공서, 학교, 대기업이 라라워시를 믿고 선택하는 이유"
        desc="라라워시는 글로벌 NSF 위생기준을 준수하고, ISO 경영시스템 인증과 공인기관의 정기적인 위생검사를 바탕으로 최고 수준의 세척 품질을 유지합니다."
        className="bg-slate-50"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="flex h-36 items-center justify-center bg-slate-50 px-6">
                {c.badge === 'NSF' ? (
                  <img src={IMAGES.hygieneNsf} alt="NSF International" className="h-24 w-24 object-contain" />
                ) : (
                  <p className="text-center text-3xl font-extrabold tracking-tight text-lala-800">{c.badge}</p>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-lala-800">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CompanyProfileDownload label="회사소개서 다운받기" />
        </div>
      </Section>

      <Section id="hygiene" title="공인기관 위생 검사 및 자체 검증 System" className="scroll-mt-24">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-relaxed text-muted md:text-base">
          라라워시는 타협 없는 청결을 위해 외부 공인기관의 객관적인 검사와 자체적인 매일 상시 검증 체계를
          엄격하게 운영하고 있습니다.
        </p>

        <article className="mt-8 rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,18rem)]">
            <div>
              <h3 className="text-lg font-medium text-ink">식약처 기준 위생관리</h3>
              <p className="mt-2 max-w-3xl text-pretty break-keep text-sm leading-relaxed text-muted">
                식약처 다회용기 위생가이드에 따라 용기 안전성과 위생 기준을 정기적으로 검사·관리합니다.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                <li>경기도보건환경연구원 연 2회 정기 시험검사</li>
                <li>식약처 기준에 따른 위생성 검사</li>
                <li>
                  공인기관의 검사 결과를 바탕으로 용기 자체의 재질 안전성과 세척 과정 전반의 위생성을 객관적으로
                  검증받습니다.
                </li>
              </ul>
            </div>
            <figure className="rounded-sm bg-white p-3 ring-1 ring-slate-200">
              <img
                src={IMAGES.hygieneReport}
                alt="경기도보건환경연구원 시험·검사성적서"
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-72 w-auto bg-white object-contain"
              />
              <figcaption className="mt-2 text-center text-xs text-slate-500">
                {FUNERAL_HYGIENE_REPORT.title} · {FUNERAL_HYGIENE_REPORT.issuer}
              </figcaption>
            </figure>
          </div>
        </article>

        <h3 className="mt-10 text-lg font-bold text-ink">식품의약품안전처 위생관리 지침 3대 안심 위생검사</h3>
        <p className="mt-3 max-w-3xl text-pretty break-keep text-sm leading-relaxed text-muted">
          대한민국 식품의약품안전처의 ‘다회용 기구·용기 위생관리 지침’에 근거하여, 당일 세척이 완료된 용기를
          무작위로 추출(표본 조사)하여 위생검사를 매일 실시합니다. 위생검사에 완벽하게 통과한 용기만 현장에
          공급합니다.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((h) => (
            <article key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h4 className="font-bold text-ink">{h.title}</h4>
              {'standard' in h && h.standard ? (
                <p className="mt-2 text-sm font-semibold text-lala-700">{h.standard}</p>
              ) : null}
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{h.desc}</p>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                <span className="mb-1 block font-semibold text-lala-700">검사 방법</span>
                <span className="text-pretty break-keep">{h.detail}</span>
              </p>
              {h.image ? (
                <img
                  src={h.image}
                  alt={h.title}
                  loading="lazy"
                  decoding="async"
                  className="mt-4 aspect-[16/10] w-full rounded-xl object-cover"
                />
              ) : (
                <div className="mt-4 flex min-h-[6.5rem] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 text-center text-xs text-slate-400">
                  실제 검사 컷 · 자료 전달 후 게시
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
