/** 견적서 DOM → PDF (Tailwind v4 oklch / color-mix 대응) */

function freezeElementStyles(sourceRoot: HTMLElement, cloneRoot: HTMLElement) {
  const sources = [sourceRoot, ...Array.from(sourceRoot.querySelectorAll('*'))]
  const clones = [cloneRoot, ...Array.from(cloneRoot.querySelectorAll('*'))]

  sources.forEach((src, i) => {
    const clone = clones[i]
    if (!(src instanceof HTMLElement) || !(clone instanceof HTMLElement)) return

    const cs = getComputedStyle(src)
    // computed 값을 전부 인라인으로 고정 (브라우저가 rgb 등으로 반환)
    for (let j = 0; j < cs.length; j++) {
      const prop = cs.item(j)
      if (!prop) continue
      try {
        clone.style.setProperty(prop, cs.getPropertyValue(prop), cs.getPropertyPriority(prop))
      } catch {
        /* ignore unsupported props */
      }
    }

    // PDF 캡처에 문제되는 효과 제거
    clone.style.setProperty('box-shadow', 'none', 'important')
    clone.style.setProperty('text-shadow', 'none', 'important')
    clone.style.setProperty('filter', 'none', 'important')
    clone.style.setProperty('backdrop-filter', 'none', 'important')
    clone.style.setProperty('transform', 'none', 'important')
  })
}

export async function downloadQuotePdf(elementId: string, fileBase: string) {
  const el = document.getElementById(elementId)
  if (!el) throw new Error('견적서 영역을 찾지 못했습니다.')

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ])

  const canvas = await html2canvas(el, {
    scale: Math.min(2, window.devicePixelRatio || 1.5),
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    foreignObjectRendering: false,
    imageTimeout: 15000,
    onclone: (clonedDoc, clonedEl) => {
      freezeElementStyles(el, clonedEl as HTMLElement)
      // oklch/color-mix가 들어 있는 스타일시트 제거 (인라인으로 이미 고정됨)
      clonedDoc.querySelectorAll('style, link[rel="stylesheet"]').forEach((n) => n.remove())
      const root = clonedEl as HTMLElement
      root.style.backgroundColor = '#ffffff'
      root.style.boxSizing = 'border-box'
      root.style.width = `${Math.max(el.scrollWidth, el.clientWidth)}px`
    },
  })

  if (!canvas.width || !canvas.height) {
    throw new Error('견적서 화면을 이미지로 변환하지 못했습니다.')
  }

  const img = canvas.toDataURL('image/jpeg', 0.92)
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = pdf.internal.pageSize.getWidth()
  const pageH = pdf.internal.pageSize.getHeight()
  const margin = 10
  const usableW = pageW - margin * 2
  const imgH = (canvas.height * usableW) / canvas.width

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
}
