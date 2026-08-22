/** 브랜드 카피·에셋 (기존 사이트 기준) */
export const BRAND = {
  name: '라라워시',
  nameEn: 'Lalawash',
  /** OG·기존 사이트 슬로건 */
  slogan: '지속가능한 깨끗함',
  tagline: '다회용기 대여세척 서비스',
  description:
    '지속가능한 깨끗함을 추구하며, 다회용기 대여·세척 서비스를 제공하는 경기도의 지역 브랜드입니다.',
  /** 26.08.07 추가 수정: 히어로 타이틀(최대) */
  heroTitle: '지속가능한 깨끗함, 라라워시',
  /** 히어로 본문 4줄 — 동일 크기 */
  heroLines: [
    '당신의 일상에 안전함을 더하는 라라워시',
    '한 번 쓰고 버려지는 일상에서 지구를 지키는 일상으로',
    '지구를 살리는 가장 깨끗한 습관 라라워시가',
    '다회용기 토탈 솔루션으로 지속가능한 내일의 일상을 만들어갑니다.',
  ],
  /** 중상단 성과 섹션 */
  impactHeadline: '하루 1번의 선택이, 100년의 변화를 만듭니다',
  impactLines: [
    '무심코 버린 일회용기가 쌓이면 탄소는 대기를 뜨겁게 만들고 산림이 사라집니다.',
    '라라워시와 함께 오늘부터 다회용기로 바꿔보세요',
  ],
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
  mapCta: 'https://cdn.imweb.me/thumbnail/20250922/cbece11f67bff.png',
  reusable: 'https://cdn.imweb.me/thumbnail/20250922/81ee8b45ec653.png',
  character: 'https://cdn.imweb.me/thumbnail/20231127/c4d9d8c00bd1b.jpg',
  partner: 'https://cdn.imweb.me/thumbnail/20231128/17cbc2b09321d.jpg',
  washBg: 'https://cdn.imweb.me/thumbnail/20231128/b4092ea57e46f.jpg',
  process: 'https://cdn.imweb.me/thumbnail/20231128/c3dada48bdea3.jpg',
  containers: 'https://cdn.imweb.me/thumbnail/20250922/3aaf157e8547e.jpg',
  funeral: '/pdf-assets/funeral-meal.jpg',
  notice: 'https://cdn.imweb.me/thumbnail/20250922/cb365cd4333dc.png',
  gg: 'https://cdn.imweb.me/thumbnail/20240503/5f051377a0809.png',
  gpsc: 'https://cdn.imweb.me/thumbnail/20240503/9d2534da00f8f.png',
  blog: 'https://cdn.imweb.me/thumbnail/20240503/c70294a143493.png',
  instagram: 'https://cdn.imweb.me/thumbnail/20240503/de47929d260ca.png',
  /** 회사소개서 PDF 원본 사진 (미러링 보정 후 웹용으로 재인코딩) */
  sikpanMachine: '/pdf-assets/sikpan-machine.jpg',
  sikpanWorker: '/pdf-assets/sikpan-worker.jpg',
  sikpanRacks: '/pdf-assets/sikpan-racks.jpg',
  sikpanNozzles: '/pdf-assets/sikpan-nozzles.jpg',
  platesRack: '/pdf-assets/plates-rack.jpg',
  funeralSite: '/pdf-assets/funeral-site.jpg',
  funeralHospital: '/pdf-assets/funeral-hospital.jpg',
  dishesSet: '/official-assets/funeral-dishes.jpg',
  /** 장례식장 제안서(수정7)에서 발췌한 실사 */
  funeralMeal: '/pdf-assets/funeral-meal.jpg',
  funeralTableware: '/pdf-assets/funeral-tableware.jpg',
  funeralSetTable: '/pdf-assets/funeral-set-table.jpg',
  funeralAltar: '/pdf-assets/funeral-altar.jpg',
  funeralWareFlower: '/pdf-assets/funeral-ware-flower.jpg',
  funeralRack: '/pdf-assets/funeral-rack.jpg',
  funeralDelivery: '/pdf-assets/funeral-delivery.jpg',
  funeralWrapped: '/pdf-assets/funeral-wrapped.jpg',
  funeralInventory: '/pdf-assets/funeral-inventory.jpg',
  funeralYeonhwajang: '/pdf-assets/funeral-yeonhwajang.jpg',
  funeralIcheon: '/pdf-assets/funeral-icheon.jpg',
  funeralPocheon: '/pdf-assets/funeral-pocheon.jpg',
  deliveryTruck: '/pdf-assets/delivery-truck.jpg',
  activitySbs: '/pdf-assets/activity-sbs.jpg',
  activityCup: '/pdf-assets/activity-cup.jpg',
  activityFair: '/pdf-assets/activity-fair.jpg',
  festivalProducts: '/pdf-assets/festival-products.jpg',
  festivalReturn: '/ai-assets/ai-return-booth.jpg',
  festivalTent: '/pdf-assets/festival-tent.jpg',
  festivalCrowd: '/pdf-assets/festival-crowd.jpg',
  /** 음식이 담긴 다회용기 (축제 히어로·소개용) — AI 임시, 실사 교체 예정 */
  festivalFood: '/ai-assets/ai-festival-food.jpg',
  festivalReedish: '/ai-assets/ai-reedish-vessels.jpg',
  festivalDevBlue: '/ai-assets/ai-dev-blue-vessels.jpg',
  sikpanStainless: '/ai-assets/ai-stainless-tray.jpg',
  sikpanMelamine: '/ai-assets/ai-melamine-tray.jpg',
  caseIce: '/ai-assets/ai-case-ice.jpg',
  caseFlower: '/ai-assets/ai-case-flower.jpg',
  caseFest: '/ai-assets/ai-case-fest.jpg',
  fairBooth: '/pdf-assets/fair-booth.jpg',
  brandBuilding: '/pdf-assets/brand-building.jpg',
  upwMachine: '/pdf-assets/upw-machine.jpg',
  ultrasonicMachine: '/pdf-assets/ultrasonic-machine.jpg',
  /** 기존 공식 사이트에서 확보한 고해상도 제품·서비스 사진 */
  reusableCups: '/official-assets/reusable-cups.jpg',
  cateringHero: '/official-assets/catering-hero.jpg',
  cateringPremium: '/official-assets/catering-premium.jpg',
  cateringEconomy: '/official-assets/catering-economy.jpg',
  cateringDrink: '/official-assets/catering-drink.jpg',
  cateringUse: '/official-assets/catering-use.jpg',
  /** 공식 실사진이 없는 자리에 쓰는 브랜드 일러스트 */
  kidsTrayIllustration: '/illustrations/kids-tray.jpg',
}

/** PDF 구성안(26.08.03) 상단 메뉴 — 라벨·경로를 광고주안과 일치 */
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
  { label: '연간 다회용기 세척', value: 12000000, suffix: '개' },
  { label: '줄어든 탄소', value: 604500, suffix: ' kgCO₂eq' },
  { label: '소나무 환산', value: 66428, suffix: '그루' },
  { label: '지역 일자리', value: 270, suffix: '명' },
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
  /** PDF 상세 블록 */
  featureBlocks?: { title: string; desc: string }[]
  listBlocks?: { title: string; items: string[] }[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'funeral',
    title: '장례식장 다회용기 세척 서비스',
    short: '깨끗한 운영으로 만드는 품격있는 장례문화',
    desc:
      '라라워시는 다회용기 대여·전문세척·살균건조·위생검사·재공급의 5단계 순환 시스템을 통해, 위생과 품격을 갖춘 일회용품 없는 친환경 장례문화를 선도합니다. 장례식장 규모에 맞춘 현장 중심 운영으로 유족과 조문객 모두가 안심할 수 있는 지속 가능한 장례 환경을 조성합니다.',
    image: IMAGES.funeralMeal,
    tags: ['장례', '5단계 순환', '위생'],
    points: [
      '대여·전문세척·살균건조·위생검사·재공급 5단계 순환 시스템',
      '환경호르몬 걱정 없이 고온 세척이 가능한 전용 다회용 장례용기',
      '경기도 15개 지역 21개 세척장 기반의 일정 맞춤 공급',
    ],
    process: [
      {
        step: '01',
        title: '장례 상담',
        desc: '장례일정, 빈소운영방식, 예상 조문객 수를 확인해 맞춤 운영계획을 수립합니다.',
      },
      {
        step: '02',
        title: '빈소 다회용기 비치',
        desc: '빈소에 기본 수량을 비치한 뒤 수불대장을 전달합니다.',
      },
      {
        step: '03',
        title: '다회용기 사용',
        desc: '매일 회수·배송하며, 입출고 시 빈소매니저가 수불대장을 작성합니다.',
      },
      {
        step: '04',
        title: '세척 및 재공급',
        desc: '수거한 다회용기는 매일 세척·살균건조·검수 후 재공급합니다.',
      },
      {
        step: '05',
        title: '비용 정산',
        desc: '수불대장 입출고 물량을 확인한 뒤 월 단위로 정산합니다.',
      },
    ],
    cases: ['수원연화장', '포천의료원 장례식장', '수원의료원 장례식장', '이천의료원 장례식장'],
    featureBlocks: [
      {
        title: '라라워시 장례용 다회용기',
        desc: '환경호르몬 걱정 없이 고온 세척이 가능한 라라워시 다회용 장례용기입니다. 장례식장 운영 환경과 위생 기준을 고려해 식기 재질·용도에 맞는 전용 다회용기를 운영합니다.',
      },
      {
        title: '라라워시 안심 다회용기',
        desc: '전문 세척 공정과 고온 살균건조가 가능한 제품으로, 안전하고 위생적인 장례식장 운영 환경을 제공합니다.',
      },
    ],
    listBlocks: [
      {
        title: '1인 기준 제공 구성',
        items: ['밥그릇', '국그릇', '대찬기 1', '중찬기 2', '종지', '수저 세트', '물컵', '소주잔'],
      },
      {
        title: '운영 안내',
        items: [
          '기본 10인 단위로 포장해 제공합니다.',
          '빈소 수불대장으로 입·출고 현황을 관리합니다.',
          '매일 회수·배송하며, 조문객 수에 따라 일정을 조정합니다.',
          '구성·포장단위·규격은 협의 후 변경 가능하며 지점별로 다를 수 있습니다.',
        ],
      },
    ],
  },
  {
    slug: 'festival',
    title: '축제 및 행사용기 대여',
    short: '깨끗한 행사 진행을 위해 인원에 맞춰 다회용기를 대여합니다.',
    desc: '지역 축제 및 행사에 다회용기 대여서비스를 제공하여 일회용 쓰레기 없는 지속 가능한 행사 문화를 만들어 갑니다. 경기도 내 15개 지역 21개 지점을 통해 신속한 대여·수거·세척·재공급을 제공합니다.',
    image: IMAGES.festivalFood,
    tags: ['축제', '행사', '저탄소 순환'],
    points: [
      '접시류·면기류·다회용컵·커트러리 등 행사 맞춤 용기',
      '행사장소와 가까운 지점 연계로 빠른 수거·세척·재공급',
      '15개 지역 21개 지점 네트워크로 대형축제도 안정 대응',
    ],
    process: [
      { step: '01', title: '상담 및 견적', desc: '행사일정, 용기 종류·수량 등을 상담합니다.' },
      { step: '02', title: '물품 준비', desc: '다회용기·현장운영물품을 협의·준비합니다.' },
      { step: '03', title: '다회용기 공급', desc: '협의 내용에 맞춰 비치·공급합니다.' },
      { step: '04', title: '현장 운영 지원', desc: '행사 기간 중 추가 공급·회수를 지원합니다.' },
      { step: '05', title: '결과 전달·정산', desc: '사용량·반납량을 전달하고 정산합니다.' },
    ],
    cases: [
      '철원한탄강 얼음트래킹',
      '이천백사 산수유축제',
      '가평 GOCF 페스티벌',
      '이천 도자기축제',
      '경기미 김밥페스티벌',
      '김포 아라마린 페스티벌',
      '오산야맥축제',
    ],
    listBlocks: [
      {
        title: '다회용기 종류',
        items: ['접시류', '면기류', '다회용컵', '커트러리', '기타'],
      },
    ],
    featureBlocks: [
      {
        title: '라라워시 축제 및 행사 다회용기',
        desc: '행사 음식 종류에 맞는 다회용기를 선택해 일회용 쓰레기 없는 축제를 운영합니다.',
      },
      {
        title: '저탄소 순환시스템',
        desc: '행사장소와 가까운 지점 연계로 빠른 수거·세척·재공급의 순환이 이루어집니다. 15개 지역 21개 지점 네트워크로 대형축제도 안정적으로 대응합니다.',
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
      '매일 ATP·잔류세제·온도라벨 검사로 안심위생 관리',
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
        title: '라라워시 식판',
        desc: '스텐식판·멜라민식판 등 학교·구내식당·병원식당·급식소 환경에 맞는 식판을 운영합니다.',
      },
      {
        title: '안심위생관리 시스템',
        desc: '매일 ATP검사, 잔류세제검사, 온도라벨 검사로 식기의 위생상태를 확인하고, 기준 수치에 따라 체계적으로 관리합니다.',
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
    image: IMAGES.reusableCups,
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
    image: IMAGES.kidsTrayIllustration,
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
        items: ['스텐 유아식판', '친환경 식판'],
      },
    ],
  },
  {
    slug: 'catering',
    title: '라라워시 케이터링',
    short: '일회용기가 아닌 다회용기로, 이젠 케이터링도 라라워시입니다.',
    desc: '안전한 다회용기만 사용하고 상품 배송부터 용기 회수까지 한 번에 진행하는 친환경 케이터링 서비스입니다. 샌드위치·과일·디저트 구성과 다회용컵 음료를 함께 선택할 수 있습니다.',
    image: IMAGES.cateringHero,
    tags: ['케이터링', '다회용기'],
    points: [
      '일회용기 없이 다회용기로 제공',
      '상품 배송부터 다회용기 회수까지 원스톱 운영',
      '최소 7일 전 예약 · 50인분 이상 주문',
      '경기도 전 지역 무료 배송',
    ],
    process: [
      { step: '01', title: '예약 상담', desc: '일정·인원·메뉴와 음료를 상담합니다.' },
      { step: '02', title: '주문 확정', desc: '최소 7일 전, 50인분 이상으로 주문을 확정합니다.' },
      { step: '03', title: '상품 준비', desc: '선택한 메뉴를 다회용기에 담아 준비합니다.' },
      { step: '04', title: '무료 배송', desc: '경기도 전 지역 행사·기관으로 배송합니다.' },
      { step: '05', title: '용기 회수', desc: '사용한 다회용기를 회수해 전문 세척합니다.' },
    ],
    featureBlocks: [
      {
        title: '진정한 친환경',
        desc: '안전한 다회용기만 사용해 일회용 쓰레기를 줄이고, 친환경 재료의 범위를 지속적으로 넓혀 갑니다.',
      },
      {
        title: '배송부터 회수까지 편리하게',
        desc: '상품 배송부터 사용한 다회용기 회수까지 원스톱으로 진행해 현장 운영 부담을 줄입니다.',
      },
    ],
    listBlocks: [
      {
        title: '메뉴 구성',
        items: [
          '프리미엄 · 샌드위치 2종, 과일 3종, 디저트 3종 · 12,900원/인',
          '이코노미 · 샌드위치 2종, 과일 3종, 디저트 3종 · 10,900원/인',
          '음료 · 커피 또는 주스, 다회용컵 제공 · 2,000원/인',
        ],
      },
      {
        title: '주문 안내',
        items: ['최소 7일 전 예약 필수', '50인분 이상 주문 가능', '경기도 전 지역 무료 배송'],
      },
    ],
  },
]

/** 구 URL slug 호환 */
export const SOLUTION_ALIASES: Record<string, string> = {
  public: 'cup',
}

/** 장례식장 제안서(수정7) 기준 공공 운영 사례 */
export const FUNERAL_PUBLIC_CASES = [
  {
    name: '수원연화장',
    since: '2022.07',
    volume: '연 70만 개',
    note: '다회용기 전용 3빈소 운영',
    image: IMAGES.funeralYeonhwajang,
  },
  {
    name: '포천의료원 장례식장',
    since: '2023.01',
    volume: '연 8만 개',
    note: '다회용기 전용 빈소 운영',
    image: IMAGES.funeralPocheon,
  },
  {
    name: '수원의료원 장례식장',
    since: '2025.01',
    volume: '연 15만 개',
    note: '2026.05 전 빈소 전환 예정',
    image: IMAGES.funeralHospital,
  },
  {
    name: '이천의료원 장례식장',
    since: '2025.05',
    volume: '연 60만 개',
    note: '2026 하반기 전 빈소 전환 예정',
    image: IMAGES.funeralIcheon,
  },
] as const

/** 제안서 p.2 — 일회용품 문제 */
export const FUNERAL_PROBLEM = {
  title: '장례식장 일회용품, 이제는 변화가 필요한 시점입니다',
  body: '장례식장은 많은 일회용품이 사용되는 시설로, 폐기물 처리 비용 증가와 자원 낭비는 물론 음식물과 뒤섞인 폐기물로 인해 분리수거 부담까지 가중되고 있습니다. 또한 빈소에 쌓이는 폐기물은 공간의 미관을 저해하고 장례 서비스의 품격에도 영향을 미치는 요인이 되고 있습니다.',
  perParlor: [
    { label: '플라스틱', value: '약 45kg', note: '3일장 1곳 기준' },
    { label: '비닐', value: '약 60kg', note: '3일장 1곳 기준' },
    { label: '종이컵', value: '약 2만 5천 개', note: '3일장 1곳 기준' },
  ],
  national: [
    { label: '연간 일회용품 사용', value: '3억 7천만 개' },
    { label: '연간 폐기물', value: '2,300톤' },
  ],
} as const

/** 제안서 p.4 — ESG 가치 */
export const FUNERAL_ESG = [
  {
    title: '친환경성',
    items: ['일회용품 사용 절감', '폐기물 발생 감소', '지속가능한 순환 시스템'],
  },
  {
    title: '사회적책임',
    items: ['전문세척과정으로 안심위생보장', '취약계층을 위한 지속가능한 일자리 제공'],
  },
  {
    title: '책임경영',
    items: ['투명한 위생검증', '지역자활센터 일자리 창출을 통한 지역사회공헌'],
  },
] as const

/** 제안서 p.5 — 왜 라라워시 */
export const FUNERAL_WHY = {
  title: '왜 라라워시를 선택해야 할까요?',
  body: '많은 조문객이 이용하는 장례식장은 위생적인 식기 관리와 안정적인 운영이 중요합니다. 라라워시는 대여부터 회수, 전문세척, 살균건조, 재공급의 친환경 순환 시스템으로 위생과 품격을 갖춘 장례식장 운영 환경을 제공합니다.',
} as const

/** 제안서 p.6 — 맞춤 운영 3축 */
export const FUNERAL_OPS_PILLARS = [
  {
    title: '운영 일정 맞춤 공급',
    desc: '장례 일정에 맞춰 필요한 수량을 적기에 공급합니다.',
    image: IMAGES.funeralDelivery,
  },
  {
    title: '회수·전문 세척·재공급',
    desc: '회수된 다회용기는 전문 세척 후 위생적으로 재공급됩니다.',
    image: IMAGES.funeralWrapped,
  },
  {
    title: '맞춤 수량·현장 대응',
    desc: '운영 규모에 맞춰 적정 수량 공급과 신속한 현장 대응을 지원합니다.',
    image: IMAGES.funeralInventory,
  },
] as const

/** 제안서 p.8 — 장례 전용 6단계 세척 */
export const FUNERAL_WASH_STEPS = [
  { step: '01', title: '불림 애벌 세척', desc: '친환경 세제를 사용해 1차 세척' },
  { step: '02', title: '초음파 세척', desc: '초음파로 유해 세균 살균 제거' },
  { step: '03', title: '순수물 고온 고압세척', desc: '고온 고압으로 2차 세척' },
  { step: '04', title: '고온 살균', desc: '80℃ 이상 고온 소독 멸균 처리' },
  { step: '05', title: '위생검사', desc: 'ATP 오염검사, 잔류세제검사, 건열살균온도 확인' },
  { step: '06', title: '출고 전 전수 검사', desc: '전수 검수 후 위생 포장·출고' },
] as const

/** 제안서 p.9 — 위생 관리 */
export const FUNERAL_HYGIENE = [
  {
    title: '식약처 기준 위생관리',
    desc: '식약처 다회용기 위생가이드에 따라 용기 안전성과 위생 기준을 정기적으로 검사·관리합니다.',
    items: ['경기도보건환경연구원 연 2회 정기 시험검사', '식약처 기준에 따른 위생성 검사'],
  },
  {
    title: '국제 기준 품질검증',
    desc: '국제 위생 기준에 따라 공인기관 시험을 실시하여 객관적인 품질과 위생 수준을 검증합니다.',
    items: [
      'KOLAS 공인시험기관 시험검사',
      '시험성적서 및 위생점검 결과 제공',
      'ISO 9001 품질경영 · ISO 14001 환경경영 인증',
      'NSF 국제 위생기준 준수',
    ],
  },
  {
    title: '일일 위생 점검',
    desc: '매일 위생 점검을 실시하여 세척 품질과 안전성을 지속적으로 관리합니다.',
    items: ['ATP 표면오염도 검사', '잔류세제 검사', '건열살균 온도 확인'],
  },
] as const

/** 제안서 p.10 — 세부사양 */
export const FUNERAL_SPEC_ITEMS = [
  '밥그릇',
  '국그릇',
  '대찬기 1',
  '중찬기 2',
  '종지',
  '수저 세트',
  '물컵',
  '소주잔',
] as const

export const FUNERAL_SPEC_NOTES = [
  '기본 10인 단위로 포장되어 제공합니다.',
  '다회용기 구성 및 포장단위는 협의 후 변경 가능합니다.',
  '다회용기 규격 및 형태는 지점별로 다를 수 있습니다.',
  '다회용기 구입 및 세척비용은 담당자에게 문의해 주세요.',
] as const

/** 축제 운영사례 — 08.21 PDF: 사진 공백 표기, 소식 게시글만 포스팅 연결 */
export const FESTIVAL_CASES = [
  { name: '철원한탄강 얼음트래킹', noticeId: null as string | null, image: null as string | null },
  { name: '이천백사 산수유축제', noticeId: 'legacy-170730310', image: null },
  { name: '가평GOCF 페스티벌', noticeId: null, image: null },
  { name: '이천 도자기축제', noticeId: null, image: null },
  { name: '경기미 김밥페스티벌', noticeId: null, image: null },
  { name: '김포 아라마린 페스티벌', noticeId: null, image: null },
  { name: '오산야맥축제', noticeId: null, image: null },
] as const

export const FESTIVAL_VESSEL_TYPES = [
  '접시류',
  '면기류',
  '다회용컵',
  '커트러리',
  '기타',
] as const

/** 축제 세부사양 — 리디쉬·개발원 (AI 임시 시각, 실사·리스트 교체 예정) */
export const FESTIVAL_SPEC_LINES = [
  {
    title: '리디쉬 용기',
    desc: '시흥작은자리 리디쉬 다회용기 라인입니다. 접시·면기·컵·커트러리 등 행사 음식에 맞춰 구성합니다. (시각은 AI 임시 · 지점 공식 리스트·실사로 교체 예정)',
    image: IMAGES.festivalReedish as string | null,
    items: ['접시·나눔접시', '면기·파스타볼', '다회용컵', '커트러리', '기타 행사 맞춤 용기'],
  },
  {
    title: '개발원 용기',
    desc: '본사에서 운영 중인 파란색 다회용기(개발원) 라인입니다. 고온 세척에 적합한 견고한 재질로 대형 행사 물량에 대응합니다. (시각은 AI 임시 · 본사 실사로 교체 예정)',
    image: IMAGES.festivalDevBlue as string | null,
    items: ['파란 다회용 접시·볼', '면기류', '컵·커트러리', '대량 공급·표준 세척 대응'],
  },
] as const

export const SIKPAN_TYPES = [
  {
    title: '스텐식판',
    desc: '내구성이 높아 학교·급식소 대량 운영에 적합합니다.',
    image: IMAGES.sikpanStainless as string | null,
  },
  {
    title: '멜라민식판',
    desc: '가벼우며 취급이 편한 멜라민 식판입니다. (시각은 AI 임시 · 제품 실사 교체 예정)',
    image: IMAGES.sikpanMelamine as string | null,
  },
] as const

export const SIKPAN_HYGIENE = {
  title: '안심위생관리 시스템',
  desc: '매일 ATP검사, 잔류세제검사, 온도라벨 검사로 식기의 위생상태를 확인하고, 기준 수치에 따라 체계적으로 관리합니다.',
} as const

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

/** 주소로 네이버 지도 검색 링크 생성 (단축 URL 없을 때) */
function mapSearch(address: string) {
  return `https://map.naver.com/p/search/${encodeURIComponent(address)}`
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
    map: mapSearch('시흥시 오동마을로6번길 4'),
  },
  {
    name: '시흥작은자리',
    address: '시흥시 호현로 155-10',
    tel: '031-313-2733, 010-4060-1023',
    services: '다회용컵, 축제용기, 다회용기 판매',
    map: mapSearch('시흥시 호현로 155-10'),
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
    map: mapSearch('의정부시 추동로108번길 31'),
  },
  {
    name: '이천',
    address: '이천시 원적로 458',
    tel: '031-8011-2385',
    services: '다회용컵, 축제용기, 장례용기',
    map: mapSearch('이천시 원적로 458'),
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
    map: mapSearch('평택시 고덕면 문곡리 569-5'),
  },
]

/** 지점 분포를 코드로 그리기 위한 권역 구분 (지도 이미지 대체) */
export const BRANCH_REGIONS: { region: string; area: string; names: string[] }[] = [
  { region: '북부권', area: '고양 · 의정부 · 포천', names: ['고양', '의정부', '포천'] },
  {
    region: '서부권',
    area: '부천 · 시흥 · 안산 · 군포',
    names: ['부천 1호', '부천나눔', '부천 3호', '부천 4호', '시흥', '시흥작은자리', '안산', '군포'],
  },
  {
    region: '중부권',
    area: '수원 · 성남 · 광주 · 용인',
    names: ['수원 1호', '수원 2호', '성남', '성남만남', '광주', '용인'],
  },
  { region: '남부권', area: '오산 · 안성 · 이천 · 평택', names: ['오산', '안성', '이천', '평택'] },
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

/** 현장 롤링용 — 최종 컷은 클라이언트 추가 전달 예정(26.08.07) */
export const FIELD_ACTIVITIES = [
  {
    title: 'SBS 공생의 직장',
    caption: '방송 현장에 다회용기 대여·반납 부스를 운영했습니다.',
    image: IMAGES.activitySbs,
  },
  {
    title: '경기도청 내 카페',
    caption: '청사 카페에서 라라워시 다회용컵을 순환 사용합니다.',
    image: IMAGES.activityCup,
  },
  {
    title: '사회적경제박람회',
    caption: '지역 자활센터와 함께 다회용기 순환 모델을 소개했습니다.',
    image: IMAGES.activityFair,
  },
  {
    title: '축제 다회용기',
    caption: '행사 음식에 맞는 다회용기를 현장 공급합니다.',
    image: IMAGES.festivalProducts,
  },
  {
    title: '반납 부스',
    caption: '사용한 용기를 모아 세척장으로 순환시킵니다.',
    image: IMAGES.festivalReturn,
  },
  {
    title: '현장 운영',
    caption: '대형 축제에서도 안정적으로 순환 운영합니다.',
    image: IMAGES.festivalTent,
  },
  {
    title: '장례식장 현장',
    caption: '빈소 다회용기를 위생적으로 공급·수거합니다.',
    image: IMAGES.funeralMeal,
  },
  {
    title: '식판 세척',
    caption: '학교·급식 식판을 전문 공정으로 세척합니다.',
    image: IMAGES.sikpanMachine,
  },
]

export const WASH_GALLERY = [
  {
    title: '고온·고압 세척',
    caption: '초순수로 잔여물까지 씻어냅니다.',
    image: IMAGES.platesRack,
    fit: 'cover' as const,
  },
  {
    title: '초순수(UPW) 제조장치',
    caption: '수돗물이 아닌 초순수를 만들어 사용합니다.',
    image: IMAGES.upwMachine,
    fit: 'contain' as const,
  },
  {
    title: '초음파·와류 세척장치',
    caption: '눈에 보이지 않는 오염까지 떨어뜨립니다.',
    image: IMAGES.ultrasonicMachine,
    fit: 'contain' as const,
  },
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
  /** PDF ※ 각주 */
  footnote:
    '※ 서울–부산 왕복거리 800km, 배출부하 0.1kgCO₂e./km 기준. 출처: 라라워시 환경평가 및 사회적가치 성과측정 연구(아주대학교, 2023) 등.',
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
      '고온 살균·건조 공정이 목표 온도에 도달했는지 온도라벨로 확인합니다. 기준에 따른 상시 데이터 관리로 살균 공정의 신뢰도를 높입니다.',
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
    title: '국내외 공식 인증서 획득',
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
  {
    title: '지속가능한 일자리 창출',
    desc: '지역 내 취약계층을 위한 일자리를 제공하는 사회적기업입니다.',
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
  '다회용컵은 초기 부담이 있으나, 3회 사용부터 일회용 대비 환경효율이 역전됩니다.',
  '연혁·성과 페이지의 온실가스 시나리오는 회사소개서(아주대 연구 등) 기준입니다.',
  '홈의 연간 세척량·탄소 환산은 운영 실적 기준이며, 시나리오 수치와 별도로 안내합니다.',
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
  { category: '장례', title: '수원연화장', metric: '연 70만 개' },
  { category: '장례', title: '경기도의료원 수원·이천·포천', metric: '공공 연속 운영' },
  { category: '급식', title: '경기도 내 학교 식판', metric: '11개교 · 일 14,000장' },
]

/** PDF 파트너 롤링 — 지자체 공식 홈 연결(공공 신뢰·검증 용이) */
export const PARTNERS: { name: string; href?: string }[] = [
  { name: '경기도청', href: 'https://www.gg.go.kr/' },
  { name: '광명시', href: 'https://www.gm.go.kr/' },
  { name: '부천시', href: 'https://www.bucheon.go.kr/' },
  { name: '수원시', href: 'https://www.suwon.go.kr/' },
  { name: '시흥시', href: 'https://www.siheung.go.kr/' },
  { name: '안성시', href: 'https://www.anseong.go.kr/' },
  { name: '안산시', href: 'https://www.ansan.go.kr/' },
  { name: '이천시', href: 'https://www.icheon.go.kr/' },
  { name: '용인시', href: 'https://www.yongin.go.kr/' },
  { name: '포천시', href: 'https://www.pocheon.go.kr/' },
  { name: '경기도의료원', href: 'https://www.medical.or.kr/' },
  { name: '수원연화장' },
  { name: '성남FC' },
  { name: '부천캠퍼스컵' },
  { name: '안산카페거리' },
]

/** 홈·공공 설득용 검증 실적 (광고주 수치 범위 유지) */
export const PUBLIC_PROOF = [
  { label: '세척 인프라', value: '15개 지역 · 21개 지점' },
  { label: '연간 세척', value: '1,200만 개+' },
  { label: '공공 다회용컵', value: '경기도청 사업 운영' },
  { label: '학교 식판', value: '11개교 · 일 1.4만 장' },
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
    /** 26.08.07: 세 줄로 표기 */
    lines: [
      'NSF 위생기준 준수',
      'ISO 9001 품질경영시스템 인증',
      'ISO 14001 환경경영시스템 인증',
    ],
    desc: 'NSF · ISO 9001 · ISO 14001',
    to: '/about/cert',
    cta: '기준·인증 보기',
  },
  {
    title: '초순수(UPW) 6단계 세척',
    desc: '세척의 안정성을 높입니다',
    to: '/about/cert#wash',
    cta: '세척 과정 보기',
  },
  {
    title: '다회용기 안정성 검사',
    desc: '경기도보건환경연구원 연 2회 정기검사 실시',
    to: '/about/cert#hygiene',
    cta: '검사 방법 보기',
  },
  {
    title: '식약처 기준 살균소독 검사',
    desc: 'ATP검사, 온도라벨, 잔류세제 검사 매일 실시',
    to: '/about/cert#hygiene',
    cta: '검사항목 보기',
  },
]

export const FAQ = [
  {
    q: '견적은 어떻게 받나요?',
    a: '사용 장소·예상 수량·기간만 알려주시면 맞춰 안내드립니다. 견적문의 페이지에서 바로 요청하실 수 있습니다.',
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
    a: '경기도 15개 지역, 세척 사업장 21곳 규모로 운영합니다. 주소 확인 중인 거점은 본사(031-8019-9524)로 연결해 드립니다.',
  },
  {
    q: '어떤 서비스를 이용할 수 있나요?',
    a: '장례식장용기, 축제·행사, 식판 세척, 다회용컵, 유아식판, 친환경 케이터링을 이용할 수 있습니다. 케이터링은 최소 7일 전, 50인분 이상 주문을 기준으로 상담합니다.',
  },
  {
    q: '이용 절차는 어떻게 되나요?',
    a: '문의 → 선택 → 배송 → 사용 → 회수 → 세척 순서입니다. 이용방법 페이지에서 단계별로 확인하실 수 있습니다.',
  },
  {
    q: '장례식장 다회용기는 어떻게 운영되나요?',
    a: '대여·전문세척·살균건조·위생검사·재공급의 5단계 순환으로 운영합니다. 빈소 비치 후 매일 회수·재공급하며, 수불대장 기준으로 월 정산합니다.',
  },
  {
    q: '축제·행사 대여는 얼마나 미리 신청해야 하나요?',
    a: '행사 규모에 따라 다르지만, 대형 축제는 최소 2~4주 전 상담을 권장합니다. 일정·인원·용기 종류를 알려주시면 가까운 지점과 맞춰 안내합니다.',
  },
  {
    q: '식판 세척 단가·주기는 어떻게 정해지나요?',
    a: '식판 수량, 수거·공급 주기, 스텐/멜라민 유형에 따라 달라집니다. 학교·구내식당·병원 등 현장 조건에 맞춰 견적합니다.',
  },
  {
    q: '다회용컵 반납함은 어디에 두나요?',
    a: '청사·사무실·카페 등 사용 동선에 맞춰 반납함 위치를 협의합니다. 라라워시가 정기 수거 후 6단계 세척해 재공급합니다.',
  },
  {
    q: '유아식판 대금은 어떻게 결제하나요?',
    a: '원 직접결제, 학부모 CMS 결제, 지자체 보조금 사용 등 기관 상황에 맞춰 협의합니다.',
  },
  {
    q: '케이터링 메뉴와 최소 주문은?',
    a: '프리미엄·이코노미 구성과 다회용컵 음료를 선택할 수 있습니다. 최소 7일 전 예약, 50인분 이상, 경기도 전 지역 무료 배송을 기준으로 상담합니다.',
  },
  {
    q: '회사소개서나 인증 자료를 받을 수 있나요?',
    a: '회사소개서 PDF는 사이트에서 바로 다운받으실 수 있습니다. 인증서 원본·추가 자료는 견적문의로 요청해 주세요.',
  },
]
