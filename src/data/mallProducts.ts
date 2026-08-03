/** 회원사 전용몰 참고 상품 (견적서용 · 가격은 참고가, 수정 가능) */
export type MallProduct = {
  id: string
  name: string
  /** 판매가(참고) */
  price: number
  /** 정가(선택) */
  listPrice?: number
  category: 'supply' | 'apparel'
}

export const MALL_SUPPLIES: MallProduct[] = [
  {
    id: 'prewash-white',
    name: '라라워시 애벌담금세척제 화이트-알카리성산소계',
    price: 93500,
    listPrice: 100000,
    category: 'supply',
  },
  {
    id: 'prewash',
    name: '라라워시 애벌담금세척제 - 중성타입',
    price: 74800,
    listPrice: 80000,
    category: 'supply',
  },
  {
    id: 'disinfectant',
    name: '라라워시 살균소독제 (기구등살균제소독제)',
    price: 71500,
    category: 'supply',
  },
  {
    id: 'ultrasonic',
    name: '라라워시 초음파세척제',
    price: 56100,
    listPrice: 60000,
    category: 'supply',
  },
  {
    id: 'scale',
    name: '라라워시 스케일제거제',
    price: 46750,
    listPrice: 50000,
    category: 'supply',
  },
  {
    id: 'rinse',
    name: '라라워시 식기세척기용 린스',
    price: 42075,
    listPrice: 45000,
    category: 'supply',
  },
  {
    id: 'dw-detergent',
    name: '라라워시 식기세척기용 세척제',
    price: 35530,
    listPrice: 38000,
    category: 'supply',
  },
  {
    id: 'neutral',
    name: '라라워시 중성세제',
    price: 18810,
    listPrice: 19000,
    category: 'supply',
  },
  {
    id: 'bleach',
    name: '라라워시 락스',
    price: 17600,
    category: 'supply',
  },
]

/** 단체복 — 참고가 제공, 단가·수량은 수정 가능 */
export const MALL_APPAREL: MallProduct[] = [
  {
    id: 'tee',
    name: '라라워시 단체복 티셔츠',
    price: 9800,
    listPrice: 12000,
    category: 'apparel',
  },
  {
    id: 'vest',
    name: '라라워시 단체복 조끼',
    price: 8900,
    category: 'apparel',
  },
]

export const MALL_QUOTE_ISSUER = {
  company: '(주)라라워시 협동조합',
  brand: '라라워시 회원사 전용몰',
  tagline: '회원사 운영에 필요한 세제 및 소모품을 안정적으로 공급합니다.',
  address: '경기도 시흥시 호현로 155-10(대야동)',
  phone: '031-8019-9524',
  email: 'lalawash@naver.com',
  ceo: '김선미',
  biz: '336-87-02913',
  mallUrl: 'https://www.lalawash-mall.co.kr',
}
