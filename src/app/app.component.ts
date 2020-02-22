import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewServer= false;
  serverCreationStatus = 'No server was created!';
  title = 'angular-menu-app';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
   }, 2000);
  }



 onCreateServer() {
  this.serverCreationStatus = 'Server was created!';
}

}

