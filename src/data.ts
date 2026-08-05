/** 브랜드 카피·에셋 (기존 사이트 기준) */
export const BRAND = {
  name: '라라워시',
  nameEn: 'Lalawash',
  /** OG·기존 사이트 슬로건 */
  slogan: '지속가능한 깨끗함',
  tagline: '다회용기 대여세척 서비스',
  description:
    '지속가능한 깨끗함을 추구하며, 다회용기 렌탈·세척 서비스를 제공하는 경기도의 지역 브랜드입니다.',
  heroTitle: '지구를 살리는 가장 깨끗한 습관,\n당신의 일상에 ‘초록색 안전함’을 더하는 라라워시',
  heroLead: '한 번 쓰고 버려지는 일상에서 지구를 지키는 일상으로',
  heroDesc:
    '라라워시가 다회용기 토탈 솔루션으로 지속가능한 내일의 일상을 만들어갑니다.',
}

/**
 * 브랜드 마크 정책
 * - 헤더·푸터·관리자(밝은 배경): 컬러 로고 `/logo-light.png`
 * - 어두운 배경용: 화이트 로고 `/logo.png`
 */
export const LOGO = '/logo-light.png'
export const LOGO_ON_DARK = '/logo.png'
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
  center: 'https://cdn.imweb.me/thumbnail/20231123/4aa2068891dbb.jpg',
  centerMap: '/maps/center-map.png',
  centerMapAlt: '/maps/center-map-alt.png',
  mapCta: 'https://cdn.imweb.me/thumbnail/20250922/cbece11f67bff.png',
  reusable: 'https://cdn.imweb.me/thumbnail/20250922/81ee8b45ec653.png',
  character: 'https://cdn.imweb.me/thumbnail/20231127/c4d9d8c00bd1b.jpg',
  partner: 'https://cdn.imweb.me/thumbnail/20231128/17cbc2b09321d.jpg',
  washBg: 'https://cdn.imweb.me/thumbnail/20231128/b4092ea57e46f.jpg',
  process: 'https://cdn.imweb.me/thumbnail/20231128/c3dada48bdea3.jpg',
  containers: 'https://cdn.imweb.me/thumbnail/20250922/3aaf157e8547e.jpg',
  funeral: '/funeral-dishes.jpg',
  notice: 'https://cdn.imweb.me/thumbnail/20250922/cb365cd4333dc.png',
  gg: 'https://cdn.imweb.me/thumbnail/20240503/5f051377a0809.png',
  gpsc: 'https://cdn.imweb.me/thumbnail/20240503/9d2534da00f8f.png',
  blog: 'https://cdn.imweb.me/thumbnail/20240503/c70294a143493.png',
  instagram: 'https://cdn.imweb.me/thumbnail/20240503/de47929d260ca.png',
  /** PDF 구성안·브랜드 자료에서 추출 */
  sikpanTrays: '/pdf-assets/sikpan-trays-rack.jpg',
  sikpanMachine: '/pdf-assets/sikpan-machine.jpg',
  sikpanWorker: '/pdf-assets/sikpan-worker.jpg',
  sikpanRacks: '/pdf-assets/sikpan-yellow-racks.jpg',
  sikpanNozzles: '/pdf-assets/sikpan-nozzles.jpg',
  platesRack: '/pdf-assets/plates-rack.jpg',
  funeralSite: '/pdf-assets/funeral-site.jpg',
  funeralHospital: '/pdf-assets/funeral-hospital.jpg',
  dishesSet: '/pdf-assets/dishes-set.jpg',
  deliveryTruck: '/pdf-assets/delivery-truck.jpg',
  activitySbs: '/pdf-assets/activity-sbs.jpg',
  activityCafe: '/pdf-assets/activity-gg-cafe.jpg',
  activityFair: '/pdf-assets/activity-fair.jpg',
  festivalProducts: '/pdf-assets/festival-products.jpg',
  festivalReturn: '/pdf-assets/festival-return.jpg',
  festivalTent: '/pdf-assets/festival-tent.jpg',
  festivalCounter: '/pdf-assets/festival-counter.jpg',
  upwMachine: '/pdf-assets/upw-machine.jpg',
  ultrasonicMachine: '/pdf-assets/ultrasonic-machine.jpg',
}

/** PDF 구성안 상단 3대 카테고리 */
export const NAV_GROUPS = [
  {
    label: '라라워시',
    children: [
      { to: '/about', label: '회사소개' },
      { to: '/about/history', label: '연혁 및 성과' },
      { to: '/about/cert', label: '인증획득 및 위생관리' },
      { to: '/about/branches', label: '라라워시 지점' },
      { to: '/notice', label: '라라워시 소식' },
    ],
  },
  {
    label: '다회용기서비스',
    children: [
      { to: '/services', label: '다회용기 순환솔루션' },
      { to: '/services/funeral', label: '장례식장용기' },
      { to: '/services/festival', label: '축제 및 행사' },
      { to: '/services/sikpan', label: '식판 세척' },
      { to: '/services/cup', label: '다회용컵' },
      { to: '/services/kids-tray', label: '유아 식판' },
      { to: '/services/catering', label: '케이터링' },
    ],
  },
  {
    label: '이용문의',
    children: [
      { to: '/contact/how', label: '이용방법' },
      { to: '/contact/faq', label: 'Q&A' },
      { to: '/contact', label: '견적문의' },
    ],
  },
] as const

/** @deprecated 평탄 NAV — NAV_GROUPS 사용 */
export const NAV = NAV_GROUPS.flatMap((g) => g.children.map((c) => ({ to: c.to, label: c.label })))

export const IMPACT = [
  { label: '라라워시가 세척한 다회용기(연간)', value: 12000000, suffix: '개' },
  { label: '줄어든 탄소', value: 604500, suffix: ' kgCO₂eq' },
  { label: '소나무로 환산하면', value: 66428, suffix: '그루' },
  { label: '함께하는 지역 일자리', value: 270, suffix: '명' },
]

/** PDF 기준: 경기도 15개 지역 · 21개 지점 */
export const NETWORK = {
  sites: 21,
  regions: 15,
  washSteps: 6,
}

export type Solution = {
  slug: string
  title: string
  short: string
  desc: string
  image: string
  tags: string[]
  points: string[]
  process: { step: string; title: string; desc: string }[]
  cases?: string[]
  pending?: boolean
  /** PDF 상세 블록 */
  featureBlocks?: { title: string; desc: string }[]
  listBlocks?: { title: string; items: string[] }[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'funeral',
    title: '장례식장 다회용기 대여 및 세척',
    short: '일회용품 없는 친환경 장례문화를 만들어 나갑니다.',
    desc: '라라워시의 장례식장 다회용기서비스는 빈소에서 사용하는 식기를 위생적으로 공급하고, 사용 후 수거하여 전문 세척·살균공정을 거쳐 다시 재공급하는 순환형 운영시스템입니다. 단순한 일회용품 절감을 넘어 엄격한 위생관리와 안정적인 공급시스템으로 장례의 품격을 높입니다.',
    image: IMAGES.funeralSite,
    tags: ['장례', '순환 공급', '위생'],
    points: [
      '환경호르몬 Zero, 고온고압세척이 가능한 프리미엄 식기',
      '세척공정·오염유형·식기재질에 맞는 전용 제품 운영',
      '사용부터 수거·세척·정산까지 체계적인 순환',
    ],
    process: [
      { step: '01', title: '장례상담', desc: '빈소 운영에 맞는 용기 구성과 일정을 상담합니다.' },
      { step: '02', title: '빈소 다회용기 비치', desc: '협의된 수량으로 다회용기를 비치합니다.' },
      { step: '03', title: '다회용기 사용', desc: '조문객을 맞이하는 현장에서 사용합니다.' },
      { step: '04', title: '세척 및 재공급', desc: '전문 세척·살균 후 다시 공급합니다.' },
      { step: '05', title: '비용 정산', desc: '사용량에 맞춰 투명하게 정산합니다.' },
    ],
    cases: ['수원 장례식장', '이천 장례식장', '포천 장례식장', '경기도의료원', '수원연화장'],
    featureBlocks: [
      {
        title: '라라워시 친환경 다회용 장례용기',
        desc: '환경호르몬 Zero, 고온고압세척이 가능한 프리미엄 식기입니다. 세척공정·오염유형·식기재질 및 위생 기준에 따라 적합한 전용 제품을 선정하여 운영합니다.',
      },
      {
        title: '품격을 지키는 순환 운영',
        desc: '조문객을 맞이하고 격식을 지켜주는 장례용기를 관리합니다. 전문 세척설비와 표준화된 공정으로 일관된 품질을 재공급합니다.',
      },
    ],
  },
  {
    slug: 'festival',
    title: '축제 및 행사용기 대여',
    short: '깨끗한 행사 진행을 위해 인원에 맞춰 다회용기를 대여합니다.',
    desc: '지역 축제 및 행사에 다회용기 대여서비스를 제공하여 일회용 쓰레기 없는 지속 가능한 행사 문화를 만들어 갑니다. 경기도 내 15개 지역 21개 지점을 통해 신속한 대여·수거·세척·재공급을 제공합니다.',
    image: IMAGES.festivalProducts,
    tags: ['축제', '행사', '반납부스'],
    points: [
      '파스타볼, 접시, 나눔접시 등 다양한 다회용기 보유',
      '행사 음식 종류에 맞는 용기 선택',
      '반납부스 운영·인력 배치까지 현장 연계',
    ],
    process: [
      { step: '01', title: '상담 및 견적', desc: '행사일정, 용기 종류·수량, 반납부스 운영 여부를 상담합니다.' },
      { step: '02', title: '물품 준비', desc: '다회용기·반납함·현장운영물품을 협의·준비합니다.' },
      { step: '03', title: '다회용기 공급', desc: '협의 내용에 맞춰 비치·공급합니다.' },
      { step: '04', title: '반납부스 운영', desc: '필요 시 부스 운영과 인력을 배치합니다.' },
      { step: '05', title: '결과 전달·정산', desc: '사용량·반납량을 전달하고 정산합니다.' },
    ],
    cases: ['서울재즈페스티벌', '시흥갯골축제', '가평 아웃도어 페스타', '이천 산수유 축제'],
    listBlocks: [
      {
        title: '보유 다회용기 유형',
        items: ['파스타볼', '접시', '나눔접시', '컵·기타 행사 맞춤 용기', '반납함·현장운영물품'],
      },
    ],
    featureBlocks: [
      {
        title: '자원 순환형 현장 운영',
        desc: '행사 기간 동안 현장과 연계해 안정적으로 대여·수거·세척·재공급을 이어 갑니다. 15개 지역 21개 지점 네트워크로 신속하게 대응합니다.',
      },
    ],
  },
  {
    slug: 'sikpan',
    title: '학교·기업·대형 식당 식판 대여 및 세척',
    short: '학교, 대기업 구내식당, 병원식당, 급식소 식판을 세척해드립니다.',
    desc: '식판을 수거하여 전문 세척공정을 통해 위생적으로 세척·살균·건조합니다. 단순 세척을 넘어 위생 기준과 운영 안정성까지 함께 고려한 전문 식판 세척서비스를 제공합니다.',
    image: IMAGES.sikpanMachine,
    tags: ['식판', '학교', '급식'],
    points: [
      '스텐·멜라민 식판 대응',
      '세척 인력·위생관리·보관·공급까지 일괄 관리',
      '2026년 경기도 내 11개 학교 일 14,000장 세척 운영',
    ],
    process: [
      { step: '01', title: '이용 상담', desc: '식판 수량 및 수거·공급 방법을 협의합니다.' },
      { step: '02', title: '식판 공급', desc: '협의된 일정에 맞춰 식판을 공급합니다.' },
      { step: '03', title: '식판 회수', desc: '사용한 식판을 회수합니다.' },
      { step: '04', title: '세척 및 검수', desc: '전문 세척 후 검수합니다.' },
      { step: '05', title: '식판 재공급', desc: '일정에 맞춰 깨끗하게 재공급합니다.' },
    ],
    cases: ['경기도 내 11개 학교', '일 14,000장 세척'],
    featureBlocks: [
      {
        title: '학교 맞춤 운영 시스템과 공급 관리체계',
        desc: '세척 인력 운영 부담, 위생관리 기준, 세척 후 보관 및 공급 과정까지 함께 관리합니다. 급식 일정에 맞춘 안정적인 재공급이 핵심입니다.',
      },
    ],
    listBlocks: [
      {
        title: '식판 유형',
        items: ['스텐 식판', '멜라민 식판', '학교·구내식당·병원식당·급식소 맞춤 운영'],
      },
    ],
  },
  {
    slug: 'cup',
    title: '오피스·카페 다회용컵 대여 및 세척',
    short: '지자체청사, 공공기관, 사무실, 카페에서 편리하게 사용해보세요.',
    desc: '경기도 일회용품 저감 정책에 따라 공공기관을 중심으로 다회용품 사용을 추진합니다. 사용한 다회용기는 라라워시 반납함에 넣어주시면, 직접 수거 후 6단계 세척 프로세스를 거쳐 다시 공급해 드립니다.',
    image: IMAGES.activityCafe,
    tags: ['다회용컵', '공공기관', '카페'],
    points: [
      '경기도청 다회용컵 사업 선정 (2024.3~2027.2)',
      '남부·북부청사, 도의회, 15개 지자체 청사 등 운영',
      '부천 내 4개 대학 캠퍼스컵·안산 문화거리 등',
    ],
    process: [
      { step: '01', title: '다회용컵 비치', desc: '현장 규모에 맞춰 컵을 비치합니다.' },
      { step: '02', title: '다회용컵 사용', desc: '일상에서 편리하게 사용합니다.' },
      { step: '03', title: '다회용컵 회수', desc: '반납함에서 수거합니다.' },
      { step: '04', title: '세척 및 검수', desc: '6단계 세척과 검수를 진행합니다.' },
      { step: '05', title: '컵 재공급', desc: '깨끗하게 다시 공급합니다.' },
    ],
    cases: [
      '경기도 남부·북부청사',
      '경기도의회',
      '안산·시흥·용인 등 15개 지자체 청사',
      '경기융합복합타운 카페 6곳',
      '부천 내 4개 대학 캠퍼스컵',
      '안산 문화거리',
    ],
    listBlocks: [
      {
        title: '서비스 유형',
        items: ['오피스·청사 다회용컵', '카페컵 순환', '반납함 설치·정기 수거', '6단계 세척 후 재공급'],
      },
    ],
  },
  {
    slug: 'kids-tray',
    title: '유아식판 대여 및 세척',
    short: '어린이집, 유치원, 학교 식판을 안전하고 깨끗하게 세척해드립니다.',
    desc: '매일 먹는 아이 밥상, 엄마의 마음으로 깐깐하게 검증한 안심 식판케어입니다. 식판 세척 부담은 줄이고, 식약처 위생 지침을 준수하는 체계적인 위생데이터로 깨끗함과 안전함을 함께 제공합니다.',
    image: IMAGES.sikpanTrays,
    tags: ['유아식판', '어린이집', '유치원'],
    points: [
      '친환경 인증세제 사용',
      '잔류세제검사·식기살균온도검사로 안심',
      '원 직접결제·학부모 CMS·지자체 보조금 등 대금지급 협의 가능',
    ],
    process: [
      { step: '01', title: '도입 상담', desc: '어린이집·유치원 세척 도입과 대금지급 방법을 협의합니다.' },
      { step: '02', title: '식판 공급', desc: '협의된 일정에 맞춰 식판을 공급합니다.' },
      { step: '03', title: '식판 수거', desc: '사용한 식판을 수거합니다.' },
      { step: '04', title: '세척 후 검수', desc: '세척·검수로 위생을 확인합니다.' },
      { step: '05', title: '식판 재공급', desc: '깨끗하게 다시 공급합니다.' },
    ],
    cases: ['어린이집·유치원 정기 순환'],
    listBlocks: [
      {
        title: '대금지급 방법 협의',
        items: ['원에서 직접결제', '학부모 CMS 결제', '지자체 보조금 사용'],
      },
      {
        title: '식판 유형',
        items: ['스텐 유아식판', '친환경 식판 (사진·상세는 자료 전달 후 업데이트)'],
      },
    ],
  },
  {
    slug: 'catering',
    title: '라라워시 케이터링',
    short: '일회용기가 아닌 다회용기로, 이젠 케이터링도 라라워시입니다.',
    desc: '일회용 쓰레기를 줄이는 다회용기 기반 케이터링 서비스입니다. 일정·인원·현장 동선과 필요한 용기 구성을 알려주시면 맞춤형으로 안내드립니다.',
    image: IMAGES.platesRack,
    tags: ['케이터링', '다회용기'],
    points: ['다회용기 기반 케이터링', '행사·기업·기관 맞춤 상담', '현장 규모와 동선을 고려한 용기 구성'],
    process: [
      { step: '01', title: '상담', desc: '일정·인원·용기 구성을 상담합니다.' },
      { step: '02', title: '견적', desc: '맞춤 견적을 안내합니다.' },
      { step: '03', title: '준비', desc: '다회용기와 운영을 준비합니다.' },
      { step: '04', title: '현장 운영', desc: '행사 현장에서 서비스를 제공합니다.' },
      { step: '05', title: '회수·정산', desc: '회수 후 세척·정산합니다.' },
    ],
    featureBlocks: [
      {
        title: '케이터링도 다회용기로',
        desc: '일회용 쓰레기 없이 품격 있는 케이터링을 준비합니다. 용기 종류·인원·동선에 맞춰 상담합니다.',
      },
    ],
    pending: true,
  },
]

/** 구 URL slug 호환 */
export const SOLUTION_ALIASES: Record<string, string> = {
  public: 'cup',
}

export const WASH_STEPS = [
  { title: '불림·애벌 세척', desc: '라라워시 전용 친환경 세제로 먼저 불려 씻습니다' },
  { title: '초음파 세척', desc: '눈에 잘 안 보이는 오염까지 꼼꼼히' },
  { title: '고온·고압 세척', desc: '초순수(UPW)로 남은 이물질을 제거' },
  { title: '고온 살균', desc: '100℃ 이상에서 살균·소독' },
  { title: 'ATP 오염 검사', desc: '잔류세제·오염도를 수치로 확인' },
  { title: '출고 전 전수 검사', desc: '빠짐없이 확인한 뒤 다시 보냅니다' },
]

/** 이용방법 — PDF 구성안 이미지(6단계) 기준 */
export const HOW_TO = [
  { step: '01', title: '문의', desc: '사용목적에 맞는 다회용기 대여를 문의합니다.' },
  { step: '02', title: '선택', desc: '다회용기 종류·수량 및 대여 관련 제반 사항을 결정합니다.' },
  { step: '03', title: '배송', desc: '사용 장소·시간에 맞춰 다회용기를 배송합니다.' },
  { step: '04', title: '사용', desc: '현장에서 다회용기를 사용합니다.' },
  { step: '05', title: '회수', desc: '사용한 다회용기를 회수합니다.' },
  { step: '06', title: '세척', desc: '회수한 다회용기를 전문 세척해 다시 순환합니다.' },
]

/** 레거시 CIRCLE — HOW_TO 권장 */
export const CIRCLE = HOW_TO

export type Branch = {
  name: string
  address: string
  tel: string
  services: string
  map: string
  note?: string
  pendingAddress?: boolean
}

/** PDF: 부천 4곳·수원 2곳 표시, 규모화세척장·파주 삭제 */
export const BRANCHES: Branch[] = [
  {
    name: '고양',
    address: '고양시 일산동구 동국로 5',
    tel: '031-968-8378',
    services: '다회용컵, 식판',
    map: 'https://naver.me/xvL704Gr',
  },
  {
    name: '광주',
    address: '광주시 경안안길 20-9',
    tel: '010-8426-0768',
    services: '유아식판',
    map: 'https://naver.me/5T3yF8wJ',
  },
  {
    name: '군포',
    address: '군포시 산본로54번안길 19-1',
    tel: '031-427-0555',
    services: '다회용컵, 축제용기, 식판, 유아식판',
    map: 'https://naver.me/GaTYMR1Y',
  },
  {
    name: '부천 1호',
    address: '부천시 평천로 813 / 평천로 852, 3층',
    tel: '032-653-6121',
    services: '다회용기, 다회용컵, 식판, 도시락용기',
    map: 'https://naver.me/xcJ5KTPx',
  },
  {
    name: '부천나눔',
    address: '부천시 신흥로425번길 55',
    tel: '070-4304-3184',
    services: '다회용컵, 축제용기, 식판',
    map: 'https://naver.me/xyjIXCNV',
    note: '2026.6.24 개소',
  },
  {
    name: '부천 3호',
    address: '주소 업데이트 예정',
    tel: '본사 문의',
    services: '다회용기 세척',
    map: '',
    pendingAddress: true,
  },
  {
    name: '부천 4호',
    address: '주소 업데이트 예정',
    tel: '본사 문의',
    services: '다회용기 세척',
    map: '',
    pendingAddress: true,
  },
  {
    name: '성남',
    address: '성남시 중원구 둔촌대로526번길 9, 가동 1층',
    tel: '031-741-0120',
    services: '다회용컵, 식판, 유아식판',
    map: 'https://naver.me/FWPoqhuc',
  },
  {
    name: '성남만남',
    address: '광주시 경충대로 1889',
    tel: '031-768-3666',
    services: '축제용기, 식판, 도시락용기, 배달용기',
    map: 'https://naver.me/5wHCfPyx',
  },
  {
    name: '수원 1호',
    address: '의왕시 월암길 93',
    tel: '031-232-0179',
    services: '다회용컵, 축제용기, 장례용기',
    map: 'https://naver.me/5duKogcy',
  },
  {
    name: '수원 2호',
    address: '주소 업데이트 예정',
    tel: '본사 문의',
    services: '다회용기 세척',
    map: '',
    pendingAddress: true,
  },
  {
    name: '시흥',
    address: '시흥시 오동마을로6번길 4',
    tel: '031-315-7151',
    services: '식판, 유아식판',
    map: '',
  },
  {
    name: '시흥작은자리',
    address: '시흥시 호현로 155-10',
    tel: '031-313-2733, 010-4060-1023',
    services: '다회용컵, 축제용기, 다회용기 판매',
    map: '',
  },
  {
    name: '안산',
    address: '안산시 상록구 영화5길 6, 101호',
    tel: '031-493-9844',
    services: '다회용기, 다회용컵, 식판',
    map: 'https://naver.me/xsUyhojX',
  },
  {
    name: '안성',
    address: '안성시 대덕면 누르잿길 35',
    tel: '031-675-8899',
    services: '다회용기, 다회용컵, 유아식판, 도시락용기',
    map: 'https://naver.me/GnCzGHIm',
  },
  {
    name: '오산',
    address: '오산시 두곡로 52',
    tel: '031-375-3322',
    services: '유아식판',
    map: 'https://naver.me/GBlmzUMQ',
  },
  {
    name: '용인',
    address: '용인시 처인구 지삼로 571, 1층',
    tel: '070-4947-8031',
    services: '다회용컵, 식판, 유아식판',
    map: 'https://naver.me/FqHDS9oy',
  },
  {
    name: '의정부',
    address: '의정부시 추동로108번길 31',
    tel: '031-847-4400, 010-3301-7274',
    services: '다회용컵, 유아식판',
    map: '',
  },
  {
    name: '이천',
    address: '이천시 원적로 458',
    tel: '031-8011-2385',
    services: '다회용컵, 축제용기, 장례용기',
    map: '',
  },
  {
    name: '포천',
    address: '포천시 군내면 하성북리 432',
    tel: '070-4435-3776',
    services: '축제용기, 장례용기, 유아식판, 다회용컵, 식판',
    map: 'https://naver.me/xtgnx3rB',
  },
  {
    name: '평택',
    address: '평택시 고덕면 문곡리 569-5, C동',
    tel: '031-658-4788',
    services: '축제용기, 장례용기, 유아식판, 다회용컵, 식판',
    map: 'https://naver.me/xtgnx3rB',
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

export const HISTORY = [
  ['2019', '유아식판 세척서비스 개시 · 전국 최초 자활세척사업단(성남지역자활센터)'],
  ['2020', '유아식판세척 공동브랜드 ‘식판케어’ 런칭'],
  ['2021', '라라워시 브랜드 런칭 · SKT 사옥 카페 컵 세척 시작'],
  ['2022', '경기도 기금 지원으로 세척 인프라 구축 · 신규 지점 확대'],
  ['2023', '프랜차이즈 협동조합 설립 · 세척장 확대'],
  ['2024~2026', '경기도청·지자체 오피스컵, 학교식판, 축제·장례식장 다회용기 순환 운영'],
]

export const FIELD_ACTIVITIES = [
  { title: 'SBS 공생의 법칙', image: IMAGES.activitySbs },
  { title: '경기도청 카페 다회용기', image: IMAGES.activityCafe },
  { title: '사회적경제박람회', image: IMAGES.activityFair },
]

export const WASH_GALLERY = [
  { title: '고온·고압 세척', image: IMAGES.platesRack },
  { title: '초순수(UPW) 제조', image: IMAGES.upwMachine },
  { title: '초음파·와류 세척', image: IMAGES.ultrasonicMachine },
]

/** PDF: 경기도민 약 1,400만명 시나리오 환경효과 */
export const ENV_SCENARIO = {
  title: '경기도민 약 1,400만명이 연간 100회 다회용기를 사용한다면',
  items: [
    { label: '다회용컵 1회 사용 시 온실가스', value: '0.02kgCO₂e. (개당 100회 사용 후 폐기 기준)' },
    { label: '다회용컵 사용횟수', value: '약 14억회/년 (1,400만개 × 100회)' },
    { label: '온실가스 배출량', value: '2만 7,446톤CO₂e./년' },
    { label: '1인당 배출량', value: '2.0kgCO₂e./인·년 (일회용 대비 19.6% 수준)' },
    { label: '온실가스 감축량', value: '11만 2,601톤CO₂e./년 (1인당 8.2kg)' },
    { label: '감축량의 경제적 가치', value: '약 27.7억원/년 (배출권 24,623원/톤 기준)' },
    { label: '감축량의 나무 환산', value: '1,237만 그루 (중부 30년생 소나무 연간 흡수 9.1kg 기준)' },
    {
      label: '승용차 주행거리 환산',
      value: '약 11.3억km (서울–부산 약 140만 7,517회 왕복)',
    },
  ],
}

export const CERTIFICATIONS = [
  {
    badge: 'NSF',
    title: '미국위생협회 NSF 위생기준 준수',
    desc: '모든 세척 프로세스는 NSF가 요구하는 엄격한 위생관리 가이드라인을 준수하며, 정기적인 위생점검을 실시합니다.',
  },
  {
    badge: 'ISO 9001',
    title: 'ISO 9001 (품질경영시스템)',
    desc: '다회용기 렌탈 및 세척 서비스 전 과정에서 국제표준 품질 보증 체계를 확립했습니다. 어느 지점에서든 동일한 세척 퀄리티를 제공합니다.',
  },
  {
    badge: 'ISO 14001',
    title: 'ISO 14001 (환경경영시스템)',
    desc: '세척 공정 내 용수관리, 폐기물 저감 등 친환경·지속가능한 공정 관리를 인정받은 ESG 파트너입니다.',
  },
]

export const HYGIENE_CHECKS = [
  {
    title: 'ATP 오염도 검사',
    desc: '당일 세척 완료 용기를 무작위로 추출해 세균 오염도를 수치로 확인합니다.',
    detail:
      '식약처 다회용 기구·용기 위생관리 지침에 따라 출고 전 표본을 추출합니다. 육안이 아닌 수치로 오염도를 확인해, 기준을 통과한 용기만 현장에 공급합니다.',
  },
  {
    title: '고온살균 온도라벨 검사',
    desc: '고온 건조·살균이 기준 온도에 도달했는지 온도라벨로 검증합니다.',
    detail:
      '고온 살균·건조 공정이 목표 온도에 도달했는지 온도라벨로 확인합니다. 법적 기준을 뛰어넘는 상시 데이터 관리로 살균 공정의 신뢰도를 높입니다.',
  },
  {
    title: '잔류세제 검사',
    desc: '세척 후 세제 잔류 여부를 검사해 안심하고 사용할 수 있게 합니다.',
    detail:
      '라라워시 전용 친환경세제 사용 후에도 잔류 여부를 검사합니다. 아이 식판부터 축제 용기까지, 깨끗함과 안전함을 함께 검증합니다.',
  },
]

export const CORE_CAPABILITIES = [
  {
    title: '식약처 기준 안심위생 시스템',
    desc: '식약처 다회용 기구·용기 위생관리 지침에 따른 검사와 6단계 세척으로 안심을 약속합니다.',
  },
  {
    title: '경기도 15개 지역 21개 지점',
    desc: '가장 가까운 거점에서 신속하게 수거·세척·재공급합니다.',
  },
  {
    title: '국제 위생기준·경영시스템',
    desc: 'NSF 위생기준을 준수하고 ISO 9001·ISO 14001 인증 체계로 품질과 환경을 관리합니다.',
  },
  {
    title: '초순수물(UPW) 세척',
    desc: '보다 더 깨끗함을 위해 초순수물을 사용한 세척 공정을 운영합니다.',
  },
  {
    title: '라라워시 전용 친환경세제',
    desc: '깨끗함과 안전함을 동시에 잡는 전용 친환경세제를 사용합니다.',
  },
]

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
    branches: 21,
    jobs: 270,
    note: '15개 지역 · 21개 지점 · 부천나눔 개소',
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
  note: '공공·축제·장례·급식 현장에서 실제로 운영해 온 사례입니다.',
}

export const VERIFIED_ACHIEVEMENTS = [
  { category: '축제', title: '서울재즈페스티벌', metric: '약 8만 개' },
  { category: '축제', title: '성북 누리마실', metric: '약 3.5만 개' },
  { category: '축제', title: '시흥갯골축제', metric: '약 3만 개' },
  { category: '축제', title: '펜타포트 락페스티벌', metric: '약 3만 개' },
  { category: '축제', title: '축제 누적 사용', metric: '약 23.4만 개' },
  { category: '축제', title: '가평 글로벌 아웃도어 페스타', metric: '2026 운영' },
  { category: '축제', title: '이천 산수유 축제', metric: '2026 운영' },
  { category: '공공', title: '경기도청 다회용컵', metric: '2024.3~2027.2' },
  { category: '지점', title: '경기도 세척망', metric: '15개 지역 · 21곳' },
  { category: '장례', title: '경기도의료원(수원·이천·포천)', metric: '연속 운영' },
  { category: '장례', title: '수원연화장', metric: '연속 운영' },
  { category: '급식', title: '경기도 내 학교 식판', metric: '11개교 · 일 14,000장' },
]

/** PDF 파트너 롤링 */
export const PARTNERS: { name: string; href?: string }[] = [
  { name: '경기도청', href: 'https://www.gg.go.kr/' },
  { name: '광명시' },
  { name: '부천시' },
  { name: '수원시' },
  { name: '시흥시' },
  { name: '안성시' },
  { name: '안산시' },
  { name: '이천시' },
  { name: '용인시' },
  { name: '포천시' },
  { name: '경기도의료원' },
  { name: '수원연화장' },
  { name: '성남FC' },
  { name: '부천캠퍼스컵' },
  { name: '안산카페거리' },
]

export const TRUST_BADGES = [
  { title: '국제 기준·인증', desc: 'NSF 기준 준수 · ISO 9001 · ISO 14001' },
  { title: '초순수(UPW) 6단계', desc: '세척의 안정성을 높입니다' },
  { title: '식약처 기준 검사', desc: '소재 안전성·살균소독 검사' },
  { title: '경기도보건환경연구원', desc: '연 2회 정기검사 실시' },
  { title: '매일 자체 검증', desc: 'ATP·온도라벨·잔류세제 검사' },
  { title: 'BPA FREE 용기', desc: '축제·행사에도 안심하고 사용' },
]

export const HOME_TRUST_LINKS = [
  {
    title: '국제 기준·인증',
    desc: 'NSF 위생기준 준수, ISO 9001·ISO 14001',
    to: '/about/cert',
    cta: '기준·인증 보기',
  },
  {
    title: '초순수물(UPW)을 사용한 6단계 세척시스템',
    desc: '세척의 안정성을 높입니다',
    to: '/services#wash',
    cta: '세척시스템 보기',
  },
  {
    title: '다회용기 소재 안전성&위생성검사',
    desc: '경기도보건환경연구원 연 2회 정기검사 실시',
    to: '/services#hygiene',
    cta: '검사결과 보기',
  },
  {
    title: '식약처 기준에 따른 살균소독검사',
    desc: 'ATP검사, 온도라벨, 잔류세제 검사 매일 실시',
    to: '/services#hygiene',
    cta: '검사항목 보기',
  },
]

export const FAQ = [
  {
    q: '견적은 어떻게 받나요?',
    a: '사용 장소, 예상 수량, 기간만 알려주시면 맞춰 안내드립니다. 견적문의 페이지에서 바로 요청하실 수 있습니다.',
  },
  {
    q: '공공기관·지자체도 이용할 수 있나요?',
    a: '네. 경기도청 다회용컵 사업(2024.3~2027.2)을 비롯해 여러 시청·도서관·특구에서 이미 운영 중입니다.',
  },
  {
    q: '세척은 얼마나 위생적인가요?',
    a: '초순수(UPW) 6단계 세척과 식약처 지침에 따른 ATP·잔류세제·온도라벨 검사를 매일 실시합니다. 경기도보건환경연구원 정기검사(연 2회)도 진행합니다.',
  },
  {
    q: '지점은 몇 곳인가요?',
    a: '경기도 15개 지역, 세척 사업장 21곳 규모로 운영합니다. 가장 가까운 거점에서 신속하게 대응합니다.',
  },
  {
    q: '어떤 서비스를 이용할 수 있나요?',
    a: '장례식장용기, 축제·행사, 식판 세척, 다회용컵, 유아식판, 케이터링까지 현장 유형에 맞춰 선택할 수 있습니다.',
  },
  {
    q: '이용 절차는 어떻게 되나요?',
    a: '문의 → 신청 → 사용 → 회수 순서입니다. 이용방법 페이지에서 단계별로 확인하실 수 있습니다.',
  },
  {
    q: '유아식판 대금은 어떻게 결제하나요?',
    a: '원 직접결제, 학부모 CMS 결제, 지자체 보조금 사용 등 기관 상황에 맞춰 협의합니다.',
  },
  {
    q: '회사소개서나 인증 자료를 받을 수 있나요?',
    a: '회사소개서 PDF는 사이트에서 바로 다운받으실 수 있습니다. 인증서 원본·추가 자료는 견적문의로 요청해 주세요.',
  },
]
