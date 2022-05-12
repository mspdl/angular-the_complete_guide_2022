export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  addAccount(newName: string, newStatus: string) {
    this.accounts.push({ name: newName, status: newStatus });
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }

}
