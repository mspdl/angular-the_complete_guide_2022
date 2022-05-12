import { Component } from "@angular/core";
import { AccountService } from "../account.service";
import { LogginService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LogginService],
})
export class NewAccountComponent {
  constructor(
    private logginService: LogginService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logginService.logStatusChange(accountStatus);
  }
}
