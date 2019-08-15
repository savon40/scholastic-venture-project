// tslint:disable
// this is an auto generated file. This will be overwritten

export const getStudent = `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    surveys {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listStudents = `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      surveys {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSurvey = `query GetSurvey($id: ID!) {
  getSurvey(id: $id) {
    id
    student {
      id
      name
      surveys {
        nextToken
      }
    }
    surveyResponses {
      items {
        id
        response
      }
      nextToken
    }
  }
}
`;
export const listSurveys = `query ListSurveys(
  $filter: ModelSurveyFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      student {
        id
        name
      }
      surveyResponses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSurveyResponse = `query GetSurveyResponse($id: ID!) {
  getSurveyResponse(id: $id) {
    id
    response
    survey {
      id
      student {
        id
        name
      }
      surveyResponses {
        nextToken
      }
    }
    question {
      id
      question
      responses {
        nextToken
      }
    }
  }
}
`;
export const listSurveyResponses = `query ListSurveyResponses(
  $filter: ModelSurveyResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveyResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      response
      survey {
        id
      }
      question {
        id
        question
      }
    }
    nextToken
  }
}
`;
export const getSurveyQuestion = `query GetSurveyQuestion($id: ID!) {
  getSurveyQuestion(id: $id) {
    id
    question
    responses {
      items {
        id
        response
      }
      nextToken
    }
  }
}
`;
export const listSurveyQuestions = `query ListSurveyQuestions(
  $filter: ModelSurveyQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSurveyQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
