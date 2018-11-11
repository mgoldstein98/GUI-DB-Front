import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/models/account';
<<<<<<< HEAD
//import { JobTitle } from '../domain/models/jobTitle';
=======
// import { JobTitle } from '../domain/models/jobTitle';
>>>>>>> d497c910f415615d5b98fb50553bffdd3e4af34a

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  account: Account;
<<<<<<< HEAD
  //jobTitles: JobTitle[];
=======
  // jobTitles: JobTitle[];
>>>>>>> d497c910f415615d5b98fb50553bffdd3e4af34a

  constructor() { }

  ngOnInit() {
    this.account = {
      userName: 'Bob'
    };

<<<<<<< HEAD
    //this.jobTitles = [
    ////  { id: 0, name: 'Manager' },
    //  { id: 1, name: 'Anchor' }
    //];
=======
    // this.jobTitles = [
    //   { id: 0, name: 'Manager' },
    //   { id: 1, name: 'Anchor' }
    // ];
>>>>>>> d497c910f415615d5b98fb50553bffdd3e4af34a
  }

}
