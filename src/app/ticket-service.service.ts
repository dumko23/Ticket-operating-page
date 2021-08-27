import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Ticket } from "./ticket.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  private ticketsUrl = 'api/TICKET_LIST';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  getTicketList(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }


  getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get<Ticket>(url)
  }

  updateTicket(ticket: Ticket): Observable<any> {
    return this.http.put(this.ticketsUrl, ticket, this.httpOptions);
  }
}
