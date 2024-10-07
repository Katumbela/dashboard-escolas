import type { Discipline } from "./discipline";

export interface Material {
  id: number;
  label: string;
  description: string;
  link: string;
  date: Date;
  discipline: Discipline;
}
