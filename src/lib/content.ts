export const EXTERNAL = {
  blog: 'https://blog.naver.com/lalawash',
  instagram: 'https://www.instagram.com/lala__wash',
  gg: 'https://www.gg.go.kr/',
  gpsc: 'https://gpsc.or.kr',
  /** 사용 예약 폼 */
  reserveForm: 'https://forms.gle/kN7ZruxCwcJLdvJ16',
  /** 본사 회사소개서 v12 */
  companyProfile: '/docs/lalawash-company-profile-v12.pdf',
  companyProfileName: '라라워시_본사_회사소개서_v12.pdf',
  /** 회원사(조합원·가맹) 전용 폐쇄몰 */
  memberMall: 'https://lalawash-mall.co.kr',
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

export const NOTICE_TYPE_LABEL: Record<NoticeType, string> = {
  notice: '공지',
  official: '공문',
  news: '안내',
}

export { SEED_NOTICES } from '../data/seedNotices'
