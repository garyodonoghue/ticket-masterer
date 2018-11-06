import { Component } from "@angular/core";
import { TicketmasterService } from "../services/ticketmaster.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ticket-masterer";
  events: String[];

  constructor(private ticketMasterService: TicketmasterService) {}

  public getGigsForBand(eventName: String, apiKey: String) {
    return this.ticketMasterService
      .getGigsForBand(eventName, apiKey)
      .subscribe((data: JSON) => {
        this.events = data["_embedded"]["events"];
      });
  }
}
