import { Component } from "@angular/core";
import { TicketmasterService } from "../services/ticketmaster.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  events: String[] = [];
  form: FormGroup;
  buttonExpanded = new Map<number, boolean>();

  constructor(
    private ticketMasterService: TicketmasterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      keyword: [null, Validators.required]
    });
  }

  public getEvents() {
    if (this.form.valid) {
      return this.ticketMasterService
        .getListEvents(
          this.form.get("keyword").value          
        )
        .subscribe((data: JSON) => {
          this.events = data["_embedded"]["events"];
        });
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
}
