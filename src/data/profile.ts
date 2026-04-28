export type Profile = {
  name: { ko: string; en: string };
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImage: string;
  /**
   * 표시 여부 토글. true 로 바꾸면 해당 항목이 페이지에 노출됩니다.
   * 휴대폰 번호와 프로필 사진은 보안/사적 이유로 기본 OFF 입니다.
   */
  display: {
    phone: boolean;
    profileImage: boolean;
  };
};

export const profile: Profile = {
  name: {
    ko: "이준섭",
    en: "Lee Junseob",
  },
  role: "C++ 서버 개발자",
  email: "leejun51@naver.com",
  phone: "010-5442-5104",
  github: "https://github.com/Seober",
  linkedin: "", // TODO: 선택사항
  // 사용 시 public/images/profile.jpg 같은 파일을 추가하고 경로 맞춰주세요.
  profileImage: "/images/profile.jpg",
  display: {
    phone: true, // ← true 로 바꾸면 Contact 에 휴대폰 번호 표시
    profileImage: true, // ← true 로 바꾸면 Hero 에 프로필 사진 표시 (이미지 파일 필요)
  },
};
