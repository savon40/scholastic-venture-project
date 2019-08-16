import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Subject, Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';
// import { CookieService } from 'ngx-cookie';

export interface NewUser {
  email: string,
  phone: string,
  password: string,
  firstName: string,
  lastName: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean;
  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();
  loginChange: Subject<boolean> = new Subject<boolean>();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';

  constructor(
    // private cookies: CookieService,
  ) {
    // Hub.listen('auth',(data) => {
    //   const { channel, payload } = data;
    //   if (channel === 'auth') {
    //     this._authState.next(payload.event);
    //   }
    // });
  }

  signIn(username: string, password: string):Promise<CognitoUser|any> {
    return new Promise((resolve,reject) => {
      Auth.signIn(username,password)
      .then((user: CognitoUser|any) => {
        this.loggedIn = true;
        this.loginChange.next(true);
        resolve(user);
      }).catch((error: any) => reject(error));
    });
  }

  signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => {
        this.loggedIn = false;
        this.loginChange.next(false);
      })
  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    this.loginChange.next(this.loggedIn);
  }
}
