import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app.component";
import { HttpClientModule } from "@angular/common/http";
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent, FieldErrorDisplayComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([]),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
