import { useMemo, useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ImagePlus, Trash2 } from 'lucide-react'
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
import { NoticeBody, NoticeGallery } from '../components/NoticeMedia'
import {
  NOTICE_IMAGE_LIMITS,
  compressImageFile,
  isProbablyImageUrl,
  noticeCover,
} from '../lib/noticeImages'

type FormState = {
  type: NoticeType
  title: string
  body: string
  pinned: boolean
  coverImage: string
  images: string[]
}

const emptyForm: FormState = {
  type: 'notice',
  title: '',
  body: '',
  pinned: false,
  coverImage: '',
  images: [],
}

export default function AdminNoticesPage() {
  const [tick, setTick] = useState(0)
  const [editing, setEditing] = useState<Notice | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [urlDraft, setUrlDraft] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
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
      coverImage: n.coverImage || '',
      images: n.images || [],
    })
    setUrlDraft('')
    setMessage('')
  }

  function resetForm() {
    setEditing(null)
    setForm(emptyForm)
    setUrlDraft('')
  }

  async function onPickFiles(files: FileList | null) {
    if (!files?.length) return
    setBusy(true)
    setMessage('')
    try {
      const next = [...form.images]
      for (const file of Array.from(files)) {
        if (next.length >= NOTICE_IMAGE_LIMITS.maxCount) break
        const dataUrl = await compressImageFile(file)
        next.push(dataUrl)
      }
      setForm((f) => ({
        ...f,
        images: next,
        coverImage: f.coverImage || next[0] || '',
      }))
      if (files.length + form.images.length > NOTICE_IMAGE_LIMITS.maxCount) {
        setMessage(`이미지는 최대 ${NOTICE_IMAGE_LIMITS.maxCount}장까지입니다.`)
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : '이미지 업로드에 실패했습니다.')
    } finally {
      setBusy(false)
    }
  }

  function addImageUrl() {
    const url = urlDraft.trim()
    if (!isProbablyImageUrl(url)) {
      setMessage('http(s) 이미지 주소 또는 data URL을 입력해 주세요.')
      return
    }
    if (form.images.length >= NOTICE_IMAGE_LIMITS.maxCount) {
      setMessage(`이미지는 최대 ${NOTICE_IMAGE_LIMITS.maxCount}장까지입니다.`)
      return
    }
    setForm((f) => ({
      ...f,
      images: [...f.images, url],
      coverImage: f.coverImage || url,
    }))
    setUrlDraft('')
    setMessage('')
  }

  function removeImage(index: number) {
    setForm((f) => {
      const images = f.images.filter((_, i) => i !== index)
      const removed = f.images[index]
      const coverImage = f.coverImage === removed ? images[0] || '' : f.coverImage
      return { ...f, images, coverImage }
    })
  }

  function setAsCover(src: string) {
    setForm((f) => ({ ...f, coverImage: src }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.body.trim()) {
      setMessage('제목과 내용을 입력해 주세요.')
      return
    }
    try {
      const payload = {
        type: form.type,
        title: form.title,
        body: form.body,
        pinned: form.pinned,
        coverImage: form.coverImage,
        images: form.images,
      }
      if (editing) {
        updateNotice(editing.id, payload)
        setMessage('수정했습니다.')
      } else {
        createNotice(payload)
        setMessage('등록했습니다.')
      }
      resetForm()
      refresh()
    } catch (err) {
      setMessage(err instanceof Error ? err.message : '저장에 실패했습니다.')
    }
  }

  function onDelete(id: string) {
    if (!confirm('이 글을 삭제할까요?')) return
    deleteNotice(id)
    if (editing?.id === id) resetForm()
    refresh()
    setMessage('삭제했습니다.')
  }

  const previewCover = form.coverImage || form.images[0]

  return (
    <div className="min-h-svh bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
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

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 xl:grid-cols-[1.1fr_0.9fr]">
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
              rows={9}
              placeholder="문단은 빈 줄로 나누면 더 깔끔하게 보입니다."
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal"
              required
            />
          </label>

          <div className="mt-5 rounded-2xl border border-dashed border-lala-200 bg-lala-50/40 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-lala-800">이미지 첨부</p>
              <p className="text-xs text-muted">
                최대 {NOTICE_IMAGE_LIMITS.maxCount}장 · 자동 압축 저장
              </p>
            </div>

            <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 text-center hover:border-lala-300">
              <ImagePlus className="h-6 w-6 text-lala-600" />
              <span className="mt-2 text-sm font-semibold text-lala-800">
                {busy ? '압축·업로드 중…' : '사진 선택 (여러 장 가능)'}
              </span>
              <span className="mt-1 text-xs text-muted">JPG, PNG, WEBP</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                disabled={busy}
                onChange={(e) => {
                  void onPickFiles(e.target.files)
                  e.target.value = ''
                }}
              />
            </label>

            <div className="mt-3 flex gap-2">
              <input
                value={urlDraft}
                onChange={(e) => setUrlDraft(e.target.value)}
                placeholder="또는 이미지 URL 붙여넣기"
                className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
              />
              <button
                type="button"
                onClick={addImageUrl}
                className="shrink-0 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-white"
              >
                추가
              </button>
            </div>

            {form.images.length > 0 && (
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {form.images.map((src, i) => (
                  <li key={`${i}-${src.slice(0, 24)}`} className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
                    <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 flex gap-1 bg-black/55 p-1.5">
                      <button
                        type="button"
                        onClick={() => setAsCover(src)}
                        className={`flex-1 rounded-md px-1 py-1 text-[10px] font-bold text-white ${
                          form.coverImage === src ? 'bg-lala-600' : 'bg-white/20'
                        }`}
                      >
                        {form.coverImage === src ? '대표' : '대표로'}
                      </button>
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="rounded-md bg-red-600/90 p-1 text-white"
                        aria-label="삭제"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

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
            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-lala-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60"
            >
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

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">발행 미리보기</h2>
            <p className="mt-1 text-xs text-muted">등록 후 게시판·상세에 이렇게 보입니다.</p>
            <article className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-100">
              {previewCover ? (
                <img src={previewCover} alt="" className="max-h-48 w-full object-cover" />
              ) : (
                <div className="flex h-28 items-center justify-center bg-slate-50 text-xs text-muted">
                  대표 이미지 없음
                </div>
              )}
              <div className="p-4">
                <p className="text-xs font-bold text-lala-600">{NOTICE_TYPE_LABEL[form.type]}</p>
                <h3 className="mt-1 text-lg font-extrabold text-ink">
                  {form.title.trim() || '제목을 입력하세요'}
                </h3>
                <div className="mt-3">
                  {form.body.trim() ? (
                    <NoticeBody body={form.body} />
                  ) : (
                    <p className="text-sm text-muted">본문 미리보기</p>
                  )}
                </div>
                {form.images.length > 1 && (
                  <NoticeGallery images={form.images.filter((s) => s !== previewCover)} altPrefix="미리보기" />
                )}
              </div>
            </article>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">등록된 글 ({notices.length})</h2>
            <ul className="mt-4 max-h-[50vh] space-y-3 overflow-y-auto">
              {notices.map((n) => {
                const cover = noticeCover(n)
                return (
                  <li key={n.id} className="rounded-xl border border-slate-100 p-3">
                    <div className="flex gap-3">
                      {cover ? (
                        <img src={cover} alt="" className="h-16 w-20 shrink-0 rounded-lg object-cover" />
                      ) : (
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[10px] text-muted">
                          텍스트
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-lala-600">
                          {NOTICE_TYPE_LABEL[n.type]}
                          {n.pinned ? ' · 고정' : ''}
                          {(n.images?.length || 0) > 0 ? ` · 사진 ${n.images!.length}` : ''}
                        </p>
                        <p className="mt-0.5 truncate font-semibold">{n.title}</p>
                        <p className="mt-1 text-xs text-muted">
                          {new Date(n.updatedAt).toLocaleString('ko-KR')}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col gap-2">
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
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
