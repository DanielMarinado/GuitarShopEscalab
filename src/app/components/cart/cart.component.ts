import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() data:any;
  guitar:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.guitar = this.data;
  }

}
