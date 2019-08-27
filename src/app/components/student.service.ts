import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import Auth from '@aws-amplify/auth';
// import { Subject, Observable } from 'rxjs';
// import { CognitoUser } from 'amazon-cognito-identity-js';
// import { CookieService } from 'ngx-cookie';

export interface SurveyResponse {
  question: string,
  response: string
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private selectedStudentId: string;
  studentIdChange: Subject<string> = new Subject<string>();

  private selectedStudent;


  setStudentId(student_id: string) {
    this.selectedStudentId = student_id;
    this.studentIdChange.next(this.selectedStudentId);
  }
  getStudentId() {
    return this.selectedStudentId;
  }

  setStudentInfo(student_info: any) {
    this.selectedStudent = student_info;
  }
  getStudentInfo() {
    return this.selectedStudent;
  }
}
