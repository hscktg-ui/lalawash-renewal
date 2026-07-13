import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { BRANCHES, IMAGES, PUBLIC_OPS } from '../data'

export default function InfraPage() {
  const [active, setActive] = useState(BRANCHES[0].name)
  const selected = BRANCHES.find((b) => b.name === active) ?? BRANCHES[0]

  return (
    <>
      <PageHero
        eyebrow="지점·인프라"
        title="가까운 곳에서 씻어 드립니다"
        desc="경기도 18개 이상 지역, 세척 사업장 20곳. 지점을 고르시면 대략적인 운영 규모를 확인하실 수 있습니다."
        image={IMAGES.center}
      />
      <Section title="지점 찾아보기" desc="지도에서 지점을 누르거나, 오른쪽 목록에서 선택해 보세요.">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-lala-50 to-lala-100 lg:col-span-3">
            <svg viewBox="0 0 100 100" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] opacity-20">
              <path
                d="M30 8 L55 5 L72 12 L85 28 L88 55 L78 82 L55 92 L32 88 L18 70 L15 40 Z"
                fill="#1e7aad"
              />
            </svg>
            {BRANCHES.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => setActive(b.name)}
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-xs font-semibold shadow transition ${
                  active === b.name
                    ? 'z-10 scale-110 bg-lala-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-lala-50'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-lala-700 p-7 text-white">
              <p className="flex items-center gap-2 text-sm text-lala-200">
                <MapPin className="h-4 w-4" /> 선택하신 지점
              </p>
              <h3 className="mt-2 text-3xl font-extrabold">{selected.name}점</h3>
              <p className="mt-3 text-lala-100">{selected.capacity}</p>
              <p className="mt-6 text-sm leading-relaxed text-lala-100">
                가까운 거리에서 수거하고, 씻어서, 다시 가져다 드립니다. 일정과 수량은 상담으로 맞춰 드립니다.
              </p>
            </div>
            <div className="mt-4 max-h-64 space-y-2 overflow-y-auto">
              {BRANCHES.map((b) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setActive(b.name)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm ${
                    active === b.name ? 'bg-lala-50 font-bold text-lala-800' : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  <span>{b.name}</span>
                  <span className="text-xs text-muted">{b.capacity}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section title="지자체에서 이렇게 쓰십니다" className="bg-slate-50">
        <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-lala-700 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">지역</th>
                <th className="px-4 py-3 font-semibold">기관</th>
                <th className="px-4 py-3 font-semibold">지점</th>
                <th className="px-4 py-3 font-semibold">규모</th>
              </tr>
            </thead>
            <tbody>
              {PUBLIC_OPS.map((r) => (
                <tr key={r.region} className="border-t border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium">{r.region}</td>
                  <td className="px-4 py-3 text-muted">{r.org}</td>
                  <td className="px-4 py-3 text-muted">{r.branch}</td>
                  <td className="px-4 py-3 font-semibold text-lala-700">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}
