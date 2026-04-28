export type Experience = {
  period: string;
  company: string;
  role: string;
  summary: string;
  bullets: string[];
};

export type Education = {
  period: string;
  school: string;
  major: string;
  note?: string;
};

export type Training = {
  period: string;
  institution: string;
  program: string;
  details: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Certification = {
  date: string;
  name: string;
};

export const experience: Experience[] = [
  {
    period: "2023.10 — 재직중",
    company: "㈜엠게임",
    role: "서버팀 사원",
    summary: "게임 백엔드 컨텐츠 개발과 데이터베이스 설계·운영",
    bullets: [
      "신규 프로젝트(홀덤) 백엔드 개발 (2025.04 ~)",
      "운영 중 포커 / 훌라 유지보수 (2024.01 ~)",
      "PostgreSQL 마이그레이션 및 버전 업그레이드 (2025.06 ~ 2025.07)",
    ],
  },
  {
    period: "2020.12 — 2021.12",
    company: "㈜티지",
    role: "데이터거버넌스팀 주임",
    summary: "인공지능 기반 학부모 안심서비스 프론트엔드 개발",
    bullets: [
      "인천시 주관 SOS랩 사업 참여, 어린이집 IP카메라 연동·검증",
    ],
  },
];

export const education: Education[] = [
  {
    period: "2015.03 — 2025.02",
    school: "동양미래대학교",
    major: "정보통신공학과 학사",
    note: "2·3년제 졸업 후 4년제 편입 졸업",
  },
];

export const training: Training[] = [
  {
    period: "2022.07 — 2023.07",
    institution: "프로카데미",
    program: "MMO 게임 서버 개발 과정",
    details:
      "C/C++ 심층 분석, 어셈블리 레벨 디버깅, 멀티스레딩, 비동기 I/O, Lock-Free 알고리즘, 고성능 네트워크 라이브러리 구현",
  },
];

export const skills: SkillGroup[] = [
  { category: "언어", items: ["C++", "C"] },
  {
    category: "백엔드",
    items: ["TCP/IP", "IOCP", "Socket API", "멀티스레딩", "비동기 I/O"],
  },
  { category: "데이터베이스", items: ["MSSQL", "PostgreSQL"] },
  { category: "환경", items: ["Windows", "Linux"] },
  { category: "기타", items: ["트러블슈팅", "서비스 운영", "API 설계"] },
];

export const certifications: Certification[] = [
  { date: "2026.04", name: "OPIC Intermediate Mid2" },
];
