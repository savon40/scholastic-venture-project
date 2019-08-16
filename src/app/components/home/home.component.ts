import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  student_selected = false;
  selected_student_name: String;
  student_list = [];
  private loginSubscription: Subscription;

  //bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  // end bar chart

  //pie chart
  public pieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  //end pie chart

  //radar chart
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';
  // end radar chart

  //donut chart
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  //end donut chart



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
    this.getStudents();
  }

  newSurvey() {
    //add student to service?
    this.router.navigate(['/new-survey']);
  }

  changeStudent(event: any) {
    if (event === 'Select A Student') {
      this.student_selected = false;
      this.selected_student_name = null;
    }
    else if (event) {
      this.student_selected = true;
      this.selected_student_name = event;
    }
  }

  async getStudents() {
    await API.graphql(graphqlOperation(queries.listStudents)).then(students => {
      this.student_list = students['data']['listStudents']['items'];
    });
  }

}
