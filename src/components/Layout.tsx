import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { BRAND, CONTACT, NAV } from '../data'
import { EXTERNAL } from '../lib/content'
import { BrandMark } from './BrandMark'

export function Layout() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="min-h-svh bg-white text-ink">
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <BrandMark onClick={() => setOpen(false)} size="md" />
          <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-lala-600' : 'text-slate-600 hover:text-lala-600'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-lala-600 px-4 py-2 text-sm font-semibold text-white hover:bg-lala-700"
            >
              상담 문의
            </Link>
          </nav>
          <button
            type="button"
            className="rounded-lg p-2 md:hidden"
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="block py-3 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 block rounded-full bg-lala-600 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              상담 문의
            </Link>
          </div>
        )}
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <BrandMark to="/" size="md" />
            <p className="mt-1 text-sm font-medium text-lala-600">{BRAND.slogan}</p>
            <p className="mt-3 text-sm text-muted">{BRAND.tagline}</p>
          </div>
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">본사</p>
            <p className="mt-2">{CONTACT.hq}</p>
            <p className="mt-1">T. {CONTACT.phone}</p>
            <p>{CONTACT.email}</p>
          </div>
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">바로가기</p>
            <p className="mt-2">
              <Link to="/notice" className="hover:text-lala-600">
                공지·공문
              </Link>
            </p>
            <p className="mt-1">
              <a
                href={EXTERNAL.companyProfile}
                download={EXTERNAL.companyProfileName}
                className="hover:text-lala-600"
              >
                소개 자료 (PDF)
              </a>
            </p>
            <p className="mt-1">
              <a href={EXTERNAL.blog} target="_blank" rel="noreferrer" className="hover:text-lala-600">
                공식 블로그
              </a>
            </p>
            <p className="mt-1">
              <a href={EXTERNAL.instagram} target="_blank" rel="noreferrer" className="hover:text-lala-600">
                인스타그램
              </a>
            </p>
            <p className="mt-1">
              <a
                href={EXTERNAL.memberMall}
                target="_blank"
                rel="noreferrer"
                className="hover:text-lala-600"
              >
                회원사 전용몰
              </a>
            </p>
            <p className="mt-1">
              <Link to="/quote" className="hover:text-lala-600">
                회원사 견적서
              </Link>
            </p>
            <p className="mt-3">대표 {CONTACT.ceo}</p>
            <p>사업자등록번호 {CONTACT.biz}</p>
            <p className="mt-3">© {new Date().getFullYear()} {BRAND.nameEn}</p>
          </div>
        </div>
      </footer>

      <Link
        to="/contact"
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white shadow-lg md:hidden"
      >
        <Phone className="h-4 w-4" /> 상담
      </Link>
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  desc,
  image,
}: {
  eyebrow: string
  title: string
  desc: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-lala-900 text-white">
      {image && (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-lala-900/95 via-lala-800/85 to-lala-700/70" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold text-lala-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-lala-100 md:text-lg">{desc}</p>
      </div>
    </section>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  className = '',
}: {
  id?: string
  eyebrow?: string
  title: string
  desc?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold text-lala-500">{eyebrow}</p>}
        <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
        {desc && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{desc}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
