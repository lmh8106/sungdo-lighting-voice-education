export interface Mentor {
  name: string;
  role: string;
  specialty: 'Lighting' | 'Sound';
}

export interface Student {
  name: string;
  specialty: 'Lighting' | 'Sound';
  status: 'Training' | 'Waiting';
  progress: number;
  tasks: string[];
  mentor: string;
}

export interface Equipment {
  model: string;
  features: string;
  price: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ProjectData {
  title: string;
  summary: string;
  sponsor: string;
  mentors: Mentor[];
  students: Student[];
  equipmentCandidates: Equipment[];
  roadmap: Milestone[];
}
