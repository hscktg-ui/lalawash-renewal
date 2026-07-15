# 라라워시 홈페이지 리뉴얼

경기도 다회용기 렌탈·세척 브랜드 **라라워시** 홈페이지 리뉴얼 프로토타입입니다.

## 포함 산출물

| 경로 | 내용 |
|------|------|
| `docs/STRATEGY.md` | 기존 문제점 · 벤치마크 · IA |
| `docs/COMP_ANALYSIS.md` | 경쟁사·광고주 재분석 |
| `docs/PANEL-30.md` | 패널 30인 역할 |
| `docs/PANEL_REVIEW_R2.md` / `R3.md` | 검수 라운드 |
| `docs/PANEL_FINAL.md` | 로고·포트폴리오 정책 |
| `docs/PANEL_FINAL_SUMMARY.md` | **패널 30인 최종 총정리 (8.3 / Final Go)** |
| `docs/PANEL_LAUNCH_WRAP.md` | 인사이트 반영·버그점검 런칭 마무리 |
| `docs/PANEL_UX_FINAL.md` | **UX·중복·경쟁사 최종 점검 (8.6)** |
| `docs/PANEL_SHIP_FINAL.md` | **패널 30인 런칭 마무리 (8.7 / Final Go)** |
| `docs/PANEL_DAYLOCK.md` | **데이락 참고 패널 회의 · 흡수 (8.5)** |
| `docs/CLOSEOUT.md` | **미진행 요청 마감·잔여 명시** |
| `src/` | 리뉴얼 사이트 |

**배포:** https://lalawash-renewal.vercel.app

## 실행

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 5180
```

브라우저에서 **http://127.0.0.1:5180/** 을 엽니다.

### 페이지

| 경로 | 내용 |
|------|------|
| `/` | 홈 |
| `/about` | 소개 |
| `/services` | 서비스 허브 |
| `/services/:slug` | 급식·공공·축제·장례 상세 |
| `/infra` | 지점 맵·지자체 운영 |
| `/impact` | 성과·임팩트 |
| `/notice` | 공지·공문 |
| `/contact` | 문의 |
| `/quote` | 회원사 전용몰 견적서 (공개) |
| `/admin` | 관리자 (메뉴 비노출) |

## 설계 요약

- **벤치마크:** 더그릿(광고주 강조)의 임팩트 숫자·솔루션 모듈·인프라 설득력
- **차별화:** 경기도 밀착 20사업장, 식판·공공·축제·장례 현장, 자활 일자리
- **IA:** 소개 / 서비스 / 인프라 / 성과 / 공지 / 문의 · 소식은 네이버 블로그
