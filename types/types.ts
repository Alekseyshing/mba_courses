interface Discipline {
  id: number;
  name: string;
}

interface Skills {
  id: number;
  string: string;
}

interface Specialization {
  id: number;
  string: string;
  skills: Skills[];
}

interface BaseSubjects {
  id: number;
  title: string;
  string: string;
}

interface Subject {
  id: number;
  title: string;
  description?: string;
  skills: { string: string }[];
}

interface Program {
  id: number;
  title: string;
  baseSubjects: Subject[];
  specializedSubjects: Subject[];
}

interface HomeProps {
  programs: Program[];
}

export type { Program, Discipline, HomeProps, Subject };
