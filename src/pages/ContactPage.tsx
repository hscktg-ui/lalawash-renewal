import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CompanyProfileDownload } from '../components/CompanyProfileDownload'
import { ContactInquiryForm } from '../components/ContactInquiryForm'
import { CONTACT, IMAGES } from '../data'
import { EXTERNAL } from '../lib/content'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="이용문의 · 견적문의"
        title="다회용기서비스 상담·견적"
        desc="공공기관·기업·행사·급식·가맹 모두 환영합니다. 어디에, 얼마나 필요하신지만 알려주시면 맞춰 안내드립니다."
        image={IMAGES.order}
      />
      <Section title="상담·견적 요청">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-lala-600 p-8 text-white">
            <p className="text-sm font-semibold text-lala-100">전화 상담</p>
            <a href={`tel:${CONTACT.phone}`} className="mt-3 flex items-center gap-3 text-3xl font-extrabold">
              <Phone className="h-7 w-7" /> {CONTACT.phone}
            </a>
            <p className="mt-4 text-sm text-lala-100">{CONTACT.hours}</p>
            <p className="mt-2 text-sm text-lala-100">{CONTACT.email}</p>
            <p className="mt-6 text-sm leading-relaxed text-white/90">
              {CONTACT.hq}
              <br />
              (사업장) {CONTACT.site}
            </p>
            <a
              href={EXTERNAL.reserveForm}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-lala-800"
            >
              사용 예약하기
            </a>
            <div className="mt-4">
              <CompanyProfileDownload variant="secondary" label="회사소개서 다운받기" />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-lala-100">
              <Link to="/contact/how" className="underline underline-offset-2 hover:text-white">
                이용방법
              </Link>
              <Link to="/contact/faq" className="underline underline-offset-2 hover:text-white">
                Q&A
              </Link>
            </div>
          </div>
          <ContactInquiryForm variant="full" />
        </div>
      </Section>
    </>
  )
}
