import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        padding: 2rem;
        border-radius: 0.6rem;
        font-weight: bold;
        color: #444;
        border: 0.2rem solid;
      }
    `,
  ],
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
    return this.serverStatus === 'offline' ? 'peachpuff' : '#B4FF9F';
  }

  getBorderColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
