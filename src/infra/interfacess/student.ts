import type { Account } from "./account";
import type { Attendance } from "./attendance";
import type { Enrollment } from "./enrollements";
import type { Grade } from "./grade";

export interface Student {
  id?: number;
  adhesionNumber: number;
  registrationNumber: string;
  studentName: string;
  class: string;
  shift: string;
  phoneNumber: string;
  course: string;
  studentEmail: string
  identificationNumber: string;
  registrationYear: number;
  password: string;
  grades?: Grade[];
  account?: Account;
  comments?: Comment[];
  attendances?: Attendance[];
  enrollments?: Enrollment[];
}