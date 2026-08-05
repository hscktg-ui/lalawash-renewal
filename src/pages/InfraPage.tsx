import { useState } from 'react'
import { ExternalLink, MapPin, Phone } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { BranchNetwork } from '../components/BranchNetwork'
import { BRANCHES, CONTACT, IMAGES, NETWORK, PUBLIC_OPS } from '../data'

export default function InfraPage() {
  const [active, setActive] = useState(BRANCHES[0].name)
  const selected = BRANCHES.find((b) => b.name === active) ?? BRANCHES[0]

  return (
    <>
      <PageHero
        eyebrow="라라워시 · 지점"
        title="경기도 최대 규모, 15개 지역에 21개의 전문세척장 인프라"
        desc="가장 가까운 곳에서 가장 신속하게, 라라워시의 친환경 네트워크가 움직입니다."
        image={IMAGES.brandBuilding}
      />

      <Section
        title="왜 지점 네트워크인가"
        desc={`대규모 지역 축제부터 관공서, 기업의 정기 서비스까지 흔들림 없는 안정적인 다회용기 순환 솔루션을 제공합니다. (경기도 ${NETWORK.regions}개 지역 · ${NETWORK.sites}개 지점)`}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: '물류비는 줄이고, 신속함은 더하고',
              desc: '15개 지역에 촘촘히 분포된 세척장을 통해 수거·배송 동선을 최소화합니다. 탄소 배출을 줄이기 위한 서비스가 이동 과정에서 탄소를 더하지 않도록, 가장 가까운 거점에서 찾아갑니다.',
            },
            {
              title: '대형 축제와 기업 대량 수주도 안정적으로',
              desc: '단일 세척장으로 감당하기 힘든 대형 지역 축제나 대기업 사내 카페의 물량도 21개 세척장의 유기적 협업으로 딜레이 없이 소화합니다.',
            },
            {
              title: '어디서나 동일한 안심 청결',
              desc: '전 지점 라라워시 6단계 안심 세척 매뉴얼과 ATP 오염도 측정을 동일하게 적용합니다. 경기도 어느 지역에서든 최고 수준의 청결함을 경험하실 수 있습니다.',
            },
          ].map((x) => (
            <article key={x.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-lala-800">{x.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{x.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          부천 지역 세척장 4곳, 수원 지역 세척장 2곳을 운영합니다. 주소 미확정 지점은 본사(
          {CONTACT.phone})로 문의해 주세요.
        </p>
      </Section>

      <Section title="지점 분포" desc="경기도 4개 권역에 세척장을 나눠 배치했습니다." className="bg-slate-50">
        <BranchNetwork active={active} onSelect={setActive} />
      </Section>

      <Section title="지점 찾아보기" desc="목록에서 지점을 선택하면 주소·전화·취급 품목을 확인할 수 있습니다.">
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
                  <span>{b.name}점</span>
                  {b.pendingAddress && (
                    <span className={`text-[10px] ${active === b.name ? 'text-lala-100' : 'text-slate-400'}`}>
                      주소 예정
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
                <p className="mt-2 text-sm font-medium text-lala-700">{selected.note}</p>
              )}
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-500">주소</dt>
                  <dd className="mt-1 text-ink">{selected.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">전화</dt>
                  <dd className="mt-1">
                    {selected.pendingAddress ? (
                      <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 font-semibold text-lala-700">
                        <Phone className="h-4 w-4" />
                        본사 {CONTACT.phone}
                      </a>
                    ) : (
                      <a
                        href={`tel:${selected.tel.split(',')[0].trim()}`}
                        className="inline-flex items-center gap-2 font-semibold text-lala-700"
                      >
                        <Phone className="h-4 w-4" />
                        {selected.tel}
                      </a>
                    )}
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
                <th className="px-4 py-3 font-semibold">운영</th>
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
