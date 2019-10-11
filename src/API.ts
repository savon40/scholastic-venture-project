/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type ModelSurveyQuestionFilterInput = {
  id?: ModelIDFilterInput | null,
  question?: ModelStringFilterInput | null,
  displayString?: ModelStringFilterInput | null,
  responseType?: ModelStringFilterInput | null,
  weight?: ModelIntFilterInput | null,
  suggestionImprovement?: ModelStringFilterInput | null,
  suggestionDeterioration?: ModelStringFilterInput | null,
  suggestionSteadyGood?: ModelStringFilterInput | null,
  suggestionSteadyBad?: ModelStringFilterInput | null,
  and?: Array< ModelSurveyQuestionFilterInput | null > | null,
  or?: Array< ModelSurveyQuestionFilterInput | null > | null,
  not?: ModelSurveyQuestionFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  firstName?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  firstName?: string | null,
};

export type DeleteStudentInput = {
  id?: string | null,
};

export type CreateSurveyInput = {
  id?: string | null,
  createdAt?: string | null,
  numTrue?: number | null,
  numFalse?: number | null,
  surveyStudentId?: string | null,
};

export type UpdateSurveyInput = {
  id: string,
  createdAt?: string | null,
  numTrue?: number | null,
  numFalse?: number | null,
  surveyStudentId?: string | null,
};

export type DeleteSurveyInput = {
  id?: string | null,
};

export type CreateSurveyResponseInput = {
  id?: string | null,
  response: string,
  createdAt?: string | null,
  surveyResponseSurveyId?: string | null,
  surveyResponseQuestionId?: string | null,
};

export type UpdateSurveyResponseInput = {
  id: string,
  response?: string | null,
  createdAt?: string | null,
  surveyResponseSurveyId?: string | null,
  surveyResponseQuestionId?: string | null,
};

export type DeleteSurveyResponseInput = {
  id?: string | null,
};

export type CreateSurveyQuestionInput = {
  id?: string | null,
  question: string,
  displayString?: string | null,
  responseType?: string | null,
  weight?: number | null,
  suggestionImprovement?: string | null,
  suggestionDeterioration?: string | null,
  suggestionSteadyGood?: string | null,
  suggestionSteadyBad?: string | null,
};

export type UpdateSurveyQuestionInput = {
  id: string,
  question?: string | null,
  displayString?: string | null,
  responseType?: string | null,
  weight?: number | null,
  suggestionImprovement?: string | null,
  suggestionDeterioration?: string | null,
  suggestionSteadyGood?: string | null,
  suggestionSteadyBad?: string | null,
};

export type DeleteSurveyQuestionInput = {
  id?: string | null,
};

export type CreatePossibleQuestionAnswerInput = {
  id?: string | null,
  answer?: string | null,
  possibleQuestionAnswerQuestionId?: string | null,
};

export type UpdatePossibleQuestionAnswerInput = {
  id: string,
  answer?: string | null,
  possibleQuestionAnswerQuestionId?: string | null,
};

export type DeletePossibleQuestionAnswerInput = {
  id?: string | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  firstName?: ModelStringFilterInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelSurveyFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  numTrue?: ModelIntFilterInput | null,
  numFalse?: ModelIntFilterInput | null,
  and?: Array< ModelSurveyFilterInput | null > | null,
  or?: Array< ModelSurveyFilterInput | null > | null,
  not?: ModelSurveyFilterInput | null,
};

export type ModelSurveyResponseFilterInput = {
  id?: ModelIDFilterInput | null,
  response?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelSurveyResponseFilterInput | null > | null,
  or?: Array< ModelSurveyResponseFilterInput | null > | null,
  not?: ModelSurveyResponseFilterInput | null,
};

export type ModelPossibleQuestionAnswerFilterInput = {
  id?: ModelIDFilterInput | null,
  answer?: ModelStringFilterInput | null,
  and?: Array< ModelPossibleQuestionAnswerFilterInput | null > | null,
  or?: Array< ModelPossibleQuestionAnswerFilterInput | null > | null,
  not?: ModelPossibleQuestionAnswerFilterInput | null,
};

export type ListSurveyQuestionsWithAnswersQueryVariables = {
  filter?: ModelSurveyQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSurveyQuestionsWithAnswersQuery = {
  listSurveyQuestions:  {
    __typename: "ModelSurveyQuestionConnection",
    items:  Array< {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      responseType: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        items:  Array< {
          __typename: "PossibleQuestionAnswer",
          id: string,
          answer: string | null,
        } | null > | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStudentAndSurveysQueryVariables = {
  id: string,
};

export type GetStudentAndSurveysQuery = {
  getStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
        surveyResponses:  {
          __typename: "ModelSurveyResponseConnection",
          items:  Array< {
            __typename: "SurveyResponse",
            id: string,
            response: string,
            question:  {
              __typename: "SurveyQuestion",
              id: string,
              question: string,
              displayString: string | null,
              weight: number | null,
              suggestionSteadyBad: string | null,
              suggestionSteadyGood: string | null,
              suggestionImprovement: string | null,
              suggestionDeterioration: string | null,
            } | null,
          } | null > | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
};

export type CreateStudentMutation = {
  createStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
};

export type UpdateStudentMutation = {
  updateStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
};

export type DeleteStudentMutation = {
  deleteStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSurveyMutationVariables = {
  input: CreateSurveyInput,
};

export type CreateSurveyMutation = {
  createSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateSurveyMutationVariables = {
  input: UpdateSurveyInput,
};

export type UpdateSurveyMutation = {
  updateSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteSurveyMutationVariables = {
  input: DeleteSurveyInput,
};

export type DeleteSurveyMutation = {
  deleteSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSurveyResponseMutationVariables = {
  input: CreateSurveyResponseInput,
};

export type CreateSurveyResponseMutation = {
  createSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateSurveyResponseMutationVariables = {
  input: UpdateSurveyResponseInput,
};

export type UpdateSurveyResponseMutation = {
  updateSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteSurveyResponseMutationVariables = {
  input: DeleteSurveyResponseInput,
};

export type DeleteSurveyResponseMutation = {
  deleteSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateSurveyQuestionMutationVariables = {
  input: CreateSurveyQuestionInput,
};

export type CreateSurveyQuestionMutation = {
  createSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateSurveyQuestionMutationVariables = {
  input: UpdateSurveyQuestionInput,
};

export type UpdateSurveyQuestionMutation = {
  updateSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteSurveyQuestionMutationVariables = {
  input: DeleteSurveyQuestionInput,
};

export type DeleteSurveyQuestionMutation = {
  deleteSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePossibleQuestionAnswerMutationVariables = {
  input: CreatePossibleQuestionAnswerInput,
};

export type CreatePossibleQuestionAnswerMutation = {
  createPossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdatePossibleQuestionAnswerMutationVariables = {
  input: UpdatePossibleQuestionAnswerInput,
};

export type UpdatePossibleQuestionAnswerMutation = {
  updatePossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeletePossibleQuestionAnswerMutationVariables = {
  input: DeletePossibleQuestionAnswerInput,
};

export type DeletePossibleQuestionAnswerMutation = {
  deletePossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSurveyQueryVariables = {
  id: string,
};

export type GetSurveyQuery = {
  getSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListSurveysQueryVariables = {
  filter?: ModelSurveyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSurveysQuery = {
  listSurveys:  {
    __typename: "ModelSurveyConnection",
    items:  Array< {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSurveyResponseQueryVariables = {
  id: string,
};

export type GetSurveyResponseQuery = {
  getSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListSurveyResponsesQueryVariables = {
  filter?: ModelSurveyResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSurveyResponsesQuery = {
  listSurveyResponses:  {
    __typename: "ModelSurveyResponseConnection",
    items:  Array< {
      __typename: "SurveyResponse",
      id: string,
      response: string,
      createdAt: string | null,
      survey:  {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null,
      question:  {
        __typename: "SurveyQuestion",
        id: string,
        question: string,
        displayString: string | null,
        responseType: string | null,
        weight: number | null,
        suggestionImprovement: string | null,
        suggestionDeterioration: string | null,
        suggestionSteadyGood: string | null,
        suggestionSteadyBad: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSurveyQuestionQueryVariables = {
  id: string,
};

export type GetSurveyQuestionQuery = {
  getSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListSurveyQuestionsQueryVariables = {
  filter?: ModelSurveyQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSurveyQuestionsQuery = {
  listSurveyQuestions:  {
    __typename: "ModelSurveyQuestionConnection",
    items:  Array< {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPossibleQuestionAnswerQueryVariables = {
  id: string,
};

export type GetPossibleQuestionAnswerQuery = {
  getPossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListPossibleQuestionAnswersQueryVariables = {
  filter?: ModelPossibleQuestionAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPossibleQuestionAnswersQuery = {
  listPossibleQuestionAnswers:  {
    __typename: "ModelPossibleQuestionAnswerConnection",
    items:  Array< {
      __typename: "PossibleQuestionAnswer",
      id: string,
      answer: string | null,
      question:  {
        __typename: "SurveyQuestion",
        id: string,
        question: string,
        displayString: string | null,
        responseType: string | null,
        weight: number | null,
        suggestionImprovement: string | null,
        suggestionDeterioration: string | null,
        suggestionSteadyGood: string | null,
        suggestionSteadyBad: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent:  {
    __typename: "Student",
    id: string,
    name: string,
    firstName: string | null,
    surveys:  {
      __typename: "ModelSurveyConnection",
      items:  Array< {
        __typename: "Survey",
        id: string,
        createdAt: string | null,
        numTrue: number | null,
        numFalse: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSurveySubscription = {
  onCreateSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateSurveySubscription = {
  onUpdateSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteSurveySubscription = {
  onDeleteSurvey:  {
    __typename: "Survey",
    id: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string | null,
      surveys:  {
        __typename: "ModelSurveyConnection",
        nextToken: string | null,
      } | null,
    } | null,
    createdAt: string | null,
    numTrue: number | null,
    numFalse: number | null,
    surveyResponses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSurveyResponseSubscription = {
  onCreateSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateSurveyResponseSubscription = {
  onUpdateSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteSurveyResponseSubscription = {
  onDeleteSurveyResponse:  {
    __typename: "SurveyResponse",
    id: string,
    response: string,
    createdAt: string | null,
    survey:  {
      __typename: "Survey",
      id: string,
      student:  {
        __typename: "Student",
        id: string,
        name: string,
        firstName: string | null,
      } | null,
      createdAt: string | null,
      numTrue: number | null,
      numFalse: number | null,
      surveyResponses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
    } | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateSurveyQuestionSubscription = {
  onCreateSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateSurveyQuestionSubscription = {
  onUpdateSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteSurveyQuestionSubscription = {
  onDeleteSurveyQuestion:  {
    __typename: "SurveyQuestion",
    id: string,
    question: string,
    displayString: string | null,
    responseType: string | null,
    weight: number | null,
    suggestionImprovement: string | null,
    suggestionDeterioration: string | null,
    suggestionSteadyGood: string | null,
    suggestionSteadyBad: string | null,
    responses:  {
      __typename: "ModelSurveyResponseConnection",
      items:  Array< {
        __typename: "SurveyResponse",
        id: string,
        response: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    possibleAnswers:  {
      __typename: "ModelPossibleQuestionAnswerConnection",
      items:  Array< {
        __typename: "PossibleQuestionAnswer",
        id: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePossibleQuestionAnswerSubscription = {
  onCreatePossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdatePossibleQuestionAnswerSubscription = {
  onUpdatePossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeletePossibleQuestionAnswerSubscription = {
  onDeletePossibleQuestionAnswer:  {
    __typename: "PossibleQuestionAnswer",
    id: string,
    answer: string | null,
    question:  {
      __typename: "SurveyQuestion",
      id: string,
      question: string,
      displayString: string | null,
      responseType: string | null,
      weight: number | null,
      suggestionImprovement: string | null,
      suggestionDeterioration: string | null,
      suggestionSteadyGood: string | null,
      suggestionSteadyBad: string | null,
      responses:  {
        __typename: "ModelSurveyResponseConnection",
        nextToken: string | null,
      } | null,
      possibleAnswers:  {
        __typename: "ModelPossibleQuestionAnswerConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
