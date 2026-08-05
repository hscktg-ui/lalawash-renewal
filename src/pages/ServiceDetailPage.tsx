import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CupCirculation } from '../components/NativeVisuals'
import { PhotoGallery } from '../components/PhotoGallery'
import { PublicOpsList } from '../components/PublicOpsList'
import { SOLUTIONS, SOLUTION_ALIASES, IMAGES } from '../data'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const resolved = slug ? (SOLUTION_ALIASES[slug] ?? slug) : undefined
  if (slug && SOLUTION_ALIASES[slug]) {
    return <Navigate to={`/services/${SOLUTION_ALIASES[slug]}`} replace />
  }
  const s = SOLUTIONS.find((x) => x.slug === resolved)
  if (!s) return <Navigate to="/services" replace />

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

      {s.slug === 'festival' && (
        <Section title="축제·행사 대여 및 반납 부스" className="bg-slate-50">
          <img
            src={IMAGES.festivalProducts}
            alt="축제용 다회용기 제품"
            loading="lazy"
            decoding="async"
            className="mb-8 w-full rounded-[2rem] object-cover"
          />
          <PhotoGallery
            items={[
              {
                title: '식기 반납 부스',
                image: IMAGES.festivalReturn,
                caption: '관람객이 사용한 용기를 바로 반납합니다.',
              },
              {
                title: '현장 대여 텐트',
                image: IMAGES.festivalTent,
                caption: '행사장 안에서 용기를 대여·교체합니다.',
              },
              {
                title: '축제 현장 규모',
                image: IMAGES.festivalCrowd,
                caption: '대형 축제 물량도 지점 협업으로 대응합니다.',
              },
            ]}
          />
        </Section>
      )}

      {s.slug === 'funeral' && (
        <Section title="장례식장 다회용기 · 현장" className="bg-slate-50">
          <PhotoGallery
            items={[
              {
                title: '수원연화장 운영 현장',
                image: IMAGES.funeralSite,
                caption: '빈소 내 다회용기 사용을 안내합니다.',
              },
              {
                title: '친환경 다회용 장례용기',
                image: IMAGES.dishesSet,
                caption: '접시·공기·컵·수저를 한 세트로 제공합니다.',
              },
              {
                title: '공급·회수 운영',
                image: IMAGES.deliveryTruck,
                caption: '가까운 지점에서 배송과 회수를 맡습니다.',
              },
              {
                title: '경기도의료원 수원병원',
                image: IMAGES.funeralHospital,
                caption: '공공 의료원 장례식장에서 운영 중입니다.',
              },
            ]}
            columns={2}
          />
        </Section>
      )}

      {s.slug === 'sikpan' && (
        <Section title="급식 식판 전문 세척 시스템" className="bg-slate-50">
          <img
            src={IMAGES.sikpanMachine}
            alt="식판 세척 라인"
            loading="lazy"
            decoding="async"
            className="mb-8 w-full rounded-[2rem] rounded-br-none object-cover md:rounded-tr-[6rem]"
          />
          <PhotoGallery
            items={[
              {
                title: '세척·검수 인력',
                image: IMAGES.sikpanWorker,
                caption: '전담 인력이 세척 후 상태를 확인합니다.',
              },
              {
                title: '건조·보관 랙',
                image: IMAGES.sikpanRacks,
                caption: '열풍 건조 후 지정 랙에 보관합니다.',
              },
              {
                title: '고압 세척 노즐',
                image: IMAGES.sikpanNozzles,
                caption: '식판 홈까지 고압수로 씻어냅니다.',
              },
            ]}
          />
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
