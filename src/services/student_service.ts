import AxiosHttpClient from "@/api/axiosHttpClient";
import type { Student } from "@/infra/interfacess";



export class StudentService {
  private httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }


  async createStudent(studentData: Partial<Student>): Promise<Student | any> {
    const route = `/students`;
    const response = await this.httpClient.post<Student>(route, studentData);
    return response;
  }

  async enrollStudent(enrollData: any): Promise<any> {
    const route = `/enrollments`;
    const response = await this.httpClient.post<any>(route, enrollData);
    return response;
  }



}