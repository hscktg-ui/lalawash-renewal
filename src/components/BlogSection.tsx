import { EXTERNAL } from '../lib/content'

/** 홈 하단용 — 강조 없이 보조 링크만 */
export function BlogSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          현장 사진·지점 이야기는{' '}
          <a
            href={EXTERNAL.blog}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lala-700 hover:text-lala-800"
          >
            네이버 블로그
          </a>
          ·
          <a
            href={EXTERNAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="ml-1 font-semibold text-lala-700 hover:text-lala-800"
          >
            인스타그램
          </a>
          에서도 볼 수 있습니다.
        </p>
        <p className="text-xs text-slate-400">공지·공문은 사이트 공지 게시판을 이용해 주세요.</p>
      </div>
    </section>
  )
}
