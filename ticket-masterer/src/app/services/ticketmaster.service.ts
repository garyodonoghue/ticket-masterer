import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TicketmasterService {
  constructor(private http: HttpClient) {}

  apiKey = "woQznFCtl6peWX1JV0uaHc7DhABAVdFt";

  getListEvents(keyword: String): Observable<JSON> {
    return this.http.get<JSON>(
      "https://ticket-masterer-service.com:8083/listEvents" +
        "?keyword=" +
        keyword
    );
  }

  getEventDetails(eventId: string): Observable<JSON> {
    return this.http.get<JSON>(
      "https://ticket-masterer-service.com:8083/getEventDetails" +
        "?events=" +
        eventId
    );
  }
}
