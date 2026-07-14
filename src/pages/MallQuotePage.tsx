import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Plus, Printer, Trash2 } from 'lucide-react'
import { BrandMark } from '../components/BrandMark'
import {
  MALL_APPAREL,
  MALL_QUOTE_ISSUER,
  MALL_SUPPLIES,
} from '../data/mallProducts'
import { downloadQuotePdf } from '../lib/quotePdf'

type PayMethod = '현금' | '카드' | '계좌이체' | '미정'

type LineItem = {
  id: string
  name: string
  qty: number
  unitPrice: number
  /** 세제: 참고가 고정 가능 / 단체복: 직접 입력 */
  priceLocked?: boolean
}

function won(n: number) {
  return n.toLocaleString('ko-KR')
}

function makeQuoteNo() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const t = String(d.getHours()).padStart(2, '0') + String(d.getMinutes()).padStart(2, '0')
  return `LW-${y}${m}${day}-${t}`
}

function todayLabel() {
  return new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function MallQuotePage() {
  const [client, setClient] = useState('')
  const [contact, setContact] = useState('')
  const [payMethod, setPayMethod] = useState<PayMethod>('카드')
  const [note, setNote] = useState('')
  const [quoteNo] = useState(makeQuoteNo)
  const [paidAmount, setPaidAmount] = useState<string>('')
  const [lines, setLines] = useState<LineItem[]>([])
  const [pdfBusy, setPdfBusy] = useState(false)

  const subtotal = useMemo(
    () => lines.reduce((sum, row) => sum + row.qty * row.unitPrice, 0),
    [lines],
  )

  const paid = paidAmount.trim() === '' ? subtotal : Number(paidAmount.replace(/,/g, '')) || 0

  function addSupply(productId: string) {
    const p = MALL_SUPPLIES.find((x) => x.id === productId)
    if (!p) return
    setLines((prev) => {
      const found = prev.find((r) => r.id === `s-${p.id}`)
      if (found) {
        return prev.map((r) => (r.id === found.id ? { ...r, qty: r.qty + 1 } : r))
      }
      return [
        ...prev,
        {
          id: `s-${p.id}`,
          name: p.name,
          qty: 1,
          unitPrice: p.price,
          priceLocked: false,
        },
      ]
    })
  }

  function addApparel(productId: string) {
    const p = MALL_APPAREL.find((x) => x.id === productId)
    if (!p) return
    setLines((prev) => {
      const found = prev.find((r) => r.id === `a-${p.id}`)
      if (found) {
        return prev.map((r) => (r.id === found.id ? { ...r, qty: r.qty + 1 } : r))
      }
      return [
        ...prev,
        {
          id: `a-${p.id}`,
          name: p.name,
          qty: 1,
          unitPrice: p.price,
          priceLocked: false,
        },
      ]
    })
  }

  function addCustom() {
    setLines((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        name: '',
        qty: 1,
        unitPrice: 0,
      },
    ])
  }

  function updateLine(id: string, patch: Partial<LineItem>) {
    setLines((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  function removeLine(id: string) {
    setLines((prev) => prev.filter((r) => r.id !== id))
  }

  function handlePrint() {
    window.print()
  }

  async function handleSavePdf() {
    setPdfBusy(true)
    try {
      await downloadQuotePdf('quote-sheet', `Lalawash_Quote_${quoteNo}`)
    } catch (err) {
      console.error('[quote pdf]', err)
      const msg = err instanceof Error ? err.message : '알 수 없는 오류'
      alert(`PDF 저장에 실패했습니다.\n(${msg})\n\n인쇄 버튼으로도 PDF 저장이 가능합니다.`)
    } finally {
      setPdfBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-slate-100">
      {/* 화면용 툴바 — 인쇄 시 숨김 */}
      <header className="print:hidden border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <BrandMark to="/" size="sm" />
            <p className="mt-1 text-sm font-semibold text-lala-600">회원사 전용몰 견적서</p>
            <p className="text-xs text-muted">로그인 없이 누구나 작성·인쇄·PDF 저장할 수 있습니다.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={MALL_QUOTE_ISSUER.mallUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              전용몰 바로가기
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full border border-lala-600 bg-white px-4 py-2 text-sm font-bold text-lala-700"
            >
              <Printer className="h-4 w-4" /> 인쇄
            </button>
            <button
              type="button"
              onClick={() => void handleSavePdf()}
              disabled={pdfBusy}
              className="inline-flex items-center gap-2 rounded-full bg-lala-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-60"
            >
              <Download className="h-4 w-4" /> {pdfBusy ? 'PDF 만드는 중…' : 'PDF 저장'}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-6 px-5 py-8 lg:grid-cols-[1fr_1.05fr] print:block print:max-w-none print:px-0 print:py-0">
        {/* 입력 패널 */}
        <section className="print:hidden space-y-5">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">수신·결제 정보</h2>
            <label className="mt-4 block text-sm font-semibold">
              회원사 · 기관명
              <input
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="예: ○○점 / ○○자활센터"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              />
            </label>
            <label className="mt-3 block text-sm font-semibold">
              담당 · 연락처 (선택)
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="담당자명 / 전화"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              />
            </label>
            <label className="mt-3 block text-sm font-semibold">
              결제 수단
              <select
                value={payMethod}
                onChange={(e) => setPayMethod(e.target.value as PayMethod)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              >
                <option>현금</option>
                <option>카드</option>
                <option>계좌이체</option>
                <option>미정</option>
              </select>
            </label>
            <label className="mt-3 block text-sm font-semibold">
              결제 금액 (비우면 합계와 동일)
              <input
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
                placeholder={`예: ${won(subtotal)}`}
                inputMode="numeric"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              />
            </label>
            <label className="mt-3 block text-sm font-semibold">
              비고 (선택)
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder="납품 희망일, 배송 메모 등"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              />
            </label>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">세제 · 소모품 담기</h2>
            <p className="mt-1 text-xs text-muted">전용몰 판매가를 참고가로 넣었습니다. 단가는 수정할 수 있습니다.</p>
            <div className="mt-3 grid gap-2">
              {MALL_SUPPLIES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => addSupply(p.id)}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-left text-sm hover:border-lala-300 hover:bg-lala-50"
                >
                  <span className="font-medium text-ink">{p.name}</span>
                  <span className="shrink-0 text-xs font-bold text-lala-700">{won(p.price)}원</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">단체복</h2>
            <p className="mt-1 text-xs text-muted">
              티셔츠·조끼는 참고가를 넣었습니다. 단가는 수정할 수 있고, 기타 품목도 추가할 수 있습니다.
            </p>
            <div className="mt-3 grid gap-2">
              {MALL_APPAREL.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => addApparel(p.id)}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-left text-sm hover:border-lala-300 hover:bg-lala-50"
                >
                  <span className="font-medium text-ink">{p.name}</span>
                  <span className="shrink-0 text-xs font-bold text-lala-700">{won(p.price)}원</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={addCustom}
              className="mt-3 inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700"
            >
              <Plus className="h-3.5 w-3.5" /> 기타 품목 (금액 직접 입력)
            </button>
          </div>

          {lines.length > 0 && (
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold">담은 품목 수정</h2>
              <ul className="mt-3 space-y-3">
                {lines.map((row) => (
                  <li key={row.id} className="rounded-xl border border-slate-100 p-3">
                    <input
                      value={row.name}
                      onChange={(e) => updateLine(row.id, { name: e.target.value })}
                      placeholder="품목명"
                      className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-sm font-semibold"
                    />
                    <div className="mt-2 grid grid-cols-[1fr_1fr_auto] gap-2">
                      <label className="text-xs font-semibold text-slate-600">
                        수량
                        <input
                          type="number"
                          min={1}
                          value={row.qty}
                          onChange={(e) =>
                            updateLine(row.id, { qty: Math.max(1, Number(e.target.value) || 1) })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-200 px-2 py-2 text-sm"
                        />
                      </label>
                      <label className="text-xs font-semibold text-slate-600">
                        단가(원)
                        <input
                          type="number"
                          min={0}
                          value={row.unitPrice || ''}
                          placeholder="직접 입력"
                          onChange={(e) =>
                            updateLine(row.id, { unitPrice: Math.max(0, Number(e.target.value) || 0) })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-200 px-2 py-2 text-sm"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => removeLine(row.id)}
                        className="mt-5 self-start rounded-lg p-2 text-red-600 hover:bg-red-50"
                        aria-label="삭제"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-right text-xs font-bold text-lala-700">
                      금액 {won(row.qty * row.unitPrice)}원
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-center text-xs text-muted">
            <Link to="/" className="font-semibold text-lala-700">
              라라워시 홈
            </Link>
            {' · '}
            견적서는 참고용이며, 실제 결제는 회원사 전용몰에서 진행합니다.
          </p>
        </section>

        {/* 견적서 미리보기 · 인쇄 본문 */}
        <section className="print:w-full">
          <article
            id="quote-sheet"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 print:rounded-none print:p-0 print:shadow-none print:ring-0 md:p-8"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-bold tracking-wide text-lala-600">QUOTATION</p>
                <h1 className="mt-1 text-2xl font-extrabold text-ink">견 적 서</h1>
                <p className="mt-2 text-sm text-muted">{MALL_QUOTE_ISSUER.brand}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-semibold text-ink">No. {quoteNo}</p>
                <p className="mt-1 text-muted">{todayLabel()}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-xs font-bold text-slate-500">수신</p>
                <p className="mt-1 font-bold text-ink">{client.trim() || '____________________'}</p>
                {contact.trim() && <p className="mt-1 text-muted">{contact}</p>}
              </div>
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-xs font-bold text-slate-500">공급자</p>
                <p className="mt-1 font-bold text-ink">{MALL_QUOTE_ISSUER.company}</p>
                <p className="mt-1 text-muted">대표 {MALL_QUOTE_ISSUER.ceo}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              아래와 같이 견적합니다.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-lala-800 text-white">
                  <tr>
                    <th className="px-3 py-2.5 text-left font-semibold">품목</th>
                    <th className="w-16 px-2 py-2.5 text-right font-semibold">수량</th>
                    <th className="w-24 px-2 py-2.5 text-right font-semibold">단가</th>
                    <th className="w-28 px-3 py-2.5 text-right font-semibold">금액</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-3 py-10 text-center text-muted">
                        왼쪽에서 품목을 담아 주세요.
                      </td>
                    </tr>
                  )}
                  {lines.map((row) => (
                    <tr key={row.id} className="border-t border-slate-100">
                      <td className="px-3 py-2.5 font-medium text-ink">
                        {row.name.trim() || '(품목명 미입력)'}
                      </td>
                      <td className="px-2 py-2.5 text-right tabular-nums">{row.qty}</td>
                      <td className="px-2 py-2.5 text-right tabular-nums">{won(row.unitPrice)}</td>
                      <td className="px-3 py-2.5 text-right font-semibold tabular-nums">
                        {won(row.qty * row.unitPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 rounded-xl bg-slate-50 px-4 py-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted">합계 금액</span>
                <span className="font-extrabold text-ink">{won(subtotal)}원</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted">결제 수단</span>
                <span className="font-bold text-ink">{payMethod}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-200 pt-2">
                <span className="font-semibold text-lala-800">결제 금액</span>
                <span className="text-lg font-extrabold text-lala-700">{won(paid)}원</span>
              </div>
            </div>

            {note.trim() && (
              <div className="mt-4 text-sm">
                <p className="text-xs font-bold text-slate-500">비고</p>
                <p className="mt-1 whitespace-pre-wrap text-slate-700">{note}</p>
              </div>
            )}

            <footer className="mt-8 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-600">
              <p className="font-semibold text-ink">{MALL_QUOTE_ISSUER.tagline}</p>
              <p className="mt-3">Add. {MALL_QUOTE_ISSUER.address}</p>
              <p className="mt-1">
                Tel. {MALL_QUOTE_ISSUER.phone} &nbsp;|&nbsp; E-mail. {MALL_QUOTE_ISSUER.email}
              </p>
              <p className="mt-1">
                대표 {MALL_QUOTE_ISSUER.ceo} | {MALL_QUOTE_ISSUER.company} | 사업자등록번호{' '}
                {MALL_QUOTE_ISSUER.biz}
              </p>
              <p className="mt-3 text-slate-400">
                본 견적서는 회원사 운영 참고용입니다. 실제 주문·결제는 {MALL_QUOTE_ISSUER.mallUrl} 에서
                진행해 주세요.
              </p>
            </footer>
          </article>

          <div className="print:hidden mt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full border border-lala-600 bg-white px-6 py-3 text-sm font-bold text-lala-700"
            >
              <Printer className="h-4 w-4" /> 인쇄
            </button>
            <button
              type="button"
              onClick={() => void handleSavePdf()}
              disabled={pdfBusy}
              className="inline-flex items-center gap-2 rounded-full bg-lala-600 px-6 py-3 text-sm font-bold text-white disabled:opacity-60"
            >
              <Download className="h-4 w-4" /> {pdfBusy ? 'PDF 만드는 중…' : 'PDF 파일 저장'}
            </button>
          </div>
        </section>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          body { background: #fff !important; }
          .print\\:hidden { display: none !important; }
          #quote-sheet { box-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
