# 콘텐츠 수정 가이드

이 사이트의 콘텐츠를 수정할 때 어디를 손대야 하는지 정리한 문서입니다.
모든 데이터는 `src/data/*.ts` 에 모여 있고, 본문이 길어지는 콘텐츠(프로젝트 상세)만 `src/content/projects/*.mdx` 에 둡니다.

## 빠른 찾기

| 수정 대상 | 파일 |
|---|---|
| 이름 · 이메일 · GitHub · 휴대폰 · 프로필 사진 토글 | `src/data/profile.ts` |
| About 키워드 블록 (4개) | `src/data/about.ts` |
| 이력서 (경력 · 학력 · 교육 · 기술스택 · 자격) | `src/data/resume.ts` |
| 타임라인 compact 항목 (4개 완료 프로젝트) | `src/data/timeline.ts` |
| Header 네비게이션 링크 | `src/data/nav.ts` |
| Coming soon 카드 텍스트 | `src/data/comingSoon.ts` |
| 프로젝트 상세 페이지 본문 | `src/content/projects/<slug>.mdx` |
| MDX 스타일 (h1, p, ul, code 등) | `src/mdx-components.tsx` |
| 컬러 팔레트 · 폰트 · 섹션 구분선 | `src/app/globals.css` 의 `@theme` 블록 |
| 사이트 메타데이터 (title, description, OG) | `src/app/layout.tsx` |

## 새 프로젝트 추가

1. `src/content/projects/<slug>.mdx` 생성 — `_template.mdx` 복사 후 frontmatter 채우기
2. `public/images/projects/<slug>/cover.jpg` (16:9 권장) 와 다이어그램 이미지 추가
3. 로컬에서 `npm run dev` 로 확인
4. `git add → commit → push` (Vercel 자동 배포 ~90초)

frontmatter 필드:

```yaml
---
slug: "iocp-refactor"             # URL 슬러그 (파일명과 일치)
year: 2026                        # 정렬용 연도
title: "IOCP 라이브러리 리팩토링"
status: "completed"               # "completed" | "in-progress"
summary: "한 줄 요약"
tech: ["C++20", "Coroutines"]
cover: "/images/projects/iocp-refactor/cover.jpg"
diagram: "/images/projects/iocp-refactor/architecture.svg"
order: 1                          # 같은 해 안에서 정렬 우선순위
---
```

`status: "in-progress"` 로 두면 카드에 "진행 중" 배지가 붙습니다.

## Compact 타임라인 항목 정렬

`src/data/timeline.ts` 의 `date` 필드는 `"YYYY-MM"` 문자열입니다.
정렬은 `dateToSortKey()` 가 자동으로 변환합니다 — 직접 정렬 키를 만질 필요 없습니다.

## 표시/숨김 토글

`src/data/profile.ts` 의 `display` 객체로 휴대폰 번호와 프로필 사진 노출을 끌 수 있습니다.

```ts
display: {
  phone: true,         // false 로 바꾸면 Contact 에서 숨김
  profileImage: true,  // false 로 바꾸면 Hero 에서 숨김
}
```

## 검증

코드 변경 후:

```bash
npm run lint    # ESLint
npm run build   # 프로덕션 빌드 (TypeScript 포함)
npm run dev     # http://localhost:3000 에서 확인
```
