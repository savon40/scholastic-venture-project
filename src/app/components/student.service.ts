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

  private selectedStudent;
  studentChange: Subject<string> = new Subject<string>();


  setStudentInfo(student_info: any) {
    this.selectedStudent = student_info;
    this.studentChange.next(this.selectedStudent);
  }
  getStudentInfo() {
    return this.selectedStudent;
  }
}
