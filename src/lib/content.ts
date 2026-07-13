export const EXTERNAL = {
  blog: 'https://blog.naver.com/lalawash',
  instagram: 'https://www.instagram.com/lala__wash',
  gg: 'https://www.gg.go.kr/',
  gpsc: 'https://gpsc.or.kr',
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
    title: '라라워시 공지 게시판을 열었습니다',
    body: '공식 공지와 공문은 이 게시판에서 확인하실 수 있습니다.\n일상 소식·활동 이야기는 네이버 공식 블로그에서 확인해 주세요.',
    author: '라라워시',
    pinned: true,
    createdAt: '2026-07-13T01:00:00.000Z',
    updatedAt: '2026-07-13T01:00:00.000Z',
  },
  {
    id: 'seed-2',
    type: 'news',
    title: '일상 소식은 공식 블로그에서 볼 수 있습니다',
    body: '지점 소식, 현장 이야기, 활동 기록은 네이버 블로그(blog.naver.com/lalawash)와 인스타그램에서 전해 드립니다.',
    author: '라라워시',
    pinned: false,
    createdAt: '2026-07-13T01:05:00.000Z',
    updatedAt: '2026-07-13T01:05:00.000Z',
  },
]
