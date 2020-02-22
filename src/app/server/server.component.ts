import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    /*
    Below is an example of setting up a TypeScript expression to use the
    'String Interpolation' method of 'Data Binding'
    */ 
    serverId = 10;
    serverStatus: string = 'offline';

    /*
    You can also use a method 'getServerStatus()' to bind data
    */

    getServerStatus() {
        return this.serverStatus;
    }
}
