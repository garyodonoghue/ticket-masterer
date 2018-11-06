import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class TicketmasterService {
  constructor(private http: HttpClient) {}

  getGigsForBand(eventName: String, apiKey: String): Observable<JSON> {
    return this.http.get<JSON>(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
        apiKey +
        "&keyword=" +
        eventName
    );
  }
}
