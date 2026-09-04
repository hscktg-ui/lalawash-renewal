import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '../data'
import { EXTERNAL } from '../lib/content'

type Props = {
  variant?: 'home' | 'full'
  defaultUse?: string
}

const USE_OPTIONS = [
  '공공·기관',
  '축제·행사',
  '급식·식판',
  '장례식장',
  '유아식판',
  '케이터링',
  '가맹·지점',
  '기타',
] as const

const USE_HINTS: Record<string, string> = {
  '공공·기관': '부서명·예상 컵/용기 수·도입 희망 시기를 적어 주세요.',
  '축제·행사': '행사명·일정·예상 인원·필요 용기 종류를 적어 주세요.',
  '급식·식판': '학교/기관명·식판 장수·수거·공급 주기를 적어 주세요.',
  장례식장: '빈소 규모·예상 조문객·운영 기간을 적어 주세요.',
  유아식판: '원아 수·결제 방식(원/학부모/보조금)·도입 희망일을 적어 주세요.',
  케이터링: '인원·메뉴 유형·배송 지역을 적어 주세요.',
  '가맹·지점': '희망 지역·문의 목적을 적어 주세요.',
  기타: '일정·수량·장소를 자유롭게 적어 주세요.',
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

function buildPayload(fd: FormData) {
  return {
    _subject: `[라라워시 문의] ${String(fd.get('use') || '')} — ${String(fd.get('name') || '')}`,
    _template: 'table',
    _captcha: 'false',
    용도: String(fd.get('use') || ''),
    기관담당: String(fd.get('name') || ''),
    연락처: String(fd.get('contact') || ''),
    예상수량: String(fd.get('qty') || ''),
    문의내용: String(fd.get('message') || ''),
  }
}

async function sendInquiry(fd: FormData) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(buildPayload(fd)),
  })
  if (!res.ok) throw new Error('send-failed')
  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean }
  if (data.success === false) throw new Error('send-failed')
}

export function ContactInquiryForm({ variant = 'full', defaultUse = '공공·기관' }: Props) {
  const [useType, setUseType] = useState(defaultUse)
  const [status, setStatus] = useState<Status>('idle')
  const hint = useMemo(() => USE_HINTS[useType] ?? USE_HINTS['기타'], [useType])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    setStatus('sending')
    try {
      await sendInquiry(fd)
      setStatus('sent')
      form.reset()
      setUseType(defaultUse)
    } catch {
      setStatus('error')
    }
  }

  const useSelect = (
    <select
      name="use"
      required
      value={useType}
      onChange={(e) => setUseType(e.target.value)}
      className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
    >
      {USE_OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )

  const resultNote =
    status === 'sent' ? (
      <p className="mt-3 rounded-xl bg-lala-50 px-4 py-3 text-sm text-lala-800" role="status">
        문의가 접수되었습니다. 확인 후 연락드리겠습니다.
      </p>
    ) : status === 'error' ? (
      <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
        전송에 실패했습니다. 전화({CONTACT.phone})로 연락 주시거나 잠시 후 다시 시도해 주세요.
      </p>
    ) : null

  if (variant === 'home') {
    return (
      <form className="rounded-3xl bg-white p-7 text-ink shadow-xl" onSubmit={onSubmit}>
        <p className="text-sm font-bold text-lala-700">빠른 견적·상담 요청</p>
        <p className="mt-1 text-xs text-muted">
          대략적인 정보만 있어도 충분합니다. 전화({CONTACT.phone}) 상담도 가능합니다.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block text-xs font-semibold text-slate-600">
            어디에 쓰시나요?
            {useSelect}
          </label>
          <label className="block text-xs font-semibold text-slate-600">
            하루(또는 행사) 예상 수량
            <input
              name="qty"
              placeholder="예: 하루 1,000컵 / 행사 3만 개"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
            />
          </label>
          <label className="block text-xs font-semibold text-slate-600 sm:col-span-2">
            기관명 · 담당자 · 연락처
            <input
              name="name"
              required
              placeholder="예: ○○시청 환경과 / 홍길동 / 010-0000-0000"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
            />
          </label>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-muted">{hint}</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-4 w-full rounded-full bg-lala-600 py-3.5 text-sm font-bold text-white hover:bg-lala-700 disabled:opacity-60"
        >
          {status === 'sending' ? '보내는 중…' : '상담 요청 보내기'}
        </button>
        {resultNote}
        <p className="mt-2 text-center text-[11px] text-muted">
          또는{' '}
          <a href={EXTERNAL.reserveForm} target="_blank" rel="noreferrer" className="font-semibold text-lala-700">
            사용 예약 폼
          </a>
        </p>
        <Link to="/contact" className="mt-3 block text-center text-xs font-medium text-muted">
          더 자세히 적어서 문의하기 →
        </Link>
      </form>
    )
  }

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      onSubmit={onSubmit}
    >
      <label className="block text-sm font-semibold">
        어디에 쓰시나요?
        <select
          name="use"
          required
          value={useType}
          onChange={(e) => setUseType(e.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
        >
          {USE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <p className="mt-2 text-xs text-muted">{hint}</p>
      <label className="mt-4 block text-sm font-semibold">
        성함 · 기관명
        <input
          name="name"
          required
          placeholder="예: ○○시청 / 홍길동"
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
        />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        연락처
        <input
          name="contact"
          required
          placeholder="전화 또는 이메일"
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
        />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        문의 내용
        <textarea
          name="message"
          rows={4}
          placeholder={hint}
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lala-500"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full rounded-full bg-lala-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-lala-700 disabled:opacity-60"
      >
        {status === 'sending' ? '보내는 중…' : '문의 보내기'}
      </button>
      {resultNote}
      <p className="mt-3 text-center text-xs text-muted">
        전화({CONTACT.phone}) 또는{' '}
        <a href={EXTERNAL.reserveForm} target="_blank" rel="noreferrer" className="font-semibold text-lala-700">
          사용 예약 폼
        </a>
        도 이용하실 수 있습니다.
      </p>
    </form>
  )
}
