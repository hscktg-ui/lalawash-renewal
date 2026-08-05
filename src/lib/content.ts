export const EXTERNAL = {
  blog: 'https://blog.naver.com/lalawash',
  instagram: 'https://www.instagram.com/lala__wash',
  youtube: 'https://www.youtube.com/@lalawash',
  /** 메인 히어로 이용사례 영상 */
  caseVideoId: '3GnYbbxVb1k',
  caseVideo: 'https://www.youtube.com/watch?v=3GnYbbxVb1k',
  gg: 'https://www.gg.go.kr/',
  gpsc: 'https://gpsc.or.kr',
  /** 사용 예약 폼 */
  reserveForm: 'https://forms.gle/kN7ZruxCwcJLdvJ16',
  /** 본사 회사소개서 v12 */
  companyProfile: '/docs/lalawash-company-profile-v12.pdf',
  companyProfileName: '라라워시_본사_회사소개서_v12.pdf',
  /** 회원사(조합원·가맹) 전용 폐쇄몰 */
  memberMall: 'https://www.lalawash-mall.co.kr',
}

export type NoticeType = 'notice' | 'official' | 'news'

export type Notice = {
  id: string
  type: NoticeType
  title: string
  body: string
  author: string
  pinned?: boolean
  /** 대표 이미지 (data URL 또는 https) */
  coverImage?: string
  /** 본문 갤러리 이미지 */
  images?: string[]
  createdAt: string
  updatedAt: string
}

/** PDF 구성안: 공지사항 / 언론보도자료 / 포스팅 */
export const NOTICE_TYPE_LABEL: Record<NoticeType, string> = {
  notice: '공지',
  official: '언론',
  news: '포스팅',
}

export { SEED_NOTICES } from '../data/seedNotices'
