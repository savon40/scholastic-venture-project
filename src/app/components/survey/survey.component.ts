import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as custom_queries from '../../../graphql/custom_queries';
import * as mutations from '../../../graphql/mutations';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { responses } from '../default_text';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  isLoading = false;
  survey_submitted = false;
  question_list = [];
  answer_map = new Map();
  student_info: any;
  response: any;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;

    if (this.studentService.getStudentInfo()) {
      this.student_info = this.studentService.getStudentInfo();
      this.getQuestions();
    }
    else {
      this.router.navigate(['/']);
    }

  }

  async getQuestions() {
    await API.graphql(graphqlOperation(custom_queries.listSurveyQuestionsWithAnswers)).then(questions => {
      console.log('questions', questions);
      this.question_list = questions['data']['listSurveyQuestions']['items'];

      for (const question of this.question_list) {
        let answerList = [];

        for (const answer of question['possibleAnswers']['items']) {
          if (answer['answer'] === 'true') {
            answerList.unshift(answer);
          }
          else {
            answerList.push(answer);
          }
        }

        this.answer_map.set(question['id'], answerList);
      }

      console.log('answer map', this.answer_map);

      this.isLoading = false;
    });
  }

  async onSubmit(value: any) {

    this.isLoading = true;

    //create survey first
    const surveyData = {
      surveyStudentId: this.student_info.id,
      createdAt: new Date().toISOString()
    };

    const newSurvey = await API.graphql(graphqlOperation(mutations.createSurvey, { input: surveyData }));

    const surveyId = newSurvey['data']['createSurvey']['id'];
    let numTrue = 0;
    let numFalse = 0;

    for (const question of this.question_list) {

      console.log('question', question);

      //if they answered the question, create survey response
      if (value[question['id']]) {
        console.log('value[question]', value[question['id']]);
        const surveyResponseInfo = {
          response: value[question['id']],
          surveyResponseSurveyId: surveyId,
          surveyResponseQuestionId: question['id'],
          createdAt: new Date().toISOString()
        }
        console.log('surveyResponseInfo', surveyResponseInfo);

        if (value[question['id']] === 'true') {
          numTrue++;
        }
        else {
          numFalse++;
        }

        const newSurveyResponse = await API.graphql(graphqlOperation(mutations.createSurveyResponse, { input: surveyResponseInfo }));
        console.log('new survey response', newSurveyResponse);
      }

      console.log('numTrue', numTrue);
    }

    //update the survey with the number of trues and falses
    const updateSurveyInfo = {
      id: surveyId,
      numTrue: numTrue,
      numFalse: numFalse
    }
    const updateSurvey = await API.graphql(graphqlOperation(mutations.updateSurvey, { input: updateSurveyInfo }));
    console.log('updatedSurvey', updateSurvey);
    this.returnHome();

  }

  returnHome() {
    this.router.navigate(['/']);
  }

}
