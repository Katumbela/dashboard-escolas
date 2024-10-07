import type { Course } from "./course";
import type { School } from "./school";
import type { Student } from "./student";

export interface Enrollment {
  id: number;
  student: Student;
  course: Course;
  school: School;
  enrolledAt: Date;
}
