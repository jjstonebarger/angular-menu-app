import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
We import the components and their locations here. For example:
import { nameOfComponent } from './locationOfComponent'
*/
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  /*
  In 'declarations we add the names of the various components
  we are using in our app. For example: AppComponent and ServerComponent
  */
  declarations: [
    AppComponent,
    ServerComponent
  ],
  /*
  Imports allows us to import other modules into our app
  */
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

