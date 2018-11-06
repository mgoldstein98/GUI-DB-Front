import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/models/account';
//import { JobTitle } from '../domain/models/jobTitle';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  account: Account;
  //jobTitles: JobTitle[];

  constructor() { }

  ngOnInit() {
    this.account = {
      name: 'Bob'
    };

    //this.jobTitles = [
    ////  { id: 0, name: 'Manager' },
    //  { id: 1, name: 'Anchor' }
    //];
  }

}
