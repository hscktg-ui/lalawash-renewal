import { Phone } from 'lucide-react'
import { PageHero, Section } from '../components/Layout'
import { CONTACT, FAQ, IMAGES } from '../data'
import { EXTERNAL } from '../lib/content'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="문의"
        title="편하게 물어보세요"
        desc="공공기관·기업·행사·가맹 모두 환영합니다. 어디에, 얼마나 필요하신지만 알려주시면 맞춰 안내드립니다."
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
              기존 사용 예약 폼
            </a>
          </div>
          <form
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault()
              alert('프로토타입입니다. 실제 연동 시 담당자에게 전달됩니다.')
            }}
          >
            <label className="block text-sm font-semibold">
              어디에 쓰시나요?
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal">
                <option>공공·기관</option>
                <option>축제·행사</option>
                <option>급식·식판</option>
                <option>장례식장</option>
                <option>가맹·지점</option>
                <option>기타</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-semibold">
              성함 · 기관명
              <input
                required
                placeholder="예: ○○시청 / 홍길동"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal"
              />
            </label>
            <label className="mt-4 block text-sm font-semibold">
              연락처
              <input
                required
                placeholder="전화 또는 이메일"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal"
              />
            </label>
            <label className="mt-4 block text-sm font-semibold">
              문의 내용
              <textarea
                rows={4}
                placeholder="예상 수량, 일정, 장소 등을 적어 주시면 더 정확히 안내드립니다."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-lala-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-lala-700"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </Section>
      <Section title="자주 묻는 질문" className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-3">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="font-bold text-lala-800">{f.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
