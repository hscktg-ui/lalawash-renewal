import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Layout'
import { CONTACT } from '../data'
import { EXTERNAL } from '../lib/content'

export function TermsPage() {
  return (
    <>
      <PageHero eyebrow="이용약관" title="라라워시 웹사이트 이용약관" />
      <Section title="제1조 목적">
        <div className="max-w-3xl space-y-5 text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          <p>
            이 약관은 라라워시 협동조합(이하 「라라워시」)이 운영하는 홈페이지에서 제공하는 정보 열람,
            견적·상담 문의 등 서비스의 이용 조건과 절차, 권리·의무를 정합니다. 상품 구매·회원 전용몰
            이용은{' '}
            <a href={EXTERNAL.memberMall} target="_blank" rel="noreferrer" className="font-semibold text-lala-700">
              라라워시몰
            </a>
            의 약관을 따릅니다.
          </p>
        </div>
      </Section>
      <Section title="제2조 회사 정보" className="bg-slate-50">
        <dl className="max-w-3xl space-y-3 text-sm text-ink">
          <div>
            <dt className="text-xs text-muted">상호</dt>
            <dd className="mt-1 font-semibold">라라워시 협동조합</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">대표자</dt>
            <dd className="mt-1">{CONTACT.ceo}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">사업자등록번호</dt>
            <dd className="mt-1">{CONTACT.biz}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">본사</dt>
            <dd className="mt-1 break-keep">{CONTACT.hq}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">수원사무소</dt>
            <dd className="mt-1 break-keep">{CONTACT.office}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">연락처</dt>
            <dd className="mt-1">
              T. {CONTACT.phone} · {CONTACT.email}
            </dd>
          </div>
        </dl>
      </Section>
      <Section title="제3조 서비스">
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-pretty break-keep text-sm leading-relaxed text-muted md:text-base">
          <li>다회용기 렌탈·세척 서비스 소개 및 지점·인증·성과 정보 제공</li>
          <li>견적·상담 문의 접수</li>
          <li>공지·소식 게시</li>
        </ul>
      </Section>
      <Section title="제4조 이용자의 의무" className="bg-slate-50">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          이용자는 문의 시 허위 정보를 기재해서는 안 되며, 사이트의 정보를 무단으로 복제·배포하거나
          라라워시 및 제3자의 권리를 침해하는 행위를 해서는 안 됩니다.
        </p>
      </Section>
      <Section title="제5조 지적재산권">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          홈페이지의 글·사진·로고·디자인 등 저작물은 라라워시 또는 정당한 권리자에게 귀속됩니다.
          사전 동의 없이 상업적으로 이용할 수 없습니다.
        </p>
      </Section>
      <Section title="제6조 책임의 한계" className="bg-slate-50">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          라라워시는 천재지변, 통신 장애 등 불가항력으로 서비스를 제공할 수 없는 경우 책임을 지지
          않습니다. 견적·상담 내용은 실제 계약 조건이 아니며, 계약은 별도 협의로 성립합니다.
        </p>
      </Section>
      <Section title="제7조 약관의 변경">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          약관을 변경하는 경우 이 페이지에 게시합니다. 문의는 {CONTACT.phone} 또는 {CONTACT.email}로
          연락해 주세요.
        </p>
        <p className="mt-8">
          <Link to="/legal/privacy" className="text-sm font-semibold text-lala-700">
            개인정보처리방침 보기 →
          </Link>
        </p>
      </Section>
    </>
  )
}

export function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="개인정보처리방침" title="라라워시 개인정보처리방침" />
      <Section title="1. 수집하는 개인정보">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          견적·상담 문의 시 성함·기관명, 연락처, 문의 내용을 수집합니다. 상품 구매·회원 정보는
          라라워시몰에서 별도로 처리됩니다.
        </p>
      </Section>
      <Section title="2. 이용 목적" className="bg-slate-50">
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-pretty break-keep text-sm leading-relaxed text-muted md:text-base">
          <li>견적·상담 회신 및 서비스 안내</li>
          <li>문의 이력 확인</li>
        </ul>
      </Section>
      <Section title="3. 보유 기간">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          문의 목적 달성 후 지체 없이 파기합니다. 다만 관계 법령에 따라 보관이 필요한 경우 해당 기간
          동안 보관합니다.
        </p>
      </Section>
      <Section title="4. 제3자 제공 · 처리위탁" className="bg-slate-50">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          법령에 따른 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다. 문의 메일 전송을 위해
          폼 발송 대행 서비스를 이용할 수 있습니다.
        </p>
      </Section>
      <Section title="5. 이용자의 권리">
        <p className="max-w-3xl text-pretty break-keep text-sm leading-[1.9] text-muted md:text-base">
          이용자는 개인정보 열람·정정·삭제·처리정지를 요청할 수 있습니다. 요청은 {CONTACT.email} 또는{' '}
          {CONTACT.phone}으로 접수합니다.
        </p>
      </Section>
      <Section title="6. 개인정보 보호책임자" className="bg-slate-50">
        <dl className="max-w-3xl space-y-2 text-sm text-ink">
          <div>
            <dt className="text-xs text-muted">책임자</dt>
            <dd className="mt-1">대표 {CONTACT.ceo}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">연락처</dt>
            <dd className="mt-1">
              {CONTACT.phone} · {CONTACT.email}
            </dd>
          </div>
        </dl>
        <p className="mt-8">
          <Link to="/legal/terms" className="text-sm font-semibold text-lala-700">
            이용약관 보기 →
          </Link>
        </p>
      </Section>
    </>
  )
}
