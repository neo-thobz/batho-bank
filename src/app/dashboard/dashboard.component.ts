import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountsService } from '../service/accounts.service';

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
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts

      for (let account of accounts) {
        this.accountBalance += +account.balance;
      }
    }
    );
  }

  withdraw(): void {
    alert('success');
  }

}
