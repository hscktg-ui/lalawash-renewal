import { PUBLIC_OPS } from '../data'

export function PublicOpsList() {
  return (
    <>
      <div className="grid gap-3 md:hidden">
        {PUBLIC_OPS.map((row) => (
          <article key={row.region} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-lala-600">{row.region}</p>
                <h3 className="mt-1 break-keep font-bold text-ink">{row.org}</h3>
              </div>
              <p className="shrink-0 text-sm font-bold text-lala-700">{row.detail}</p>
            </div>
            <dl className="mt-4 border-t border-slate-100 pt-3 text-sm">
              <div className="grid grid-cols-[4rem_1fr] gap-2">
                <dt className="font-semibold text-slate-500">담당 지점</dt>
                <dd className="text-slate-700">{row.branch}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-2xl ring-1 ring-slate-200 md:block">
        <table className="min-w-full text-left text-sm">
          <caption className="sr-only">지자체·공공기관 다회용컵 운영 현황</caption>
          <thead className="bg-lala-700 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">지역</th>
              <th scope="col" className="px-4 py-3 font-semibold">기관</th>
              <th scope="col" className="px-4 py-3 font-semibold">담당 지점</th>
              <th scope="col" className="px-4 py-3 font-semibold">운영 규모</th>
            </tr>
          </thead>
          <tbody>
            {PUBLIC_OPS.map((row, index) => (
              <tr key={row.region} className={`border-t border-slate-100 ${index % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                <td className="whitespace-nowrap px-4 py-3 font-medium">{row.region}</td>
                <td className="break-keep px-4 py-3 text-muted">{row.org}</td>
                <td className="break-keep px-4 py-3 text-muted">{row.branch}</td>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-lala-700">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
