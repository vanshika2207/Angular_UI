import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverName = 'initial';
  // username = '';
  servercreated = false;
  servers = ['testserver', 'testserver1'];
  visible = false;
  log: Date[] = [];
  // serverCreationStatus = 'No server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.servercreated = true;
    this.servers.push(this.serverName);

    // this.serverCreationStatus = 'server was created name is ' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  // onUserClick() {
  //   this.username = '';
  // }

  onDisplay() {
    this.visible = !this.visible;
    this.log.push(new Date());
  }
}
