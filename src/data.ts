/** 브랜드 카피·에셋 (기존 사이트 기준) */
export const BRAND = {
  name: '라라워시',
  nameEn: 'Lalawash',
  /** OG·기존 사이트 슬로건 */
  slogan: '지속가능한 깨끗함',
  tagline: '다회용기 대여부터 수거·세척까지, 가까운 곳에서',
  description:
    '지속가능한 깨끗함을 추구하며, 다회용기 렌탈·세척 서비스를 제공하는 경기도의 지역 브랜드입니다.',
}

/**
 * 브랜드 마크 정책
 * - 헤더·푸터·관리자: 고해상도 이미지 로고 (`/logo.png`)
 * - 하단 파트너(함께하는 곳): 기관명 텍스트로 통일 (외부 로고 이미지 미사용)
 * - 파비콘·OG: 브라우저/공유용 에셋 유지
 */
export const LOGO = '/logo.png'
export const OG_IMAGE = '/og-image.png'

export const IMAGES = {
  hero: 'https://cdn.imweb.me/thumbnail/20250922/dd6677c53d92e.jpg',
  about: 'https://cdn.imweb.me/thumbnail/20231127/19bb0bd366ee3.jpg',
  intro: 'https://cdn.imweb.me/thumbnail/20231127/0db62a1ee9604.jpg',
  service: 'https://cdn.imweb.me/thumbnail/20210908/b33320490e2e6.jpg',
  system: 'https://cdn.imweb.me/thumbnail/20231201/21e96762082c1.jpg',
  order: 'https://cdn.imweb.me/thumbnail/20231123/f5755bfcf0013.jpg',
  catering: 'https://cdn.imweb.me/thumbnail/20231123/baf02f04c13bc.jpg',
  video: 'https://cdn.imweb.me/thumbnail/20221209/cdc246b24e895.jpg',
  /** 기존 /center 페이지 지점 안내 이미지 */
  center: 'https://cdn.imweb.me/thumbnail/20231123/4aa2068891dbb.jpg',
  /** 지점 위치도 — 배경 재채색본 (한글 라벨 원본 유지) */
  centerMap: '/maps/center-map.png',
  centerMapAlt: '/maps/center-map-alt.png',
  mapCta: 'https://cdn.imweb.me/thumbnail/20250922/cbece11f67bff.png',
  reusable: 'https://cdn.imweb.me/thumbnail/20250922/81ee8b45ec653.png',
  character: 'https://cdn.imweb.me/thumbnail/20231127/c4d9d8c00bd1b.jpg',
  partner: 'https://cdn.imweb.me/thumbnail/20231128/17cbc2b09321d.jpg',
  washBg: 'https://cdn.imweb.me/thumbnail/20231128/b4092ea57e46f.jpg',
  process: 'https://cdn.imweb.me/thumbnail/20231128/c3dada48bdea3.jpg',
  containers: 'https://cdn.imweb.me/thumbnail/20250922/3aaf157e8547e.jpg',
  /** 장례식장 다회용기 — 실사 기반 AI 섹션 이미지 */
  funeral: '/funeral-dishes.jpg',
  notice: 'https://cdn.imweb.me/thumbnail/20250922/cb365cd4333dc.png',
  gg: 'https://cdn.imweb.me/thumbnail/20240503/5f051377a0809.png',
  gpsc: 'https://cdn.imweb.me/thumbnail/20240503/9d2534da00f8f.png',
  blog: 'https://cdn.imweb.me/thumbnail/20240503/c70294a143493.png',
  instagram: 'https://cdn.imweb.me/thumbnail/20240503/de47929d260ca.png',
}

export const NAV = [
  { to: '/about', label: '소개' },
  { to: '/services', label: '서비스' },
  { to: '/infra', label: '지점·인프라' },
  { to: '/impact', label: '성과' },
  { to: '/notice', label: '공지' },
  { to: '/contact', label: '문의' },
]

export const IMPACT = [
  { label: '지금까지 사용한 다회용기', value: 12000000, suffix: '개+' },
  { label: '줄어든 탄소', value: 604500, suffix: ' kgCO₂eq' },
  { label: '소나무로 환산하면', value: 66428, suffix: '그루' },
  { label: '함께하는 지역 일자리', value: 270, suffix: '명' },
]

/** 네트워크 규모 (2026.5 실무자 워크숍·공식 소식 기준) */
export const NETWORK = {
  sites: 20,
  regions: 18,
  washSteps: 6,
}

/**
 * 2025–2026 공개 소식·인사이트 (공식 사이트·네이버 블로그·보도 교차 확인)
 * 미검증 수치 추정 금지 — 운영 사실·채널 링크만.
 */
export const SOLUTIONS = [
  {
    slug: 'sikpan',
    title: '급식 식판 세척',
    short: '어린이집·유치원·학교 식판을 대신 씻어 깨끗하게 돌려드립니다.',
    desc: '급식실에서 쓰인 식판을 수거해, 전문 세척·살균·건조 후 다시 가져다 드립니다. 학교·아동 급식은 하루에도 여러 번 사용·세척이 반복되므로, 전문 관리로 현장 부담은 줄이고 위생은 높입니다.',
    image: IMAGES.system,
    tags: ['식판', '위생', '아동·학교'],
    points: [
      '수거 → 세척 → 살균 → 건조 → 다시 공급까지 한 번에',
      '학교·어린이집 식판도 정기 순환으로 관리합니다',
      '경기도 가까운 지점에서 빠르게 대응합니다',
    ],
  },
  {
    slug: 'public',
    title: '공공·기관 다회용컵',
    short: '시청·청사·도서관 카페에 맞춰, 매일 필요한 만큼 순환합니다.',
    desc: '공공기관·지자체 청사 카페, 일회용품 줄이기 특구 등에 다회용컵을 정기적으로 공급·수거·세척합니다. 경기도청 다회용컵 사업에도 선정되어, 공공 현장에서 안정적으로 운영하고 있습니다.',
    image: IMAGES.service,
    tags: ['지자체', '청사 카페', '정기 운영'],
    points: [
      '경기도청 다회용컵 사업 선정 (2024.3~2027.2)',
      '과천·부천·시흥 등 하루 최대 2,000개까지 처리',
      '용인시청은 주 3,500컵 규모로 운영 중',
    ],
  },
  {
    slug: 'festival',
    title: '축제·행사 대여',
    short: '부스 설치부터 반납·세척까지, 행사 당일에도 헷갈리지 않게.',
    desc: '지역 축제와 대형 행사에 BPA FREE 다회용기를 빌려드리고, 현장 반납 부스까지 운영합니다. 서울재즈페스티벌처럼 한꺼번에 많이 쓰이는 행사에도 맞춰 준비합니다.',
    image: IMAGES.catering,
    tags: ['페스티벌', '부스 운영', 'BPA FREE'],
    points: [
      '행사 수: 2022년 10건 → 2023년 25건 → 2024년 50건',
      '대형 행사 누적 사용량 약 23.4만 개',
      '2026 가평 아웃도어 페스타·이천 산수유 축제 등 현장 운영',
    ],
  },
  {
    slug: 'funeral',
    title: '장례식장 순환',
    short: '조용하고 끊김 없이, 필요한 용기를 제때 맞춰 드립니다.',
    desc: '경기도의료원(수원·이천·포천), 수원연화장 등에서 다회용기 시스템을 운영합니다. 장례 현장의 예절을 지키며, 공급·수거·세척이 끊기지 않도록 관리합니다.',
    image: IMAGES.funeral,
    tags: ['장례', '안정 공급', '통합 운영'],
    points: [
      '경기도의료원·수원연화장 등에서 운영',
      '공급 → 수거 → 세척 → 다시 공급까지 책임',
      '연간 수십만 개 규모로 안정적으로 대응',
    ],
  },
]

export const WASH_STEPS = [
  { title: '불림·애벌 세척', desc: '친환경 세제로 먼저 불려 씻습니다' },
  { title: '초음파 세척', desc: '눈에 잘 안 보이는 오염까지 꼼꼼히' },
  { title: '고온·고압 세척', desc: '초순수(UPW)로 남은 이물질을 제거' },
  { title: '고온 살균', desc: '100℃ 이상에서 살균·소독' },
  { title: 'ATP 오염 검사', desc: '잔류세제·오염도를 수치로 확인' },
  { title: '출고 전 전수 검사', desc: '빠짐없이 확인한 뒤 다시 보냅니다' },
]

export const CIRCLE = [
  { step: '01', title: '문의', desc: '어디에, 얼마나 필요한지 상담' },
  { step: '02', title: '선택', desc: '컵·식기·케이터링 구성 선택' },
  { step: '03', title: '맞춤 제작', desc: '기관 로고가 필요하면 제작' },
  { step: '04', title: '사용 전 준비', desc: '사용법·현장 안내 제공' },
  { step: '05', title: '대여', desc: '깨끗하게 씻은 용기 공급' },
  { step: '06', title: '사용', desc: '현장에서 편하게 사용' },
  { step: '07', title: '반납', desc: '수거 후 세척해 다시 공급' },
]

/** 기존 lalawash.co.kr/center 지점 안내 기준 */
export const BRANCHES = [
  {
    name: '고양',
    address: '고양시 일산동구 동국로 5',
    tel: '031-968-8378',
    services: '다회용컵, 식판',
    map: 'https://naver.me/xvL704Gr',
    highlight: false,
  },
  {
    name: '광주',
    address: '광주시 경안안길 20-9',
    tel: '010-8426-0768',
    services: '유아식판',
    map: 'https://naver.me/5T3yF8wJ',
    highlight: false,
  },
  {
    name: '군포',
    address: '군포시 산본로54번안길 19-1',
    tel: '031-427-0555',
    services: '다회용컵, 축제용기, 식판, 유아식판',
    map: 'https://naver.me/GaTYMR1Y',
    highlight: false,
  },
  {
    name: '부천',
    address: '부천시 평천로 813 / 평천로 852, 3층',
    tel: '032-653-6121',
    services: '다회용기, 다회용컵, 식판, 도시락용기',
    map: 'https://naver.me/xcJ5KTPx',
    highlight: true,
    note: '규모 세척장 (자동화 라인)',
  },
  {
    name: '부천나눔',
    address: '부천시 신흥로425번길 55',
    tel: '070-4304-3184',
    services: '다회용컵, 축제용기, 식판',
    map: 'https://naver.me/xyjIXCNV',
    highlight: true,
    note: '2026.6.24 2호점 개소 · 수요 대응 확장',
  },
  {
    name: '성남',
    address: '성남시 중원구 둔촌대로526번길 9, 가동 1층',
    tel: '031-741-0120',
    services: '다회용컵, 식판, 유아식판',
    map: 'https://naver.me/FWPoqhuc',
    highlight: false,
  },
  {
    name: '성남만남',
    address: '광주시 경충대로 1889',
    tel: '031-768-3666',
    services: '축제용기, 식판, 도시락용기, 배달용기',
    map: 'https://naver.me/5wHCfPyx',
    highlight: false,
  },
  {
    name: '수원',
    address: '의왕시 월암길 93',
    tel: '031-232-0179',
    services: '다회용컵, 축제용기, 장례용기',
    map: 'https://naver.me/5duKogcy',
    highlight: false,
  },
  {
    name: '시흥',
    address: '시흥시 오동마을로6번길 4',
    tel: '031-315-7151',
    services: '식판, 유아식판',
    map: '',
    highlight: false,
  },
  {
    name: '시흥작은자리',
    address: '시흥시 호현로 155-10',
    tel: '031-313-2733, 010-4060-1023',
    services: '다회용컵, 축제용기, 다회용기 판매',
    map: '',
    highlight: true,
    note: '규모 세척장 · 자동화 세척 시스템',
  },
  {
    name: '안산',
    address: '안산시 상록구 영화5길 6, 101호',
    tel: '031-493-9844',
    services: '다회용기, 다회용컵, 식판',
    map: 'https://naver.me/xsUyhojX',
    highlight: false,
  },
  {
    name: '안성',
    address: '안성시 대덕면 누르잿길 35',
    tel: '031-675-8899',
    services: '다회용기, 다회용컵, 유아식판, 도시락용기',
    map: 'https://naver.me/GnCzGHIm',
    highlight: false,
  },
  {
    name: '오산',
    address: '오산시 두곡로 52',
    tel: '031-375-3322',
    services: '유아식판',
    map: 'https://naver.me/GBlmzUMQ',
    highlight: false,
  },
  {
    name: '용인',
    address: '용인시 처인구 지삼로 571, 1층',
    tel: '070-4947-8031',
    services: '다회용컵, 식판, 유아식판',
    map: 'https://naver.me/FqHDS9oy',
    highlight: false,
  },
  {
    name: '의정부',
    address: '의정부시 추동로108번길 31',
    tel: '031-847-4400, 010-3301-7274',
    services: '다회용컵, 유아식판',
    map: '',
    highlight: false,
  },
  {
    name: '이천',
    address: '이천시 원적로 458',
    tel: '031-8011-2385',
    services: '다회용컵, 축제용기, 장례용기',
    map: '',
    highlight: false,
  },
  {
    name: '포천',
    address: '포천시 군내면 하성북리 432',
    tel: '070-4435-3776',
    services: '축제용기, 장례용기, 유아식판, 다회용컵, 식판',
    map: 'https://naver.me/xtgnx3rB',
    highlight: false,
  },
  {
    name: '평택',
    address: '평택시 고덕면 문곡리 569-5, C동',
    tel: '031-658-4788',
    services: '축제용기, 장례용기, 유아식판, 다회용컵, 식판',
    map: 'https://naver.me/xtgnx3rB',
    highlight: false,
  },
]

export const PUBLIC_OPS = [
  { region: '과천시', org: '과천시청', branch: '군포점', detail: '하루 약 1,000컵' },
  { region: '부천시', org: '부천시청', branch: '부천나눔점', detail: '하루 약 2,000컵' },
  { region: '수원시', org: '수원시청', branch: '수원점', detail: '주 약 200컵' },
  { region: '시흥시', org: '시흥시청', branch: '시흥작은자리점', detail: '하루 약 2,000컵' },
  { region: '안성시', org: '안성중앙도서관', branch: '안성점', detail: '하루 약 100컵' },
  { region: '양평군', org: '양평군청', branch: '시흥작은자리점', detail: '하루 약 1,000컵' },
  { region: '용인시', org: '용인시청', branch: '용인점', detail: '주 약 3,500컵' },
  { region: '포천시', org: '포천시청', branch: '포천점', detail: '하루 약 500컵' },
]

export const CONTACT = {
  phone: '031-8019-9524',
  email: 'lalawash@naver.com',
  hq: '경기도 수원시 권선구 권선로 472 세지빌딩 6층',
  site: '경기도 시흥시 호현로 155-10',
  hours: '월~금 09:00–18:00',
  ceo: '김선미',
  biz: '336-87-02913',
}

export const YEARLY_IMPACT = [
  {
    year: '2022',
    events: 10,
    containers: 80000,
    branches: 14,
    jobs: 180,
    note: '축제 대여를 본격적으로 키운 해',
  },
  {
    year: '2023',
    events: 25,
    containers: 150000,
    branches: 16,
    jobs: 220,
    note: '가맹·협동조합과 함께 규모 확대',
  },
  {
    year: '2024',
    events: 50,
    containers: 234000,
    branches: 18,
    jobs: 244,
    note: '경기도청 사업·대형 축제 대응',
  },
  {
    year: '2025',
    events: 50,
    containers: 12000000,
    branches: 20,
    jobs: 270,
    note: '누적 1,200만 개 · 일자리 270명',
  },
  {
    year: '2026',
    events: 50,
    containers: 12000000,
    branches: 20,
    jobs: 270,
    note: '부천나눔 2호점 개소 · 가평·이천 축제 운영',
    highlight: true,
  },
]

export const IMPACT_FORMULA = [
  '일회용 컵 1개 ≈ 탄소 0.11kg (서울시 자료 참고)',
  '다회용 1회 사용 ≈ 탄소 0.03kg (세척·운송 포함)',
  '같은 컵을 3번만 써도 환경에 더 이롭습니다',
  '최대 약 75%까지 탄소를 줄일 수 있습니다',
]

export const PORTFOLIO_POLICY = {
  showVerifiedMetrics: true,
  showAttributedPhotos: false,
  note: '공공·축제·장례·급식 현장에서 실제로 운영해 온 사례입니다. 규모는 대략적인 운영 실적을 기준으로 합니다.',
}

export const VERIFIED_ACHIEVEMENTS = [
  { category: '축제', title: '서울재즈페스티벌', metric: '약 8만 개' },
  { category: '축제', title: '성북 누리마실', metric: '약 3.5만 개' },
  { category: '축제', title: '시흥갯골축제', metric: '약 3만 개' },
  { category: '축제', title: '펜타포트 락페스티벌', metric: '약 3만 개' },
  { category: '축제', title: '축제 누적 사용', metric: '약 23.4만 개' },
  { category: '축제', title: '가평 글로벌 아웃도어 페스타', metric: '2026 운영' },
  { category: '축제', title: '이천 산수유 축제', metric: '2026 운영' },
  { category: '축제', title: '포천 드론제전', metric: '2025 운영' },
  { category: '공공', title: '경기도청 다회용컵', metric: '2024.3~2027.2' },
  { category: '공공', title: '지자체 거점 운영', metric: '하루 약 100~2,000개' },
  { category: '지점', title: '부천나눔 2호점', metric: '2026.6 개소' },
  { category: '네트워크', title: '경기도 세척망', metric: '18개 지역 · 20곳' },
  { category: '장례', title: '경기도의료원(수원·이천·포천)', metric: '연속 운영' },
  { category: '장례', title: '수원연화장', metric: '연속 운영' },
]

export const PARTNERS: { name: string; href?: string }[] = [
  { name: '경기도', href: 'https://www.gg.go.kr/' },
  { name: '경기광역자활센터', href: 'https://gpsc.or.kr' },
  { name: '경기도청' },
  { name: '과천시청' },
  { name: '부천시청' },
  { name: '수원시청' },
  { name: '시흥시청' },
  { name: '용인시청' },
  { name: '포천시청' },
  { name: '양평군청' },
  { name: '안성중앙도서관' },
  { name: '경기도의료원' },
  { name: '수원연화장' },
  { name: 'SKT 협력' },
  { name: '서울재즈페스티벌' },
  { name: '시흥갯골축제' },
  { name: '펜타포트 락페스티벌' },
  { name: '가평 글로벌 아웃도어 페스타' },
  { name: '이천 산수유 축제' },
  { name: '사회적경제' },
]

export const TRUST_BADGES = [
  { title: '경기도청과 함께', desc: '다회용컵 사업 선정 (2024.3~2027.2)' },
  { title: '초순수(UPW) 세척', desc: '일반 수돗물보다 깨끗하게 씻습니다' },
  { title: 'ATP 오염 검사', desc: '눈으로만 보지 않고 수치로 확인' },
  { title: '자활·사회적경제', desc: '지역 일자리 270명과 함께' },
  { title: 'BPA FREE 용기', desc: '축제·행사에도 안심하고 사용' },
  { title: '6단계 안전 세척', desc: '애벌부터 출고 검사까지 순서대로' },
]

export const FAQ = [
  {
    q: '견적은 어떻게 받나요?',
    a: '사용 장소, 예상 수량, 기간만 알려주시면 맞춰 안내드립니다. 홈 하단이나 문의 페이지에서 바로 요청하실 수 있습니다.',
  },
  {
    q: '공공기관·지자체도 이용할 수 있나요?',
    a: '네. 경기도청 다회용컵 사업(2024.3~2027.2)을 비롯해 여러 시청·도서관·특구에서 이미 운영 중입니다.',
  },
  {
    q: '세척은 얼마나 위생적인가요?',
    a: '6단계 세척과 초순수(UPW), ATP 검사를 거쳐 출고합니다. 학교 식판처럼 위생이 중요한 현장에도 맞춰 관리합니다.',
  },
  {
    q: '지점은 몇 곳인가요?',
    a: '경기도 18개 지역, 세척 사업장 20곳 규모로 운영합니다. 부천나눔 2호점(2026.6)처럼 가까운 세척망을 계속 넓히고 있습니다.',
  },
]
