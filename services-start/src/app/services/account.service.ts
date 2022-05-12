import { Injectable } from "@angular/core";
import { Account } from "../account.model";
import { LogginService } from "./logging.service";

@Injectable()
export class AccountService {
  accounts: Account[] = [
    new Account("Master Account", "active"),
    new Account("Testaccount", "inactive"),
    new Account("Hidden Account", "unknown"),
  ];

  constructor(private logginService: LogginService) {}

  addAccount(newName: string, newStatus: string) {
    this.accounts.push(new Account(newName, newStatus));
    this.logginService.logStatusChange(newStatus);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.logginService.logStatusChange(newStatus);
  }
}
