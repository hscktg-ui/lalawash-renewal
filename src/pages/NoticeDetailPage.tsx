import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { NOTICE_TYPE_LABEL } from '../lib/content'
import { getNotice } from '../lib/admin'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('ko-KR')
}

export default function NoticeDetailPage() {
  const { id } = useParams()
  const notice = id ? getNotice(id) : undefined
  if (!notice) return <Navigate to="/notice" replace />

  return (
    <>
      <PageHero
        eyebrow={NOTICE_TYPE_LABEL[notice.type]}
        title={notice.title}
        desc={`${notice.author} · ${formatDate(notice.createdAt)}`}
      />
      <Section title="내용">
        <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 md:p-8">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700 md:text-base">
            {notice.body}
          </pre>
        </article>
        <Link to="/notice" className="mt-6 inline-block text-sm font-bold text-lala-600">
          ← 목록으로
        </Link>
      </Section>
    </>
  )
}
