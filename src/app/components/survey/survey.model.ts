export class Survey {
  public survey_id: string;
  public date_taken: string;
  public num_answered: number;
  public num_true: number;
  public num_false: number;
  public health_score: number;
  public responses: any;


  constructor(survey_id: string, date_taken: string, num_true: number, num_false: number, health_score: number, responses: any) {
    this.survey_id = survey_id;
    this.date_taken = date_taken;
    this.num_true = num_true;
    this.num_false = num_false;
    this.num_answered = this.num_true + this.num_false;
    this.health_score = health_score
    this.responses = responses;
  }
}
