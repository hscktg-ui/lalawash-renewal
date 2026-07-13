import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { EXTERNAL, NOTICE_TYPE_LABEL, type NoticeType } from '../lib/content'
import { listNotices } from '../lib/admin'
import { noticeCover } from '../lib/noticeImages'
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

function excerpt(body: string, max = 88) {
  const text = body.replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  return `${text.slice(0, max)}…`
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

        <ul className="grid gap-3">
          {notices.length === 0 && (
            <li className="rounded-2xl bg-white px-5 py-10 text-center text-sm text-muted ring-1 ring-slate-200">
              등록된 글이 없습니다.
            </li>
          )}
          {notices.map((n) => {
            const cover = noticeCover(n)
            return (
              <li key={n.id}>
                <Link
                  to={`/notice/${n.id}`}
                  className="group flex gap-4 overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-slate-200 transition hover:ring-lala-300 sm:p-4"
                >
                  {cover ? (
                    <img
                      src={cover}
                      alt=""
                      className="h-24 w-28 shrink-0 rounded-xl object-cover sm:h-28 sm:w-36"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-24 w-28 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xs font-semibold text-slate-400 sm:h-28 sm:w-36">
                      {NOTICE_TYPE_LABEL[n.type]}
                    </div>
                  )}
                  <div className="min-w-0 flex-1 py-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          n.type === 'official'
                            ? 'bg-amber-100 text-amber-800'
                            : n.pinned
                              ? 'bg-lala-100 text-lala-800'
                              : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {n.pinned ? '고정' : NOTICE_TYPE_LABEL[n.type]}
                      </span>
                      {(n.images?.length || 0) > 0 && (
                        <span className="text-[11px] font-medium text-slate-400">
                          사진 {n.images!.length}
                        </span>
                      )}
                      <span className="text-xs text-muted">{formatDate(n.createdAt)}</span>
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-ink group-hover:text-lala-800 sm:text-lg">
                      {n.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
                      {excerpt(n.body)}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
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
