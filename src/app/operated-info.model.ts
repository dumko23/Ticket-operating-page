export class OperatedInfo {

  public date: Date;
  public comment: string;
  public operator: string;
  public status: string;

  constructor(date: Date, comment: string, operator: string, status: string) {
    this.date = date;
    this.comment = comment;
    this.operator = operator;
    this.status = status;
  }
}
