import { OperatedInfo } from "./operated-info.model";

export class Ticket {

  public id: number;
  public ticketType: string;
  public status?: string;
  public date: Date;
  public theme: string;
  public name: string;
  public contact: string;
  public contactType: string;
  public message: string;
  public operatedInfo?: OperatedInfo[];
  public phoneToCall?: string;
  public complaintType?: string;
  public serviceType?: string;
  public position?: string;


  constructor(id: number, ticketType: string, status: string, date: Date, theme: string, name: string, contact: string, contactType: string, message: string, operatedInfo?: OperatedInfo[], phoneToCall?: string, complaintType?: string, serviceType?: string, position?: string,) {
    this.id = id;
    this.ticketType = ticketType;
    this.status = status;
    this.date = date;
    this.theme = theme;
    this.name = name;
    this.contact = contact;
    this.contactType = contactType;
    this.message = message;
    this.operatedInfo = operatedInfo;
    this.phoneToCall = phoneToCall;
    this.complaintType = complaintType;
    this.serviceType = serviceType;
    this.position = position;
  }
}
