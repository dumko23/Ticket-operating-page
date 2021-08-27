import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { TicketServiceService } from "../ticket-service.service";
import { Ticket } from "../ticket.model";

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket | undefined;
  statusChange: boolean | undefined;
  operatorChange: boolean | undefined;
  tempStatus: string = '*не изменять статус*';
  tempOperator: string = '';
  comment: string = '';

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketServiceService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTicket();
    this.statusChange = false;
    this.operatorChange = false;
  }

  getTicket() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.ticketService.getTicket(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  goBack(): void {
    this.location.back();
  }

  onSave(): void | boolean {
    if (this.tempStatus !== "*не изменять статус*") {
      this.ticket!.status = this.tempStatus;
    }
    const commentObj = {
      date: new Date,
      comment: this.comment,
      operator: this.tempOperator,
      status: this.tempStatus,
    }
    this.tempStatus = '*не изменять статус*';
    this.tempOperator = '';
    this.ticket!.operatedInfo?.unshift(commentObj);
    if (this.ticket) {
      this.ticketService.updateTicket(this.ticket)
        .subscribe(() => this.goBack());
    }
  }
}
