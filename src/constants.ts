import { ProjectData } from "./types";

export const PROJECT_DATA: ProjectData = {
  title: "2026-2027 차세대 미디어 핵심 인재 육성 및 시스템 고도화",
  summary: "춘천성도교회 예배 사역 안정성 강화 및 '카르페디엠' 성공적 운영을 위한 인재 육성 및 DX 프로젝트",
  sponsor: "이명희 집사 (전액 후원)",
  mentors: [
    { name: "이제영", role: "회장 / 조명 총괄", specialty: "Lighting" },
    { name: "김종범", role: "집사 / 조명 멘토", specialty: "Lighting" },
    { name: "이혁주", role: "집사 / 음향 총괄", specialty: "Sound" },
    { name: "이원섭", role: "집사 / 음향 멘토", specialty: "Sound" },
  ],
  students: [
    {
      name: "이은수",
      specialty: "Lighting",
      status: "Training",
      progress: 35,
      tasks: ["전원 인가 절차 숙달", "DISCO 240 기초 조작", "이론 문서 자습"],
      mentor: "이제영",
    },
    {
      name: "문해강",
      specialty: "Lighting",
      status: "Waiting",
      progress: 0,
      tasks: ["조명 기초 이론 학습 예정"],
      mentor: "이제영",
    },
    {
      name: "윤예진",
      specialty: "Sound",
      status: "Waiting",
      progress: 0,
      tasks: ["Mackie 2404-VLZ4 게인 스테이징", "악기별 EQ 밸런싱"],
      mentor: "이혁주",
    },
    {
      name: "정서현",
      specialty: "Sound",
      status: "Waiting",
      progress: 0,
      tasks: ["시그널 플로우 이해", "KanalS 무선 주파수 관리"],
      mentor: "이원섭",
    },
  ],
  equipmentCandidates: [
    { model: "Behringer WING Black", features: "최신 터치 UI, 48채널 확장성", price: "440~510만원" },
    { model: "Midas M32 LIVE", features: "업계 표준, 우수한 음질", price: "520~600만원" },
    { model: "Allen & Heath SQ-5", features: "96kHz 고해상도, 초저지연", price: "500~550만원" },
  ],
  roadmap: [
    { date: "2026.03", title: "조명 기초 교육 착수", description: "이은수 학생 중심 실습 및 이론 교육", completed: true },
    { date: "2026.04~05", title: "첫 팀 빌딩 모임", description: "멘토-학생 신뢰 구축 및 비전 공유", completed: false },
    { date: "2026.04", title: "음향 교육 개시", description: "부활절 이후 Mackie 아날로그 시스템 실습", completed: false },
    { date: "2026.08", title: "카르페디엠 현장 스태프", description: "제8회 전국청소년밴드경연대회 실전 경험", completed: false },
    { date: "2027.01", title: "디지털 인프라(DX) 전환", description: "최종 장비 도입 및 시스템 고도화", completed: false },
    { date: "2027.H1", title: "무대예술전문인 자격 취득", description: "국가 공인 3급 자격증 시험 응시", completed: false },
  ],
};
