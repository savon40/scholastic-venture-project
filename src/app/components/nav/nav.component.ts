import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showLogoutButton = false;
  private loginSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // const userInfo = Auth.currentUserInfo();
    // console.log('userinfo: ', userInfo);
    // console.log('userinfo: ', userInfo['attributes']);
    //   if (userInfo && userInfo['attributes']) {
    //     this.showLogoutButton = true;
    //   }
    this.loginSubscription = this.authService.loginChange.subscribe(
      (loggedIn: boolean) => {
        this.showLogoutButton = loggedIn;
      }
    )
  }

  signOut() {
    this.authService.signOut();
    // window.location.reload();
    this.router.navigate(['/sign-in']);
  }

}
