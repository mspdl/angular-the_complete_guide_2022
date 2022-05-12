import { Account } from "./account.model";

export class AccountService {
  accounts: Account[] = [
    new Account("Master Account", "active"),
    new Account("Testaccount", "inactive"),
    new Account("Hidden Account", "unknown"),
  ];

  addAccount(newName: string, newStatus: string) {
    this.accounts.push(new Account(newName, newStatus));
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
