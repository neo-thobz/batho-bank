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

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe(account => this.accounts = account);
  }

}
