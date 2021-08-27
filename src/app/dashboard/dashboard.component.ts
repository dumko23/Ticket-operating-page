import { Component, OnInit } from '@angular/core';
import { Ticket } from "../ticket.model";
import { TicketServiceService } from "../ticket-service.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketServiceService) {
  }

  ngOnInit(): void {
    this.getTicketList()
  }

  getTicketList(): void {
    this.ticketService.getTicketList()
      .subscribe(tickets => this.tickets = tickets);
  }
}
