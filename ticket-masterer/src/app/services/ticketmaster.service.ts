import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TicketmasterService {
  constructor(private http: HttpClient) {}

  apiKey = "woQznFCtl6peWX1JV0uaHc7DhABAVdFt";

  getListEvents(searchTerm: String): Observable<JSON> {
    return this.http.get<JSON>(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
        this.apiKey +
        "&keyword=" +
        searchTerm
    );
  }

  getEventDetails(eventId: string): Observable<JSON> {
    return this.http.get<JSON>(
      "https://app.ticketmaster.com/inventory-status/v1/availability?apikey=" +
        this.apiKey +
        "&events=" +
        eventId
    );
  }
}
