import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  student_selected = false;
  selected_student_name: String;
  student_list: String[] = [
    'Steve Avon', 'Cris Bouidel', 'Sean Caesar'
  ]
  private loginSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginSubscription = this.authService.loginChange.subscribe(
      (loggedIn: boolean) => {
        console.log('loggedin', loggedIn);
        if (!loggedIn) {
          this.router.navigate(['/sign-in']);
        }
      }
    )
    // this.getStudents();
  }

  changeStudent(event: any) {
    if (event) {
      this.student_selected = true;
      this.selected_student_name = event;
    }
  }

  getStudents() {
    let myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {  // OPTIONAL
      }
    }

    API.get('ventureAPI', '/students', myInit).then(response => {
      debugger;
      // Add your code here
    }).catch(error => {
      console.log(error.response);
      debugger;
    });
  }

}
