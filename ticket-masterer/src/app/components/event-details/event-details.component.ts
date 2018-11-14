import { Component, OnInit, Input } from "@angular/core";
import { TicketmasterService } from "src/app/services/ticketmaster.service";

@Component({
  selector: "event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {
  @Input("event") event: Object;

  ticketStatus: string;

  constructor(private ticketMasterService: TicketmasterService) {}

  ngOnInit() {
    this.ticketMasterService
      .getEventDetails(this.event["id"])
      .subscribe((data: JSON) => {
        this.ticketStatus = data[0]["status"];
      });
  }

  getFieldCss(): string {
    let fieldCss: string;
    if (this.ticketStatus === "UNKNOWN") {
      fieldCss = "unknown";
    } else if (this.ticketStatus === "FEW_TICKETS_LEFT") {
      fieldCss = "few-tickets-left";
    } else if (this.ticketStatus === "TICKETS_AVAILABLE") {
      fieldCss = "tickets-available";
    } else if (this.ticketStatus === "TICKETS_NOT_AVAILABLE") {
      fieldCss = "tickets-not-available";
    }
    return fieldCss;
  }
}
