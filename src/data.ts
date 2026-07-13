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
 * 로고 배치 정책 (패널 합의)
 * - 헤더: 밝은 배경용 logo-light 1회만
 * - 푸터: 텍스트 워드마크(로고 이미지 중복 지양)
 * - 히어로: 로고 이미지 없음 → 슬로건 타이포
 * - 파비콘·OG: 기존 에셋 유지
 */
export const LOGO_LIGHT = '/logo-light.png' // 흰 배경용 (파란 워드마크)
export const LOGO_DARK = '/logo.png' // 어두운 배경용 (흰 워드마크) — 필요 시만
export const LOGO = LOGO_LIGHT
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
  center: 'https://cdn.imweb.me/thumbnail/20250922/e344f83adaf40.jpg',
  reusable: 'https://cdn.imweb.me/thumbnail/20250922/81ee8b45ec653.png',
  character: 'https://cdn.imweb.me/thumbnail/20231127/c4d9d8c00bd1b.jpg',
  partner: 'https://cdn.imweb.me/thumbnail/20231128/17cbc2b09321d.jpg',
  washBg: 'https://cdn.imweb.me/thumbnail/20231128/b4092ea57e46f.jpg',
  process: 'https://cdn.imweb.me/thumbnail/20231128/c3dada48bdea3.jpg',
  containers: 'https://cdn.imweb.me/thumbnail/20250922/3aaf157e8547e.jpg',
  mapCta: 'https://cdn.imweb.me/thumbnail/20250922/cbece11f67bff.png',
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
  { to: '/contact', label: '문의' },
]

export const IMPACT = [
  { label: '지금까지 사용한 다회용기', value: 12000000, suffix: '개+' },
  { label: '줄어든 탄소', value: 604500, suffix: ' kgCO₂eq' },
  { label: '소나무로 환산하면', value: 66428, suffix: '그루' },
  { label: '함께하는 지역 일자리', value: 270, suffix: '명' },
]

export const SOLUTIONS = [
  {
    slug: 'sikpan',
    title: '급식 식판 세척',
    short: '어린이집·유치원·학교 식판을 대신 씻어 깨끗하게 돌려드립니다.',
    desc: '급식실에서 쓰인 식판을 수거해, 전문 세척·살균·건조 후 다시 가져다 드립니다. 아이들 식기는 위생이 가장 중요하니, 현장 부담은 줄이고 안전은 높이는 방식으로 운영합니다.',
    image: IMAGES.system,
    tags: ['식판', '위생', '아동 안전'],
    points: [
      '수거 → 세척 → 살균 → 건조 → 다시 공급까지 한 번에',
      '전문 장비로 급식실 세척 부담을 덜어드립니다',
      '경기도 가까운 지점에서 빠르게 대응합니다',
    ],
  },
  {
    slug: 'public',
    title: '공공·기관 다회용컵',
    short: '시청·청사·도서관 카페에 맞춰, 매일 필요한 만큼 순환합니다.',
    desc: '공공기관·지자체 청사 카페, 일회용품 줄이기 특구 등에 다회용컵을 정기적으로 공급·수거·세척합니다. 경기도청 다회용컵 사업에도 선정되어, 공공 현장에서의 안정적인 운영을 검증받았습니다.',
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
      '대여·반납 부스·수거·세척을 한 팀으로 진행',
    ],
  },
  {
    slug: 'funeral',
    title: '장례식장 순환',
    short: '조용하고 끊김 없이, 필요한 용기를 제때 맞춰 드립니다.',
    desc: '경기도의료원(수원·이천·포천), 수원연화장 등에서 다회용기 시스템을 운영합니다. 장례 현장의 예절을 지키며, 공급·수거·세척이 끊기지 않도록 관리합니다.',
    image: IMAGES.order,
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

export const BRANCHES = [
  { name: '포천', x: 58, y: 8, capacity: '하루 약 500컵' },
  { name: '의정부', x: 48, y: 18, capacity: '정기 운영' },
  { name: '고양', x: 32, y: 22, capacity: '정기 운영' },
  { name: '부천', x: 22, y: 38, capacity: '하루 약 2,000컵' },
  { name: '부천나눔', x: 18, y: 42, capacity: '제로특구' },
  { name: '시흥', x: 20, y: 52, capacity: '하루 약 2,000컵' },
  { name: '시흥작은자리', x: 24, y: 56, capacity: '관광·특구' },
  { name: '안산', x: 28, y: 58, capacity: '정기 운영' },
  { name: '군포', x: 36, y: 48, capacity: '과천 연계' },
  { name: '수원', x: 42, y: 58, capacity: '청사·장례' },
  { name: '오산', x: 44, y: 68, capacity: '정기 운영' },
  { name: '용인', x: 55, y: 55, capacity: '주 약 3,500컵' },
  { name: '성남', x: 52, y: 42, capacity: '본점 계열' },
  { name: '성남만남', x: 56, y: 46, capacity: '정기 운영' },
  { name: '광주', x: 62, y: 52, capacity: '정기 운영' },
  { name: '이천', x: 72, y: 55, capacity: '의료원 연계' },
  { name: '안성', x: 58, y: 78, capacity: '하루 약 100컵' },
  { name: '평택', x: 38, y: 82, capacity: '정기 운영' },
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
    highlight: true,
  },
]

export const IMPACT_FORMULA = [
  '일회용 컵 1개 ≈ 탄소 0.11kg (서울시 자료 참고)',
  '다회용 1회 사용 ≈ 탄소 0.03kg (세척·운송 포함)',
  '같은 컵을 3번만 써도 환경 효율이 뒤바뀝니다',
  '최대 약 75%까지 탄소를 줄일 수 있습니다',
]

export const PORTFOLIO_POLICY = {
  showVerifiedMetrics: true,
  showAttributedPhotos: false,
  note: '행사·기관별 수치는 회사소개서 v12 기준입니다. 특정 현장 사진은 원본 확보 후 게시합니다.',
}

export const VERIFIED_ACHIEVEMENTS = [
  { category: '축제', title: '서울재즈페스티벌', metric: '약 8만 개', source: '회사소개서 v12' },
  { category: '축제', title: '성북 누리마실', metric: '약 3.5만 개', source: '회사소개서 v12' },
  { category: '축제', title: '시흥갯골축제', metric: '약 3만 개', source: '회사소개서 v12' },
  { category: '축제', title: '펜타포트 락페스티벌', metric: '약 3만 개', source: '회사소개서 v12' },
  { category: '축제', title: '잠수교 행사', metric: '약 8천 개', source: '회사소개서 v12' },
  { category: '축제', title: '축제 누적 사용', metric: '약 23.4만 개', source: '회사소개서 v12' },
  { category: '공공', title: '경기도청 다회용컵', metric: '2024.3~2027.2', source: '회사소개서 v12' },
  { category: '공공', title: '지자체 거점 운영', metric: '하루 약 100~2,000개', source: '회사소개서 v12' },
  { category: '장례', title: '경기도의료원(수원·이천·포천)', metric: '연속 운영', source: '회사소개서 v12' },
  { category: '장례', title: '수원연화장', metric: '연속 운영', source: '회사소개서 v12' },
]

export const PARTNERS: { name: string; logo?: string; href?: string }[] = [
  { name: '경기도', logo: IMAGES.gg, href: 'https://www.gg.go.kr/' },
  { name: '경기광역자활센터', logo: IMAGES.gpsc, href: 'https://gpsc.or.kr' },
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
    a: '사용 장소, 예상 수량, 기간을 알려주시면 맞춤 안내드립니다. 홈 하단·문의 페이지에서 바로 요청할 수 있습니다.',
  },
  {
    q: '공공기관·지자체도 이용할 수 있나요?',
    a: '네. 경기도청을 비롯해 여러 시청·도서관·특구에서 이미 운영 중입니다. 담당자 상담도 도와드립니다.',
  },
  {
    q: '세척은 얼마나 위생적인가요?',
    a: '6단계 세척과 초순수(UPW), ATP 검사를 거쳐 출고합니다. 급식·공공 현장 기준에 맞춰 관리합니다.',
  },
]
