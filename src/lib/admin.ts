import { SEED_NOTICES, type Notice, type NoticeType } from './content'

const STORAGE_KEY = 'lalawash_notices_v2'
const AUTH_KEY = 'lalawash_admin_session'

/** 관리자 계정 (운영 전달용 — docs/ADMIN_ACCESS.md 참고) */
export const ADMIN_CREDENTIALS = {
  id: 'lalawash',
  password: 'LalaWash#Notice2026',
}

function readAll(): Notice[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_NOTICES))
      return [...SEED_NOTICES]
    }
    const parsed = JSON.parse(raw) as Notice[]
    return Array.isArray(parsed) ? parsed : [...SEED_NOTICES]
  } catch {
    return [...SEED_NOTICES]
  }
}

function writeAll(list: Notice[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

export function listNotices(): Notice[] {
  return readAll().sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return b.createdAt.localeCompare(a.createdAt)
  })
}

export function getNotice(id: string): Notice | undefined {
  return readAll().find((n) => n.id === id)
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
  const list = readAll()
  list.unshift(notice)
  writeAll(list)
  return notice
}

export function updateNotice(
  id: string,
  patch: Partial<Pick<Notice, 'type' | 'title' | 'body' | 'author' | 'pinned'>>,
): Notice | undefined {
  const list = readAll()
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
  const list = readAll()
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
