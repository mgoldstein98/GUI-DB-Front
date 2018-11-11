import { Component, OnInit } from '@angular/core';
import { Equipment } from '../domain/models/Equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  myEquipment: Equipment [];
  availableEquipment: Equipment [];

  constructor() { }

  ngOnInit() {

    this.myEquipment = [
      {
        equipName:'e-1',
        equipType:'type-1'
      },
      {
        equipName:'e-2',
        equipType:'type-2'
      }
    ]

    this.availableEquipment = [
      {
        equipName:'other',
        equipType:'something else'
      },
      {
        equipName:'other 2',
        equipType:'anything else'
      }
    ]
  }//end of ng

  addEquipment(index:number){
    this.myEquipment.push(this.availableEquipment[index]);
    this.availableEquipment.splice(index, 1);
  }

  removeEquipment(index: number){
    this.availableEquipment.push(this.myEquipment[index]);
    this.myEquipment.splice(index, 1);
  }

}
