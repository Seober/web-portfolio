# Lee Junseob — Portfolio

C++ 서버 개발자 이준섭의 개인 포트폴리오 웹사이트.

🔗 **Live**: https://seober-web-portfolio.vercel.app/

## 주요 기능

- 단일 페이지 스크롤 구조 (About / Resume / Roadmap / Contact)
- 세로 타임라인 기반의 커리어 로드맵
- 향후 프로젝트 자리에 "Coming soon" placeholder 카드
- MDX 파일 추가만으로 새 프로젝트 자동 등록
- 미니멀 / 에디토리얼 디자인 (Pretendard + JetBrains Mono)

## 기술 스택

| 영역 | 도구 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | MDX (`@next/mdx` + gray-matter) |
| Hosting | Vercel |

## 폴더 구조

```
src/
├── app/                    # 라우트 (App Router)
│   ├── layout.tsx          # 글로벌 레이아웃
│   ├── page.tsx            # 메인 페이지 (단일 페이지 스크롤)
│   └── projects/[slug]/    # 프로젝트 상세 동적 라우트
├── components/             # UI 컴포넌트
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Resume, Roadmap, Contact
│   ├── timeline/           # 타임라인 (Compact, Project, ComingSoon)
│   └── project/            # 프로젝트 상세 레이아웃
├── content/projects/       # 프로젝트 MDX (frontmatter + 본문)
├── data/                   # 정적 데이터 (profile, resume, timeline)
├── lib/                    # MDX 로딩 / 타입
└── mdx-components.tsx      # MDX 스타일링 (Next.js 컨벤션)
```

## 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000
```

## 새 프로젝트 추가

1. `src/content/projects/<slug>.mdx` 파일 생성 (`_template.mdx` 복사)
2. `public/images/projects/<slug>/` 에 이미지 추가
3. `git push` → Vercel 자동 배포 (~90초)

자세한 기획·구조는 [기획서.md](./기획서.md) 참고.
