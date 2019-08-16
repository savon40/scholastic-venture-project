import { Injectable } from '@angular/core';
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

}
