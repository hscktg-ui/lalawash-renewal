/** 홈페이지 용기 사양.xlsx — 구입업체·생산지는 표시하지 않음 */

export type VesselSpec = {
  name: string
  size: string
  material: string
  note?: string
  group?: string
  image?: string
}

export const FUNERAL_VESSEL_SPECS: VesselSpec[] = [
  { name: '이중메탈고백자-주찬기', size: '132×25mm', material: '멜라민', image: '/spec-assets/ai-funeral-juchan.jpg' },
  { name: '이중메탈고백자-접시볼(178)(CZP-178)', size: '178×23mm', material: '멜라민', image: '/spec-assets/ai-funeral-plate178.jpg' },
  { name: '이중메탈고백자-접시볼(225)', size: '225×28mm', material: '멜라민', image: '/spec-assets/ai-funeral-plate225.jpg' },
  { name: '이중메탈고백자-원형접시(204)', size: '204×22mm', material: '멜라민', image: '/spec-assets/ai-funeral-round204.jpg' },
  { name: '이중메탈고백자-K공기', size: '120×62mm', material: '멜라민', image: '/spec-assets/ai-funeral-kbowl.jpg' },
  { name: '이중메탈고백자-R쿠프3반(CZM31)', size: '76×27mm', material: '멜라민', image: '/spec-assets/ai-funeral-coupe.jpg' },
  { name: '소주잔(투명)', size: '55×55mm', material: 'PC', image: '/spec-assets/ai-funeral-pc-soju.jpg' },
  { name: 'LD-450P-투명', size: '65×75mm', material: 'PC', image: '/spec-assets/ai-funeral-pc-water.jpg' },
  { name: 'SLD-100 무광숟가락-샤틴', size: '215mm', material: '스텐', image: '/spec-assets/ai-funeral-spoon.jpg' },
  { name: 'SLD-100 무광젓가락-샤틴', size: '230mm', material: '스텐', image: '/spec-assets/ai-funeral-chopsticks.jpg' },
  { name: '이중다단식 밥그릇(국그릇겸용)', size: '131×55mm', material: '304 스텐', image: '/spec-assets/funeral-16-r13.jpg' },
  { name: '원형접시(대) / 접시볼178', size: '175mm', material: '304 스텐', image: '/spec-assets/ai-funeral-ss-plate-l.jpg' },
  {
    name: '원형접시(중) / 주찬기',
    size: '150mm',
    material: '304 스텐',
    note: '라라워시 레이저각인 포함',
    image: '/spec-assets/ai-funeral-ss-plate-m.jpg',
  },
  { name: '이중종지 / R쿠프', size: '90mm', material: '304 스텐', image: '/spec-assets/ai-funeral-jongji.jpg' },
  { name: '수저세트', size: '210mm / 230mm', material: '304 스텐', image: '/spec-assets/ai-funeral-sujeo.jpg' },
  { name: '스텐물컵', size: '72×70mm', material: '304 스텐', image: '/spec-assets/ai-funeral-ss-water.jpg' },
  { name: '스텐 소주컵(90ml)', size: '50×40mm', material: '304 스텐', image: '/spec-assets/ai-funeral-ss-soju.jpg' },
  { name: '물컵-6oz(177ml)', size: '70×60mm', material: '에코젠', image: '/spec-assets/ai-funeral-ecogen-water.jpg' },
  { name: '소주컵-2oz(59ml)', size: '50×42mm', material: '에코젠', image: '/spec-assets/ai-funeral-ecogen-soju.jpg' },
]

export const FESTIVAL_VESSEL_SPECS: VesselSpec[] = [
  { group: '접시', name: '소스볼 큰접시', size: '', material: 'PP', image: '/spec-assets/festival-03-r3.jpg' },
  { group: '접시', name: '3칸 나눔접시', size: '', material: 'PP', image: '/spec-assets/festival-04-r4.jpg' },
  { group: '접시', name: '사각 대접시', size: '318×269×26mm', material: 'PP', image: '/spec-assets/festival-02-r5.jpg' },
  { group: '접시', name: '개인접시 (16·14·10온스)', size: '16온스 / 14온스 / 10온스', material: 'PP', image: '/spec-assets/festival-05-r6.jpg' },
  { group: '면기', name: '면기', size: '', material: 'PP', image: '/spec-assets/festival-07-r7.jpg' },
  { group: '면기', name: '사각파스타볼', size: '', material: 'PP', image: '/spec-assets/festival-08-r8.jpg' },
  { group: '면기', name: '원형파스타볼', size: '', material: 'PP', image: '/spec-assets/ai-fest-round-pasta.jpg' },
  { group: '면기', name: '미니볼', size: '', material: 'PP', image: '/spec-assets/ai-fest-minibowl.jpg' },
  { group: '면기', name: '직사각볼', size: '226×160×51mm', material: 'PP', image: '/spec-assets/festival-10-r11.jpg' },
  { group: '면기', name: '정사각볼', size: '234×200×68mm', material: 'PP', image: '/spec-assets/festival-09-r12.jpg' },
  { group: '다회용컵', name: '22온스', size: '22온스 · 약 650ml', material: 'PP', image: '/spec-assets/ai-fest-cup-22.jpg' },
  { group: '다회용컵', name: '16온스', size: '16온스 · 약 473ml', material: 'PP', image: '/spec-assets/festival-11-r19.jpg' },
  { group: '다회용컵', name: '14온스', size: '14온스 · 약 414ml', material: 'PP', image: '/spec-assets/ai-fest-cup-14.jpg' },
  { group: '다회용컵', name: '10온스', size: '10온스 · 약 296ml', material: 'PP', image: '/spec-assets/ai-fest-cup-10.jpg' },
  { group: '다회용컵', name: '5온스', size: '5온스 · 약 148ml', material: 'PP', image: '/spec-assets/ai-fest-cup-5.jpg' },
  { group: '다회용컵', name: '리드', size: '14·16·22온스 호환', material: 'PP', image: '/spec-assets/ai-fest-lid.jpg' },
  { group: '커트러리', name: '수저', size: '', material: 'PP', image: '/spec-assets/ai-fest-spoon-pp.jpg' },
  { group: '커트러리', name: '포크', size: '', material: 'PP', image: '/spec-assets/ai-fest-fork-pp.jpg' },
  { group: '커트러리', name: '스텐 수저·젓가락', size: '', material: '스텐', image: '/spec-assets/ai-fest-ss-cutlery.jpg' },
  { group: '커트러리', name: '유아 수저포크세트', size: '', material: '스텐', image: '/spec-assets/ai-fest-kids-cutlery.jpg' },
  { group: '기타', name: '성인 도시락용기', size: '', material: 'PP', image: '/spec-assets/ai-fest-lunch-adult.jpg' },
  { group: '기타', name: '유아 도시락용기', size: '', material: 'PP', image: '/spec-assets/ai-fest-lunch-kids.jpg' },
  { group: '기타', name: '멜라민 식판', size: '', material: '멜라민', image: '/spec-assets/ai-fest-melamine-tray.jpg' },
  { group: '기타', name: '스텐식판', size: '', material: '스텐', image: '/spec-assets/ai-fest-ss-tray.jpg' },
]

export const SIKPAN_VESSEL_SPECS: VesselSpec[] = [
  { name: '4찬 학교식판', size: '288×358×38mm', material: '국산 304스텐', image: '/spec-assets/ai-sikpan-school.jpg' },
  { name: '4찬 급식 식판', size: '', material: '멜라민', image: '/spec-assets/ai-sikpan-melamine.jpg' },
]

export const CUP_VESSEL_SPECS: VesselSpec[] = [
  {
    group: '오피스컵',
    name: '오피스컵 16온스',
    size: '16온스 · 약 473ml',
    material: 'PP',
    note: '오피스컵은 리드가 없습니다.',
    image: '/spec-assets/cup-01-r3.jpg',
  },
  { group: '오피스컵', name: '14온스', size: '14온스 · 약 414ml', material: 'PP', image: '/spec-assets/ai-office-14.jpg' },
  { group: '오피스컵', name: '10온스', size: '10온스 · 약 296ml', material: 'PP', image: '/spec-assets/ai-office-10.jpg' },
  {
    group: '카페컵',
    name: '16온스 (투명·불투명)',
    size: '16온스 · 약 473ml',
    material: 'PP',
    image: '/spec-assets/ai-cafe-16-pair.jpg',
  },
  { group: '카페컵', name: '리드', size: '16온스 호환', material: 'PP', image: '/spec-assets/ai-cafe-lid.jpg' },
]

export const KIDS_VESSEL_SPECS: VesselSpec[] = [
  { name: '3찬 유아식판', size: '198×265×32mm', material: '304 스텐', image: '/spec-assets/ai-kids-3ban.jpg' },
  { name: '튼튼 유아식판', size: '265×205×29mm', material: '스텐', image: '/spec-assets/ai-kids-tuntun.jpg' },
  { name: '간식식판', size: '220×135×25mm', material: '스텐', image: '/spec-assets/ai-kids-snack.jpg' },
  { name: '옥수수 유아식판', size: '사양 문의', material: '', image: '/spec-assets/ai-kids-corn.jpg' },
  { name: '에코젠 간식식판', size: '218×132mm', material: '에코젠', image: '/spec-assets/ai-kids-ecogen.jpg' },
]

export const FESTIVAL_SPEC_GROUPS = ['접시', '면기', '다회용컵', '커트러리', '기타'] as const
