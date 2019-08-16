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
