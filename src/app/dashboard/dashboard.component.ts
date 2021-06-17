import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountsService } from '../service/accounts.service';

enum ACCOUNT_TYPE {
  CHEQUE = 'cheque',
  SAVINGS = 'savings'
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  accounts: Account[] = [];
  accountBalance: number = 0;

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts

      for (let account of accounts) {
        this.accountBalance += +account.balance;
      }
    },
      (error) => {

      }
    );
  }

  getAccountStatus(account: Account): string {

    if ((account.account_type === ACCOUNT_TYPE.SAVINGS) && +account.balance > 0) {
      return 'waves-effect waves-light btn';
    }
    else if ((account.account_type === ACCOUNT_TYPE.SAVINGS) && +account.balance <= 0) {
      return 'btn disabled';
    }
    else if ((account.account_type === ACCOUNT_TYPE.CHEQUE) && +account.balance > -500) {
      return 'waves-effect waves-light btn';
    }
    else if ((account.account_type === ACCOUNT_TYPE.CHEQUE) && +account.balance < -500) {
      return 'btn disabled';
    }
    else {
      return 'waves-effect waves-light btn';
    }
  }

  withdraw(): void {
    alert('success');
  }

}
