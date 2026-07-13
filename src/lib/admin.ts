import { SEED_NOTICES, type Notice, type NoticeType } from './content'

const STORAGE_KEY = 'lalawash_notices_v5'
const LEGACY_KEYS = ['lalawash_notices_v4', 'lalawash_notices_v3', 'lalawash_notices_v2']
const AUTH_KEY = 'lalawash_admin_session'

/** 관리자 계정 (운영 전달용 — docs/ADMIN_ACCESS.md 참고) */
export const ADMIN_CREDENTIALS = {
  id: 'lalawash',
  password: 'LalaWash#Notice2026',
}

function isNoticeList(value: unknown): value is Notice[] {
  return Array.isArray(value)
}

function readLegacy(): Notice[] | null {
  for (const key of LEGACY_KEYS) {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) continue
      const parsed = JSON.parse(raw) as unknown
      if (isNoticeList(parsed)) return parsed
    } catch {
      /* ignore */
    }
  }
  return null
}

/** 시드/레거시 글을 최신 시드로 교체하고, 관리자가 새로 쓴 글(n-*)만 유지 */
export function syncSeedNotices(replaceLegacy = true): number {
  const current = readAllRaw()
  const adminOnly = current.filter((n) => n.id.startsWith('n-'))

  if (replaceLegacy) {
    const next = [...SEED_NOTICES, ...adminOnly]
    writeAll(next)
    return SEED_NOTICES.length
  }

  const ids = new Set(current.map((n) => n.id))
  const missing = SEED_NOTICES.filter((n) => !ids.has(n.id))
  if (missing.length === 0) return 0
  writeAll([...current, ...missing])
  return missing.length
}

function readAllRaw(): Notice[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as unknown
      if (isNoticeList(parsed)) return parsed
    }

    const legacy = readLegacy()
    if (legacy) {
      // v5 최초: 시드(이미지 포함)로 레거시 글을 교체, 관리자 작성분(n-*)만 유지
      const adminOnly = legacy.filter((n) => n.id.startsWith('n-'))
      const merged = [...SEED_NOTICES, ...adminOnly]
      writeAll(merged)
      return merged
    }

    writeAll([...SEED_NOTICES])
    return [...SEED_NOTICES]
  } catch {
    return [...SEED_NOTICES]
  }
}

function writeAll(list: Notice[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

export function listNotices(): Notice[] {
  return readAllRaw().sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return b.createdAt.localeCompare(a.createdAt)
  })
}

export function getNotice(id: string): Notice | undefined {
  return listNotices().find((n) => n.id === id)
}

export function createNotice(input: {
  type: NoticeType
  title: string
  body: string
  author?: string
  pinned?: boolean
  coverImage?: string
  images?: string[]
}): Notice {
  const now = new Date().toISOString()
  const images = (input.images || []).filter(Boolean)
  const coverImage = input.coverImage?.trim() || images[0] || undefined
  const notice: Notice = {
    id: `n-${Date.now()}`,
    type: input.type,
    title: input.title.trim(),
    body: input.body.trim(),
    author: input.author?.trim() || '라라워시',
    pinned: Boolean(input.pinned),
    coverImage,
    images: images.length ? images : undefined,
    createdAt: now,
    updatedAt: now,
  }
  const list = readAllRaw()
  list.unshift(notice)
  try {
    writeAll(list)
  } catch {
    throw new Error('저장 공간이 부족합니다. 이미지 수를 줄이거나 용량이 작은 사진으로 다시 시도해 주세요.')
  }
  return notice
}

export function updateNotice(
  id: string,
  patch: Partial<Pick<Notice, 'type' | 'title' | 'body' | 'author' | 'pinned' | 'coverImage' | 'images'>>,
): Notice | undefined {
  const list = readAllRaw()
  const idx = list.findIndex((n) => n.id === id)
  if (idx < 0) return undefined
  const nextImages =
    patch.images !== undefined ? patch.images.filter(Boolean) : list[idx].images
  const nextCover =
    patch.coverImage !== undefined
      ? patch.coverImage.trim() || nextImages?.[0] || undefined
      : list[idx].coverImage || nextImages?.[0]
  const updated: Notice = {
    ...list[idx],
    ...patch,
    title: patch.title?.trim() ?? list[idx].title,
    body: patch.body?.trim() ?? list[idx].body,
    coverImage: nextCover,
    images: nextImages?.length ? nextImages : undefined,
    updatedAt: new Date().toISOString(),
  }
  list[idx] = updated
  try {
    writeAll(list)
  } catch {
    throw new Error('저장 공간이 부족합니다. 이미지 수를 줄이거나 용량이 작은 사진으로 다시 시도해 주세요.')
  }
  return updated
}

export function deleteNotice(id: string): boolean {
  const list = readAllRaw()
  const next = list.filter((n) => n.id !== id)
  if (next.length === list.length) return false
  writeAll(next)
  return true
}

export function loginAdmin(id: string, password: string): boolean {
  const ok = id === ADMIN_CREDENTIALS.id && password === ADMIN_CREDENTIALS.password
  if (ok) {
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({ id, at: Date.now() }))
  }
  return ok
}

export function logoutAdmin() {
  sessionStorage.removeItem(AUTH_KEY)
}

export function isAdminLoggedIn(): boolean {
  try {
    const raw = sessionStorage.getItem(AUTH_KEY)
    if (!raw) return false
    const data = JSON.parse(raw) as { id?: string }
    return data.id === ADMIN_CREDENTIALS.id
  } catch {
    return false
  }
}
