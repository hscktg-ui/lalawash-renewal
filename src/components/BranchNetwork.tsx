import { MapPin } from 'lucide-react'
import { BRANCHES, BRANCH_REGIONS, NETWORK } from '../data'

type Props = {
  active: string
  onSelect: (name: string) => void
}

/** 경기도 지점 분포 — 지도 이미지 대신 권역별 지점 배치를 코드로 렌더링한다 */
export function BranchNetwork({ active, onSelect }: Props) {
  const openBranches = BRANCHES.filter((b) => !b.pendingAddress).length

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8">
      <dl className="grid gap-4 sm:grid-cols-3">
        {[
          { label: '운영 지역', value: `${NETWORK.regions}개` },
          { label: '전문 세척장', value: `${NETWORK.sites}개` },
          { label: '연락처 공개 지점', value: `${openBranches}개` },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-lala-50 px-5 py-4">
            <dt className="text-xs font-semibold text-lala-700">{s.label}</dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {BRANCH_REGIONS.map((group) => {
          const branches = group.names
            .map((n) => BRANCHES.find((b) => b.name === n))
            .filter((b): b is (typeof BRANCHES)[number] => Boolean(b))

          return (
            <section
              key={group.region}
              className="flex flex-col rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
            >
              <header className="flex items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-1.5 font-bold text-lala-800">
                  <MapPin className="h-4 w-4 text-lala-500" aria-hidden />
                  {group.region}
                </h3>
                <span className="text-xs font-semibold text-slate-500">{branches.length}개 지점</span>
              </header>
              <p className="mt-1 text-xs text-muted">{group.area}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {branches.map((b) => (
                  <li key={b.name}>
                    <button
                      type="button"
                      onClick={() => onSelect(b.name)}
                      aria-pressed={active === b.name}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        active === b.name
                          ? 'bg-lala-600 text-white shadow-sm'
                          : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-lala-50 hover:text-lala-700'
                      }`}
                    >
                      {b.name}
                      {b.pendingAddress && (
                        <span
                          className={active === b.name ? 'text-lala-100' : 'text-slate-400'}
                          title="주소 준비 중"
                        >
                          {' '}
                          ·
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      <p className="mt-5 text-xs text-slate-500">
        지점명을 선택하면 아래에서 주소·전화·취급 품목을 확인할 수 있습니다. 이름 옆 점(·)은 주소
        준비 중인 지점으로, 본사에서 안내해 드립니다.
      </p>
    </div>
  )
}
