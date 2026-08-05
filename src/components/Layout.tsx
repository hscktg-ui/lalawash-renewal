import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { BRAND, CONTACT, IMAGES, NAV_GROUPS } from '../data'
import { EXTERNAL } from '../lib/content'
import { usePageSeo } from '../lib/seo'
import { BrandMark } from './BrandMark'

export function Layout() {
  const [open, setOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState<string | null>(null)
  const location = useLocation()
  usePageSeo()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setMobileGroup(null)
  }, [location.pathname])

  return (
    <div className="min-h-svh bg-white text-ink">
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <BrandMark onClick={() => setOpen(false)} size="md" />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lala-50 hover:text-lala-700"
                >
                  {group.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-slate-100 bg-white py-2 shadow-lg ring-1 ring-slate-100">
                    {group.children.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/about' || item.to === '/contact' || item.to === '/services'}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition ${
                            isActive ? 'bg-lala-50 font-semibold text-lala-700' : 'text-slate-600 hover:bg-slate-50 hover:text-lala-700'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-3 rounded-full bg-lala-600 px-4 py-2 text-sm font-semibold text-white hover:bg-lala-700"
            >
              다회용기서비스 신청하기
            </Link>
          </nav>
          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            {NAV_GROUPS.map((group) => {
              const expanded = mobileGroup === group.label
              return (
                <div key={group.label} className="border-b border-slate-100 py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-sm font-bold text-ink"
                    onClick={() => setMobileGroup(expanded ? null : group.label)}
                    aria-expanded={expanded}
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                  {expanded && (
                    <div className="pb-3 pl-2">
                      {group.children.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block py-2 text-sm text-slate-600"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Link
              to="/contact"
              className="mt-4 block rounded-full bg-lala-600 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              다회용기서비스 신청하기
            </Link>
          </div>
        )}
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <BrandMark to="/" size="md" />
            <p className="mt-2 text-sm font-medium text-lala-600">{BRAND.slogan}</p>
            <p className="mt-1 text-sm text-muted">{BRAND.tagline}</p>
          </div>
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">라라워시 본사</p>
            <p className="mt-2">{CONTACT.hq}</p>
            <p className="mt-1">T. {CONTACT.phone}</p>
            <p>{CONTACT.email}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <Link to="/about" className="font-semibold text-lala-700 hover:text-lala-600">
                본사 바로가기
              </Link>
              <a
                href={EXTERNAL.companyProfile}
                download={EXTERNAL.companyProfileName}
                className="font-semibold text-lala-700 hover:text-lala-600"
              >
                회사소개서 다운받기
              </a>
            </p>
          </div>
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">바로가기</p>
            <p className="mt-2">
              <Link to="/about/branches" className="hover:text-lala-600">
                지점 안내
              </Link>
            </p>
            <p className="mt-1">
              <Link to="/notice" className="hover:text-lala-600">
                라라워시 소식
              </Link>
            </p>
            <p className="mt-1">
              <a href={EXTERNAL.memberMall} target="_blank" rel="noreferrer" className="hover:text-lala-600">
                라라워시몰 바로가기
              </a>
            </p>
            <p className="mt-1">
              <Link to="/quote" className="hover:text-lala-600">
                회원사 견적서
              </Link>
            </p>
          </div>
          <div className="text-sm text-muted">
            <p className="font-semibold text-ink">SNS</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={EXTERNAL.blog}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200 transition hover:ring-lala-400"
                aria-label="블로그"
              >
                <img src={IMAGES.blog} alt="" className="h-6 w-6 object-contain" />
              </a>
              <a
                href={EXTERNAL.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200 transition hover:ring-lala-400"
                aria-label="인스타그램"
              >
                <img src={IMAGES.instagram} alt="" className="h-6 w-6 object-contain" />
              </a>
              <a
                href={EXTERNAL.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#ff0000] text-white transition hover:brightness-110"
                aria-label="유튜브"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs">대표 {CONTACT.ceo}</p>
            <p className="text-xs">사업자등록번호 {CONTACT.biz}</p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} {BRAND.nameEn}</p>
          </div>
        </div>
      </footer>

      <Link
        to="/contact"
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-lala-600 px-5 py-3 text-sm font-bold text-white shadow-lg lg:hidden"
      >
        <Phone className="h-4 w-4" /> 신청
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
      <div className="absolute inset-0 bg-gradient-to-t from-lala-900/85 via-lala-900/45 to-lala-800/25" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold text-lala-200">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{desc}</p>
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
