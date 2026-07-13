import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { EXTERNAL, NOTICE_TYPE_LABEL, type NoticeType } from '../lib/content'
import { listNotices } from '../lib/admin'
import { IMAGES } from '../data'

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function NoticePage() {
  const [filter, setFilter] = useState<'all' | NoticeType>('all')
  const notices = useMemo(() => {
    const all = listNotices()
    return filter === 'all' ? all : all.filter((n) => n.type === filter)
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="공지"
        title="공지 · 공문"
        desc="공식 안내와 이전 홈페이지에서 옮겨 온 소식을 이곳에서 확인하세요. 현장 이야기는 블로그에서도 볼 수 있습니다."
        image={IMAGES.notice}
      />
      <Section title="게시판">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ['all', '전체'],
                ['notice', '공지'],
                ['official', '공문'],
                ['news', '안내'],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setFilter(k)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  filter === k ? 'bg-lala-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href={EXTERNAL.blog}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-lala-600"
          >
            블로그 소식 보기 →
          </a>
        </div>

        <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl ring-1 ring-slate-200">
          {notices.length === 0 && (
            <li className="bg-white px-5 py-10 text-center text-sm text-muted">등록된 글이 없습니다.</li>
          )}
          {notices.map((n) => (
            <li key={n.id} className="bg-white">
              <Link to={`/notice/${n.id}`} className="flex flex-col gap-1 px-5 py-4 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      n.type === 'official'
                        ? 'bg-amber-100 text-amber-800'
                        : n.pinned
                          ? 'bg-lala-100 text-lala-800'
                          : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {n.pinned ? '고정' : NOTICE_TYPE_LABEL[n.type]}
                  </span>
                  <span className="font-semibold text-ink">{n.title}</span>
                </div>
                <span className="text-xs text-muted sm:text-sm">{formatDate(n.createdAt)}</span>
              </Link>
            </li>
          ))}
        </ul>

        <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-muted">
          <p className="font-medium text-slate-700">회원사 안내</p>
          <p className="mt-1 leading-relaxed">
            라라워시 조합원·가맹 회원사만 이용하는 전용몰이 별도로 있습니다. 일반 고객용 쇼핑몰이 아닙니다.
          </p>
          <a
            href={EXTERNAL.memberMall}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-lala-700 hover:text-lala-800"
          >
            회원사 전용몰 바로가기 →
          </a>
        </aside>
      </Section>
    </>
  )
}
