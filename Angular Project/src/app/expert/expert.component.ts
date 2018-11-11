import { Component, OnInit } from '@angular/core';
import { Expert } from '../domain/models/Expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  myExpert: Expert [];
  availableExpert: Expert [];
  constructor() { }

  ngOnInit() {

    this.myExpert = [
      {
        expertName:'CS',
        expertTopic:'Disney'
      },
      {
        expertName:'AB',
        expertTopic:'memes'
      }
    ]

    this.availableExpert = [
      {
        expertName:'SA',
        expertTopic:'github problems'
      }
    ]
  }

  addExpert(index: number){
    this.myExpert.push(this.availableExpert[index]);
    this.availableExpert.splice(index, 1);
  }

  removeExpert(index: number)
  {
    this.availableExpert.push(this.myExpert[index]);
    this.myExpert.splice(index, 1);
  }

}
