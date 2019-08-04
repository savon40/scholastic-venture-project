import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
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
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.checkSession();
  }

  async checkSession() {
    try {
      const userInfo = await Auth.currentUserInfo();
      if (userInfo && userInfo.attributes.email) {
        this.authService.setLoggedIn(true);
      }
      else {
        this.authService.setLoggedIn(false);
      }
    } catch (error) {
      console.log('no session: ', error);
      this.authService.setLoggedIn(false);
    }
  }

}
