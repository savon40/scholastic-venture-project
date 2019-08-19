import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as custom_queries from '../../../graphql/custom_queries';
import * as mutations from '../../../graphql/mutations';

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
    });
  }

  onSubmit(value: any) {
    // console.log('form submitted');
    // console.log(value);

    //create survey first
    /*
      input CreateSurveyInput {
        id: ID
        createdAt: AWSDateTime!
        surveyStudentId: ID

        - YYYY-MM-DDThh:mm:ss.sssZ format for awsdatetime

        - get student id from a service of some kind
      }
    */

    for (const question of this.question_list) {
      console.log('questionid', question['id']);
      console.log('answer hopefully', value[question['id']]);

      /*
        input CreateSurveyResponseInput {
          id: ID
          response: String
          createdAt: AWSDateTime!
          surveyResponseSurveyId: ID
          surveyResponseQuestionId: ID
        }

        const newSR = {
          response: value[question['id']],
          createdAt: now?
          surveyResponseSurveyId: new survey I create here
          surveyResponseQuestionId: question['id']
        }
      */

      // mutations.createSurveyResponse
    }


    // for (const answer of value) {
    //   console.log('answer', answer);
    // }
  }

}
