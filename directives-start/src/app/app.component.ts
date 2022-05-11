import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  defaultColors = {
    odd: {
      background: "orange",
      text: "brown",
    },
    even: {
      background: "aqua",
      text: "mediumblue",
    },
  };

  highlightColors = {
    odd: {
      background: "brown",
      text: "orange",
    },
    even: {
      background: "mediumblue",
      text: "aqua",
    },
  };
}
