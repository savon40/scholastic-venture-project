export class QuestionDisplay {
  public question_string: string;
  public question_id: string;
  public question_display_string: string;
  public trend: string; //improvement, deterioration, steadily_good, steadily_bad


  constructor(question: any, answers: any) {
    this.question_string = question['question'];
    this.question_id = question['id'];
    this.question_display_string = question['displayString']

    if (answers.length > 0) {
      if (answers[0] == 'false' && answers[answers.length - 1] == 'false') {
        this.trend = 'steadily_good';
      }
      else if (answers[0] == 'false' && answers[answers.length - 1] == 'true') {
        this.trend = 'deterioration';
      }
      else if (answers[0] == 'true' && answers[answers.length - 1] == 'false') {
        this.trend = 'improvement';
      }
      else if (answers[0] == 'true' && answers[answers.length - 1] == 'true') {
        this.trend = 'steadily_bad';
      }
    }
  }
}
