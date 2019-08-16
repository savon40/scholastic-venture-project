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

  private loginSubscription: Subscription;
  isLoading = false;
  signinForm;
  signinError = false;
  signinErrorMessage;

  get emailInput() { return this.signinForm.get('email'); }
  get passwordInput() { return this.signinForm.get('password'); }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.signinForm = new FormGroup({
      email: new FormControl('',[ Validators.email, Validators.required ]),
      password: new FormControl('', [ Validators.required, Validators.min(6) ])
    });

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
    this.isLoading = true;
    this.signinError = false;
    this.signinErrorMessage = '';
    this.authService.signIn(this.emailInput.value, this.passwordInput.value)
      .then((user: CognitoUser|any) => {
        this.signinForm.reset();
        this.router.navigate(['']);
        this.isLoading = false;
      })
      .catch((error: any) => {
        this.isLoading = false;
        this.signinError = true;
        this.signinErrorMessage = error.message;
        // alert(error.code + ': ' + error.message);
      })
  }
}
