// tslint:disable
// this is an auto generated file. This will be overwritten

export const createStudent = `mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
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
export const updateStudent = `mutation UpdateStudent($input: UpdateStudentInput!) {
  updateStudent(input: $input) {
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
export const deleteStudent = `mutation DeleteStudent($input: DeleteStudentInput!) {
  deleteStudent(input: $input) {
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
export const createSurveyResponse = `mutation CreateSurveyResponse($input: CreateSurveyResponseInput!) {
  createSurveyResponse(input: $input) {
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
export const updateSurveyResponse = `mutation UpdateSurveyResponse($input: UpdateSurveyResponseInput!) {
  updateSurveyResponse(input: $input) {
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
export const deleteSurveyResponse = `mutation DeleteSurveyResponse($input: DeleteSurveyResponseInput!) {
  deleteSurveyResponse(input: $input) {
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
export const createSurveyQuestion = `mutation CreateSurveyQuestion($input: CreateSurveyQuestionInput!) {
  createSurveyQuestion(input: $input) {
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
export const updateSurveyQuestion = `mutation UpdateSurveyQuestion($input: UpdateSurveyQuestionInput!) {
  updateSurveyQuestion(input: $input) {
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
export const deleteSurveyQuestion = `mutation DeleteSurveyQuestion($input: DeleteSurveyQuestionInput!) {
  deleteSurveyQuestion(input: $input) {
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
