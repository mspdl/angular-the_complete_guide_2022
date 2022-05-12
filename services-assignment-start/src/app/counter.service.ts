import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to inactive " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToactiveCounter++;
    console.log("Inactive to active " + this.inactiveToactiveCounter);
  }
}
