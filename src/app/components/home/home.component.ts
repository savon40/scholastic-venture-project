import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as custom_queries from '../../../graphql/custom_queries';
import { StudentService } from '../student.service';
import { histories } from '../default_text';
import { Survey } from '../survey/survey.model';
import { Color } from 'ng2-charts';
import { QuestionDisplay } from '../survey/question_display.model';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

// using chart:
// https://alligator.io/angular/chartjs-ng2-charts/

// more and probably better chart usage:
//https://valor-software.com/ng2-charts/#LineChart

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  icon_shown = faAngleDown;

  isLoading = false;
  selected_student: any;
  student_list = [];
  surveys_taken: Survey[] = [];

  display_questions: QuestionDisplay[] = [];
  questionIdToAnswerList = new Map();
  questionIdToQuestion = new Map();

  bip = [];

  history: any;
  private loginSubscription: Subscription;
  private studentSubscription: Subscription;

  // line chart
  public lineChartType = 'line';
  public lineChartOptions = {
    responsive: true,
    color: '#e81111',
    scales: {
      yAxes: [{
        ticks: {
          steps: 5,
          stepValue: 1,
          max: 5,
          beginAtZero: true
        }
      }]
    }
  };
  public lineChartLabels = [];
  public lineChartLegend = false;
  public lineChartData;
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'transparent',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#e81111',
      pointHoverBorderColor: '#e81111'
    }
  ];
  // end line chart



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
    if (this.studentService.getStudentInfo()) {
      this.selected_student = this.studentService.getStudentInfo();
      this.getStudentSurveyInfo(this.selected_student.id);
    }
  }

  newSurvey() {
    this.router.navigate(['/new-survey']);
  }

  changeStudent(student: any) {
    if (student) {
      this.selected_student = student;
      this.studentService.setStudentInfo(this.selected_student);
      this.getStudentSurveyInfo(this.selected_student.id);
    }
  }

  async getStudentSurveyInfo(studentId: String) {

    this.isLoading = true;

    //clear lists before beginning
    this.surveys_taken.length = 0;
    this.display_questions.length = 0;
    this.bip.length = 0;
    this.questionIdToAnswerList = new Map();
    this.questionIdToQuestion = new Map();
    this.lineChartLabels = [];
    this.lineChartData = null;

    //get the student and survey information
    await API.graphql(graphqlOperation(custom_queries.getStudentAndSurveys, { id: studentId })).then(student_surveys => {
      console.log('student and survey', student_surveys);
      let surveys = student_surveys['data']['getStudent']['surveys']['items'];
      surveys.sort(function (a, b) {
        return (a['createdAt'] < b['createdAt']) ? -1 : ((a['createdAt'] > b['createdAt']) ? 1 : 0);
      });

      let averageData = [];

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
        this.lineChartLabels.push(monthString + '-' + dtString + '-' + year);

        //loop through responses / questions to calculate average
        let responseCount = 0;
        let totalWeight = 0;
        for (const response of survey['surveyResponses']['items']) {

          //only add to weight if they answered true, otherwise there is no indication
          if (response['response'] == 'true') {
            totalWeight = totalWeight + response['question']['weight'];
          }
          responseCount++;

          //question to response map
          if (this.questionIdToQuestion.has(response['question']['id'])) {
            let answers = this.questionIdToAnswerList.get(response['question']['id']);
            answers.push(response['response']);
            this.questionIdToAnswerList.set(response['question']['id'], answers);
          }
          else {
            let answers = [];
            answers.push(response['response']);
            this.questionIdToAnswerList.set(response['question']['id'], answers);
            this.questionIdToQuestion.set(response['question']['id'], response['question']);
          }
        }

        //set the average
        let average = 0;
        if (responseCount > 0) {
          average = Number((totalWeight / responseCount).toFixed(2));
        }
        averageData.push(average);

        //create survey records
        this.surveys_taken.push(
          new Survey(survey['id'], new Date(survey['createdAt']).toLocaleString(), survey['numTrue'], survey['numFalse'], average, survey['surveyResponses']['items'])
        );
      }

      //BIP Information
      if (this.surveys_taken.length == 0) {
        this.bip.push({
          bold: true,
          text: 'You have not filled out any surveys for ' + this.selected_student.name + ' yet. Please fill some out when you get time so we can start creating a plan.'
        })
      }
      else if (this.surveys_taken.length <= 4) {
        this.bip.push({
          bold: true,
          text: 'You have only filled out ' + this.surveys_taken.length + ' survey(s) for ' + this.selected_student.name +
            '. This may not be enough for us to create an accurate plan yet, but we will do our best.'
        })
      }
      else {
        this.bip.push({
          bold: true,
          text: 'You have filled out ' + this.surveys_taken.length + ' survey(s) for ' + this.selected_student.name +
            '. This should be enough for us to get started, but we encourage you to keep filling out surveys to help us improve our plan.'
        })
      }


      this.questionIdToQuestion.forEach((value: any, key: string) => {
        console.log(key, value['weight']);

        //BIP Information and Trends
        let trend = '';
        let answers = this.questionIdToAnswerList.get(value['id']);
        if (answers.length > 0) {
          if (answers[0] == 'false' && answers[answers.length - 1] == 'false') {
            trend = 'steadily_good';
            if (value['suggestionSteadyGood']) {
              this.bip.push({
                bold: false,
                text: value['suggestionSteadyGood'].replace(/studentname/g, this.selected_student.name)
              })
            }
          }
          else if (answers[0] == 'false' && answers[answers.length - 1] == 'true') {
            trend = 'deterioration';
            if (value['suggestionDeterioration']) {
              this.bip.push({
                bold: false,
                text: value['suggestionDeterioration'].replace(/studentname/g, this.selected_student.name)
              })
            }
          }
          else if (answers[0] == 'true' && answers[answers.length - 1] == 'false') {
            trend = 'improvement';
            if (value['suggestionImprovement']) {
              this.bip.push({
                bold: false,
                text: value['suggestionImprovement'].replace(/studentname/g, this.selected_student.name)
              })
            }
          }
          else if (answers[0] == 'true' && answers[answers.length - 1] == 'true') {
            trend = 'steadily_bad';
            if (value['suggestionSteadyBad']) {
              this.bip.push({
                bold: false,
                text: value['suggestionSteadyBad'].replace(/studentname/g, this.selected_student.name)
              })
            }
          }
        }

        //display questions
        if (value['weight'] >= 3) {
          this.display_questions.push(
            new QuestionDisplay(value, trend)
          );
        }

        //bip
      });

      //line chart
      this.lineChartData = [{ data: averageData }]

      //survey table - reverse because we want to display the most recent first
      this.surveys_taken = this.surveys_taken.reverse();

      // this.history = histories.get('bad');
      this.isLoading = false;
    });
  }

  async getStudents() {
    await API.graphql(graphqlOperation(queries.listStudents)).then(students => {
      this.student_list = students['data']['listStudents']['items'];
      console.log('student_list', this.student_list);
      console.log('this.studentService.getStudentInfo()', this.studentService.getStudentInfo());

      //set first student
      if (!this.studentService.getStudentInfo()) {
        this.studentService.setStudentInfo(this.student_list[0]);
        this.selected_student = this.studentService.getStudentInfo();
        this.getStudentSurveyInfo(this.selected_student.id);
      }
    });
  }

  expandRow(survey_id: string) {
    console.log('button clicked', survey_id);
    console.log(document.getElementById(survey_id));
    var row = document.getElementById(survey_id);
    if (row) {
      row.classList.toggle('expandable');
    }

    if (this.icon_shown == faAngleUp) {
      this.icon_shown = faAngleDown;
    }
    else {
      this.icon_shown = faAngleUp;
    }
    // document.getElementById(survey_id).toggleClass("expandable");
  }

}
