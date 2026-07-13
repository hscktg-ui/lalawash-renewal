export const EXTERNAL = {
  blog: 'https://blog.naver.com/lalawash',
  instagram: 'https://www.instagram.com/lala__wash',
  gg: 'https://www.gg.go.kr/',
  gpsc: 'https://gpsc.or.kr',
  /** 기존 사이트 사용 예약 폼 */
  reserveForm: 'https://forms.gle/kN7ZruxCwcJLdvJ16',
  officialNotice: 'https://lalawash.co.kr/notice',
  officialSite: 'https://lalawash.co.kr/',
}

export type NoticeType = 'notice' | 'official' | 'news'

export type Notice = {
  id: string
  type: NoticeType
  title: string
  body: string
  author: string
  pinned?: boolean
  createdAt: string
  updatedAt: string
}

export const NOTICE_TYPE_LABEL: Record<NoticeType, string> = {
  notice: '공지',
  official: '공문',
  news: '안내',
}

export const SEED_NOTICES: Notice[] = [
  {
    id: 'seed-1',
    type: 'notice',
    title: '공식 공지·공문은 이 게시판에서 확인하세요',
    body: '사이트 공지 게시판은 공식 안내·공문용입니다.\n일상 소식·현장 이야기는 네이버 블로그(blog.naver.com/lalawash)와 인스타그램에서 확인해 주세요.\n기존 아임웹 소식: https://lalawash.co.kr/notice',
    author: '라라워시',
    pinned: true,
    createdAt: '2026-07-13T01:00:00.000Z',
    updatedAt: '2026-07-13T09:00:00.000Z',
  },
  {
    id: 'seed-buncheon-2',
    type: 'news',
    title: '[2026.06.29] 라라워시 부천나눔 2호점 개소',
    body: '2026년 6월 24일 라라워시 부천나눔 2호점이 문을 열었습니다. 늘어나는 다회용기 세척 수요에 맞춘 자원순환 확장입니다.\n자세한 현장 이야기는 공식 블로그·기존 소식 게시판에서 확인하실 수 있습니다.',
    author: '라라워시',
    pinned: false,
    createdAt: '2026-06-29T00:00:00.000Z',
    updatedAt: '2026-06-29T00:00:00.000Z',
  },
  {
    id: 'seed-workshop',
    type: 'news',
    title: '[2026.05.26] 실무자 워크숍 — 18개 지역 · 20개 사업장',
    body: '경기도 내 18개 지역에서 운영 중인 20개 라라워시 사업장이 함께하는 실무자 워크숍이 진행되었습니다. 지역 밀착 세척망이 계속 확장·고도화되고 있습니다.',
    author: '라라워시',
    pinned: false,
    createdAt: '2026-05-26T00:00:00.000Z',
    updatedAt: '2026-05-26T00:00:00.000Z',
  },
  {
    id: 'seed-2',
    type: 'news',
    title: '일상 소식은 공식 블로그에서 볼 수 있습니다',
    body: '지점 소식, 현장 활동, 축제·장례·급식 운영 이야기는 네이버 블로그와 인스타그램에서 전해 드립니다.',
    author: '라라워시',
    pinned: false,
    createdAt: '2026-07-13T01:05:00.000Z',
    updatedAt: '2026-07-13T01:05:00.000Z',
  },
]
