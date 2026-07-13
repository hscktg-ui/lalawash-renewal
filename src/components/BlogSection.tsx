import { EXTERNAL } from '../lib/content'
import { IMAGES } from '../data'

export function BlogSection() {
  return (
    <section className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b1f2e] text-white md:grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <p className="text-sm font-semibold text-lala-300">공식 블로그 · 소식</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">일상 소식은 블로그에서</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            부천나눔 2호점 개소, 축제·장례·급식 현장 이야기, 위생 인사이트는 라라워시 공식 네이버
            블로그와 인스타그램에서 확인하세요. 사이트 공지·공문과는 따로 운영합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={EXTERNAL.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-lala-900"
            >
              네이버 블로그 바로가기
            </a>
            <a
              href={EXTERNAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold"
            >
              인스타그램
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">blog.naver.com/lalawash</p>
        </div>
        <div className="relative min-h-56 md:min-h-full">
          <img
            src={IMAGES.partner}
            alt="라라워시 현장 소식"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0b1f2e]/40" />
        </div>
      </div>
    </section>
  )
}
