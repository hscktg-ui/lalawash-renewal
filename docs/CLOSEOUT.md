# 미진행 요청 마감 (Close-out)

> 일자: 2026-07-13  
> 배포: https://lalawash-renewal.vercel.app

---

## 1. 이번에 마무리한 요청·잔여

| 항목 | 조치 |
|------|------|
| 문의 폼이 alert만 뜨던 문제 | **mailto 실연동** (`ContactInquiryForm`) + 예약 폼 보조 링크 |
| 공지 시드 증가 시 구 브라우저에 안 보이던 문제 | **v4 저장 + v2/v3 마이그레이션 + 시드 자동 병합** |
| 관리자 시드 보충 | `/admin/notices` **시드 동기화** 버튼 |
| 홈 소식 중복·미사용 코드 | `InsightsSection`·`LATEST_INSIGHTS` 제거 (공지/블로그로 역할 분리) |
| 접근성 Should | skip-link · `:focus-visible` · `main` 랜드마크 |
| UX·경쟁사 점검 문서 | `docs/PANEL_UX_FINAL.md` (이미 반영) |
| GitHub 푸시·배포 | 본 커밋에서 재확인 |

---

## 2. 요청 범위 밖 / 계정·에셋 대기 (명시)

아래는 **코드만으로 완료 불가**하며, 계정·원본 자료가 필요합니다.

| 항목 | 이유 |
|------|------|
| 공지 DB·서버 인증 | 백엔드/Supabase 등 인프라 필요 (현재 localStorage + 프론트 세션) |
| GA4 | Measurement ID 필요 |
| CRM/메일 서버 수신 | 메일 게이트웨이 또는 Formspree 등 키 필요 (당장은 mailto) |
| 축제·공공 원본 실사 갤러리 | 정책상 `showAttributedPhotos: false` 유지 |
| 장비 실사 갤러리 | 사진 확보 후 |

---

## 3. 운영 확인

- 공개: https://lalawash-renewal.vercel.app  
- 관리자: `/admin` · `docs/ADMIN_ACCESS.md`  
- 회사소개서 PDF: `/docs/lalawash-company-profile-v12.pdf`  
- 회원사몰(비강조): 푸터·공지 하단 → https://lalawash-mall.co.kr  
