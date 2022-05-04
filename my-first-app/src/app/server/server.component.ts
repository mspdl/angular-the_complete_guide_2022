import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = Math.random() * 100;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = this.serverId > 50 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getBackgroundColor() {
    return this.isServerOnline() ? '#B4FF9F' : 'peachpuff';
  }

  getBorderColor() {
    return this.isServerOnline() ? 'green' : 'red';
  }

  isServerOnline() {
    return this.serverStatus === 'online' ? true : false;
  }
}
