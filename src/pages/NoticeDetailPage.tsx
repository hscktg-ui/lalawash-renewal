import { Link, Navigate, useParams } from 'react-router-dom'
import { NOTICE_TYPE_LABEL } from '../lib/content'
import { getNotice } from '../lib/admin'
import { NoticeBody, NoticeCoverBanner, NoticeGallery } from '../components/NoticeMedia'
import { noticeCover } from '../lib/noticeImages'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function NoticeDetailPage() {
  const { id } = useParams()
  const notice = id ? getNotice(id) : undefined
  if (!notice) return <Navigate to="/notice" replace />

  const cover = noticeCover(notice)
  const gallery = (notice.images || []).filter((src) => src !== cover)

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <Link to="/notice" className="text-sm font-bold text-lala-600">
          ← 목록으로
        </Link>

        <header className="mt-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                notice.type === 'official'
                  ? 'bg-amber-100 text-amber-800'
                  : notice.pinned
                    ? 'bg-lala-100 text-lala-800'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200'
              }`}
            >
              {notice.pinned ? '고정' : NOTICE_TYPE_LABEL[notice.type]}
            </span>
            <span className="text-sm text-muted">{formatDate(notice.createdAt)}</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-ink md:text-4xl">
            {notice.title}
          </h1>
          <p className="mt-2 text-sm text-muted">{notice.author}</p>
        </header>

        <div className="mt-8">
          <NoticeCoverBanner notice={notice} />
        </div>

        <article className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-9">
          <NoticeBody body={notice.body} />
          {gallery.length > 0 && <NoticeGallery images={gallery} altPrefix={notice.title} />}
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/notice"
            className="rounded-full bg-lala-600 px-5 py-2.5 text-sm font-bold text-white"
          >
            목록으로
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-lala-800 ring-1 ring-slate-200"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  )
}
