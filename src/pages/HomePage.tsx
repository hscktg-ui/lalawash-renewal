import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  FlaskConical,
  PartyPopper,
  ShieldCheck,
  Thermometer,
  UtensilsCrossed,
} from 'lucide-react'
import {
  BRANCHES,
  BRAND,
  CONTACT,
  FAQ,
  IMAGES,
  IMPACT,
  NETWORK,
  PUBLIC_OPS,
  SOLUTIONS,
  WASH_STEPS,
} from '../data'
import { EXTERNAL } from '../lib/content'
import { BlogSection } from '../components/BlogSection'
import { BranchMapFrame } from '../components/BranchMapFrame'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { ContactInquiryForm } from '../components/ContactInquiryForm'
import { PartnerLogoWall, PortfolioGallery, YearlyImpactSection } from '../components/TrustSections'

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return n
}

function ImpactStat({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <div>
      <p className="text-4xl font-extrabold tracking-tight md:text-5xl">{n.toLocaleString('ko-KR')}</p>
      <p className="mt-1 text-sm font-semibold text-lala-300">{suffix}</p>
      <p className="mt-3 text-sm text-slate-400">{label}</p>
    </div>
  )
}

const SOLUTION_ICONS = {
  sikpan: UtensilsCrossed,
  public: Building2,
  festival: PartyPopper,
  funeral: ShieldCheck,
} as const

const HYGIENE_TESTS = [
  { title: 'ATP 오염도 검사', desc: '출고 전에 수치로 확인합니다', icon: FlaskConical },
  { title: '고온 살균', desc: '100℃ 이상에서 살균합니다', icon: Thermometer },
  { title: '초순수(UPW) 세척', desc: '더 깨끗한 물로 씻습니다', icon: Droplets },
  { title: '전수 출고 검사', desc: '빠짐없이 확인한 뒤 보냅니다', icon: ShieldCheck },
]

export default function HomePage() {
  const [impactOn, setImpactOn] = useState(false)
  const impactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = impactRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setImpactOn(true), {
      threshold: 0.2,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <img
          src={IMAGES.hero}
          alt="라라워시 다회용기 현장"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,45,69,0.94)_0%,rgba(30,122,173,0.55)_55%,rgba(15,45,69,0.35)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:pb-24">
          <p className="text-sm font-semibold tracking-[0.12em] text-lala-200">{BRAND.slogan}</p>
          <h1 className="mt-4 max-w-4xl font-extrabold tracking-tight">
            <span className="block text-4xl leading-tight md:text-6xl lg:text-7xl">
              {BRAND.name}
            </span>
            <span className="mt-4 block max-w-2xl text-xl font-medium leading-snug text-lala-50 md:text-2xl">
              가까운 곳에서, 깨끗하게 순환합니다.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-lala-50/90 md:text-lg">
            다회용기를 빌려드리고, 쓰신 뒤 수거해 씻어 다시 가져다 드립니다.
            공공기관·급식·축제·장례식장까지, 경기도 {NETWORK.regions}개 지역·{NETWORK.sites}곳
            세척망으로 돕습니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-lala-900"
            >
              상담·견적 문의하기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white"
            >
              서비스 안내 보기
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-8">
            {[
              [`${NETWORK.sites}곳`, '세척 사업장'],
              [`${NETWORK.regions}개`, '운영 지역'],
              [`${NETWORK.washSteps}단계`, '안전 세척'],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-extrabold md:text-3xl">{v}</dt>
                <dd className="mt-1 text-xs text-lala-200 md:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#0b1f2e] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-300">함께 만든 변화</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            지금까지 이렇게 함께했습니다
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            일회용품을 줄이며 쌓아 온 결과입니다. 탄소 계산은 서울시 다회용기 자료를 참고했습니다.
          </p>
          <div
            ref={impactRef}
            className="mt-14 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {IMPACT.map((item) => (
              <ImpactStat key={item.label} {...item} active={impactOn} />
            ))}
          </div>
          <p className="mt-10 text-xs text-slate-500">
            같은 다회용컵을 3번만 써도 일회용보다 환경에 이롭고, 최대 약 75%까지 탄소를 줄일 수 있습니다.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <img src={IMAGES.center} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-lala-50" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">가까운 세척망</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            멀리 보내지 않아도,
            <br />
            근처에서 씻습니다
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            경기도에 세척 사업장을 촘촘히 두어, 수거와 재공급이 빨라집니다.
            공공·축제·장례·급식 모두 안정적으로 맞출 수 있습니다.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { v: String(NETWORK.sites), u: '곳', l: '세척 사업장', s: '경기도를 중심으로' },
              { v: String(NETWORK.regions), u: '개', l: '서비스 지역', s: '가까운 곳에서 순환' },
              { v: '2,000', u: '개/일', l: '지점별 최대 처리', s: '최소 약 100개부터' },
            ].map((x) => (
              <div key={x.l} className="border-l-4 border-lala-500 bg-white/80 px-6 py-8 shadow-sm">
                <p className="text-5xl font-extrabold tracking-tight text-lala-800 md:text-6xl">
                  {x.v}
                  <span className="ml-1 text-xl font-bold text-lala-500">{x.u}</span>
                </p>
                <p className="mt-3 text-lg font-bold text-ink">{x.l}</p>
                <p className="mt-1 text-sm text-muted">{x.s}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-4 text-sm font-bold text-lala-700">지자체에서 이렇게 쓰고 계세요</p>
              <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-lala-800 text-white">
                    <tr>
                      <th className="px-4 py-3">지역</th>
                      <th className="px-4 py-3">기관</th>
                      <th className="px-4 py-3">규모</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {PUBLIC_OPS.slice(0, 5).map((r) => (
                      <tr key={r.region} className="border-t border-slate-100">
                        <td className="px-4 py-3 font-medium">{r.region}</td>
                        <td className="px-4 py-3 text-muted">{r.org}</td>
                        <td className="px-4 py-3 font-semibold text-lala-700">{r.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="/infra" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                전체 지점·운영 현황 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <BranchMapFrame
                src={IMAGES.centerMapAlt}
                alt="라라워시 지점 위치도"
                caption={`공식 ${NETWORK.sites}곳 · 연락처 공개 ${BRANCHES.length}곳`}
                className="h-full"
                imgClassName="max-h-[280px] md:max-h-[320px]"
              />
              <div className="mt-3 px-1">
                <Link to="/infra" className="inline-flex text-sm font-bold text-lala-600">
                  지점 상세 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1f2e] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-300">서비스 안내</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">필요하신 현장에 맞춰 드립니다</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            급식, 공공기관, 축제, 장례—쓰시는 곳이 다르면 준비도 다릅니다. 해당하는 안내를 골라 보세요.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SOLUTIONS.map((s) => {
              const Icon = SOLUTION_ICONS[s.slug as keyof typeof SOLUTION_ICONS]
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group grid overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 md:grid-cols-[1.1fr_1fr]"
                >
                  <img src={s.image} alt={s.title} className="h-48 w-full object-cover md:h-full" />
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <Icon className="h-6 w-6 text-lala-300" />
                    <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-lala-200">
                      자세히 보기 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-lala-600">위생·세척</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                깨끗이 씻고,
                <br />
                확인까지 합니다
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                공공기관·급식 현장에서 안심하실 수 있도록, 6단계 세척과 검사로 관리합니다.
                세부 공정은 아래에 적어 두었습니다.
              </p>
            </div>
            <img src={IMAGES.process} alt="세척 공정" className="h-56 w-full rounded-2xl object-cover md:h-64" />
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HYGIENE_TESTS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-slate-200 bg-lala-50/50 p-5">
                <t.icon className="h-5 w-5 text-lala-600" />
                <p className="mt-3 font-bold">{t.title}</p>
                <p className="mt-1 text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WASH_STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-xl bg-slate-50 px-5 py-4">
                <span className="text-sm font-extrabold text-lala-500">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-lala-600">운영 실적</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">이미 이렇게 쓰이고 있습니다</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: '공공·기관',
                img: IMAGES.service,
                points: ['경기도청 사업 선정', '하루 최대 약 2,000컵', '용인시청 주 약 3,500컵'],
              },
              {
                title: '축제·행사',
                img: IMAGES.catering,
                points: ['2022년 10건 → 2024년 50건', '누적 약 23.4만 개', '서울재즈 등 대형 행사'],
              },
              {
                title: '장례·의료',
                img: IMAGES.funeral,
                points: ['경기도의료원 운영', '수원연화장 시스템', '끊김 없는 공급'],
              },
            ].map((b) => (
              <article key={b.title} className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                <img src={b.img} alt={b.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-lala-800">{b.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {b.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lala-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-lala-900 px-8 py-10 text-white md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold text-lala-300">왜 다회용기인가요?</p>
              <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">3번만 써도 환경이 달라집니다</h3>
              <p className="mt-3 max-w-xl text-sm text-slate-300">
                하루 한 잔의 선택이 쌓이면, 탄소를 크게 줄일 수 있습니다. 자세한 숫자는 성과 페이지에서
                확인해 보세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/impact" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-900">
                성과 자세히 보기
              </Link>
              <CompanyProfileDownload variant="dark" label="소개 자료 받기" />
            </div>
          </div>
        </div>
      </section>

      <YearlyImpactSection dark />
      <PortfolioGallery />
      <PartnerLogoWall />

      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold">자주 묻는 질문</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <p className="font-bold text-lala-800">{f.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lala-800 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-lala-200">문의</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">편하게 물어보세요</h2>
            <p className="mt-4 text-lala-100">
              {CONTACT.phone} · {CONTACT.hours}
            </p>
            <p className="mt-2 text-sm text-lala-200">{CONTACT.hq}</p>
            <ul className="mt-8 space-y-2 text-sm text-lala-100">
              <li>· 공공기관·지자체 정기 운영</li>
              <li>· 축제·행사 대여와 부스</li>
              <li>· 급식 식판 / 장례식장</li>
              <li>· 가맹·지점 상담</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={EXTERNAL.reserveForm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
              >
                사용 예약하기
              </a>
              <CompanyProfileDownload variant="dark" label="소개 자료 받기" />
            </div>
          </div>
          <ContactInquiryForm variant="home" />
        </div>
      </section>

      <BlogSection />
    </>
  )
}
