// tslint:disable
// this is an auto generated file. This will be overwritten

export const getStudent = `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    surveys {
      items {
        id
        createdAt
        numTrue
        numFalse
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
    createdAt
    numTrue
    numFalse
    surveyResponses {
      items {
        id
        response
        createdAt
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
      createdAt
      numTrue
      numFalse
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
    createdAt
    survey {
      id
      student {
        id
        name
      }
      createdAt
      numTrue
      numFalse
      surveyResponses {
        nextToken
      }
    }
    question {
      id
      question
      displayString
      responseType
      weight
      responses {
        nextToken
      }
      possibleAnswers {
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
      createdAt
      survey {
        id
        createdAt
        numTrue
        numFalse
      }
      question {
        id
        question
        displayString
        responseType
        weight
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
    displayString
    responseType
    weight
    responses {
      items {
        id
        response
        createdAt
      }
      nextToken
    }
    possibleAnswers {
      items {
        id
        answer
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
      displayString
      responseType
      weight
      responses {
        nextToken
      }
      possibleAnswers {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPossibleQuestionAnswer = `query GetPossibleQuestionAnswer($id: ID!) {
  getPossibleQuestionAnswer(id: $id) {
    id
    answer
    question {
      id
      question
      displayString
      responseType
      weight
      responses {
        nextToken
      }
      possibleAnswers {
        nextToken
      }
    }
  }
}
`;
export const listPossibleQuestionAnswers = `query ListPossibleQuestionAnswers(
  $filter: ModelPossibleQuestionAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPossibleQuestionAnswers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      answer
      question {
        id
        question
        displayString
        responseType
        weight
      }
    }
    nextToken
  }
}
`;
