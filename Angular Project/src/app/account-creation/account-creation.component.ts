import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/models/account';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  account: Account;

  constructor() { }

  ngOnInit() {
    this.account = {
      userName: 'Bob'
    };
  }

}
