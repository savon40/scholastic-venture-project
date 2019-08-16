import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as custom_queries from '../../../graphql/custom_queries';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  isLoading = false;
  question_list = [];

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    this.getQuestions();
  }

  async getQuestions() {
    await API.graphql(graphqlOperation(custom_queries.listSurveyQuestionsWithAnswers)).then(questions => {
      console.log('questions', questions);
      this.question_list = questions['data']['listSurveyQuestions']['items'];
      this.isLoading = false;
      // this.student_list = students['data']['listStudents']['items'];
    });
  }

}
