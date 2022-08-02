import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];

  // onSubmit(form: NgForm) {
  //   console.log("Submitted!", form);
  // }

  onSubmit() {
    console.log("Submitted!", this.signupForm);
    console.log("Is this form valid?", this.signupForm.valid ? "yes" : "no");
  }
}
