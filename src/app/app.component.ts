import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  listOfAccounts:Array<any> = [];

  constructor(){}

  updateAccount(accounts:Array<any>){
    this.listOfAccounts = accounts.slice();
  }
}
