import { SEED_NOTICES, type Notice, type NoticeType } from './content'

const STORAGE_KEY = 'lalawash_notices_v4'
const LEGACY_KEYS = ['lalawash_notices_v3', 'lalawash_notices_v2']
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

/** 시드에만 있는 글을 로컬에 추가 (관리자 수정분·추가분은 유지) */
export function syncSeedNotices(): number {
  const current = readAllRaw()
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
      const ids = new Set(legacy.map((n) => n.id))
      const missing = SEED_NOTICES.filter((n) => !ids.has(n.id))
      const merged = [...legacy, ...missing]
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
  const list = readAllRaw()
  // 시드가 늘어난 경우 자동 병합
  const added = syncSeedNotices()
  const finalList = added > 0 ? readAllRaw() : list
  return finalList.sort((a, b) => {
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
}): Notice {
  const now = new Date().toISOString()
  const notice: Notice = {
    id: `n-${Date.now()}`,
    type: input.type,
    title: input.title.trim(),
    body: input.body.trim(),
    author: input.author?.trim() || '라라워시',
    pinned: Boolean(input.pinned),
    createdAt: now,
    updatedAt: now,
  }
  const list = readAllRaw()
  list.unshift(notice)
  writeAll(list)
  return notice
}

export function updateNotice(
  id: string,
  patch: Partial<Pick<Notice, 'type' | 'title' | 'body' | 'author' | 'pinned'>>,
): Notice | undefined {
  const list = readAllRaw()
  const idx = list.findIndex((n) => n.id === id)
  if (idx < 0) return undefined
  const updated: Notice = {
    ...list[idx],
    ...patch,
    title: patch.title?.trim() ?? list[idx].title,
    body: patch.body?.trim() ?? list[idx].body,
    updatedAt: new Date().toISOString(),
  }
  list[idx] = updated
  writeAll(list)
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
