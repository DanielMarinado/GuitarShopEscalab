import { Component, OnInit } from '@angular/core';
import { GuitarsService } from '../../services/guitars.service';

export interface Guitar {
  name: string,
  description: string,
  img: string
}

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})

export class GuitarsComponent implements OnInit{
  items: Guitar[] = [];
  cart: Guitar[] = [];

  constructor(private myService: GuitarsService) { }

  ngOnInit() {
    this.getGuitars();
  }

  getGuitars(){
    this.myService.getGuitars().subscribe( resp=> {
      let aux: any = resp;
      this.items = aux.msg;
    })
  }

  addCart( element:any) {
    let guitarSelected: any;
    this.myService.getGuitar(element).subscribe( resp => {
      let aux: any = resp;
      guitarSelected = aux.msg;
      this.cart.push(guitarSelected);
    });
  }
}
