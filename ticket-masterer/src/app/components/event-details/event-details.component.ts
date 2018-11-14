import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"]
})
export class EventDetailsComponent implements OnInit {
  @Input("event") event: Object;

  constructor() {}

  ngOnInit() {}
}
