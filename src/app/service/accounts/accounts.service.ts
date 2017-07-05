import { Injectable } from '@angular/core';
import { RandomColorsService } from '../random-colors/random-colors.service';

@Injectable()
export class AccountsService {
  accounts = [];
  constructor(public randomColors: RandomColorsService) {
    this.accounts = [
      { name: 'Brokerage Account3', marketValue: 1999990.00, cash: 1995826.00, legend: this.randomColors.getRandomColor() },
      { name: 'Account3', marketValue: 1948954.00, cash: 1936954.00, legend: this.randomColors.getRandomColor() },
      { name: '', marketValue: 5029422.00, cash: 4196532.00, legend: '' }
    ];
  }

  add() {
    let marketValue: any = (Math.random() * 1000000).toFixed(2);
    this.accounts.splice(
      this.accounts.length - 1,
      0,
      {
        name: 'Random Account',
        marketValue: marketValue,
        cash: (marketValue - 200),
        legend: this.randomColors.getRandomColor()
      });

      return 
  }

  get(){
    return this.accounts;
  }

}
