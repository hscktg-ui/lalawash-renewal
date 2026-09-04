import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { FUNERAL_WASH_STEPS, HYGIENE_CHECKS, IMAGES, SOLUTIONS, FESTIVAL_PHOTO_NOTE } from '../data'
import { EXTERNAL } from '../lib/content'

export default function ServicesPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${EXTERNAL.caseVideoId}` +
    `?autoplay=1&rel=0&modestbranding=1`

  return (
    <>
      <PageHero
        eyebrow="다회용기 서비스"
        title={
          <>
            축제, 장례식장, 오피스 등
            <br />
            어디서나 쓰레기 Zero
          </>
        }
        desc="수거부터 완벽한 세척까지 알아서 해결하는 지속가능한 다회용기 솔루션입니다. 장소와 상황에 맞는 서비스를 선택해 보세요."
        image={IMAGES.sikpanMachine}
      />

      <Section
        title="라라워시 다회용기 서비스"
        desc="장례식장, 행사장, 학교, 유치원, 공공기관 등 장소와 상황에 맞는 다회용기를 이용해보세요."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover"
              />
              {s.slug === 'festival' ? (
                <p className="bg-slate-50 px-4 py-2 text-[11px] leading-relaxed text-slate-500">{FESTIVAL_PHOTO_NOTE}</p>
              ) : null}
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
                  자세히 보기 <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="이용사례 영상"
        desc="유형별 다회용기 현장 이용사례를 영상으로 확인해 보세요."
        className="bg-slate-50"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-lala-900 ring-1 ring-slate-200">
          {videoPlaying ? (
            <iframe
              title="라라워시 다회용기 이용사례"
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setVideoPlaying(true)}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <img
                src={IMAGES.video}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-lala-900 transition group-hover:scale-[1.02]">
                <Play className="h-4 w-4" /> 영상 재생
              </span>
            </button>
          )}
        </div>
        <a
          href={EXTERNAL.caseVideo}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600"
        >
          YouTube에서 크게 보기 <ArrowRight className="h-4 w-4" />
        </a>
      </Section>

      <Section
        id="wash"
        title="라라워시 다회용기 세척프로세스"
        desc="전 지점 동일 매뉴얼로 깨끗함을 전달합니다."
        className="scroll-mt-24"
      >
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FUNERAL_WASH_STEPS.map((s) => (
            <li key={s.step} className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[16/8] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-bold text-lala-500">{s.step}</p>
                <p className="mt-1 break-keep font-bold">{s.title}</p>
                <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link to="/about/cert#wash" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
          세척 설비와 단계별 설명 보기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section
        id="hygiene"
        title="라라워시 위생관리"
        desc="식약처 위생지침에 근거한 ATP·잔류세제·온도라벨 검사를 매일 실시합니다."
        className="scroll-mt-24 bg-slate-50"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {HYGIENE_CHECKS.map((h) => (
            <article key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="font-bold text-ink">{h.title}</h3>
              {h.standard ? <p className="mt-2 text-sm font-semibold text-lala-700">{h.standard}</p> : null}
              <p className="mt-2 text-pretty break-keep text-sm leading-relaxed text-muted">{h.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          정기적인 공인기관 검사와 매일 수치화된 데이터 관리로 세척 품질을 확인하고,
          기준을 통과한 다회용기만 공급합니다.
        </p>
        <Link to="/about/cert#hygiene" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lala-600">
          검사 방법과 인증 자세히 보기 <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  )
}
