// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateStudent = `subscription OnCreateStudent {
  onCreateStudent {
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
export const onUpdateStudent = `subscription OnUpdateStudent {
  onUpdateStudent {
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
export const onDeleteStudent = `subscription OnDeleteStudent {
  onDeleteStudent {
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
export const onCreateSurveyResponse = `subscription OnCreateSurveyResponse {
  onCreateSurveyResponse {
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
export const onUpdateSurveyResponse = `subscription OnUpdateSurveyResponse {
  onUpdateSurveyResponse {
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
export const onDeleteSurveyResponse = `subscription OnDeleteSurveyResponse {
  onDeleteSurveyResponse {
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
export const onCreateSurveyQuestion = `subscription OnCreateSurveyQuestion {
  onCreateSurveyQuestion {
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
export const onUpdateSurveyQuestion = `subscription OnUpdateSurveyQuestion {
  onUpdateSurveyQuestion {
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
export const onDeleteSurveyQuestion = `subscription OnDeleteSurveyQuestion {
  onDeleteSurveyQuestion {
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
