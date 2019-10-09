export const listSurveyQuestionsWithAnswers = `query ListSurveyQuestions(
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

export const getStudentAndSurveys = `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
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
            }
          }
        }
      }
      nextToken
    }
  }
}
`;
