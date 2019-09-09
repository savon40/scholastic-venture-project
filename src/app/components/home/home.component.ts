import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as custom_queries from '../../../graphql/custom_queries';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  selected_student: any;
  student_list = [];
  private loginSubscription: Subscription;
  private studentSubscription: Subscription;

  //bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = []; //'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData;
  /*
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Mental Health'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Grades'}
  */
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
    private router: Router,
    private studentService: StudentService
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

    this.studentSubscription = this.studentService.studentChange.subscribe(
      (student_info: any) => {
        this.selected_student = student_info;
      }
    )

    this.getStudents();
  }

  ngAfterViewInit() {
    console.log('on view init', this.studentService.getStudentInfo());
    if (this.studentService.getStudentInfo()) {
      this.selected_student = this.studentService.getStudentInfo();
      this.changeStudent(this.selected_student);
    }

  }

  newSurvey() {
    //add student to service?
    this.router.navigate(['/new-survey']);
  }

  async changeStudent(event: any) {

    if (event === 'Select A Student') {
      this.selected_student = null;
    }
    else if (event) {
      this.selected_student = JSON.parse(event);
      this.studentService.setStudentInfo(this.selected_student);

      //get the student and survey information
      await API.graphql(graphqlOperation(custom_queries.getStudentAndSurveys, { id: this.selected_student.id })).then(student_surveys => {
        console.log('student and survey', student_surveys);
        let surveys = student_surveys['data']['getStudent']['surveys']['items'];
        let trueData = [];
        let falseData = [];
        console.log('surveys', surveys);
        for (const survey of surveys) {
          console.log('survey', survey);
          this.barChartLabels.push(survey['createdAt']);
          trueData.push(survey['numTrue'] != null ? survey['numTrue'] : 0);
          falseData.push(survey['numFalse'] != null ? survey['numFalse'] : 0);

          console.log('trueData', trueData);
          console.log('falseData', falseData);
        }


        this.barChartData = [
          {data: trueData, label: 'True Answers'},
          {data: falseData, label: 'False Answers'},
        ]
      });

        /*
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Mental Health'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Grades'}
  */

      console.log('barchartlabels', this.barChartLabels);
      console.log('barChartData', this.barChartData);
    }
  }

  async getStudents() {
    await API.graphql(graphqlOperation(queries.listStudents)).then(students => {
      this.student_list = students['data']['listStudents']['items'];
      console.log('student_list', this.student_list);
    });
  }

}
