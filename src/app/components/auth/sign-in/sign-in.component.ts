import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CognitoUser } from '@aws-amplify/auth';
import { Subscription } from 'rxjs';

// import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup = new FormGroup({
    email: new FormControl('',[ Validators.email, Validators.required ]),
    password: new FormControl('', [ Validators.required, Validators.min(6) ])
  });

  private loginSubscription: Subscription;


  get emailInput() { return this.signinForm.get('email'); }
  get passwordInput() { return this.signinForm.get('password'); }

  constructor(
    private authService: AuthService,
    // private _notification: NotificationService,
    private router: Router,
    // private _loader: LoaderService
  ) { }

  ngOnInit() {
    console.log('authstate: ', this.authService.authState);
    if (this.authService.loggedIn) {
      this.router.navigate(['']);
    }

    this.loginSubscription = this.authService.loginChange.subscribe(
      (loggedIn: boolean) => {
        console.log('loggedin', loggedIn);
        if (loggedIn) {
          this.router.navigate(['']);
        }
      }
    )
  }

  getEmailInputError() {
    if (this.emailInput.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    if (this.emailInput.hasError('required')) {
      return 'An Email is required.';
    }
  }

  getPasswordInputError() {
    if (this.passwordInput.hasError('required')) {
      return 'A password is required.';
    }
  }

  signIn() {
    // this._loader.show();
    this.authService.signIn(this.emailInput.value, this.passwordInput.value)
      .then((user: CognitoUser|any) => {
        // this._loader.hide();
        // window.location.reload();
        this.router.navigate(['']);
        console.log('success!!!', user);
      })
      .catch((error: any) => {
        alert(error.code + ': ' + error.message);
        // this._loader.hide();
        // this._notification.show(error.message);
        // switch (error.code) {

          // case "UserNotConfirmedException":
          //   environment.confirm.email = this.emailInput.value;
          //   environment.confirm.password = this.passwordInput.value;
          //   this.router.navigate(['authService/confirm']);
          //   break;
          // case "UsernameExistsException":
          //   this.router.navigate(['authService/signin']);
          //   break;
        // }
      })
  }
}
