import { MALL_QUOTE_ISSUER } from '../data/mallProducts'

export type QuotePdfLine = {
  name: string
  qty: number
  unitPrice: number
}

export type QuotePdfInput = {
  quoteNo: string
  dateLabel: string
  client: string
  contact: string
  payMethod: string
  note: string
  lines: QuotePdfLine[]
  subtotal: number
  paid: number
}

function won(n: number) {
  return n.toLocaleString('ko-KR')
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildBwHtml(data: QuotePdfInput) {
  const issuer = MALL_QUOTE_ISSUER
  const client = data.client.trim() || '____________________'
  const contact = data.contact.trim()
  const rows =
    data.lines.length === 0
      ? `<tr><td colspan="4" style="padding:28px 8px;text-align:center;color:#555;border-bottom:1px solid #ccc;">품목 없음</td></tr>`
      : data.lines
          .map((row) => {
            const amount = row.qty * row.unitPrice
            return `<tr>
              <td style="padding:8px;border-bottom:1px solid #ccc;text-align:left;">${escapeHtml(row.name.trim() || '(품목명 미입력)')}</td>
              <td style="padding:8px;border-bottom:1px solid #ccc;text-align:right;width:56px;">${row.qty}</td>
              <td style="padding:8px;border-bottom:1px solid #ccc;text-align:right;width:88px;">${won(row.unitPrice)}</td>
              <td style="padding:8px;border-bottom:1px solid #ccc;text-align:right;width:100px;font-weight:700;">${won(amount)}</td>
            </tr>`
          })
          .join('')

  const noteBlock = data.note.trim()
    ? `<div style="margin-top:16px;font-size:12px;">
        <div style="font-weight:700;color:#333;margin-bottom:4px;">비고</div>
        <div style="white-space:pre-wrap;color:#222;line-height:1.5;">${escapeHtml(data.note.trim())}</div>
      </div>`
    : ''

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #000000;
    font-family: "Malgun Gothic", "맑은 고딕", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  }
</style>
</head>
<body>
  <div id="sheet" style="width:740px;padding:28px 32px;background:#ffffff;color:#000000;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #000;padding-bottom:14px;">
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;color:#333;">QUOTATION</div>
        <div style="margin-top:4px;font-size:26px;font-weight:800;">견 적 서</div>
        <div style="margin-top:6px;font-size:12px;color:#333;">${escapeHtml(issuer.brand)}</div>
      </div>
      <div style="text-align:right;font-size:12px;line-height:1.6;">
        <div style="font-weight:700;">No. ${escapeHtml(data.quoteNo)}</div>
        <div style="color:#333;">${escapeHtml(data.dateLabel)}</div>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;gap:12px;">
      <div style="flex:1;border:1px solid #999;padding:12px 14px;background:#f5f5f5;">
        <div style="font-size:11px;font-weight:700;color:#444;">수신</div>
        <div style="margin-top:4px;font-size:14px;font-weight:700;">${escapeHtml(client)}</div>
        ${contact ? `<div style="margin-top:4px;font-size:12px;color:#333;">${escapeHtml(contact)}</div>` : ''}
      </div>
      <div style="flex:1;border:1px solid #999;padding:12px 14px;background:#f5f5f5;">
        <div style="font-size:11px;font-weight:700;color:#444;">공급자</div>
        <div style="margin-top:4px;font-size:14px;font-weight:700;">${escapeHtml(issuer.company)}</div>
        <div style="margin-top:4px;font-size:12px;color:#333;">대표 ${escapeHtml(issuer.ceo)}</div>
      </div>
    </div>

    <p style="margin:16px 0 10px;font-size:13px;">아래와 같이 견적합니다.</p>

    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead>
        <tr>
          <th style="background:#111;color:#fff;padding:9px 8px;text-align:left;font-weight:700;">품목</th>
          <th style="background:#111;color:#fff;padding:9px 8px;text-align:right;font-weight:700;width:56px;">수량</th>
          <th style="background:#111;color:#fff;padding:9px 8px;text-align:right;font-weight:700;width:88px;">단가</th>
          <th style="background:#111;color:#fff;padding:9px 8px;text-align:right;font-weight:700;width:100px;">금액</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <div style="margin-top:14px;border:1px solid #999;padding:12px 14px;background:#f7f7f7;font-size:13px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="color:#333;">합계 금액</span>
        <span style="font-weight:800;">${won(data.subtotal)}원</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
        <span style="color:#333;">결제 수단</span>
        <span style="font-weight:700;">${escapeHtml(data.payMethod)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;border-top:1px solid #bbb;padding-top:8px;">
        <span style="font-weight:700;">결제 금액</span>
        <span style="font-size:18px;font-weight:800;">${won(data.paid)}원</span>
      </div>
    </div>

    ${noteBlock}

    <div style="margin-top:28px;border-top:1px solid #000;padding-top:14px;font-size:11px;line-height:1.65;color:#222;">
      <div style="font-weight:700;color:#000;">${escapeHtml(issuer.tagline)}</div>
      <div style="margin-top:10px;">Add. ${escapeHtml(issuer.address)}</div>
      <div>Tel. ${escapeHtml(issuer.phone)} &nbsp;|&nbsp; E-mail. ${escapeHtml(issuer.email)}</div>
      <div>대표 ${escapeHtml(issuer.ceo)} | ${escapeHtml(issuer.company)} | 사업자등록번호 ${escapeHtml(issuer.biz)}</div>
      <div style="margin-top:10px;color:#555;">본 견적서는 회원사 운영 참고용입니다. 실제 주문·결제는 ${escapeHtml(issuer.mallUrl)} 에서 진행해 주세요.</div>
    </div>
  </div>
</body>
</html>`
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Tailwind 없는 흑백 전용 iframe으로 PDF 생성 */
export async function downloadQuotePdf(data: QuotePdfInput, fileBase: string) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ])

  const iframe = document.createElement('iframe')
  iframe.setAttribute('title', 'quote-pdf')
  iframe.style.cssText =
    'position:fixed;left:-12000px;top:0;width:820px;height:1200px;border:0;opacity:0;pointer-events:none;'
  document.body.appendChild(iframe)

  try {
    const idoc = iframe.contentDocument
    if (!idoc) throw new Error('PDF 미리보기 문서를 만들 수 없습니다.')

    idoc.open()
    idoc.write(buildBwHtml(data))
    idoc.close()
    await wait(80)

    const sheet = idoc.getElementById('sheet')
    if (!sheet) throw new Error('견적서 본문을 찾지 못했습니다.')

    const canvas = await html2canvas(sheet, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
      foreignObjectRendering: false,
      windowWidth: 820,
    })

    if (!canvas.width || !canvas.height) {
      throw new Error('견적서를 이미지로 만들지 못했습니다.')
    }

    // 그레이스케일 JPEG
    const gcanvas = document.createElement('canvas')
    gcanvas.width = canvas.width
    gcanvas.height = canvas.height
    const ctx = gcanvas.getContext('2d')
    if (!ctx) throw new Error('이미지 변환에 실패했습니다.')
    ctx.drawImage(canvas, 0, 0)
    const image = ctx.getImageData(0, 0, gcanvas.width, gcanvas.height)
    const px = image.data
    for (let i = 0; i < px.length; i += 4) {
      const y = Math.round(px[i] * 0.299 + px[i + 1] * 0.587 + px[i + 2] * 0.114)
      px[i] = y
      px[i + 1] = y
      px[i + 2] = y
    }
    ctx.putImageData(image, 0, 0)

    const img = gcanvas.toDataURL('image/jpeg', 0.93)
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pageW = pdf.internal.pageSize.getWidth()
    const pageH = pdf.internal.pageSize.getHeight()
    const margin = 10
    const usableW = pageW - margin * 2
    const imgH = (gcanvas.height * usableW) / gcanvas.width

    let heightLeft = imgH
    let y = margin
    pdf.addImage(img, 'JPEG', margin, y, usableW, imgH, undefined, 'FAST')
    heightLeft -= pageH - margin * 2

    while (heightLeft > 8) {
      y = margin - (imgH - heightLeft)
      pdf.addPage()
      pdf.addImage(img, 'JPEG', margin, y, usableW, imgH, undefined, 'FAST')
      heightLeft -= pageH - margin * 2
    }

    const safeName = fileBase.replace(/[^\w.-]+/g, '_').replace(/_+/g, '_')
    pdf.save(`${safeName || 'lalawash-quote'}.pdf`)
  } finally {
    iframe.remove()
  }
}
