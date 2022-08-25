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
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;

  suggestUserName() {
    const suggestUserName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestUserName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    this.signupForm.form.patchValue({
      userData: { username: suggestUserName },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log("Submitted!", form);
  // }

  onSubmit() {
    console.log("Submitted!", this.signupForm);
    console.log("Is this form valid?", this.signupForm.valid ? "yes" : "no");
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    console.log(this.user);

    this.signupForm.reset();
  }
}
