export class Survey {
  public date_taken: string;
  public num_answered: number;
  public num_true: number;
  public num_false: number;
  public health_score: number;


  constructor(date_taken: string, num_true: number, num_false: number, health_score: number) {
      this.date_taken = date_taken;
      this.num_true = num_true;
      this.num_false = num_false;
      this.num_answered = this.num_true + this.num_false;
      this.health_score = health_score
  }
}
