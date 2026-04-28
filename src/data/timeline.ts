import type { CompactEntry } from "@/lib/types";

export const compactEntries: CompactEntry[] = [
  {
    displayDate: "2023 — 현재",
    sortKey: 202310,
    title: "게임 프로젝트 (㈜엠게임)",
    summary:
      "포커 / 훌라 / 홀덤 등 게임 백엔드 컨텐츠 개발과 데이터베이스 설계·운영",
    tech: ["C++", "Windows", "Linux", "MSSQL", "PostgreSQL"],
  },
  {
    displayDate: "2023",
    sortKey: 202305,
    title: "비동기 IOCP 네트워크 라이브러리",
    summary:
      "Windows IOCP 기반 비동기 고성능 네트워크 라이브러리 및 채팅·게임서버 구현 (게임서버 TPS 100만)",
    tech: ["C++", "Windows", "IOCP"],
  },
  {
    displayDate: "2020 — 2021",
    sortKey: 202007,
    title: "인공지능 기반 학부모 안심서비스",
    summary:
      "어린이집 IP카메라 연동 및 실시간 화면 분석데이터 표시 (인천시 주관 SOS랩)",
    tech: ["JavaScript", "Python", "Linux"],
  },
  {
    displayDate: "2018",
    sortKey: 201810,
    title: "라인트레이서",
    summary:
      "아두이노와 적외선 센서를 활용한 라인트레이서 소프트웨어 개발 및 최적화",
    tech: ["Arduino", "C"],
  },
];
