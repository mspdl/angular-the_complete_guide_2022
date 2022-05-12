import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  showQuantity(inactiveUsers, activeUsers) {
    console.log(
      "We have now " +
        inactiveUsers +
        " inactive Users and " +
        activeUsers +
        " active Users"
    );
  }
}
