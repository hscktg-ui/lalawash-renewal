import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CupCirculation } from '../components/NativeVisuals'
import { PhotoGallery } from '../components/PhotoGallery'
import { OpsCasesMarquee } from '../components/OpsCasesMarquee'
import {
  BRANCH_CASES_NOTE,
  CUP_PRODUCTS,
  FESTIVAL_CASES,
  FESTIVAL_PHOTO_NOTE,
  FESTIVAL_VESSEL_GROUPS,
  FUNERAL_ESG,
  FUNERAL_OPS_PILLARS,
  FUNERAL_PUBLIC_CASES,
  FUNERAL_SPEC_ITEMS,
  KIDS_TRAY_PRODUCTS,
  SIKPAN_HYGIENE,
  SIKPAN_TYPES,
  SOLUTIONS,
  SOLUTION_ALIASES,
  IMAGES,
} from '../data'

function QuoteCta({ title, desc }: { title: string; desc: string }) {
  return (
    <Section title="견적문의">
      <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xl font-extrabold">{title}</p>
          <p className="mt-2 text-sm text-lala-100">{desc}</p>
        </div>
        <Link
          to="/contact"
          className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
        >
          이 서비스 견적·상담 문의
        </Link>
      </div>
    </Section>
  )
}

function OtherServices({ slug }: { slug: string }) {
  return (
    <Section title="다른 서비스도 있어요" className="bg-slate-50">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.filter((x) => x.slug !== slug).map((x) => (
          <Link key={x.slug} to={`/services/${x.slug}`} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <p className="font-bold">{x.title}</p>
            <p className="mt-2 text-sm text-muted">{x.short}</p>
          </Link>
        ))}
      </div>
    </Section>
  )
}

function FuneralServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.funeralAltar} />

      <Section title="친환경 장례문화를 실현하는 라라워시" className="bg-slate-50">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.funeralMeal}
            alt="라라워시 장례식장 다회용기"
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <p className="text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {FUNERAL_ESG.pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border-t-2 border-lala-600 bg-white p-6">
              <h3 className="font-bold text-ink">{pillar.title}</h3>
              <ul className="mt-4 space-y-2">
                {pillar.items.map((item) => (
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

      <Section
        title="장례식장 맞춤 운영 시스템과 공급 관리 체계"
        desc="라라워시는 장례식장 운영 일정과 조문객 규모에 맞춰 다회용기 공급, 회수, 전문 세척 재공급까지 현장 중심의 체계적인 운영 시스템을 제공합니다."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FUNERAL_OPS_PILLARS.map((pillar) => (
            <article key={pillar.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <img
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
                decoding="async"
                className={`aspect-square w-full ${pillar.fit === 'contain' ? 'bg-white object-contain p-3' : 'object-cover'}`}
              />
              <div className="p-5">
                <h3 className="font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="공공 장례식장 운영 사례" desc="경기도 공공 장례식장에서 다회용기를 연속 운영하고 있습니다.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FUNERAL_PUBLIC_CASES.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-bold text-ink">{c.name}</p>
                <p className="mt-2 text-lg font-extrabold text-lala-700">{c.volume}</p>
                <p className="mt-1 text-xs text-muted">
                  {c.since} 시작 · {c.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="환경호르몬 걱정 없이, 고온 세척이 가능한 라라워시 다회용 장례용기"
        desc="장례식장 운영 환경과 위생 기준을 고려해 식기 재질과 용도에 적합한 전용 다회용기를 운영합니다."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <img
              src={IMAGES.funeralOnePerson}
              alt="1인 기준 제공 용기 구성"
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-3xl bg-white object-contain ring-1 ring-slate-100"
            />
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              ※ 1인 기준 제공 용기 (다회용기 구성은 지점별로 다를 수 있습니다.)
            </p>
          </div>
          <div>
            {(s.featureBlocks ?? []).map((b) => (
              <article key={b.title} className="mb-6 last:mb-0">
                <h3 className="text-lg font-bold text-lala-800">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
              </article>
            ))}
            <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {FUNERAL_SPEC_ITEMS.map((item) => (
                <li key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">1인 기준 제공 구성 · 기본 10인 단위 포장</p>
            <Link
              to="/services/funeral/specs"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
            >
              다회용기 세부사양 확인하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="라라워시 친환경 장례식장 다회용기 이용방법"
        desc="장례식장 운영 일정에 맞춘 다회용기 공급부터 회수, 전문 세척, 재공급까지 체계적이고 편리한 순환 서비스를 제공합니다."
        className="bg-slate-50"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {s.process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{p.step}</p>
              <p className="mt-2 font-bold text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-lala-700">
          장례식장 운영의 편의성과 위생까지, 라라워시가 함께합니다.
        </p>
      </Section>

      <QuoteCta title="장례식장 다회용기 견적 문의" desc="빈소 수·예상 조문객·운영 일정을 알려주시면 맞춰 안내드립니다." />
      <OtherServices slug={s.slug} />
    </>
  )
}

function FestivalServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.festivalFood} />

      <Section title="라라워시 축제 및 행사 다회용기">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <img
              src={IMAGES.festivalFood}
              alt="음식이 담긴 라라워시 다회용기"
              loading="lazy"
              decoding="async"
              className="h-80 w-full rounded-3xl object-cover"
            />
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{FESTIVAL_PHOTO_NOTE}</p>
          </div>
          <div>
            <p className="text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
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

      <Section title="라라워시 축제용 다회용기" desc="행사 메뉴에 맞춰 접시·면기·컵·커트러리·반납 구성을 고를 수 있습니다." className="bg-slate-50">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {FESTIVAL_VESSEL_GROUPS.map((group) => (
            <article key={group.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <img
                src={group.image}
                alt={`${group.title} — 시흥점 리디시 판매책자`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full bg-[#f6f3ee] object-contain"
              />
              <div className="p-6">
                <h3 className="font-bold text-lala-800">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col text-sm text-ink">
                      <span className="font-semibold">{item.name}</span>
                      {item.note ? <span className="text-xs text-muted">{item.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-pretty break-keep text-xs leading-relaxed text-slate-500">
          대표사진은 시흥점 리디시(Re:dish) 판매책자(수정8)에서 발췌했습니다.
        </p>
        <Link
          to="/services/festival/specs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
        >
          축제용 다회용기 전체 보기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section title="서비스 운영방법" desc="행사 일정에 맞춘 상담부터 공급·회수·정산까지 지원합니다.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {s.process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{p.step}</p>
              <p className="mt-2 font-bold text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="축제 및 행사 운영사례" className="bg-slate-50">
        <OpsCasesMarquee items={FESTIVAL_CASES} pendingNote="축제 사진은 지점 전달 후 교체합니다. 소식란에 게시된 현장 글은 포스팅으로 연결됩니다." />
      </Section>

      <QuoteCta title="축제·행사 다회용기 견적 문의" desc="행사 일정·인원·필요 용기 종류를 알려주시면 맞춰 안내드립니다." />
      <OtherServices slug={s.slug} />
    </>
  )
}

function SikpanServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.sikpanMachine} />

      <Section title="서비스 소개">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {SIKPAN_TYPES.map((t) => (
              <article key={t.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full bg-slate-50 object-contain p-3"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-slate-50 text-sm font-medium text-slate-400">
                    {t.title} 사진 준비 중
                  </div>
                )}
                <div className="p-4">
                  <p className="font-bold text-ink">{t.title}</p>
                  <p className="mt-1 text-xs text-muted">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div>
            <p className="text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
            <ul className="mt-6 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/services/sikpan/specs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
            >
              식판 세부사양 확인하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section title={SIKPAN_HYGIENE.title} desc={SIKPAN_HYGIENE.desc} className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-3">
          {SIKPAN_HYGIENE.items.map((item) => (
            <div key={item.title} className="rounded-2xl border-t-2 border-lala-600 bg-white p-6">
              <p className="font-bold text-ink">{item.title}</p>
              <p className="mt-3 text-lg font-extrabold text-lala-700">{item.standard}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="서비스 운영방법">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {s.process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{p.step}</p>
              <p className="mt-2 font-bold text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="운영사례" className="bg-slate-50">
        <OpsCasesMarquee items={[]} pendingNote={BRANCH_CASES_NOTE} />
      </Section>

      <QuoteCta title="식판 대여·세척 견적 문의" desc="식판 수량·수거·공급 일정을 알려주시면 맞춰 안내드립니다." />
      <OtherServices slug={s.slug} />
    </>
  )
}

function CupServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={s.image} />

      <Section id="cup-lineup" title="라라워시 다회용컵">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {CUP_PRODUCTS.map((item) => (
                <article key={item.name} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-4">
                  <p className="font-bold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </article>
              ))}
            </div>
            <Link
              to="/services/cup/specs"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
            >
              다회용컵 전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section title="다회용컵 순환·운영방법" desc="비치부터 수거·세척·재공급까지 한 흐름으로 운영합니다." className="bg-slate-50">
        <CupCirculation />
      </Section>

      <Section title="운영사례">
        <OpsCasesMarquee items={[]} pendingNote={BRANCH_CASES_NOTE} />
      </Section>

      <QuoteCta title={`${s.title} 견적 문의`} desc="사용 장소·수량·기간을 알려주시면 맞춰 안내드립니다." />
      <OtherServices slug={s.slug} />
    </>
  )
}

function KidsTrayServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={s.image} />

      <Section id="kids-lineup" title="라라워시 유아식판">
        <p className="max-w-3xl text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KIDS_TRAY_PRODUCTS.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full bg-slate-50 object-contain p-4"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-slate-50 text-xs text-slate-400">
                  제품 사진 준비 중
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="서비스 운영방법" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {s.process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xs font-bold text-lala-500">{p.step}</p>
              <p className="mt-2 font-bold text-ink">{p.title}</p>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="운영사례">
        <OpsCasesMarquee items={[]} pendingNote={BRANCH_CASES_NOTE} />
      </Section>

      <QuoteCta title={`${s.title} 견적 문의`} desc="원아 수·결제 방식·도입 희망일을 알려주시면 맞춰 안내드립니다." />
      <OtherServices slug={s.slug} />
    </>
  )
}

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const resolved = slug ? (SOLUTION_ALIASES[slug] ?? slug) : undefined
  if (slug && SOLUTION_ALIASES[slug]) {
    return <Navigate to={`/services/${SOLUTION_ALIASES[slug]}`} replace />
  }
  const s = SOLUTIONS.find((x) => x.slug === resolved)
  if (!s) return <Navigate to="/services" replace />

  if (s.slug === 'funeral') {
    return <FuneralServiceDetail s={s} />
  }
  if (s.slug === 'festival') {
    return <FestivalServiceDetail s={s} />
  }
  if (s.slug === 'sikpan') {
    return <SikpanServiceDetail s={s} />
  }
  if (s.slug === 'cup') {
    return <CupServiceDetail s={s} />
  }
  if (s.slug === 'kids-tray') {
    return <KidsTrayServiceDetail s={s} />
  }

  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={s.image} />

      <Section title="서비스 소개">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-pretty break-keep text-base leading-relaxed text-muted">{s.desc}</p>
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

      {s.slug === 'catering' && (
        <Section
          title="메뉴와 다회용기 구성"
          desc="기존 라라워시 공식 사이트에 안내된 메뉴입니다. 예약 전 상담을 통해 최신 구성과 가격을 확인해 주세요."
          className="bg-slate-50"
        >
          <PhotoGallery
            items={[
              {
                title: '프리미엄 세트',
                image: IMAGES.cateringPremium,
                caption: '샌드위치 2종·과일 3종·디저트 3종으로 구성합니다.',
              },
              {
                title: '이코노미 세트',
                image: IMAGES.cateringEconomy,
                caption: '간편한 행사와 회의에 맞춘 다회용 도시락 구성입니다.',
              },
              {
                title: '다회용컵 음료',
                image: IMAGES.cateringDrink,
                caption: '커피 또는 주스를 다회용컵에 함께 제공합니다.',
              },
              {
                title: '일회용기 없는 식사',
                image: IMAGES.cateringUse,
                caption: '사용 후에는 용기를 회수해 전문 세척합니다.',
              },
            ]}
            columns={2}
          />
        </Section>
      )}

      <Section title="서비스 운영방법" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
            이 서비스 견적·상담 문의
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
