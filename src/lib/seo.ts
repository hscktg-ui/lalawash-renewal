import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SOLUTIONS } from '../data'

const TITLES: { match: RegExp; title: string; description: string }[] = [
  {
    match: /^\/$/,
    title: '라라워시 | 지속가능한 깨끗함',
    description:
      '다회용기 토탈 솔루션. 빌려 쓰고 씻어 다시 공급합니다. 경기도 15개 지역 21개 지점.',
  },
  {
    match: /^\/about\/history/,
    title: '연혁 및 성과 | 라라워시',
    description: '라라워시 연혁과 다회용기 사용의 환경적 효과를 확인하세요.',
  },
  {
    match: /^\/about\/cert/,
    title: '인증획득 및 위생관리 | 라라워시',
    description: '글로벌 인증과 안심위생 시스템. NSF·ISO, 초순수 6단계 세척, 식약처 지침 3대 위생검사.',
  },
  {
    match: /^\/about\/branches/,
    title: '라라워시 지점 | 라라워시',
    description: '경기도 15개 지역 21개 전문세척장. 가까운 지점을 찾아보세요.',
  },
  {
    match: /^\/about/,
    title: '회사소개 | 라라워시',
    description: '지속가능한 깨끗함, 지속가능한 일자리. 라라워시 핵심가치와 자원순환 서비스.',
  },
  {
    match: /^\/services/,
    title: '다회용기 순환솔루션 | 라라워시',
    description: '수거부터 세척까지. 라라워시 다회용기 서비스와 위생관리를 확인하세요.',
  },
  {
    match: /^\/notice/,
    title: '라라워시 소식 | 라라워시',
    description: '공지, 언론, 포스팅 등 라라워시 소식을 확인하세요.',
  },
  {
    match: /^\/contact\/how/,
    title: '이용방법 | 라라워시',
    description: '문의부터 세척까지, 라라워시 이용 순서를 안내합니다.',
  },
  {
    match: /^\/contact\/faq/,
    title: 'Q&A | 라라워시',
    description: '다회용기 서비스 자주 묻는 질문을 모았습니다.',
  },
  {
    match: /^\/contact/,
    title: '견적·상담 문의 | 라라워시',
    description: '다회용기 서비스 견적·상담을 요청하세요.',
  },
  {
    match: /^\/legal\/privacy/,
    title: '개인정보처리방침 | 라라워시',
    description: '라라워시 홈페이지 개인정보 수집·이용 안내.',
  },
  {
    match: /^\/legal\/terms/,
    title: '이용약관 | 라라워시',
    description: '라라워시 홈페이지 이용약관.',
  },
]

export function usePageSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const serviceMatch = pathname.match(/^\/services\/([^/]+)/)
    if (serviceMatch) {
      const s = SOLUTIONS.find((x) => x.slug === serviceMatch[1])
      if (s) {
        document.title = `${s.title} | 라라워시`
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.setAttribute('content', s.short)
        return
      }
    }

    const found = TITLES.find((t) => t.match.test(pathname))
    const title = found?.title ?? '라라워시 | 지속가능한 깨끗함'
    const description =
      found?.description ??
      '지속가능한 깨끗함, 라라워시. 다회용기 대여부터 수거·세척까지.'

    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [pathname])
}
