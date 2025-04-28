import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
