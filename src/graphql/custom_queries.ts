export const listSurveyQuestionsWithAnswers = `query ListSurveyQuestionsWithAnswers(
  $filter: ModelSurveyQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveyQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      responseType
      responses {
        nextToken
      }
      possibleAnswers {
        items {
          id
          answer
        }
      }
    }
    nextToken
  }
}
`;

export const getStudentAndSurveys = `query GetStudentAndSurveys($id: ID!) {
  getStudent(id: $id) {
    id
    name
    firstName
    surveys {
      items {
        id
        createdAt
        numTrue
        numFalse
        surveyResponses {
          items {
            id
            response
            question {
              id
              question
              displayString
              weight
              suggestionSteadyBad
              suggestionSteadyGood
              suggestionImprovement
              suggestionDeterioration
            }
          }
        }
      }
      nextToken
    }
  }
}
`;
