// tslint:disable
// this is an auto generated file. This will be overwritten

export const createStudent = `mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
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
export const updateStudent = `mutation UpdateStudent($input: UpdateStudentInput!) {
  updateStudent(input: $input) {
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
export const deleteStudent = `mutation DeleteStudent($input: DeleteStudentInput!) {
  deleteStudent(input: $input) {
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
export const createSurvey = `mutation CreateSurvey($input: CreateSurveyInput!) {
  createSurvey(input: $input) {
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
export const updateSurvey = `mutation UpdateSurvey($input: UpdateSurveyInput!) {
  updateSurvey(input: $input) {
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
export const deleteSurvey = `mutation DeleteSurvey($input: DeleteSurveyInput!) {
  deleteSurvey(input: $input) {
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
export const createSurveyResponse = `mutation CreateSurveyResponse($input: CreateSurveyResponseInput!) {
  createSurveyResponse(input: $input) {
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
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
export const updateSurveyResponse = `mutation UpdateSurveyResponse($input: UpdateSurveyResponseInput!) {
  updateSurveyResponse(input: $input) {
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
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
export const deleteSurveyResponse = `mutation DeleteSurveyResponse($input: DeleteSurveyResponseInput!) {
  deleteSurveyResponse(input: $input) {
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
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
export const createSurveyQuestion = `mutation CreateSurveyQuestion($input: CreateSurveyQuestionInput!) {
  createSurveyQuestion(input: $input) {
    id
    question
    displayString
    responseType
    weight
    suggestionImprovement
    suggestionDeterioration
    suggestionSteadyGood
    suggestionSteadyBad
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
export const updateSurveyQuestion = `mutation UpdateSurveyQuestion($input: UpdateSurveyQuestionInput!) {
  updateSurveyQuestion(input: $input) {
    id
    question
    displayString
    responseType
    weight
    suggestionImprovement
    suggestionDeterioration
    suggestionSteadyGood
    suggestionSteadyBad
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
export const deleteSurveyQuestion = `mutation DeleteSurveyQuestion($input: DeleteSurveyQuestionInput!) {
  deleteSurveyQuestion(input: $input) {
    id
    question
    displayString
    responseType
    weight
    suggestionImprovement
    suggestionDeterioration
    suggestionSteadyGood
    suggestionSteadyBad
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
export const createPossibleQuestionAnswer = `mutation CreatePossibleQuestionAnswer(
  $input: CreatePossibleQuestionAnswerInput!
) {
  createPossibleQuestionAnswer(input: $input) {
    id
    answer
    question {
      id
      question
      displayString
      responseType
      weight
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
export const updatePossibleQuestionAnswer = `mutation UpdatePossibleQuestionAnswer(
  $input: UpdatePossibleQuestionAnswerInput!
) {
  updatePossibleQuestionAnswer(input: $input) {
    id
    answer
    question {
      id
      question
      displayString
      responseType
      weight
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
export const deletePossibleQuestionAnswer = `mutation DeletePossibleQuestionAnswer(
  $input: DeletePossibleQuestionAnswerInput!
) {
  deletePossibleQuestionAnswer(input: $input) {
    id
    answer
    question {
      id
      question
      displayString
      responseType
      weight
      suggestionImprovement
      suggestionDeterioration
      suggestionSteadyGood
      suggestionSteadyBad
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
