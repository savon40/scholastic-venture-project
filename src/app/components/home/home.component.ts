import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as custom_queries from '../../../graphql/custom_queries';
import { StudentService } from '../student.service';
import { histories } from '../default_text';

// using chart:
// https://alligator.io/angular/chartjs-ng2-charts/



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoading = false;
  selected_student: any;
  student_list = [];
  history: any;
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

  // line chart
  public lineChartOptions = { responsive: true };
  public lineChartLabels = [];
  public lineChartData;
  // lineChartData = [
  //   { data: [3.2, 4.1, 2.1, 1.1], label: 'Mental Health Issue Indication (0-5)' }
  // ];
  // lineChartLabels = ['January', 'February', 'Mars', 'April'];
  // end line chart

  //pie chart
  // public pieChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType = 'pie';
  //end pie chart

  //radar chart
  // public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  // public radarChartData = [
  //   { data: [120, 130, 180, 70], label: '2017' },
  //   { data: [90, 150, 200, 45], label: '2018' }
  // ];
  // public radarChartType = 'radar';
  // end radar chart

  //donut chart
  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  // public doughnutChartType = 'doughnut';
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
      this.getStudentSurveyInfo(this.selected_student.id);
    }
  }

  newSurvey() {
    this.router.navigate(['/new-survey']);
  }

  changeStudent(event: any) {

    if (event === 'Select A Student') {
      this.selected_student = null;
    }
    else if (event) {
      this.isLoading = true;
      this.selected_student = JSON.parse(event);
      this.studentService.setStudentInfo(this.selected_student);
      this.getStudentSurveyInfo(this.selected_student.id);
    }
  }

  async getStudentSurveyInfo(studentId: String) {

    //clear lists before beginning
    this.barChartLabels = [];
    this.barChartData = [];

    //get the student and survey information
    await API.graphql(graphqlOperation(custom_queries.getStudentAndSurveys, { id: studentId })).then(student_surveys => {
      console.log('student and survey', student_surveys);
      let surveys = student_surveys['data']['getStudent']['surveys']['items'];
      surveys.sort(function (a, b) {
        return (a['createdAt'] < b['createdAt']) ? -1 : ((a['createdAt'] > b['createdAt']) ? 1 : 0);
      });

      let trueData = [];
      let falseData = [];

      let averageData = [];
      let questionIdToAnswerList = new Map();
      let questionIdToQuestion = new Map();

      for (const survey of surveys) {

        //date taken
        let date = new Date(survey['createdAt']);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let monthString = String(month);
        let dt = date.getDate();
        let dtString = String(dt);
        if (dt < 10) {
          dtString = '0' + dt;
        }
        if (month < 10) {
          monthString = '0' + month;
        }
        this.barChartLabels.push(monthString + '-' + dtString + '-' + year);
        this.lineChartLabels.push(monthString + '-' + dtString + '-' + year);

        //true and false for bar chart - may remove
        trueData.push(survey['numTrue'] != null ? survey['numTrue'] : 0);
        falseData.push(survey['numFalse'] != null ? survey['numFalse'] : 0);

        //loop through responses / questions to calculate average
        let responseCount = 0;
        let totalWeight = 0;
        for (const response of survey['surveyResponses']['items']) {
          totalWeight = totalWeight + response['question']['weight'];
          responseCount++;

          //question to response map
          if (questionIdToQuestion.has(response['question']['id'])) {
            let answers = questionIdToAnswerList.get(response['question']['id']);
            answers.push(response['response']);
            questionIdToAnswerList.set(response['question']['id'], answers);
          }
          else {
            let answers = [];
            answers.push(response['response']);
            questionIdToAnswerList.set(response['question']['id'], answers);
            questionIdToQuestion.set(response['question']['id'], response['question']);
          }

        }

        if (responseCount > 0) {
          averageData.push((totalWeight / responseCount).toFixed(2));
        }
        else {
          averageData.push(0);
        }
      }

      console.log('questionIdToAnswerList', questionIdToAnswerList);
      console.log('questionIdToQuestion', questionIdToQuestion);

      this.lineChartData = [
        {data: averageData, label: 'Mental Health Issue Indication (0-5)'}
      ]

      this.barChartData = [
        { data: trueData, label: 'True Answers' },
        { data: falseData, label: 'False Answers' },
      ]

      this.history = histories.get('bad');
      this.isLoading = false;
    });
  }

  async getStudents() {
    await API.graphql(graphqlOperation(queries.listStudents)).then(students => {
      this.student_list = students['data']['listStudents']['items'];
      console.log('student_list', this.student_list);
    });
  }

}
