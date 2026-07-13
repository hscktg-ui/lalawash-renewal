/** 공지 이미지: localStorage 용량을 위해 업로드 파일을 압축합니다. */

export const NOTICE_IMAGE_LIMITS = {
  maxCount: 6,
  maxWidth: 1280,
  quality: 0.72,
  maxBytesPerImage: 450_000,
} as const

function canvasToJpeg(canvas: HTMLCanvasElement, quality: number): Promise<string> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('이미지 변환에 실패했습니다.'))
          return
        }
        const reader = new FileReader()
        reader.onload = () => resolve(String(reader.result))
        reader.onerror = () => reject(new Error('이미지를 읽지 못했습니다.'))
        reader.readAsDataURL(blob)
      },
      'image/jpeg',
      quality,
    )
  })
}

export async function compressImageFile(file: File): Promise<string> {
  if (!file.type.startsWith('image/')) {
    throw new Error('이미지 파일만 올릴 수 있습니다.')
  }

  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, NOTICE_IMAGE_LIMITS.maxWidth / Math.max(bitmap.width, bitmap.height))
  const width = Math.max(1, Math.round(bitmap.width * scale))
  const height = Math.max(1, Math.round(bitmap.height * scale))

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    bitmap.close()
    throw new Error('브라우저에서 이미지를 처리할 수 없습니다.')
  }
  ctx.drawImage(bitmap, 0, 0, width, height)
  bitmap.close()

  let quality = NOTICE_IMAGE_LIMITS.quality
  let dataUrl = await canvasToJpeg(canvas, quality)
  while (dataUrl.length > NOTICE_IMAGE_LIMITS.maxBytesPerImage * 1.37 && quality > 0.4) {
    quality -= 0.08
    dataUrl = await canvasToJpeg(canvas, quality)
  }
  return dataUrl
}

export function isProbablyImageUrl(value: string) {
  const v = value.trim()
  if (!v) return false
  if (v.startsWith('data:image/')) return true
  try {
    const u = new URL(v)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

export function noticeCover(notice: { coverImage?: string; images?: string[] }) {
  return notice.coverImage || notice.images?.[0] || ''
}
