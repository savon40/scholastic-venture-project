// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateStudent = `subscription OnCreateStudent {
  onCreateStudent {
    id
    name
    firstName
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
export const onUpdateStudent = `subscription OnUpdateStudent {
  onUpdateStudent {
    id
    name
    firstName
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
export const onDeleteStudent = `subscription OnDeleteStudent {
  onDeleteStudent {
    id
    name
    firstName
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
export const onCreateSurvey = `subscription OnCreateSurvey {
  onCreateSurvey {
    id
    student {
      id
      name
      firstName
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
export const onUpdateSurvey = `subscription OnUpdateSurvey {
  onUpdateSurvey {
    id
    student {
      id
      name
      firstName
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
export const onDeleteSurvey = `subscription OnDeleteSurvey {
  onDeleteSurvey {
    id
    student {
      id
      name
      firstName
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
export const onCreateSurveyResponse = `subscription OnCreateSurveyResponse {
  onCreateSurveyResponse {
    id
    response
    createdAt
    survey {
      id
      student {
        id
        name
        firstName
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
export const onUpdateSurveyResponse = `subscription OnUpdateSurveyResponse {
  onUpdateSurveyResponse {
    id
    response
    createdAt
    survey {
      id
      student {
        id
        name
        firstName
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
export const onDeleteSurveyResponse = `subscription OnDeleteSurveyResponse {
  onDeleteSurveyResponse {
    id
    response
    createdAt
    survey {
      id
      student {
        id
        name
        firstName
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
export const onCreateSurveyQuestion = `subscription OnCreateSurveyQuestion {
  onCreateSurveyQuestion {
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
export const onUpdateSurveyQuestion = `subscription OnUpdateSurveyQuestion {
  onUpdateSurveyQuestion {
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
export const onDeleteSurveyQuestion = `subscription OnDeleteSurveyQuestion {
  onDeleteSurveyQuestion {
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
export const onCreatePossibleQuestionAnswer = `subscription OnCreatePossibleQuestionAnswer {
  onCreatePossibleQuestionAnswer {
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
export const onUpdatePossibleQuestionAnswer = `subscription OnUpdatePossibleQuestionAnswer {
  onUpdatePossibleQuestionAnswer {
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
export const onDeletePossibleQuestionAnswer = `subscription OnDeletePossibleQuestionAnswer {
  onDeletePossibleQuestionAnswer {
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
