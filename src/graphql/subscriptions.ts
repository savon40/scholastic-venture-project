// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateStudent = `subscription OnCreateStudent {
  onCreateStudent {
    id
    name
    surveys {
      items {
        id
        createdAt
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
    surveys {
      items {
        id
        createdAt
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
    surveys {
      items {
        id
        createdAt
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
      surveys {
        nextToken
      }
    }
    createdAt
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
      surveys {
        nextToken
      }
    }
    createdAt
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
      surveys {
        nextToken
      }
    }
    createdAt
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
      }
      createdAt
      surveyResponses {
        nextToken
      }
    }
    question {
      id
      question
      responseType
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
      }
      createdAt
      surveyResponses {
        nextToken
      }
    }
    question {
      id
      question
      responseType
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
      }
      createdAt
      surveyResponses {
        nextToken
      }
    }
    question {
      id
      question
      responseType
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
    responseType
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
    responseType
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
    responseType
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
      responseType
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
      responseType
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
      responseType
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
