export class QuestionDisplay {
  public question_string: string;
  public question_id: string;
  public question_display_string: string;
  public trend: string; //improvement, deterioration, steadily_good, steadily_bad


  constructor(question: any, trend: string) {
    this.question_string = question['question'];
    this.question_id = question['id'];
    this.question_display_string = question['displayString'];
    this.trend = trend;
  }
}
