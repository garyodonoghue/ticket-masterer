import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app.component";
import { HttpClientModule } from "@angular/common/http";
import { FieldErrorDisplayComponent } from "./components/field-error-display/field-error-display.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EventDetailsComponent } from "./components/event-details/event-details.component";

@NgModule({
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent,
    EventDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
