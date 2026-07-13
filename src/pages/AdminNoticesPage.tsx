import { useMemo, useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  createNotice,
  deleteNotice,
  isAdminLoggedIn,
  listNotices,
  logoutAdmin,
  syncSeedNotices,
  updateNotice,
} from '../lib/admin'
import { NOTICE_TYPE_LABEL, type Notice, type NoticeType } from '../lib/content'
import { BrandMark } from '../components/BrandMark'

const emptyForm = {
  type: 'notice' as NoticeType,
  title: '',
  body: '',
  pinned: false,
}

export default function AdminNoticesPage() {
  const [tick, setTick] = useState(0)
  const [editing, setEditing] = useState<Notice | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')
  const loggedIn = isAdminLoggedIn()
  const notices = useMemo(() => (loggedIn ? listNotices() : []), [tick, loggedIn])

  if (!loggedIn) return <Navigate to="/admin" replace />

  function refresh() {
    setTick((t) => t + 1)
  }

  function startEdit(n: Notice) {
    setEditing(n)
    setForm({
      type: n.type,
      title: n.title,
      body: n.body,
      pinned: Boolean(n.pinned),
    })
    setMessage('')
  }

  function resetForm() {
    setEditing(null)
    setForm(emptyForm)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.body.trim()) {
      setMessage('제목과 내용을 입력해 주세요.')
      return
    }
    if (editing) {
      updateNotice(editing.id, form)
      setMessage('수정했습니다.')
    } else {
      createNotice(form)
      setMessage('등록했습니다.')
    }
    resetForm()
    refresh()
  }

  function onDelete(id: string) {
    if (!confirm('이 글을 삭제할까요?')) return
    deleteNotice(id)
    if (editing?.id === id) resetForm()
    refresh()
    setMessage('삭제했습니다.')
  }

  return (
    <div className="min-h-svh bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div>
            <BrandMark to="/" size="sm" />
            <p className="mt-1 text-sm font-semibold text-lala-600">관리자</p>
            <h1 className="text-xl font-extrabold">공지·공문 관리</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const n = syncSeedNotices()
                refresh()
                setMessage(n > 0 ? `시드 공지 ${n}건을 추가했습니다.` : '추가할 시드 공지가 없습니다.')
              }}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              시드 동기화
            </button>
            <Link to="/notice" className="text-sm font-medium text-lala-600">
              게시판 보기
            </Link>
            <button
              type="button"
              onClick={() => {
                logoutAdmin()
                window.location.href = '/admin'
              }}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-bold">{editing ? '글 수정' : '새 글 등록'}</h2>
          <label className="mt-4 block text-sm font-semibold">
            유형
            <select
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as NoticeType }))}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
            >
              <option value="notice">공지</option>
              <option value="official">공문</option>
              <option value="news">안내</option>
            </select>
          </label>
          <label className="mt-4 block text-sm font-semibold">
            제목
            <input
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              required
            />
          </label>
          <label className="mt-4 block text-sm font-semibold">
            내용
            <textarea
              value={form.body}
              onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
              rows={10}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              required
            />
          </label>
          <label className="mt-4 flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={form.pinned}
              onChange={(e) => setForm((f) => ({ ...f, pinned: e.target.checked }))}
            />
            상단 고정
          </label>
          {message && <p className="mt-3 text-sm text-lala-700">{message}</p>}
          <div className="mt-5 flex gap-2">
            <button type="submit" className="rounded-full bg-lala-600 px-5 py-2.5 text-sm font-bold text-white">
              {editing ? '수정 저장' : '등록'}
            </button>
            {editing && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold"
              >
                새로 작성
              </button>
            )}
          </div>
        </form>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-bold">등록된 글 ({notices.length})</h2>
          <ul className="mt-4 max-h-[70vh] space-y-3 overflow-y-auto">
            {notices.map((n) => (
              <li key={n.id} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-lala-600">
                      {NOTICE_TYPE_LABEL[n.type]}
                      {n.pinned ? ' · 고정' : ''}
                    </p>
                    <p className="mt-1 font-semibold">{n.title}</p>
                    <p className="mt-1 text-xs text-muted">
                      {new Date(n.updatedAt).toLocaleString('ko-KR')}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(n)}
                      className="text-xs font-bold text-lala-600"
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(n.id)}
                      className="text-xs font-bold text-red-600"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
