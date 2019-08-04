import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Scholastic Wellness';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    // media: MediaMatcher,
    public authService: AuthService//,
    // private toast: MatSnackBar
  )
    {
      // this.mobileQuery = media.matchMedia('(max-width: 600px)');
      // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // this.mobileQuery.addListener(this._mobileQueryListener);
      // auth.authState.subscribe((event: string) => {
      //   if (event === AuthService.SIGN_IN)
      //     this.checkSession();
      //   if (event === AuthService.SIGN_OUT)
      //     this.avatar = undefined;
      // });
    }

  ngOnInit() {
    // this.detectIOS();
    console.log('i am here maybe');
    this.checkSession();
  }

  async checkSession() {
    console.log('in this one');
    try {
      const userInfo = await Auth.currentUserInfo();
      console.log('userInfo', userInfo);
      if (userInfo && userInfo.attributes.email) {
        console.log('i am here:: ', userInfo.attributes);
        console.log('i am here:: ', userInfo.attributes.email);
        this.authService.setLoggedIn(true);
        // const avatar = userInfo.attributes.profile;
        // const url = await Storage.vault.get(avatar) as string;
        // this.avatar = url;
      }
    } catch(error) {
      console.log('no session: ', error);
      this.authService.setLoggedIn(false);

    }
  }

}
