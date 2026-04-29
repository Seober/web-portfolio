@AGENTS.md

# Lee Junseob 포트폴리오 — Claude Code 가이드

이 파일은 Claude Code 가 이 프로젝트에서 작업할 때 따라야 할 규칙과 컨텍스트입니다.

## 프로젝트 컨텍스트

- **사이트**: 이준섭 (Lee Junseob) 의 개인 포트폴리오
- **라이브**: https://seober-web-portfolio.vercel.app/
- **저장소**: https://github.com/Seober/web-portfolio
- **사용자**: C++ 서버 개발자, 웹 프론트엔드는 초보
- **스택**: Next.js 16 (App Router) + TypeScript + Tailwind v4 + MDX + Vercel
- **상세 기획**: [기획서.md](./기획서.md) 참고

## 응답 스타일

- 한국어로 응답
- 웹 용어는 풀어서 설명, 가능하면 C++/게임 개발 비유 사용
- 간결하게, 핵심부터
- 이모지는 사용자가 명시적으로 요청할 때만

## 의사결정 규칙

1. **결정이 필요한 사항은 사용자에게 물어보고, 사용자가 답하기 전까지 반영하지 않는다.**
   - 비교 가능한 선택지를 정리해서 제시 (보통 2~4개)
   - AskUserQuestion 의 preview 기능 적극 활용
   - 사용자가 직접 비교 후 선택할 수 있게 함

2. **추론으로 콘텐츠를 만들지 않는다.**
   - 사용자가 제공한 자료(PDF, 기존 코드, 명시적 답변) 만 사용
   - 빠진 정보가 있으면 placeholder 로 두고 사용자에게 질문

3. **자율 작업 시에도 위 두 규칙 유지** — 결정 필요한 부분은 옵션으로 정리해서 보고만 한다.

## Git 워크플로 규칙 (중요)

1. **commit 전에 항상 사용자에게 확인**
2. **commit 메시지는 사용자에게 입력받기** (또는 사용자 승인 후 사용)
   - commit 메시지 규칙은 추후 정의 예정
3. **push 도 별도로 사용자 확인** 후 진행
4. **절대 자동으로 commit/push 하지 않는다.**

## 검증 워크플로

코드 변경 후 다음을 확인:
- `npm run build` — 프로덕션 빌드 통과
- `npm run lint` — ESLint 통과
- TypeScript 타입 에러 없음
- 필요 시 HTTP 200 응답 확인

## 자주 사용되는 패턴

### 새 프로젝트 추가 흐름
1. `src/content/projects/<slug>.mdx` 생성 (`_template.mdx` 복사)
2. `public/images/projects/<slug>/` 에 이미지 추가
3. 사용자 확인 → commit → push (Vercel 자동 배포 ~90초)

### 콘텐츠 수정 위치
- 자기소개 (About 키워드 블록): `src/components/sections/AboutSection.tsx`
- 이력서 (경력·학력·교육·기술스택·자격): `src/data/resume.ts`
- 프로필 (이름·이메일·GitHub·휴대폰·사진 토글): `src/data/profile.ts`
- 타임라인 compact 항목 (4개 완료 프로젝트): `src/data/timeline.ts`
- 프로젝트 상세 페이지: `src/content/projects/<slug>.mdx`
- Coming soon 카드 텍스트: `src/components/timeline/ComingSoonCard.tsx`
- Header nav 링크: `src/components/layout/Header.tsx`
- 컬러 팔레트 / 폰트: `src/app/globals.css` 의 `@theme` 블록

## 개발 환경

- WSL2 Ubuntu 22.04
- Node.js v24 LTS (nvm 관리)
- npm
- GitHub CLI (`gh`) 인증 완료
