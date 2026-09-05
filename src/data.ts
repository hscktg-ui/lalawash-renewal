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
  /** 구 소개 페이지 지구·수면 컷. 식판 랙 실사와 구분 */
  hero: '/official-assets/old-home-hero.jpg',
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
  /** 구 사이트 라라 공식 일러스트 (뱃지·명함 굿즈 제외) */
  character: '/official-assets/lala-character.jpg',
  partner: 'https://cdn.imweb.me/thumbnail/20231128/17cbc2b09321d.jpg',
  /** 구 소개 페이지 배경 — 물방울. 식판·랙 실사와 구분 */
  washBg: '/official-assets/old-intro-wash.jpg',
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
  /** 장례식장 제안서(수정8 최종)에서 발췌한 실사 */
  funeralMeal: '/pdf-assets/funeral-meal.jpg',
  funeralTableware: '/pdf-assets/funeral-tableware.jpg',
  funeralSetTable: '/pdf-assets/funeral-set-table.jpg',
  /** 제안서·리플렛 1인 기준 제공 구성 */
  funeralOnePerson: '/pdf-assets/funeral-proposal/p10-img00.png',
  funeralAltar: '/pdf-assets/funeral-altar.jpg',
  funeralWareFlower: '/pdf-assets/funeral-ware-flower.jpg',
  funeralRack: '/pdf-assets/funeral-rack-wash.jpg',
  funeralDelivery: '/pdf-assets/funeral-delivery.jpg',
  funeralWrapped: '/pdf-assets/funeral-wrapped.jpg',
  funeralInventory: '/pdf-assets/funeral-inventory.jpg',
  funeralYeonhwajang: '/pdf-assets/funeral-yeonhwajang.jpg',
  funeralIcheon: '/pdf-assets/funeral-icheon.jpg',
  funeralPocheon: '/pdf-assets/funeral-pocheon.jpg',
  funeralInfraMap: '/pdf-assets/funeral-infra-map.jpg',
  wash01: '/pdf-assets/wash-01.jpg',
  wash02: '/pdf-assets/wash-02.jpg',
  wash03: '/pdf-assets/wash-03.jpg',
  wash04: '/pdf-assets/wash-04.jpg',
  wash05: '/pdf-assets/wash-05.jpg',
  wash06: '/pdf-assets/wash-06.jpg',
  hygieneReport: '/pdf-assets/hygiene-report.jpg',
  hygieneAtp: '/pdf-assets/hygiene-atp.jpg',
  hygieneNsf: '/pdf-assets/hygiene-nsf.jpg',
  hygieneNsfCollage: '/pdf-assets/hygiene-nsf-collage.jpg',
  hygieneTemp: '/pdf-assets/hygiene-temp.jpg',
  hygieneSoap: '/pdf-assets/hygiene-soap.jpg',
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
  /** 시흥점 리디시(Re:dish) 판매책자(수정8) — 축제 용기 셋팅 전량 근거 */
  festivalReedish: '/ai-assets/reedish/catalog-festival.png',
  festivalReedishCups: '/ai-assets/reedish/catalog-cups.png',
  festivalReedishSafety: '/ai-assets/reedish/safety.png',
  festivalReedishCover: '/ai-assets/reedish/cover.png',
  festivalReedishRfid: '/ai-assets/reedish/rfid.png',
  festivalReedishRfidSystem: '/ai-assets/reedish/rfid-system.png',
  festivalReedishRfidFlow: '/ai-assets/reedish/rfid-flow.png',
  festivalReedishOrder: '/ai-assets/reedish/order-guide.png',
  festivalGroupPlates: '/pdf-assets/reedish/plates.png',
  festivalGroupBowls: '/pdf-assets/reedish/bowls.png',
  festivalGroupCups: '/pdf-assets/reedish/cups.png',
  festivalGroupCutlery: '/pdf-assets/reedish/cutlery.png',
  festivalGroupOther: '/pdf-assets/reedish/other.png',
  festivalGroupReturn: '/pdf-assets/reedish/return.png',
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
      '지속 가능한 미래를 위한 다회용기 사용으로, 유족과 조문객 모두가 안심하는 일회용품 없는 친환경 장례문화 조성에 함께합니다. 라라워시는 대여부터 회수, 전문세척, 살균건조, 재공급의 순환 시스템으로 위생과 품격을 갖춘 장례식장 운영 환경을 제공합니다.',
    image: IMAGES.funeralMeal,
    tags: ['장례', '순환 시스템', '위생'],
    points: [
      '대여·회수·전문세척·살균건조·재공급 순환 시스템',
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
        desc: '다회용기를 매일 수거·배송하며, 입출고 시 빈소매니저가 수불대장을 작성합니다.',
      },
      {
        step: '04',
        title: '다회용기 세척 및 재공급',
        desc: '수거한 다회용기는 매일 세척되어 살균건조, 검수과정을 거쳐 재공급합니다.',
      },
      {
        step: '05',
        title: '다회용기 비용 정산',
        desc: '수불대장의 입출고 물량을 확인한 뒤 월 단위로 정산합니다.',
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
          '빈소에 비치된 수불대장을 통해 입·출고 현황을 관리합니다.',
          '매일 용기 회수 및 배송을 진행하며, 조문객 수에 따라 수거·배송 일정을 조정할 수 있습니다.',
          '장례식장 운영 일정과 규모에 맞춰 안정적으로 다회용기를 공급합니다.',
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
    tags: ['축제', '행사', '다회용기 대여'],
    points: [
      '접시·면기·다회용컵·커트러리·반납부스까지 행사 맞춤 구성',
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
      '철원한탄강 얼음트레킹',
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
        items: ['접시(플레이트)', '면기(볼)', '다회용컵', '커트러리', '기타', '반납부스'],
      },
    ],
    featureBlocks: [
      {
        title: '라라워시 축제용 다회용기',
        desc: '행사 음식 종류에 맞는 다회용기를 선택해 일회용 쓰레기 없는 축제를 운영합니다.',
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
    featureBlocks: [
      {
        title: '서비스 소개',
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
        items: ['4찬 학교식판', '4찬 급식 식판'],
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
    listBlocks: [
      {
        title: '라라워시 다회용컵',
        items: ['오피스컵 16·14·10온스 (리드 없음)', '카페컵 16온스 투명·불투명 + 리드', '다회용컵 반납함 제작예정'],
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
    listBlocks: [
      {
        title: '라라워시 유아식판',
        items: ['3찬 유아식판', '튼튼 유아식판', '간식식판', '옥수수 유아식판', '에코젠 간식식판'],
      },
      {
        title: '대금지급 방법 협의',
        items: ['원에서 직접결제', '학부모 CMS 결제', '지자체 보조금 사용'],
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

/** 장례식장 제안서(수정8 최종) 기준 공공 운영 사례 */
export const FUNERAL_PUBLIC_CASES = [
  {
    name: '수원연화장',
    since: '2022.07',
    volume: '연 70만 개',
    note: '다회용기 전용 3개 빈소 운영',
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
    note: '2026.05 전체 빈소 전환',
    image: IMAGES.funeralHospital,
  },
  {
    name: '이천의료원 장례식장',
    since: '2025.05',
    volume: '연 60만 개',
    note: '2026 하반기 전체 빈소 전환 예정',
    image: IMAGES.funeralIcheon,
  },
] as const

/** 제안서(수정8) p.2 — 일회용품 문제 */
export const FUNERAL_PROBLEM = {
  title: '장례식장 일회용품, 이제는 변화가 필요한 시점입니다',
  body: '장례식장은 많은 일회용품이 사용되는 시설로, 폐기물 처리 비용 증가와 자원 낭비는 물론 음식물과 뒤섞인 폐기물로 인해 분리수거 부담까지 가중되고 있습니다. 또한 빈소에 쌓이는 폐기물은 공간의 미관을 저해하고 장례 서비스의 품격에도 영향을 미치는 요인이 되고 있습니다.',
  footnote: '빈소 1곳당 3일 기준. 실제 발생량은 빈소 규모 및 조문객 수에 따라 달라질 수 있습니다.',
  perParlor: [
    { label: '플라스틱', value: '약 45kg', note: '1톤 트럭 1/10대 분량' },
    { label: '비닐', value: '약 60kg', note: '1톤 트럭 1/8대 분량' },
    { label: '종이컵', value: '약 2만 5천 개', note: '1톤 트럭 1/12대 분량' },
  ],
  national: [
    { label: '국내 장례식장 연간 일회용품 사용량', value: '3억 7천만 개' },
    { label: '연간 폐기물 발생', value: '2,300톤' },
  ],
} as const

/** 제안서(수정8) p.3 — 정책변화 */
export const FUNERAL_POLICY = {
  title: '거스를 수 없는 정책변화',
  lead: '친환경 운영이 새로운 경쟁력이 됩니다.',
  body: '정부정책에 따라 공공 장례식장에서는 다회용기 사용을 도입하여 운영하고 있습니다.',
  pillars: [
    {
      title: '정책 기반 운영',
      items: [
        '기후환경에너지부 ‘탈플라스틱 순환경제 전환 추진계획’, ‘자원재활용법’에 따른 일회용품 감축·다회용기 전환 추진',
        '경기도 등 지자체 ‘1회용품 사용 줄이기 지원조례’ 등 친환경장례식장 지원 확대',
      ],
    },
    {
      title: 'ESG 경영 실천',
      items: [
        '일회용품을 다회용기로 대체하여 탄소중립 실현',
        '전문 세척 시스템을 통해 안심하고 사용할 수 있는 위생적인 환경 제공',
        '전문세척기업과의 파트너십을 통해 친환경 장례문화 실현',
      ],
    },
    {
      title: '유족 및 조문객 만족도',
      items: [
        '위생적인 다회용기와 안정적인 운영으로 유족·조문객 만족도 향상',
        '“일회용품보다 더 정중하게 대접받는 느낌”이라는 조문객 호평',
        '서울 시내 다회용기 도입 장례식장 조사에서 유족·조문객 10명 중 9명 이상 긍정 평가',
      ],
    },
  ],
} as const

/** 08.21 PDF — 친환경성 · 위생성 · 경제성 (수정8은 ESG 3축으로 대체) */
export const FUNERAL_VALUE_PILLARS = [
  {
    title: '친환경성',
    items: ['일회용품 사용 절감', '폐기물 발생 감소', '지속가능한 순환 시스템'],
  },
  {
    title: '위생성',
    items: ['전문 세척·살균·건조', '위생관리 기준 운영', '안전한 다회용기 제공'],
  },
  {
    title: '경제성',
    items: ['반복 구매 비용 절감', '효율적인 운영 관리', '안정적인 공급 시스템'],
  },
] as const

/** 제안서(수정8) p.4 — ESG 가치 */
export const FUNERAL_ESG = {
  title: '라라워시가 만드는 지속가능한 가치',
  body: '라라워시는 장례식장 운영 환경에 최적화된 다회용기 서비스로, 친환경·위생·경제성을 고려한 세척시스템으로 안심을 더하고 탄소배출을 줄여 내일을 지킵니다.',
  pillars: [
    {
      title: '친환경성',
      items: ['일회용품 사용 절감', '폐기물 발생 감소', '지속가능한 순환 시스템'],
    },
    {
      title: '사회적책임',
      items: ['전문세척과정으로 안심위생보장', '취약계층을 위한 지속가능한 일자리제공'],
    },
    {
      title: '책임경영',
      items: ['투명한 위생검증', '지역자활센터 일자리 창출을 통한 지역사회공헌'],
    },
  ],
} as const

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
    fit: 'cover' as const,
  },
  {
    title: '회수·전문 세척·재공급',
    desc: '회수된 다회용기는 전문 세척 후 위생적으로 재공급됩니다.',
    image: IMAGES.funeralWrapped,
    fit: 'cover' as const,
  },
  {
    title: '맞춤 수량·현장 대응',
    desc: '운영 규모에 맞춰 적정 수량 공급과 신속한 현장 대응을 지원합니다.',
    image: IMAGES.funeralInventory,
    fit: 'cover' as const,
  },
  {
    title: '라라워시 세척 인프라',
    desc: '경기도 15개 지역 22개 세척시설(공장)을 기반으로 장례식장 운영일정에 맞춰 안정적인 공급 서비스를 제공합니다.',
    image: IMAGES.funeralInfraMap,
    fit: 'contain' as const,
  },
] as const

/** 제안서(수정8) p.7 — 세척 인프라 */
export const FUNERAL_INFRA = {
  title: '라라워시 세척 인프라',
  body: '경기도 15개 지역 22개 세척시설(공장)을 기반으로 장례식장 운영일정에 맞춰 안정적인 공급 서비스를 제공합니다.',
  image: IMAGES.funeralInfraMap,
} as const

/** 제안서(수정8) p.8 — 장례 전용 6단계 세척 */
export const FUNERAL_WASH_STEPS = [
  { step: '01', title: '불림 애벌 세척', desc: '친환경 세제를 사용해 1차 세척', image: IMAGES.wash01 },
  { step: '02', title: '초음파 세척', desc: '초음파로 유해 세균 살균 제거', image: IMAGES.wash02 },
  { step: '03', title: '순수물을 사용한 고온 고압세척', desc: '고온 고압으로 2차 세척', image: IMAGES.wash03 },
  { step: '04', title: '고온 살균', desc: '80℃ 이상 고온 소독 멸균 처리', image: IMAGES.wash04 },
  { step: '05', title: '위생검사', desc: 'ATP 오염검사, 잔류세제검사, 건열살균온도 확인', image: IMAGES.wash05 },
  { step: '06', title: '출고 전 전수 검사', desc: '전수 검수 후 위생 포장·출고', image: IMAGES.wash06 },
] as const

/** 제안서(수정8) p.9 — 위생 관리. 성적서 수치는 첨부 시험·검사성적서 이미지 기재분. */
export const FUNERAL_HYGIENE_REPORT = {
  title: '시험·검사성적서',
  issuer: '경기도보건환경연구원',
  no: 'R20260325-0097',
  date: '2026.03.25',
  site: '라라워시 용인점',
  sample: '식판 · 금속제',
  requester: '경기도 복지사업과',
  results: [
    { name: '살모넬라', value: '불검출' },
    { name: '대장균', value: '불검출' },
  ],
} as const

export const FUNERAL_HYGIENE = [
  {
    title: '식약처 기준 위생관리',
    desc: '식약처 다회용기 위생가이드에 따라 용기 안전성과 위생 기준을 정기적으로 검사·관리합니다.',
    items: ['경기도보건환경연구원 연 2회 정기 시험검사', '식약처 기준에 따른 위생성 검사'],
    image: IMAGES.hygieneReport,
    imageAlt: '경기도보건환경연구원 시험·검사성적서',
    kind: 'report' as const,
  },
  {
    title: '국제 기준 품질검증',
    desc: '국제 위생 기준에 따라 공인기관 시험을 실시하여 객관적인 품질과 위생 수준을 검증합니다.',
    items: [
      'KOLAS 공인시험기관 시험검사',
      '시험성적서 및 위생점검 결과 제공',
      'ISO 9001 품질경영 인증 획득',
      'ISO 14001 환경경영 인증 획득',
    ],
    image: IMAGES.hygieneNsf,
    imageAlt: 'NSF International 마크',
    kind: 'nsf' as const,
    images: [
      { src: IMAGES.hygieneNsf, alt: 'NSF International Services Since 1944' },
      { src: IMAGES.hygieneNsfCollage, alt: 'NSF Your Partner in Public Health' },
    ],
  },
  {
    title: '일일 위생 점검',
    desc: '매일 위생 점검을 실시하여 세척 품질과 안전성을 지속적으로 관리합니다.',
    items: ['ATP 표면오염도 검사', '잔류세제 검사', '건열살균 온도 확인'],
    image: IMAGES.hygieneAtp,
    imageAlt: 'ATP 표면오염도 검사',
    kind: 'photo' as const,
  },
] as const

/** 제안서(수정8) p.10 — 1인 기준 제공 구성 */
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
  '다회용기 구입 및 세척비용은 담당자에게 문의바랍니다.',
] as const

export const FUNERAL_OPS_GUIDE = [
  {
    title: '체계적인 입·출고 관리',
    desc: '빈소에 비치된 수불대장을 통해 입·출고 현황을 관리합니다.',
  },
  {
    title: '매일 회수 및 재공급',
    desc: '매일 용기 회수 및 배송을 진행하며, 조문객 수에 따라 수거 및 배송 일정 조정이 가능합니다.',
  },
  {
    title: '운영 맞춤 공급',
    desc: '장례식장 운영 일정과 규모에 맞춰 안정적으로 다회용기를 공급합니다.',
  },
] as const

/** 축제 운영사례 — 08.21 PDF: 사진 공백 표기, 소식 게시글만 포스팅 연결 */
export const FESTIVAL_CASES = [
  { name: '철원한탄강 얼음트레킹', noticeId: null as string | null, image: null as string | null },
  { name: '이천백사 산수유축제', noticeId: 'legacy-170730310', image: null },
  { name: '가평 GOCF 페스티벌', noticeId: null, image: null },
  { name: '이천 도자기축제', noticeId: null, image: null },
  { name: '경기미 김밥페스티벌', noticeId: null, image: null },
  { name: '김포 아라마린 페스티벌', noticeId: null, image: null },
  { name: '오산야맥축제', noticeId: null, image: null },
] as const

export const FESTIVAL_VESSEL_TYPES = [
  '접시(플레이트)',
  '면기(볼)',
  '다회용컵',
  '커트러리',
  '기타',
  '반납부스',
] as const

/** 08.28 PDF — 축제용 다회용기 구성 */
export const FESTIVAL_VESSEL_GROUPS = [
  {
    title: '접시(플레이트)',
    image: IMAGES.festivalGroupPlates,
    items: [
      { name: '대접시', note: '전, 튀김 등' },
      { name: '소접시', note: '개인접시' },
      { name: '나눔접시', note: '' },
    ],
  },
  {
    title: '면기(볼)',
    image: IMAGES.festivalGroupBowls,
    items: [
      { name: '면기', note: '국수, 비빔밥 등' },
      { name: '파스타볼', note: '떡볶이, 오뎅 등' },
      { name: '미니볼', note: '개인그릇' },
    ],
  },
  {
    title: '다회용컵',
    image: IMAGES.festivalGroupCups,
    items: [
      { name: '컵+리드', note: '' },
      { name: '불투명 컵', note: '16~5oz' },
      { name: '투명컵', note: '16~10oz' },
    ],
  },
  {
    title: '커트러리',
    image: IMAGES.festivalGroupCutlery,
    items: [
      { name: '수저, 포크', note: '' },
      { name: '수저, 젓가락', note: '' },
    ],
  },
  {
    title: '기타',
    image: IMAGES.festivalGroupOther,
    items: [
      { name: '도시락용기', note: '' },
      { name: '멜라민식판', note: '' },
      { name: '스텐식판', note: '' },
    ],
  },
  {
    title: '반납부스',
    image: IMAGES.festivalGroupReturn,
    items: [
      { name: '반납부스', note: '인력포함' },
      { name: '용기 반납함', note: '' },
      { name: '컵전용 반납함', note: '' },
    ],
  },
] as const

/** 킨텍스 현장 촬영 후 교체 (9/18–20) */
export const FESTIVAL_PHOTO_NOTE =
  '현재 적당한 사진이 없어, 9/18(금)~9/20(일) 킨텍스 「킨밤지새우고」 축제 시흥작은자리 현장에서 촬영한 사진으로 교체할 예정입니다.'

export const BRANCH_CASES_NOTE =
  '각 지점별 운영사례를 요청·취합한 뒤 축제 운영사례와 같은 형태로 게시합니다.'

export const CUP_PRODUCTS = [
  { name: '오피스컵', note: '16·14·10온스 · 리드 없음', pending: false },
  { name: '카페컵', note: '16온스 투명·불투명 + 리드', pending: false },
  { name: '다회용컵 반납함', note: '제작예정', pending: true },
] as const

export const KIDS_TRAY_PRODUCTS = [
  { name: '3찬 유아식판', note: '198×265×32mm · 304 스텐', image: '/spec-assets/ai-kids-3ban.jpg' },
  { name: '튼튼 유아식판', note: '265×205×29mm · 스텐', image: '/spec-assets/ai-kids-tuntun.jpg' },
  { name: '간식식판', note: '220×135×25mm · 스텐', image: '/spec-assets/ai-kids-snack.jpg' },
  { name: '옥수수 유아식판', note: '사양 문의', image: '/spec-assets/ai-kids-corn.jpg' },
  { name: '에코젠 간식식판', note: '218×132mm · 에코젠', image: '/spec-assets/ai-kids-ecogen.jpg' },
] as const

export const SIKPAN_PHOTO_NOTE = ''

/**
 * 축제·행사 용기 셋팅 — 시흥점 리디시(Re:dish) 판매책자(수정8) 전량 기준.
 * 개발원(파란) 라인은 이 셋팅에 포함하지 않음.
 */
export const REEDISH_PRODUCTS = [
  { name: '파스타볼', size: '175(손잡이 240)×160×40mm', category: '면기류', group: '축제·행사용' },
  { name: '원형파스타볼', size: '205(손잡이 240)×30mm', category: '면기류', group: '축제·행사용' },
  { name: '소스볼큰접시', size: '전체 335mm (접시 275mm · 소스볼 60mm)', category: '접시류', group: '축제·행사용' },
  { name: '면기', size: '220×58mm', category: '면기류', group: '축제·행사용' },
  { name: '3칸 나눔접시', size: '216(손잡이 263)×226×15mm', category: '접시류', group: '축제·행사용' },
  { name: '미니볼', size: '145(손잡이 160)×40mm', category: '기타', group: '축제·행사용' },
  { name: '개인접시', size: '145(손잡이 170)×20mm', category: '접시류', group: '축제·행사용' },
  { name: '밥그릇', size: '규격 협의', category: '면기류', group: '축제·행사용' },
  { name: '국그릇', size: '규격 협의', category: '면기류', group: '축제·행사용' },
  { name: '스푼·포크', size: '185mm', category: '커트러리', group: '축제·행사용' },
  { name: '숟가락', size: '210mm', category: '커트러리', group: '축제·행사용' },
  { name: '젓가락', size: '220mm', category: '커트러리', group: '축제·행사용' },
  { name: '도시락 용기', size: '350×240×60mm (5칸)', category: '기타', group: '도시락·스포츠·세미나' },
  { name: '어린이 도시락', size: '255×180×40mm', category: '기타', group: '도시락·스포츠·세미나' },
  { name: '다용도 콜팝용기', size: '24온스 컵 + 팝콘용기', category: '기타', group: '도시락·스포츠·세미나' },
  { name: '2인세트 용기', size: '16온스 컵 + 간식 접시', category: '기타', group: '도시락·스포츠·세미나' },
  { name: '다회용컵 5온스', size: '147ml', category: '다회용컵', group: '도시락·스포츠·세미나' },
  { name: '다회용컵 10온스', size: '296ml', category: '다회용컵', group: '도시락·스포츠·세미나' },
  { name: '다회용컵 14온스', size: '414ml', category: '다회용컵', group: '도시락·스포츠·세미나' },
  { name: '다회용컵 16온스', size: '473ml', category: '다회용컵', group: '도시락·스포츠·세미나' },
  { name: '다회용컵 22온스', size: '650ml', category: '다회용컵', group: '도시락·스포츠·세미나' },
  { name: '컵 리드', size: '커피용·스무디용 (14/16/22온스 호환)', category: '다회용컵', group: '도시락·스포츠·세미나' },
] as const

export const REEDISH_SAFETY = [
  '식품용 PP 소재 적용',
  '공인 기준 적합 품질',
  'BPA 불검출 확인',
  '내열 안정성',
  '적재 및 보관 효율성',
] as const

/** 책자 페이지 순서 그대로 — 축제 용기 셋팅 UI 소스 */
export const REEDISH_CATALOG = [
  {
    id: 'cover',
    title: '리디시 다회용기 토탈 솔루션',
    desc: '지속 가능한 지구, 데이터로 완성하는 다회용기 순환. 시흥점 리디시 판매책자 표지.',
    image: IMAGES.festivalReedishCover,
  },
  {
    id: 'rfid-intro',
    title: 'RFID 기반 스마트 패키지',
    desc: '빌려준 컵·용기를 실시간으로 관리하는 RFID 시스템. 축제·대규모 행사 재고·유실 방지에 적합합니다.',
    image: IMAGES.festivalReedishRfid,
  },
  {
    id: 'safety',
    title: '안심하고 사용하세요',
    desc: '식품용 PP, 공인시험 적합, BPA 불검출, 내열·적재 효율을 책자 기준으로 안내합니다.',
    image: IMAGES.festivalReedishSafety,
  },
  {
    id: 'festival-lineup',
    title: '축제·행사용 다회용기 라인업',
    desc: '파스타볼·면기·나눔접시·밥·국그릇·커트러리 등 어떤 메뉴에도 맞춘 축제 라인업입니다.',
    image: IMAGES.festivalReedish,
  },
  {
    id: 'event-cups',
    title: '도시락·스포츠·세미나 행사용',
    desc: '도시락·어린이 도시락, 콜팝·2인세트, 5~22온스 다회용컵과 리드 구성입니다.',
    image: IMAGES.festivalReedishCups,
  },
  {
    id: 'rfid-system',
    title: 'RFID 자동인식 시스템',
    desc: '내열 RFID 태그, 모바일 리더기, 컵회수기로 입·출고와 전산관리를 자동화합니다.',
    image: IMAGES.festivalReedishRfidSystem,
  },
  {
    id: 'rfid-flow',
    title: 'RFID 다회용기 관리 구조',
    desc: '출고(대여) → 사용 → 회수 → 세척 → 재고·재공급까지 전 과정을 실시간 관리합니다.',
    image: IMAGES.festivalReedishRfidFlow,
  },
  {
    id: 'order',
    title: '리디시 주문안내',
    desc: '주문 상담 → 맞춤 제안 → 견적 → 납품·교육. 시흥 리디시 담당 문의 기준입니다.',
    image: IMAGES.festivalReedishOrder,
  },
] as const

/** @deprecated 축제 셋팅은 REEDISH_CATALOG만 사용. 하위 호환용 리디시 단일 라인 */
export const FESTIVAL_SPEC_LINES = [
  {
    title: '리디시 용기 (시흥점 판매책자)',
    desc: '축제·행사 용기 셋팅은 시흥점 리디시(Re:dish) 판매책자(수정8)를 전적으로 따릅니다.',
    image: IMAGES.festivalReedish as string | null,
    items: REEDISH_PRODUCTS.map((p) => `${p.name} (${p.size})`),
  },
] as const

export const SIKPAN_TYPES = [
  {
    title: '4찬 학교식판',
    desc: '국산 304스텐',
    image: '/spec-assets/ai-sikpan-school.jpg' as string | null,
  },
  {
    title: '4찬 급식 식판',
    desc: '멜라민',
    image: '/spec-assets/ai-sikpan-melamine.jpg' as string | null,
  },
] as const

export const SIKPAN_HYGIENE = {
  title: '안심위생관리 시스템',
  desc: '매일 ATP검사, 잔류세제검사, 온도라벨 검사로 식기의 위생상태를 확인하고, 기준 수치에 따라 체계적으로 관리합니다.',
  items: [
    {
      title: 'ATP 검사',
      standard: '30RUL 이하',
      note: '안전위생기준 200RUL',
    },
    {
      title: '잔류세제검사',
      standard: '중성상태 확인',
      note: '세제 잔류 없이 출고',
    },
    {
      title: '온도라벨 검사',
      standard: '표면온도 71도 이상',
      note: '식약처 기준',
    },
  ],
} as const

export const WASH_EQUIPMENT = [
  {
    title: '초순수(UPW) 제조장치',
    desc: '일반 수돗물이 아닌, 미세 오염원까지 완벽히 차단된 고도 정제된 초순수물을 직접 제조하여 사용합니다.',
    image: IMAGES.upwMachine,
    fit: 'contain' as const,
  },
  {
    title: '고온·고압 세척기',
    desc: '제조된 초순수물을 활용하여 식판과 용기에 남은 마지막 잔여물까지 강력하게 씻어냅니다.',
    image: IMAGES.platesRack,
    fit: 'cover' as const,
  },
  {
    title: '초음파·와류 세척장치',
    desc: '물살의 회전(와류)과 초음파 진동을 활용하여 눈에 보이지 않는 틈새 오염까지 완벽히 떨어뜨립니다.',
    image: IMAGES.ultrasonicMachine,
    fit: 'contain' as const,
  },
] as const

export const WASH_STEPS = [
  {
    title: '불림·애벌 세척',
    desc: '라라워시 전용 친환경 세제를 사용하여 용기에 붙은 오염물을 먼저 충분히 불린 후 애벌 세척합니다.',
  },
  {
    title: '초음파 세척',
    desc: '초음파 세척장치를 통해 손이 닿지 않고 눈에 잘 보이지 않는 미세한 오염과 유기물까지 꼼꼼히 제거합니다.',
  },
  {
    title: '고온·고압 세척',
    desc: '고도로 정제된 초순수(UPW)를 사용해 고온·고압으로 용기에 남은 이물질을 완벽하게 씻어냅니다.',
  },
  {
    title: '고온 살균',
    desc: '고온 건조·살균 공정을 거쳐 유해 바이러스와 세균을 완벽하게 사멸·소독합니다.',
  },
  {
    title: 'ATP 오염 검사',
    desc: '세척이 완료된 용기를 대상으로 잔류 세제 유무와 세균 오염도를 과학적인 수치로 확인하여 품질을 검증합니다.',
  },
  {
    title: '출고 전 전수 검사',
    desc: '최종 출고 전, 단 하나의 미흡함도 빠짐없이 꼼꼼하게 육안 및 전수 검사한 뒤 안심 포장하여 다시 현장으로 보냅니다.',
  },
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
    tel: '031-968-8378, 031-969-8360',
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
    tel: '031-653-6121, 010-4243-7399',
    services: '다회용기, 다회용컵, 식판, 도시락용기',
    map: 'https://naver.me/xcJ5KTPx',
  },
  {
    name: '부천나눔',
    address: '부천시 신흥로425번길 55',
    tel: '032-323-9946, 010-5690-0551',
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
    tel: '031-741-0120, 070-4332-0120',
    services: '다회용컵, 식판, 유아식판',
    map: 'https://naver.me/FWPoqhuc',
  },
  {
    name: '성남만남',
    address: '광주시 경충대로 1889',
    tel: '031-748-3500',
    services: '축제용기, 식판, 도시락용기, 배달용기',
    map: 'https://naver.me/5wHCfPyx',
  },
  {
    name: '수원 1호',
    address: '의왕시 월암길 93',
    tel: '031-232-0179, 010-4743-1584',
    services: '다회용컵, 축제용기, 장례용기',
    map: 'https://naver.me/5duKogcy',
  },
  {
    name: '수원 2호',
    address: '주소 업데이트 예정',
    tel: '031-232-0179, 010-8702-5754',
    services: '다회용기 세척',
    map: '',
    pendingAddress: true,
  },
  {
    name: '시흥',
    address: '시흥시 오동마을로6번길 4',
    tel: '010-7731-3649',
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
    tel: '031-493-9844, 010-7275-0600',
    services: '다회용기, 다회용컵, 식판',
    map: 'https://naver.me/xsUyhojX',
  },
  {
    name: '안성',
    address: '안성시 대덕면 누르잿길 35',
    tel: '031-672-5077',
    services: '다회용기, 다회용컵, 유아식판, 도시락용기',
    map: 'https://naver.me/GnCzGHIm',
  },
  {
    name: '오산',
    address: '오산시 두곡로 52',
    tel: '031-375-3322, 010-4997-3322',
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
    tel: '031-631-0199',
    services: '다회용컵, 축제용기, 장례용기',
    map: mapSearch('이천시 원적로 458'),
  },
  {
    name: '포천',
    address: '포천시 군내면 하성북리 432',
    tel: '031-531-1977',
    services: '축제용기, 장례용기, 유아식판, 다회용컵, 식판',
    map: 'https://naver.me/xtgnx3rB',
  },
  {
    name: '평택',
    address: '평택시 고덕면 문곡리 569-5, C동',
    tel: '031-665-4788, 070-7843-1743',
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
  hq: '경기도 시흥시 호현로 155-10 (대야동)',
  office: '경기도 수원시 권선구 권선로 472, 세지빌딩 6층',
  site: '경기도 시흥시 호현로 155-10 (대야동)',
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

export const WASH_GALLERY = WASH_EQUIPMENT.map((item) => ({
  title: item.title,
  caption: item.desc,
  image: item.image,
  fit: item.fit,
}))

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
    title: 'ATP 세균 오염도 검사',
    desc: '육안으로 보이지 않는 미세 세균과 유기물 오염도를 과학적인 수치로 확인합니다.',
    standard: '30RUL 이하 (안전위생기준 200RUL)',
    detail:
      '식약처 가이드라인에 따라 출고 전 표본 용기를 추출하여 ATP 측정기로 검사합니다. 정해진 안전 기준 수치를 통과한 제품만 출고를 승인합니다.',
    image: IMAGES.hygieneAtp,
  },
  {
    title: '고온살균 온도라벨 검사',
    desc: '바이러스와 박테리아를 완벽히 사멸시키는 고온 건조·살균 공정이 기준 온도에 정확히 도달했는지 검증합니다.',
    standard: '표면온도 71도 이상 (식약처 기준)',
    detail:
      '세척 공정 중 다회용기에 온도라벨을 부착하여 목표 온도 도달 여부를 상시 확인합니다. 검증된 데이터 관리를 통해 살균 공정의 신뢰도를 유지합니다.',
    /** 09.04: 기존 컷이 실제 검사와 다름. 광고주 링크·실사 전달 후 게시 */
    image: null as string | null,
  },
  {
    title: '잔류세제 검사',
    desc: '세척 공정 완료 후 용기에 아주 미세한 세제 성분도 남아있지 않음을 확인하여 인체 무해성을 보장합니다.',
    standard: '중성상태 확인',
    detail:
      '라라워시 전용 친환경 세제 사용 후, 잔류 여부를 정밀 테스트합니다. 면역력이 취약한 아이들의 식판부터 축제 및 대형 행사용 용기까지 안심하고 사용할 수 있도록 안전망을 구축합니다.',
    image: IMAGES.hygieneSoap,
  },
]

export const CORE_VALUES = [
  {
    letter: 'E',
    axis: '환경',
    title: '지속가능한 깨끗함',
    en: 'Environment',
    items: [
      '다회용기 순환 시스템을 통한 일회용품 폐기물 획기적 감축',
      '친환경 공정 도입으로 탄소 배출 저감 및 기후 위기 대응',
    ],
  },
  {
    letter: 'S',
    axis: '사회',
    title: '지속가능한 일자리',
    en: 'Social',
    items: [
      '저소득 취약계층 중심 채용을 통한 안정적이고 존엄한 일자리 제공',
      '일자리 창출을 통한 지역사회 동반 성장 및 경제 활성화',
    ],
  },
  {
    letter: 'G',
    axis: '거버넌스',
    title: 'ESG 기반 경영',
    en: 'Governance',
    items: [
      '환경과 사회 문제를 동시에 해결하는 비즈니스 모델 선도',
      '투명하고 민주적인 협동조합 운영으로 상생의 가치 실현',
    ],
  },
] as const

export const ABOUT_INTRO =
  '라라워시는 다회용기 순환 체계를 통해 일회용품 폐기물 문제를 해결하고, 저소득 취약계층에게 안정적인 일자리를 제공하는 ESG 기반의 사회적 경제 비즈니스 모델을 실현합니다.'

export const CIRCULAR_CARE = {
  title: '라라워시의 자원순환서비스',
  desc: '라라워시는 검증된 역량과 체계적인 물류 시스템을 바탕으로 다회용기 토탈 케어 솔루션을 제공합니다.',
  steps: [
    {
      title: '다회용기 대여',
      desc: '축제, 행사, 장례식장, 카페 등 일회용품 사용이 많은 곳에 안전한 다회용기를 제공합니다.',
    },
    {
      title: '수거 및 물류',
      desc: '사용된 다회용기를 광역 네트워크를 통해 신속하고 안전하게 수거하여 거점으로 운송합니다.',
    },
    {
      title: '친환경 세척',
      desc: '식약처 기준 및 NSF 표준에 맞춰 초순수물과 친환경 세제로 세척, 살균, 소독합니다.',
    },
    {
      title: '재공급 및 순환',
      desc: '철저한 품질 검수를 마친 깨끗한 용기를 다시 공급하여 완벽한 자원 순환 고리를 완성합니다.',
    },
  ],
} as const

export const GREETING = {
  quote: '지속가능한 깨끗함으로 지구를 지키고, 지속가능한 일자리로 이웃과 동행합니다.',
  paragraphs: [
    '라라워시 협동조합은 단순히 그릇을 씻는 기업이 아닙니다. 식약처 위생지침 준수와 NSF, ISO 인증을 통한 글로벌 수준의 위생 관리로 고객에게는 ‘안심’을, 일자리가 필요한 우리 이웃에게는 ‘내일의 희망’을 선물하는 가치 파트너입니다.',
    '환경(E)을 지키고 사회(S)를 돌보는 우리의 발걸음이 더 나은 미래를 만드는 지속 가능한 이정표가 될 수 있도록, 가장 안전하고 깨끗한 진심으로 앞장서겠습니다.',
  ],
  sign: '라라워시 협동조합 임직원 일동',
} as const

export const CORE_CAPABILITIES = [
  {
    title: '식약처 기준의 안심 위생 프로세스',
    desc: '식약처의 ‘다회용 기구·용기 위생관리 지침’을 철저히 준수하며, 엄격한 6단계 세척 공정으로 완벽한 안심을 약속합니다.',
  },
  {
    title: '경기도 최대 규모의 광역 네트워크',
    desc: '경기도 15개 지역, 21개 지점의 거점을 보유하여 고객과 가장 가까운 곳에서 신속하게 수거·세척·재공급합니다.',
  },
  {
    title: '국내외 공인 기관의 검증된 신뢰성',
    desc: '글로벌 NSF 위생 기준을 준수하고, ISO 9001(품질) 및 ISO 14001(환경) 인증 체계를 통해 최고 수준의 품질을 유지합니다.',
  },
  {
    title: '초순수물(UPW)을 사용한 프리미엄 세척공정',
    desc: '미세한 오염 물질까지 완벽하게 제거하기 위해 고도 정제된 초순수물(UPW)을 세척 공정에 도입하여 차원이 다른 깨끗함을 만듭니다.',
  },
  {
    title: '친환경 라라워시 전용세제 사용',
    desc: '잔류 세제 걱정 없이 사람의 안전과 지구 환경을 모두 보호하는 라라워시 전용 친환경 세제만을 사용합니다.',
  },
  {
    title: '취약계층 상생을 통한 사회적 가치 실현',
    desc: '지역 내 저소득 취약계층에게 지속 가능하고 안정적인 일자리를 제공하며 함께 성장하는 사회적기업입니다.',
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
  note: '공공·축제·장례·급식 현장에서 실제로 운영해 온 사례입니다. 지점별 운영 실적은 다회용기 서비스 페이지와 함께 업데이트합니다.',
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
    a: '사용 장소·예상 수량·기간만 알려주시면 맞춰 안내드립니다. 견적문의 페이지에서 바로 접수됩니다.',
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
    a: '대여부터 회수, 전문세척, 살균건조, 재공급으로 순환합니다. 빈소에 기본 수량을 비치한 뒤 매일 수거·배송하고, 수불대장 기준으로 월 정산합니다.',
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
