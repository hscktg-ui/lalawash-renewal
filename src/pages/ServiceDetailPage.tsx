import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CupCirculation } from '../components/NativeVisuals'
import { PhotoGallery } from '../components/PhotoGallery'
import { PublicOpsList } from '../components/PublicOpsList'
import {
  FESTIVAL_CASES,
  FESTIVAL_VESSEL_TYPES,
  FUNERAL_ESG,
  FUNERAL_OPS_PILLARS,
  FUNERAL_PROBLEM,
  FUNERAL_PUBLIC_CASES,
  FUNERAL_WHY,
  SIKPAN_HYGIENE,
  SIKPAN_TYPES,
  SOLUTIONS,
  SOLUTION_ALIASES,
  IMAGES,
} from '../data'

function FuneralServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.funeralAltar} />

      <Section title="친환경 순환 시스템으로 위생과 품격을 갖춘 장례식장 운영">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.funeralMeal}
            alt="라라워시 장례식장 다회용기"
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
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

      <Section
        title="라라워시 장례용 다회용기"
        desc="환경호르몬 걱정 없이, 고온 세척이 가능한 라라워시 안심 다회용기"
        className="bg-slate-50"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.funeralTableware}
            alt="라라워시 다회용 장례용기 세트"
            loading="lazy"
            decoding="async"
            className="h-72 w-full rounded-3xl object-cover"
          />
          <div>
            {(s.featureBlocks ?? []).map((b) => (
              <article key={b.title} className="mb-6 last:mb-0">
                <h3 className="text-lg font-bold text-lala-800">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
              </article>
            ))}
            <Link
              to="/services/funeral/specs"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
            >
              다회용기 세부사양 확인하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section title={FUNERAL_WHY.title} desc={FUNERAL_WHY.body}>
        <div className="grid gap-5 md:grid-cols-3">
          {FUNERAL_ESG.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 p-6">
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
        title={FUNERAL_PROBLEM.title}
        desc={FUNERAL_PROBLEM.body}
        className="bg-slate-50"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {FUNERAL_PROBLEM.perParlor.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-lala-600">{stat.label}</p>
              <p className="mt-2 text-2xl font-extrabold text-ink">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FUNERAL_PROBLEM.national.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-lala-900 p-6 text-white">
              <p className="text-sm text-lala-200">{stat.label}</p>
              <p className="mt-2 text-2xl font-extrabold">{stat.value}</p>
              <p className="mt-1 text-xs text-lala-300">전국 연간 기준</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="장례식장 맞춤 운영 시스템과 공급 관리 체계"
        desc="라라워시는 장례식장 운영 일정과 조문객 규모에 맞춰 다회용기 공급, 회수, 전문 세척 재공급까지 현장 중심의 체계적인 운영 시스템을 제공합니다."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {FUNERAL_OPS_PILLARS.map((pillar) => (
            <article key={pillar.title} className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <img
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          경기도 15개 지역 21개 세척장을 기반으로 장례식장 운영일정에 맞춰 안정적으로 공급합니다.
        </p>
      </Section>

      <Section title="장례식장 다회용기 · 현장" className="bg-slate-50">
        <PhotoGallery
          items={[
            {
              title: '친환경 다회용 장례용기',
              image: IMAGES.funeralWareFlower,
              caption: '빈소 품격에 맞춘 네이비·화이트 식기입니다.',
            },
            {
              title: '조문객 식사 현장',
              image: IMAGES.funeralMeal,
              caption: '빈소 식당에서 다회용기로 식사를 제공합니다.',
            },
            {
              title: '표준 1인 구성 세팅',
              image: IMAGES.funeralSetTable,
              caption: '밥·국·찬기·수저·컵까지 1인 구성으로 맞춥니다.',
            },
            {
              title: '전문 세척 랙',
              image: IMAGES.funeralRack,
              caption: '고온·고압 세척이 가능한 전용 용기입니다.',
            },
          ]}
          columns={2}
        />
      </Section>

      <Section
        title="장례용기 서비스 운영방법"
        desc="장례식장 운영 일정에 맞춘 다회용기 공급부터 회수, 전문 세척, 재공급까지 체계적인 순환 서비스를 제공합니다."
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

      <Section
        title="공공 장례식장 운영 사례"
        desc="경기도 공공 장례식장에서 다회용기를 연속 운영하고 있습니다."
        className="bg-slate-50"
      >
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

      <Section title="견적 문의">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">장례식장 다회용기 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">빈소 수·예상 조문객·운영 일정을 알려주시면 맞춰 안내드립니다.</p>
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

function FestivalServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  const casesLoop = [...FESTIVAL_CASES, ...FESTIVAL_CASES]
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.festivalFood} />

      <Section title="라라워시 축제 및 행사 다회용기">
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src={IMAGES.festivalFood}
            alt="음식이 담긴 라라워시 다회용기"
            loading="lazy"
            decoding="async"
            className="h-80 w-full rounded-3xl object-cover"
          />
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

      <Section
        title="저탄소 순환시스템"
        desc="행사장소와 가까운 지점 연계로 빠른 수거·세척·재공급의 순환이 이루어집니다. 15개 지역 21개 지점 네트워크로 대형축제도 안정적으로 대응합니다."
        className="bg-slate-50"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: '지역', value: '15개' },
            { label: '세척 지점', value: '21개' },
            { label: '순환', value: '수거·세척·재공급' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-lala-600">{stat.label}</p>
              <p className="mt-2 text-xl font-extrabold text-ink">{stat.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="다회용기 종류"
        desc="행사 음식에 맞춰 접시류·면기류·다회용컵·커트러리·기타 용기를 선택합니다."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FESTIVAL_VESSEL_TYPES.map((t) => (
            <div
              key={t}
              className="rounded-2xl border-t-2 border-lala-600 bg-slate-50 px-5 py-6 text-center font-bold text-ink"
            >
              {t}
            </div>
          ))}
          <figure className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
            <img
              src={IMAGES.festivalReturn}
              alt="축제 다회용기 반납부스 (AI 임시 시각 · 제작 완료 후 실사 교체)"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-center text-xs text-slate-500">
              반납부스 · AI 임시 시각 (제작·실사 후 교체)
            </figcaption>
          </figure>
        </div>
        <Link
          to="/services/festival/specs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white hover:bg-lala-700"
        >
          다회용기 세부사양 확인하기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section
        title="서비스 운영방법"
        desc="행사 일정에 맞춘 상담부터 공급·회수·정산까지 지원합니다."
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
      </Section>

      <Section
        title="축제 및 행사 운영사례"
        desc="현장 분위기는 AI 임시 컷으로 안내합니다. 지점 실사·소식 포스팅이 준비되면 교체됩니다."
      >
        <div className="overflow-hidden">
          <div className="lala-marquee-track flex gap-3">
            {casesLoop.map((c, i) => {
              const card = (
                <span className="inline-flex w-52 shrink-0 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="px-3 py-3 text-center">
                    <span className="block text-sm font-semibold text-ink">{c.name}</span>
                    <span className="mt-1 block text-[10px] text-slate-400">AI 임시 · 실사 교체 예정</span>
                    {c.noticeId ? (
                      <span className="mt-1 block text-xs font-bold text-lala-600">소식 보기 →</span>
                    ) : null}
                  </span>
                </span>
              )
              return c.noticeId ? (
                <Link key={`${c.name}-${i}`} to={`/notice/${c.noticeId}`} className="shrink-0">
                  {card}
                </Link>
              ) : (
                <span key={`${c.name}-${i}`} className="shrink-0">
                  {card}
                </span>
              )
            })}
          </div>
        </div>
      </Section>

      <Section title="견적 문의" className="bg-slate-50">
        <div className="rounded-2xl bg-gradient-to-br from-lala-800 to-lala-600 p-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-extrabold">축제·행사 다회용기 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">행사 일정·인원·필요 용기 종류를 알려주시면 맞춰 안내드립니다.</p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-800 md:mt-0"
          >
            이 서비스 견적·상담 문의
          </Link>
        </div>
      </Section>

      <Section title="다른 서비스도 있어요">
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

function SikpanServiceDetail({
  s,
}: {
  s: (typeof SOLUTIONS)[number]
}) {
  return (
    <>
      <PageHero eyebrow="다회용기 서비스" title={s.title} desc={s.short} image={IMAGES.sikpanMachine} />

      <Section title="라라워시 식판">
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
                    className="aspect-square w-full object-cover"
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
          {['ATP검사', '잔류세제검사', '온도라벨 검사'].map((label) => (
            <div key={label} className="rounded-2xl border-t-2 border-lala-600 bg-white p-6">
              <p className="font-bold text-ink">{label}</p>
              <p className="mt-2 text-sm text-muted">매일 실시 · 기준 수치로 체계 관리</p>
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

      {s.cases && s.cases.length > 0 && (
        <Section title="운영사례" className="bg-slate-50">
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
            <p className="text-xl font-extrabold">식판 대여·세척 견적 문의</p>
            <p className="mt-2 text-sm text-lala-100">식판 수량·수거·공급 일정을 알려주시면 맞춰 안내드립니다.</p>
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

      {s.slug === 'cup' && (
        <Section title="다회용컵 순환 흐름" className="bg-slate-50">
          <CupCirculation />
          <figure className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 md:flex">
            <img
              src={IMAGES.activityCup}
              alt="경기도청 청사 카페에서 사용 중인 라라워시 다회용컵"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:w-1/2"
            />
            <figcaption className="flex flex-col justify-center gap-2 p-6 md:w-1/2 md:p-8">
              <p className="text-sm font-bold text-lala-600">운영 현장</p>
              <p className="text-pretty break-keep text-lg font-extrabold text-ink">
                경기도청 청사 카페 다회용컵
              </p>
              <p className="text-pretty break-keep text-sm leading-relaxed text-muted">
                청사 카페에서 사용한 컵은 라라워시 반납함에 모아 직접 수거하고, 6단계 세척을 거쳐 다시
                공급합니다.
              </p>
            </figcaption>
          </figure>
        </Section>
      )}

      {s.slug === 'kids-tray' && (
        <Section title="유아·학교 식판 세척" className="bg-slate-50">
          <PhotoGallery
            items={[
              {
                title: '유아식판 건조 랙',
                image: IMAGES.sikpanRacks,
                caption: '원별 수량에 맞춰 건조·분류합니다.',
              },
              {
                title: '세척 라인',
                image: IMAGES.sikpanMachine,
                caption: '초순수 고온수로 6단계 세척합니다.',
              },
            ]}
            columns={2}
          />
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

      {s.slug === 'cup' && (
        <Section title="지자체·공공 운영 현황" className="bg-slate-50" desc="공공기관 다회용컵 현장 운영 규모입니다.">
          <PublicOpsList />
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
