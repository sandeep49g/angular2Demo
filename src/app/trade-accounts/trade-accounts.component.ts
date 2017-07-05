import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-trade-accounts',
  templateUrl: './trade-accounts.component.html',
  styleUrls: ['./trade-accounts.component.scss']
})
export class TradeAccountsComponent implements OnInit {
  listOfAccounts = [];

  constructor(@Inject('accountsService') private accounts) { }

  @Output() tradeAccount = new EventEmitter<Array<any>>();

  ngOnInit() {
    this.listOfAccounts = this.accounts.get();
    //Emit List of Accounts to parent component for graph to get updated
    this.emitTradeAccountData(this.listOfAccounts);
  }

  addAccount() {
    this.accounts.add();
    //Emit List of Accounts to parent component for graph to get updated
    this.emitTradeAccountData(this.listOfAccounts);
  }

  emitTradeAccountData(data){
    this.tradeAccount.emit(data);
  }

}
