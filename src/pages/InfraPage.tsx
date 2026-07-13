import { useState } from 'react'
import { ExternalLink, MapPin, Phone } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { BRANCHES, IMAGES, PUBLIC_OPS } from '../data'

export default function InfraPage() {
  const [active, setActive] = useState(BRANCHES[0].name)
  const selected = BRANCHES.find((b) => b.name === active) ?? BRANCHES[0]

  return (
    <>
      <PageHero
        eyebrow="지점·인프라"
        title="라라워시 지점 안내"
        desc="경기도 곳곳의 세척 센터에서 가까운 서비스를 제공합니다. 기존 홈페이지와 같은 지점 위치도를 사용합니다."
        image={IMAGES.center}
      />

      <Section title="지점 위치" desc="시흥작은자리·부천은 규모 세척장으로 자동화 라인을 갖추고 있으며, 부천나눔 2호점(2026.6)이 추가로 문을 열었습니다.">
        <div className="overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-200">
          <img
            src={IMAGES.centerMap}
            alt="라라워시 경기도 지점 위치도"
            className="mx-auto h-auto w-full max-w-4xl object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          출처: 기존 홈페이지 지점 안내 이미지 (lalawash.co.kr/center)
        </p>
      </Section>

      <Section title="지점 찾아보기" desc="목록에서 지점을 선택하면 주소·전화·취급 품목을 확인할 수 있습니다." className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
              {BRANCHES.map((b) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setActive(b.name)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                    active === b.name
                      ? 'bg-lala-600 font-bold text-white shadow-sm'
                      : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-lala-50'
                  }`}
                >
                  <span>
                    {b.name}점
                    {b.highlight ? ' ·' : ''}
                  </span>
                  {b.highlight && (
                    <span className={`text-[10px] ${active === b.name ? 'text-lala-100' : 'text-violet-600'}`}>
                      규모
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <p className="flex items-center gap-2 text-sm font-semibold text-lala-600">
                <MapPin className="h-4 w-4" /> 선택하신 지점
              </p>
              <h3 className="mt-2 text-3xl font-extrabold text-ink">라라워시 {selected.name}점</h3>
              {selected.note && (
                <p className="mt-2 text-sm font-medium text-violet-700">{selected.note}</p>
              )}
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-500">주소</dt>
                  <dd className="mt-1 text-ink">{selected.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">전화</dt>
                  <dd className="mt-1">
                    <a href={`tel:${selected.tel.split(',')[0].trim()}`} className="inline-flex items-center gap-2 font-semibold text-lala-700">
                      <Phone className="h-4 w-4" />
                      {selected.tel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">취급</dt>
                  <dd className="mt-1 text-ink">{selected.services}</dd>
                </div>
              </dl>
              {selected.map && (
                <a
                  href={selected.map}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-2.5 text-sm font-bold text-white"
                >
                  네이버 지도에서 보기 <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </article>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <img
                src={IMAGES.centerMapAlt}
                alt="라라워시 지점 위치 보조 지도"
                className="w-full object-contain bg-slate-50"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="지자체에서 이렇게 쓰십니다">
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
